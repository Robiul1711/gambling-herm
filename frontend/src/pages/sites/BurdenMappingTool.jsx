import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LAS, MAP, PTS } from '../../data/burdenMapData';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// -------------------------------------------------------------
// Brand Palette & Constants
// -------------------------------------------------------------
const PT_COLORS = ['#166F94', '#42A6CF', '#4A6A6E', '#1A1A1A']; // Betting / AGC / Bingo / Casino
const IMD_COLS = ['#4A6A6E', '#7E9296', '#A8B7BA', '#CFD8D9', '#EEF1F1']; // Most to least deprived

const MAP_BANDS = [
  { t: 'Well above the GB average', c: '#0A4561', min: 1.50 },
  { t: 'Above the GB average',      c: '#2989B0', min: 1.15 },
  { t: 'Around the GB average',     c: '#8DDEFF', min: 0.85 },
  { t: 'Below the GB average',      c: '#D6EAF4', min: 0 }
];

const ETH_REF = { W: 81.7, A: 9.3, B: 4.0, M: 2.9, O: 2.1 };
const ETH_LABELS = { W: 'White', A: 'Asian', B: 'Black', M: 'Mixed', O: 'Other' };
const PREM_LABELS = ['Betting shops', 'Adult gaming centres', 'Bingo', 'Casinos'];

const SURVEYS = {
  gsgb: {
    name: 'GSGB 2024',
    p: [8.8, 3.1, 2.7],
    p1plus: '14.6%',
    p8plus: '2.7%',
    method: 'Online, self-completed',
    ci: true,
    src: [
      'GSGB 2024: 8.8% of adults (95% CI 7.9–9.8).',
      'GSGB 2024: 3.1% of adults (95% CI 2.8–3.6).',
      'GSGB 2024: 2.7% of adults (95% CI 2.2–3.2).'
    ],
    note: 'GSGB 2024 (Gambling Survey for Great Britain, push-to-web, n=9,804). The official statistic and the basis of the GHUK Health Needs Assessment: 14.6% of adults at PGSI 1+, about 7.8 million people. Self-completion online removes the interviewer, and disclosure rises accordingly. Sturgis (2024) flags a non-negligible risk of over-statement through topic-interest non-response; the Gambling Commission cautions against comparing GSGB waves with each other or with older surveys, and against reading it as an exact population count.'
  },
  bgps: {
    name: 'BGPS 2010',
    p: [5.5, 1.8, 0.7],
    p1plus: '8.0%',
    p8plus: '0.7%',
    method: 'Face to face',
    ci: false,
    src: [
      'BGPS 2010: 5.5% of adults (face-to-face).',
      'BGPS 2010: 1.8% of adults (face-to-face).',
      'BGPS 2010: 0.7% of adults (face-to-face).'
    ],
    note: 'BGPS 2010 (British Gambling Prevalence Survey, face-to-face, interviewer-administered). 8.0% of adults at PGSI 1+. The last full probability-sample prevalence survey with complete band detail, and the series most often quoted back at local authorities by industry respondents. It is now sixteen years old and predates the smartphone, in-play betting and the current online market, so it describes a different gambling environment as well as a different survey mode.'
  },
  apms: {
    name: 'APMS 2023/24',
    p: [2.8, 1.2, 0.4],
    p1plus: '4.4%',
    p8plus: '0.4%',
    method: 'Interviewer, England only',
    ci: false,
    src: [
      'APMS 2023/24: 2.8% of adults (England, interviewer-administered).',
      'APMS 2023/24: 1.2% of adults (1.6% at PGSI 3+ less the 8+ group).',
      'APMS 2023/24: 0.4% of adults (England, interviewer-administered).'
    ],
    note: 'APMS 2023/24 (Adult Psychiatric Morbidity Survey, England, interviewer-administered, NHS England Digital ch.7). 4.4% of adults at PGSI 1+, with 1.6% at PGSI 3+ and 0.4% at 8+ against GSGB’s 5.8% and 2.7%. The most recent probability-sample estimate and the most conservative basis available. APMS itself describes these figures as conservative: asking about gambling in an interviewer’s presence under-reports. England only. Use this as your floor when you need a figure no one can call inflated.'
  }
};

const SCENARIOS = {
  mid: {
    vals: {},
    note: 'Central: the GHUK Health Needs Assessment published basis. Moayeri (2020) annual utility decrements (0.016 / 0.037 / 0.102); family and friends at parity with the person gambling, allocated across severity bands on the GambleAware household distribution (0.3727 / 0.2725 / 0.3548) and de-duplicated for household overlap (Wilson et al., 2024); children on the OHID exposure headcount with adult decrements as a stated proxy; HM Treasury Green Book £70,000 per healthy year. Reproduces HNA Appendix D exactly.'
  },
  moa: {
    vals: { dw12: 0.03, dw37: 0.057, dw8: 0.181, dwao12: 0.02, dwao37: 0.06, dwao8: 0.11 },
    note: 'Adjusted weights: decrements for people who gamble from Moayeri (2020; HILDA SF-6D, regression-adjusted: 0.030 / 0.057 / 0.181), family and friends at the quasi-experimental GHS-AO benchmark (0.02 / 0.06 / 0.11). Experienced-utility estimates control for confounding that direct elicitation cannot. Browne et al.’s (2022) propensity-score study with comorbidity control runs lower still (−0.005 ns / −0.050 / −0.099). Both sets are SF-6D preference-based utilities, so both remain valid to monetise at a £/QALY value.'
  },
  ao30: {
    vals: { dwao12: 0.005, dwao37: 0.011, dwao8: 0.031 },
    note: 'Family-side floor: the HNA’s documented downward sensitivity, transferring 30% of the band decrement to each person harmed by someone else’s gambling instead of the full parity transfer. Suited to populations weighted towards more distal relationships. At GSGB prevalence this gives approximately 400,000 healthy years and £28bn at the Green Book value, matching the sensitivity published in HNA §1.11.'
  }
};

const DEFAULTS = {
  p12: 8.8,
  p37: 3.1,
  p8: 2.7,
  ao: 9,
  qalyK: 70,
  young: 27.6,
  male: 48.4,
  eth: 18.3,
  sup: 0.1,
  ceil: 25,
  dw12: 0.016,
  dw37: 0.037,
  dw8: 0.102,
  dwao12: 0.016,
  dwao37: 0.037,
  dwao8: 0.102,
  af: 1
};

const AO_DEDUP = 0.73;
const CHILD_EXP_PER_ADULT = 0.0202;
const GSGB_P1PLUS = 14.6;
const R8  = [5.32, 4.89, 3.72, 2.48, 0.98, 0.56, 0.25];
const R37 = [4.90, 4.12, 4.51, 3.39, 2.40, 1.28, 0.77];
const R12 = [11.69, 12.28, 11.70, 9.51, 6.93, 4.31, 2.83];
const RM8 = 3.74, RF8 = 1.63, RM37 = 4.12, RF37 = 2.22, RM12 = 10.26, RF12 = 7.43;
const RRE8 = 2.5, RRE17 = 1.2;
const NAT_AB = [10.54, 17.01, 16.90, 15.45, 16.17, 12.11, 11.82];
const NAT_MALE = 48.38, NAT_ETH = 18.3;
const NAT_YOUNG = NAT_AB[0] + NAT_AB[1];
const FOOT_W = 0.5;
const GB_DENS = 11.74;
const SUPPLY_CAP = [0.25, 4];
const RAO_AGE = [4.24, 2.62, 1.26];
const RAO_M = 2.31, RAO_F = 2.68;
const GA_GB = [7.2, 4.1, 3.4];
const RD8  = [5.93, 3.03, 2.16, 1.66, 0.97];
const RD37 = [4.34, 3.26, 3.04, 2.80, 1.80];
const RD12 = [10.02, 8.98, 8.77, 8.34, 7.79];
const ENG_Q = [19.73, 20.42, 20.30, 19.87, 19.67];
const BLEND_K = 100000;

const OHID_LO_PER_ADULT = 23, OHID_HI_PER_ADULT = 39;
const VIC_BASE_LO = 60, VIC_BASE_MID = 97, VIC_BASE_HI = 129;
const HSE_P8 = 0.373, HSE_P17 = 3.538;
const SEV_HIGH = 0.355, SEV_ATRISK = 0.645;
const VIC_SH = [
  ['Excess gambling losses (spend beyond recreational levels)', 0.369],
  ['Emotional & psychological', 0.234],
  ['Relationship breakdown', 0.177],
  ['Lost work & productivity', 0.106],
  ['Government services', 0.092],
  ['Crime', 0.021]
];

// Helper functions
const expPop = (la) => la.a + FOOT_W * la.j;
const fmtPop = (n) => n.toLocaleString('en-GB');

function largestRemainder(shares) {
  const raw = shares.map(s => s * 100);
  const floor = raw.map(Math.floor);
  let deficit = 100 - floor.reduce((a, b) => a + b, 0);
  const order = raw.map((v, i) => ({ i, rem: v - Math.floor(v) })).sort((a, b) => b.rem - a.rem);
  for (let k = 0; k < order.length && deficit > 0; k++, deficit--) {
    floor[order[k].i]++;
  }
  return floor;
}

function round3sf(n) {
  if (n === 0 || !n || isNaN(n)) return 0;
  const mag = Math.pow(10, Math.floor(Math.log10(Math.abs(n))) - 2);
  return Math.round(n / mag) * mag;
}

const fmtPeople = (n) => '≈ ' + round3sf(n).toLocaleString('en-GB');

function fmtMoney(n) {
  if (!n || isNaN(n)) return '£0';
  if (n >= 1e9) return '£' + (n / 1e9).toFixed(2) + 'bn';
  if (n >= 1e6) return '£' + (n / 1e6).toFixed(1) + 'm';
  if (n >= 1e3) return '£' + Math.round(n / 1e3).toLocaleString('en-GB') + 'k';
  return '£' + Math.round(n).toLocaleString('en-GB');
}

function bandOf(r) {
  return MAP_BANDS.find(b => r >= b.min) || MAP_BANDS[MAP_BANDS.length - 1];
}

export default function BurdenMappingTool() {
  // State
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [selectedLA, setSelectedLA] = useState(null); // Authority object
  const [searchTerm, setSearchTerm] = useState('');
  const [pop, setPop] = useState(53529600);
  const [surveyMode, setSurveyMode] = useState('gsgb');
  const [basisMode, setBasisMode] = useState('blend');
  const [activeScen, setActiveScen] = useState('mid');

  // Sliders & custom inputs
  const [p12, setP12] = useState(DEFAULTS.p12);
  const [p37, setP37] = useState(DEFAULTS.p37);
  const [p8, setP8] = useState(DEFAULTS.p8);
  const [ao, setAo] = useState(DEFAULTS.ao);
  const [qalyK, setQalyK] = useState(DEFAULTS.qalyK);
  const [young, setYoung] = useState(DEFAULTS.young);
  const [male, setMale] = useState(DEFAULTS.male);
  const [eth, setEth] = useState(DEFAULTS.eth);
  const [sup, setSup] = useState(DEFAULTS.sup);
  const [ceil, setCeil] = useState(DEFAULTS.ceil);
  const [af, setAf] = useState(DEFAULTS.af);
  const [vis, setVis] = useState('');

  // Disability weights
  const [dw12, setDw12] = useState(DEFAULTS.dw12);
  const [dw37, setDw37] = useState(DEFAULTS.dw37);
  const [dw8, setDw8] = useState(DEFAULTS.dw8);
  const [dwao12, setDwao12] = useState(DEFAULTS.dwao12);
  const [dwao37, setDwao37] = useState(DEFAULTS.dwao37);
  const [dwao8, setDwao8] = useState(DEFAULTS.dwao8);

  // Map overlays state
  const [layerImd, setLayerImd] = useState(false);
  const [layerSch, setLayerSch] = useState(false);
  const [layerHos, setLayerHos] = useState(false);
  const [ovStatus, setOvStatus] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  // Leaflet map refs
  const mapContainerRef = useRef(null);
  const leafletMapInstanceRef = useRef(null);
  const leafletLayersRef = useRef([]);
  const imdLayerRef = useRef(null);
  const schLayerRef = useRef(null);
  const hosLayerRef = useRef(null);

  // Handle survey change
  const applySurvey = (key) => {
    setSurveyMode(key);
    const S = SURVEYS[key];
    setP12(S.p[0]);
    setP37(S.p[1]);
    setP8(S.p[2]);
    const ratio = (S.p[0] + S.p[1] + S.p[2]) / GSGB_P1PLUS;
    setAo(Math.round(9.0 * ratio * 10) / 10);
  };

  // Handle scenario change
  const applyScen = (key) => {
    setActiveScen(key);
    setDw12(DEFAULTS.dw12);
    setDw37(DEFAULTS.dw37);
    setDw8(DEFAULTS.dw8);
    setDwao12(DEFAULTS.dwao12);
    setDwao37(DEFAULTS.dwao37);
    setDwao8(DEFAULTS.dwao8);
    setAf(1);
    const scen = SCENARIOS[key];
    if (scen.vals.dw12 !== undefined) setDw12(scen.vals.dw12);
    if (scen.vals.dw37 !== undefined) setDw37(scen.vals.dw37);
    if (scen.vals.dw8 !== undefined) setDw8(scen.vals.dw8);
    if (scen.vals.dwao12 !== undefined) setDwao12(scen.vals.dwao12);
    if (scen.vals.dwao37 !== undefined) setDwao37(scen.vals.dwao37);
    if (scen.vals.dwao8 !== undefined) setDwao8(scen.vals.dwao8);
  };

  const markCustomScen = () => {
    if (activeScen !== 'custom') setActiveScen('custom');
  };

  // Reset all
  const resetAll = () => {
    setSelectedLA(null);
    setSearchTerm('');
    setPop(53529600);
    setYoung(DEFAULTS.young);
    setMale(DEFAULTS.male);
    setEth(DEFAULTS.eth);
    setSup(DEFAULTS.sup);
    setCeil(DEFAULTS.ceil);
    setAf(1);
    setVis('');
    setQalyK(DEFAULTS.qalyK);
    applySurvey('gsgb');
    applyScen('mid');
  };

  // Select LA
  const handleSelectLA = (la) => {
    if (!la) {
      setSelectedLA(null);
      setSearchTerm('');
      setPop(53529600);
      setYoung(DEFAULTS.young);
      setMale(DEFAULTS.male);
      setEth(DEFAULTS.eth);
      return;
    }
    setSelectedLA(la);
    setSearchTerm(la.n);
    setPop(la.a);
    setYoung(parseFloat((la.ab[0] + la.ab[1]).toFixed(1)));
    setMale(la.m);
    if (la.e && la.e.W != null) {
      setEth(parseFloat((100 - la.e.W).toFixed(1)));
    } else {
      setEth(DEFAULTS.eth);
    }
    setVis('');
  };

  // Calculations Core Engine
  const calcResults = useMemo(() => {
    let bands;
    if (selectedLA) {
      bands = selectedLA.ab.slice();
    } else {
      const yScale = young / NAT_YOUNG, oScale = (100 - young) / (100 - NAT_YOUNG);
      bands = NAT_AB.map((b, i) => i < 2 ? b * yScale : b * oScale);
    }

    const dot = (s, r) => s.reduce((acc, v, i) => acc + v * r[i], 0);
    const ageAdj = R => dot(bands, R) / dot(NAT_AB, R);
    const sexAdj = (rm, rf) => (male * rm + (100 - male) * rf) / (NAT_MALE * rm + (100 - NAT_MALE) * rf);
    const ethAdj = rr => ((100 - eth) + eth * rr) / ((100 - NAT_ETH) + NAT_ETH * rr);

    const visNum = parseFloat(vis.replace(/[^0-9.]/g, '')) || 0;
    const dens = selectedLA ? (selectedLA.g.reduce((a, b) => a + b, 0) / (expPop(selectedLA) + visNum) * 1e5) : GB_DENS;
    const dRatio = Math.min(Math.max(dens / GB_DENS, SUPPLY_CAP[0]), SUPPLY_CAP[1]);
    const supAdj = Math.pow(dRatio, sup);

    const depAdj = R => (selectedLA && selectedLA.d) ? selectedLA.d.reduce((a, v, i) => a + v * R[i], 0) / ENG_Q.reduce((a, v, i) => a + v * R[i], 0) : 1;

    let adj8  = ageAdj(R8) * sexAdj(RM8, RF8) * ethAdj(RRE8) * depAdj(RD8) * supAdj;
    let adj37 = ageAdj(R37) * sexAdj(RM37, RF37) * ethAdj(RRE17) * depAdj(RD37) * supAdj;
    let adj12 = ageAdj(R12) * sexAdj(RM12, RF12) * ethAdj(RRE17) * depAdj(RD12) * supAdj;

    if (basisMode === 'ga' && selectedLA && selectedLA.ga) {
      adj12 = selectedLA.ga[0] / GA_GB[0];
      adj37 = selectedLA.ga[1] / GA_GB[1];
      adj8  = selectedLA.ga[2] / GA_GB[2];
    } else if (basisMode === 'blend' && selectedLA && selectedLA.ga) {
      const w = selectedLA.a / (selectedLA.a + BLEND_K);
      const bl = (gaR, mA) => Math.exp(w * Math.log(gaR) + (1 - w) * Math.log(mA));
      adj12 = bl(selectedLA.ga[0] / GA_GB[0], adj12);
      adj37 = bl(selectedLA.ga[1] / GA_GB[1], adj37);
      adj8  = bl(selectedLA.ga[2] / GA_GB[2], adj8);
    }

    let p12e = p12 * adj12, p37e = p37 * adj37, p8e = p8 * adj8;
    const sum1p = p12e + p37e + p8e;
    let ceilHit = false;
    if (sum1p > ceil) {
      const f = ceil / sum1p;
      p12e *= f; p37e *= f; p8e *= f;
      ceilHit = true;
    }

    const adjAO = (p12e + p37e + p8e) / (p12 + p37 + p8);
    const aoe = ao * adjAO;

    const n12 = pop * p12e / 100;
    const n37 = pop * p37e / 100;
    const n8 = pop * p8e / 100;
    const n1plus = n12 + n37 + n8;
    const nAo = pop * aoe / 100;

    const nAo12 = nAo * 0.3727;
    const nAo37 = nAo * 0.2725;
    const nAo8 = nAo * 0.3548;

    const yldAo8 = nAo8 * dwao8 * af * AO_DEDUP;
    const yldAo37 = nAo37 * dwao37 * af * AO_DEDUP;
    const yldAo12 = nAo12 * dwao12 * af * AO_DEDUP;
    const yldAo = yldAo8 + yldAo37 + yldAo12;

    const basisRatio = (p12 + p37 + p8) / GSGB_P1PLUS;
    const nKids = pop * CHILD_EXP_PER_ADULT * adjAO * basisRatio;
    const yldKids = nKids * (0.37 * dw12 + 0.27 * dw37 + 0.36 * dw8) * af;

    const yld12 = n12 * dw12 * af;
    const yld37 = n37 * dw37 * af;
    const yld8 = n8 * dw8 * af;
    const yld = yld12 + yld37 + yld8 + yldAo + yldKids;

    const money = yld * qalyK * 1000;
    const ohidLo = pop * OHID_LO_PER_ADULT;
    const ohidHi = pop * OHID_HI_PER_ADULT;

    const vicAdj = SEV_HIGH * (p8e / HSE_P8) + SEV_ATRISK * ((p12e + p37e) / HSE_P17);
    const vicLo = pop * VIC_BASE_LO * vicAdj;
    const vicMid = pop * VIC_BASE_MID * vicAdj;
    const vicHi = pop * VIC_BASE_HI * vicAdj;

    const yldCiLo = (n12 * (7.9 / 8.8) * dw12 + n37 * (2.8 / 3.1) * dw37 + n8 * (2.2 / 2.7) * dw8) * af + yldAo * (8 / 9) * ((7.9 / 8.8 + 2.8 / 3.1 + 2.2 / 2.7) / 3) + yldKids * (8 / 9);
    const yldCiHi = (n12 * (9.8 / 8.8) * dw12 + n37 * (3.6 / 3.1) * dw37 + n8 * (3.2 / 2.7) * dw8) * af + yldAo * (10 / 9) * ((9.8 / 8.8 + 3.6 / 3.1 + 3.2 / 2.7) / 3) + yldKids * (10 / 9);

    function yldForBands(P) {
      let a = P[0] * adj12, b = P[1] * adj37, c = P[2] * adj8;
      const sm = a + b + c;
      if (sm > ceil) { const f = ceil / sm; a *= f; b *= f; c *= f; }
      const rAO = (a + b + c) / (P[0] + P[1] + P[2]);
      const br = (P[0] + P[1] + P[2]) / GSGB_P1PLUS;
      const nA = pop * (9.0 * br * rAO) / 100;
      const nK2 = pop * CHILD_EXP_PER_ADULT * rAO * br;
      return (pop * a / 100 * dw12 + pop * b / 100 * dw37 + pop * c / 100 * dw8) * af
           + nA * (0.3727 * dwao12 + 0.2725 * dwao37 + 0.3548 * dwao8) * af * AO_DEDUP
           + nK2 * (0.37 * dw12 + 0.27 * dw37 + 0.36 * dw8) * af;
    }
    const envAll = Object.keys(SURVEYS).map(k => yldForBands(SURVEYS[k].p));
    const envLo = round3sf(Math.min(...envAll));
    const envHi = round3sf(Math.max(...envAll));

    // Share bar
    const shLow  = yld > 0 ? yld12 / yld   : 0;
    const shMod  = yld > 0 ? yld37 / yld   : 0;
    const shHigh = yld > 0 ? yld8 / yld    : 0;
    const shAo   = yld > 0 ? yldAo / yld   : 0;
    const shKids = yld > 0 ? yldKids / yld : 0;
    const shPct = largestRemainder([shLow, shMod, shHigh, shAo, shKids]);
    const outsideSevere = 100 - shPct[2];

    // Demographic Profiles
    const profYoung = (bands[0] * R8[0] + bands[1] * R8[1]) / dot(bands, R8) * 100;
    const profMale  = (male * RM8) / (male * RM8 + (100 - male) * RF8) * 100;
    const profEth   = (eth * RRE8) / (eth * RRE8 + (100 - eth)) * 100;

    const aoB01 = bands[0] + bands[1], aoB23 = bands[2] + bands[3], aoB55 = bands[4] + bands[5] + bands[6];
    const aoWsum = aoB01 * RAO_AGE[0] + aoB23 * RAO_AGE[1] + aoB55 * RAO_AGE[2];
    const demoAoYoung = Math.round(aoB01 * RAO_AGE[0] / aoWsum * 100);
    const demoAoFem = Math.round(((100 - male) * RAO_F) / (((100 - male) * RAO_F) + male * RAO_M) * 100);

    const aoShare8 = yldAo > 0 ? Math.round(yldAo8 / yldAo * 100) : 0;

    return {
      pop, p12, p37, p8, p12e, p37e, p8e, aoe, adjAO, ceil, ceilHit, adj8, adj37, adj12,
      dw12, dw37, dw8, dwao12, dwao37, dwao8, af, qalyK,
      n12, n37, n8, n1plus, nAo, nAo8, nAo37, nAo12, nKids,
      yld, yldAo, yldAo8, yldKids, aoShare8,
      money, ohidLo, ohidHi, vicLo, vicMid, vicHi,
      yldCiLo, yldCiHi, envLo, envHi,
      shLow, shMod, shHigh, shAo, shKids, shPct, outsideSevere,
      profYoung, profMale, profEth, demoAoYoung, demoAoFem,
      bands, dens, dRatio
    };
  }, [pop, selectedLA, p12, p37, p8, ao, qalyK, young, male, eth, sup, ceil, af, vis, dw12, dw37, dw8, dwao12, dwao37, dwao8, surveyMode, basisMode]);

  // SVG Choropleth Map calculations
  const mapPrevAll = useMemo(() => {
    const sl = [p12, p37, p8];
    const nat = sl[0] + sl[1] + sl[2];
    const gaN = GA_GB[0] + GA_GB[1] + GA_GB[2];
    return LAS.map(la => {
      const prev = la.ga ? nat * (la.ga[0] + la.ga[1] + la.ga[2]) / gaN : nat;
      const ratio = prev / nat;
      const band = bandOf(ratio);
      return { la, prev, ratio, band };
    });
  }, [p12, p37, p8]);

  const mapBandCounts = useMemo(() => {
    const counts = [0, 0, 0, 0];
    mapPrevAll.forEach(item => {
      const idx = MAP_BANDS.indexOf(item.band);
      if (idx !== -1) counts[idx]++;
    });
    return counts;
  }, [mapPrevAll]);

  // Structural drivers calculation for the choropleth map
  const driversInfo = useMemo(() => {
    const gbDens = 11.7;
    const dens = LAS.map(la => Math.max(la.g.reduce((x, y) => x + y, 0) / expPop(la) * 1e5, 0));
    const hiIdx = LAS.map((la, i) => i).filter(i => {
      const item = mapPrevAll[i];
      return item && item.ratio >= 1.15;
    });
    const avgDensHi = hiIdx.length ? hiIdx.reduce((a, i) => a + dens[i], 0) / hiIdx.length : gbDens;
    return {
      hiCount: hiIdx.length,
      avgDensHi: avgDensHi.toFixed(1),
      gbDens: gbDens.toFixed(1)
    };
  }, [mapPrevAll]);


  // Tornado Sensitivity Data
  const tornadoItems = useMemo(() => {
    const s = calcResults;
    const base = s.yld;
    const cur = [s.dwao12, s.dwao37, s.dwao8];

    const gY = (p12e, p37e, p8e, w12, w37, w8, aoPct, kidScale) => {
      const a = (aoPct === undefined) ? s.aoe : aoPct;
      const ks = (kidScale === undefined) ? (s.p12 + s.p37 + s.p8) / GSGB_P1PLUS : kidScale;
      const n12 = s.pop * p12e / 100, n37 = s.pop * p37e / 100, n8 = s.pop * p8e / 100;
      const nAo = s.pop * a / 100;
      const ya = (nAo * 0.3727 * w12 + nAo * 0.2725 * w37 + nAo * 0.3548 * w8) * AO_DEDUP;
      const nK = s.pop * CHILD_EXP_PER_ADULT * s.adjAO * ks;
      const yk = nK * (0.37 * s.dw12 + 0.27 * s.dw37 + 0.36 * s.dw8);
      return (n12 * s.dw12 + n37 * s.dw37 + n8 * s.dw8 + ya + yk) * s.af;
    };

    const bandsFor = k => SURVEYS[k].p;
    const yFor = P => {
      let a = P[0] * s.adj12, b = P[1] * s.adj37, c = P[2] * s.adj8;
      const sm = a + b + c;
      if (sm > s.ceil) { const f = s.ceil / sm; a *= f; b *= f; c *= f; }
      const rAO = (a + b + c) / (P[0] + P[1] + P[2]);
      const br = (P[0] + P[1] + P[2]) / GSGB_P1PLUS;
      return gY(a, b, c, ...cur, 9.0 * br * rAO, br * rAO / s.adjAO);
    };
    const across = Object.keys(SURVEYS).map(k => yFor(bandsFor(k)));
    const items = [
      { l: 'Which survey (APMS 2023/24 ↔ GSGB 2024)', lo: Math.min(...across), hi: Math.max(...across) }
    ];

    if (surveyMode === 'gsgb') {
      items.push({ l: 'PGSI 8+ sampling CI (2.2–3.2%)',  lo: gY(s.p12e, s.p37e, 2.2 * s.adj8, ...cur),  hi: gY(s.p12e, s.p37e, 3.2 * s.adj8, ...cur) });
      items.push({ l: 'PGSI 1–2 sampling CI (7.9–9.8%)', lo: gY(7.9 * s.adj12, s.p37e, s.p8e, ...cur), hi: gY(9.8 * s.adj12, s.p37e, s.p8e, ...cur) });
      items.push({ l: 'PGSI 3–7 sampling CI (2.8–3.6%)', lo: gY(s.p12e, 2.8 * s.adj37, s.p8e, ...cur), hi: gY(s.p12e, 3.6 * s.adj37, s.p8e, ...cur) });
    }

    items.push({
      l: 'Family-side transfer (30% floor ↔ parity)',
      lo: gY(s.p12e, s.p37e, s.p8e, s.dw12 * 0.3, s.dw37 * 0.3, s.dw8 * 0.3),
      hi: gY(s.p12e, s.p37e, s.p8e, s.dw12, s.dw37, s.dw8)
    });

    const brNow = (s.p12 + s.p37 + s.p8) / GSGB_P1PLUS;
    items.push({
      l: 'Family and friends (8–10% of adults, GSGB interval)',
      lo: gY(s.p12e, s.p37e, s.p8e, ...cur, 8.0 * brNow * s.adjAO),
      hi: gY(s.p12e, s.p37e, s.p8e, ...cur, 10.0 * brNow * s.adjAO)
    });

    const f0 = Math.pow(s.dRatio, 0 - sup), f3 = Math.pow(s.dRatio, 0.3 - sup);
    items.push({
      l: 'Supply elasticity (0–0.3) at local premises density',
      lo: gY(s.p12e * f0, s.p37e * f0, s.p8e * f0, ...cur),
      hi: gY(s.p12e * f3, s.p37e * f3, s.p8e * f3, ...cur)
    });

    items.push({
      l: 'Causal attribution of weights (0.2–1.0, assumption span)',
      lo: base * 0.2 / (s.af || 1),
      hi: base * 1.0 / (s.af || 1)
    });

    items.push({
      l: 'Children (included ↔ excluded)',
      lo: gY(s.p12e, s.p37e, s.p8e, ...cur, undefined, 0),
      hi: base
    });

    items.forEach(it => { it.swing = Math.abs(it.hi - it.lo); });
    items.sort((a, b) => b.swing - a.swing);
    return items;
  }, [calcResults, surveyMode, sup]);

  // Leaflet Map Initialization & Updates
  useEffect(() => {
    if (!selectedLA || !mapContainerRef.current) return;

    const pts = PTS[selectedLA.c] || [];
    if (!pts.length) return;

    if (!leafletMapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, { scrollWheelZoom: false });
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      leafletMapInstanceRef.current = map;
    }

    const map = leafletMapInstanceRef.current;

    // Clear previous premise markers
    leafletLayersRef.current.forEach(layer => map.removeLayer(layer));
    leafletLayersRef.current = [];

    const latlngs = pts.map(p => [p[0], p[1]]);
    pts.forEach(p => {
      const marker = L.circleMarker([p[0], p[1]], {
        radius: 5,
        color: PT_COLORS[p[2]] || '#166F94',
        weight: 1.5,
        fillColor: PT_COLORS[p[2]] || '#166F94',
        fillOpacity: 0.85
      }).bindTooltip(`${PREM_LABELS[p[2]] || 'Gambling premise'}`);
      marker.addTo(map);
      leafletLayersRef.current.push(marker);
    });

    if (latlngs.length > 0) {
      map.fitBounds(L.latLngBounds(latlngs).pad(0.12));
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [selectedLA]);

  // Map Overlays (IMD, Schools, Hospitals)
  useEffect(() => {
    const map = leafletMapInstanceRef.current;
    if (!map || !selectedLA) return;

    const clearLayer = (layerRef) => {
      if (layerRef.current && map) {
        map.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };

    // 1. IMD Shading
    if (layerImd) {
      if (map.getZoom() < 11) {
        setOvStatus('Zoom in further for deprivation shading');
        clearLayer(imdLayerRef);
      } else {
        setOvStatus('Loading deprivation layer…');
        const b = map.getBounds();
        const env = encodeURIComponent(JSON.stringify({ xmin: b.getWest(), ymin: b.getSouth(), xmax: b.getEast(), ymax: b.getNorth(), spatialReference: { wkid: 4326 } }));
        const bURL = `https://services1.arcgis.com/ESMARspQHYMw9BZ9/ArcGIS/rest/services/Lower_layer_Super_Output_Areas_December_2021_Boundaries_EW_BSC_V4/FeatureServer/0/query?where=1%3D1&geometry=${env}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=LSOA21CD&returnGeometry=true&outSR=4326&resultRecordCount=400&f=geojson`;

        fetch(bURL)
          .then(r => r.json())
          .then(gj => {
            if (!gj.features) { setOvStatus(''); return; }
            const codes = gj.features.map(f => f.properties.LSOA21CD);
            const chunks = [];
            for (let i = 0; i < codes.length; i += 60) chunks.push(codes.slice(i, i + 60));

            Promise.all(chunks.map(ch => {
              const w = encodeURIComponent("LSOA11CD IN (" + ch.map(c => `'${c}'`).join(',') + ")");
              return fetch(`https://services1.arcgis.com/ESMARspQHYMw9BZ9/ArcGIS/rest/services/Index_of_Multiple_Deprivation_Dec_2019_Lookup_in_England_2022/FeatureServer/0/query?where=${w}&outFields=LSOA11CD,IMD19&returnGeometry=false&f=json`).then(r => r.json());
            })).then(res => {
              const rank = {};
              res.forEach(r => (r.features || []).forEach(f => { rank[f.attributes.LSOA11CD] = f.attributes.IMD19; }));
              clearLayer(imdLayerRef);
              imdLayerRef.current = L.geoJSON(gj, {
                style: f => {
                  const rk = rank[f.properties.LSOA21CD];
                  if (!rk) return { weight: 0, fillOpacity: 0 };
                  const q = Math.min(4, Math.floor((Math.ceil(rk / 3284.4) - 1) / 2));
                  return { color: '#00000000', weight: 0, fillColor: IMD_COLS[q], fillOpacity: q < 3 ? 0.4 : 0.1 };
                },
                interactive: false
              }).addTo(map);
              imdLayerRef.current.bringToBack();
              setOvStatus('');
            });
          })
          .catch(() => setOvStatus('Deprivation layer unavailable (network restricted)'));
      }
    } else {
      clearLayer(imdLayerRef);
    }

    // 2. Schools
    if (layerSch) {
      setOvStatus('Loading schools…');
      const b = map.getBounds(), bb = [b.getSouth(), b.getWest(), b.getNorth(), b.getEast()].join(',');
      const q = `[out:json][timeout:20];(node["amenity"="school"](${bb});way["amenity"="school"](${bb}););out center 400;`;
      fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: 'data=' + encodeURIComponent(q) })
        .then(r => r.json())
        .then(d => {
          clearLayer(schLayerRef);
          const grp = L.layerGroup();
          (d.elements || []).forEach(e => {
            const lat = e.lat || (e.center && e.center.lat);
            const lon = e.lon || (e.center && e.center.lon);
            if (lat != null && lon != null) {
              L.circleMarker([lat, lon], { radius: 4, color: '#8A9BA0', weight: 1.2, fillColor: '#8A9BA0', fillOpacity: 0.55 })
                .bindTooltip((e.tags && e.tags.name) || 'School').addTo(grp);
            }
          });
          schLayerRef.current = grp;
          grp.addTo(map);
          setOvStatus('');
        })
        .catch(() => setOvStatus('Schools layer unavailable (network restricted)'));
    } else {
      clearLayer(schLayerRef);
    }

    // 3. Hospitals & mental health
    if (layerHos) {
      setOvStatus('Loading hospitals…');
      const b = map.getBounds(), bb = [b.getSouth(), b.getWest(), b.getNorth(), b.getEast()].join(',');
      const q = `[out:json][timeout:20];(node["amenity"="hospital"](${bb});way["amenity"="hospital"](${bb});node["healthcare"="psychiatry"](${bb});way["healthcare"="psychiatry"](${bb}););out center 200;`;
      fetch('https://overpass-api.de/api/interpreter', { method: 'POST', body: 'data=' + encodeURIComponent(q) })
        .then(r => r.json())
        .then(d => {
          clearLayer(hosLayerRef);
          const grp = L.layerGroup();
          (d.elements || []).forEach(e => {
            const lat = e.lat || (e.center && e.center.lat);
            const lon = e.lon || (e.center && e.center.lon);
            if (lat != null && lon != null) {
              L.circleMarker([lat, lon], { radius: 4, color: '#0A4561', weight: 1.2, fillColor: '#0A4561', fillOpacity: 0.55 })
                .bindTooltip((e.tags && e.tags.name) || 'Hospital / Mental Health').addTo(grp);
            }
          });
          hosLayerRef.current = grp;
          grp.addTo(map);
          setOvStatus('');
        })
        .catch(() => setOvStatus('Hospitals layer unavailable (network restricted)'));
    } else {
      clearLayer(hosLayerRef);
    }
  }, [layerImd, layerSch, layerHos, selectedLA]);

  // Copy Summary
  const handleCopySummary = () => {
    const d = calcResults;
    const txt =
`Gambling harm burden estimate, ${selectedLA ? selectedLA.n + ', ' : ''}adult population ${fmtPop(d.pop)}
(Generated with the Gambling Harm UK burden calculator; demographics from ONS mid-2023 estimates${selectedLA ? ' for ' + selectedLA.n : ''})

• An estimated ${round3sf(d.n1plus).toLocaleString('en-GB')} adults are experiencing gambling harm (PGSI 1+, demographically adjusted from GSGB 2024 rates: ×${d.adj8.toFixed(2)} for PGSI 8+ given local age-sex structure), of whom ${round3sf(d.n8).toLocaleString('en-GB')} score PGSI 8+ (effective ${d.p8e.toFixed(1)}%).
${selectedLA ? '• Licensed gambling premises (Gambling Commission register): ' + selectedLA.g[0] + ' betting shops, ' + selectedLA.g[1] + ' adult gaming centres, ' + selectedLA.g[2] + ' bingo premises, ' + selectedLA.g[3] + ' casinos, ' + (selectedLA.g.reduce((a, b) => a + b, 0) / expPop(selectedLA) * 1e5).toFixed(1) + ' premises per 100k exposure population (footfall-adjusted) vs 11.7 GB average.\n' : ''}• A further ${round3sf(d.nAo).toLocaleString('en-GB')} adults are affected by someone else's gambling (${d.aoe.toFixed(1)}% locally adjusted from the GSGB 2024 9% national rate). An estimated ${round3sf(d.nKids).toLocaleString('en-GB')} children live with an adult who may benefit from gambling treatment or support (OHID headcount rate scaled locally), adding ${round3sf(d.yldKids).toLocaleString('en-GB')} healthy years lost on the HNA proxy method. Allocating family and friends across severity bands on the GambleAware household distribution (0.3727 / 0.2725 / 0.3548, the allocation used in the GHUK Health Needs Assessment, Appendix D; this replaced Goodwin's 1:3:6, retired in July 2026, which counted affected people per gambler rather than distributing a fixed affected population), with the family-side burden de-duplicated for household overlap (Wilson et al., 2024), an estimated ${round3sf(d.nAo8).toLocaleString('en-GB')} are affected by someone at PGSI 8+, and ${d.aoShare8}% of the family-side health burden traces to the severe end. Unlike gambler-side burden, harm to families concentrates where gambling is most severe.
• Applying annual health-utility decrements (Moayeri, 2020, the GHUK Health Needs Assessment basis: PGSI 1–2 = ${d.dw12}; 3–7 = ${d.dw37}; 8+ = ${d.dw8}; family and friends by source severity = ${d.dwao12}/${d.dwao37}/${d.dwao8}, GHS-AO benchmarked), gambling harm removes an estimated ${round3sf(d.yld).toLocaleString('en-GB')} years of health and wellbeing from this population every year (HNA utility-decrement basis; not comparable to GBD YLD), ${d.outsideSevere}% of it outside the most severe category, including ${round3sf(d.yldAo).toLocaleString('en-GB')} healthy years lost by people affected by someone else's gambling.
• Sensitivity: valued at £${(d.qalyK * 1000).toLocaleString('en-GB')} per healthy year (societal wellbeing valuation; HM Treasury Green Book £70,000 default, NICE midpoint £30,000 upper option), the loss equates to ≈ ${fmtMoney(d.money)} per year, an upper-envelope welfare framing, not a cashflow cost.
• Cost accounting matters: OHID's (2023) narrow cost-of-illness method scales to ${fmtMoney(d.ohidLo)}–${fmtMoney(d.ohidHi)}/yr for this population. Full social-cost accounting (Browne, Tulloch et al., 2025), with unit costs calibrated via the categories shared with OHID (Victorian prevalence cancels in the transfer) and applied at the prevalence stated above, gives ≈ ${fmtMoney(d.vicMid)}/yr (${fmtMoney(d.vicLo)}–${fmtMoney(d.vicHi)}), counting relationship breakdown, wider emotional and psychological harm, and productivity loss. Methods differ across studies; figures are indicative of scale and non-additive.

PGSI 1+ ceiling: ${d.ceil || 25}%${d.ceilHit ? ' (binding, categories rescaled)' : ''}. Local variation basis: ${basisMode === 'ga' ? 'GambleAware–YouGov MRP (survey geography, GSGB-anchored)' : basisMode === 'blend' ? 'Blended: population-weighted combination of MRP survey geography and structural standardisation (age, sex, ethnicity, deprivation, supply), GSGB-anchored' : 'GHUK standardisation (age, sex, ethnicity, deprivation, supply)'}. Prevalence basis: ${surveyMode === 'custom' ? 'custom (hand-set bands, not a published survey)' : SURVEYS[surveyMode].name}. Scenario: ${activeScen === 'mid' ? 'Central (published defaults)' : activeScen === 'moa' ? 'Adjusted weights (Moayeri regression-adjusted / GHS-AO)' : activeScen === 'ao30' ? 'Family-side 30% transfer floor' : 'Custom'}, parameter values used: prevalence ${d.p12.toFixed(1)}/${d.p37.toFixed(1)}/${d.p8.toFixed(1)}%, demographic adjustment ×${d.adj8.toFixed(2)} (PGSI 8+), gambler weights ${d.dw12}/${d.dw37}/${d.dw8}, family-side weights ${d.dwao12}/${d.dwao37}/${d.dwao8}, £${(d.qalyK * 1000).toLocaleString('en-GB')}/healthy year. Approximately ${round3sf(d.n8 * 0.95).toLocaleString('en-GB')} adults at PGSI 8+ are likely not in structured treatment (national evidence suggests fewer than ~1 in 20 are), an upper-bound gap: modelled counts exceed national treated volumes under every scenario.

Deprivation is modelled for English authorities (GSGB table D.8 × IMD 2019 quintile shares; PGSI 8+ runs 5.9% in England's most deprived quintile vs 1.0% in the least); Scottish and Welsh authorities carry no structural deprivation term. Online gambling has no local supply term, areas with high online penetration are understated. Estimates are ecological (population-level), not individual-level risk. Children are counted via the OHID proxy method (see methods). Causal-attribution factor applied to all weights: ${d.af.toFixed(2)}${d.af < 1 ? ' (below the published 1.0 default)' : ' (published default: observed wellbeing gap fully attributed)'}. Note: 'years of health and wellbeing lost' uses the Moayeri (2020) SF-6D utility-decrement basis and is not comparable to GBD YLD. Directly elicited disability weights (Tulloch et al., 2026) measure a different quantity on a different scale and are deliberately not offered in this tool, because monetising them at a £/QALY value would price one metric on another metric's scale. Source: Gambling Harm UK Burden Calculator v2.6 (defaults frozen as v2.5, 11 July 2026); full parameter audit and methodology at the tool page.`;

    navigator.clipboard.writeText(txt).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handlePrintPDF = () => {
    document.body.classList.add('pr-mode');
    window.print();
    setTimeout(() => document.body.classList.remove('pr-mode'), 2500);
  };

  const selectedPrevItem = useMemo(() => {
    if (!selectedLA) return null;
    return mapPrevAll.find(item => item.la.c === selectedLA.c);
  }, [selectedLA, mapPrevAll]);

  const maxDev = useMemo(() => {
    const base = calcResults.yld;
    return Math.max(...tornadoItems.map(it => Math.max(Math.abs(it.hi - base), Math.abs(it.lo - base))), 1);
  }, [calcResults.yld, tornadoItems]);

  return (
    <div className={`burden-mapping-page px-4  text-[#1A1A1A] bg-[#FAFAFA] min-h-screen ${isAdvanced ? 'advanced-mode' : 'basic-mode'}`}>
      
      {/* Header Banner */}
      <div className="border-b-[3px] border-[#1A1A1A] bg-white py-7 ">
        <div className="max-w-[1120px] mx-auto">
          <div className="font-['IBM_Plex_Mono',monospace] text-xs uppercase tracking-widest text-[#166F94] font-semibold mb-2">
            Gambling Harm UK · Local Systems Toolkit
          </div>
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-[40px] leading-[1.08] tracking-tight max-w-[780px]">
            How much health and wellbeing is gambling taking from <em className="not-italic text-[#0A4561]">your population</em>?
          </h1>
          <p className="max-w-[660px] mt-3 text-[#404040] text-[15px] leading-relaxed">
            This calculator estimates the health burden of gambling across the full spectrum of harm, not just the most severe cases, using the health-utility evidence behind the GHUK Health Needs Assessment (Moayeri, 2020). It does not give you one number. It gives you a defensible number, on a survey basis you have chosen and can cite, with the working shown.
          </p>

          {/* Mode Toggle */}
          <div className="inline-flex border-[1.5px] border-[#1A1A1A] rounded-full overflow-hidden my-4">
            <button
              type="button"
              onClick={() => setIsAdvanced(false)}
              className={`px-4 py-1.5 font-bold text-xs uppercase tracking-wider transition-colors ${!isAdvanced ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#404040] hover:text-[#166F94]'}`}
            >
              Basic
            </button>
            <button
              type="button"
              onClick={() => setIsAdvanced(true)}
              className={`px-4 py-1.5 font-bold text-xs uppercase tracking-wider transition-colors ${isAdvanced ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#404040] hover:text-[#166F94]'}`}
            >
              Advanced, adjust every assumption
            </button>
          </div>

          {/* How-to Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <div className="border border-[#E5E5E5] rounded-lg p-3 text-[12.5px] text-[#404040] bg-white">
              <b className="block text-[#166F94] text-[11px] tracking-wider uppercase mb-1 font-bold">1 · Select</b>
              Choose your local authority; population, age, sex and ethnic structure load automatically from ONS and Census data.
            </div>
            <div className="border border-[#E5E5E5] rounded-lg p-3 text-[12.5px] text-[#404040] bg-white">
              <b className="block text-[#166F94] text-[11px] tracking-wider uppercase mb-1 font-bold">2 · Choose your survey</b>
              Three UK surveys measure gambling harm and disagree by about five times at the severe end, because they asked differently. Pick the one you are prepared to defend. Everything else follows from it.
            </div>
            <div className="border border-[#E5E5E5] rounded-lg p-3 text-[12.5px] text-[#404040] bg-white">
              <b className="block text-[#166F94] text-[11px] tracking-wider uppercase mb-1 font-bold">3 · Use</b>
              Copy the fully cited summary into your JSNA, board paper or licensing statement, or download a PDF. Switch to Advanced to adjust any assumption. Methods and audit trail are linked below.
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1120px] mx-auto py-8">
        <main className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-7">

          {/* LEFT COLUMN: Population, Supply, Results, Who it affects */}
          <section className="space-y-5">

            {/* CARD: 1 · Your Population */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs" id="pop-card">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">
                {isAdvanced && <span>1 · </span>}Your population
              </h2>
              <p className="text-[13px] text-[#404040] mb-4">
                Choose a local authority, ONS mid-2023 population and Census 2021 ethnicity load automatically, or enter figures manually below.
              </p>

              {/* Autocomplete Input */}
              <div className="relative mb-3">
                <input
                  type="text"
                  list="la-datalist"
                  value={searchTerm}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchTerm(val);
                    const match = LAS.find(l => l.n.toLowerCase() === val.trim().toLowerCase());
                    handleSelectLA(match || null);
                  }}
                  placeholder="Start typing a local authority…"
                  className="w-full font-['IBM_Plex_Mono',monospace] text-base font-semibold p-3 border-2 border-[#1A1A1A] rounded-lg bg-[#FAFAFA] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#166F94]"
                />
                <datalist id="la-datalist">
                  {LAS.map(la => (
                    <option key={la.c} value={la.n} />
                  ))}
                </datalist>
              </div>

              {!selectedLA && (
                <p className="text-xs text-[#404040] mb-3">
                  Selecting an authority loads its Census ethnicity profile, licensed-premises counts and the local supply map (Gambling Commission register).
                </p>
              )}

              {/* Ethnicity Profile Panel */}
              {selectedLA && (
                <div className="mb-4 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg">
                  <div className="text-xs font-semibold mb-2 text-[#1A1A1A]">
                    Ethnic composition (Census 2021) <span className="font-normal text-[#404040]">· England &amp; Wales average shown as ▲</span>
                  </div>
                  {selectedLA.e ? (
                    <div className="space-y-1">
                      {Object.keys(ETH_LABELS).map(k => {
                        const v = selectedLA.e[k] || 0;
                        const ref = ETH_REF[k] || 0;
                        return (
                          <div key={k} className="grid grid-cols-[64px_1fr_46px] items-center gap-2 text-xs">
                            <span className="text-[#404040]">{ETH_LABELS[k]}</span>
                            <div className="relative h-2.5 bg-white border border-[#E5E5E5] rounded-xs">
                              <div className="h-full bg-[#166F94] rounded-xs" style={{ width: `${v}%` }}></div>
                              <div
                                className="absolute -top-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#404040] -translate-x-1/2"
                                style={{ left: `${ref}%` }}
                                title={`England & Wales: ${ref}%`}
                              ></div>
                            </div>
                            <b className="font-['IBM_Plex_Mono',monospace] text-right text-[#1A1A1A]">{v.toFixed(1)}%</b>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-[#404040]">
                      Ethnicity data not available for Scottish authorities (Census 2021 covers England &amp; Wales); the ethnicity scale keeps the national default.
                    </p>
                  )}
                  <p className="text-[11px] text-[#404040] mt-2 italic">
                    GSGB shows elevated PGSI rates among some minority ethnic groups, but sample sizes preclude a robust local adjustment; areas with larger minority ethnic populations should treat estimates as lower bounds.
                  </p>
                </div>
              )}

              {/* Adult Population Input */}
              <input
                type="text"
                value={fmtPop(pop)}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9]/g, '');
                  setPop(raw ? Math.min(parseInt(raw, 10), 70000000) : 0);
                }}
                className="w-full font-['IBM_Plex_Mono',monospace] text-xl font-semibold p-3 border-2 border-[#1A1A1A] rounded-lg bg-[#FAFAFA] text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#166F94]"
                aria-label="Adult population"
              />

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[
                  { l: 'Great Britain (53.5m)', v: 53529600 },
                  { l: 'England (~45m)', v: 45000000 },
                  { l: 'Typical county (~600k)', v: 600000 },
                  { l: 'Typical city (~400k)', v: 400000 },
                  { l: 'Typical district (~110k)', v: 110000 }
                ].map(b => (
                  <button
                    key={b.v}
                    type="button"
                    onClick={() => {
                      setSelectedLA(null);
                      setSearchTerm('');
                      setPop(b.v);
                    }}
                    className="font-['IBM_Plex_Mono',monospace] text-xs font-medium px-3 py-1.5 border border-[#E5E5E5] rounded-full bg-white text-[#404040] hover:border-[#166F94] hover:text-[#166F94] transition-colors"
                  >
                    {b.l}
                  </button>
                ))}
              </div>

              {/* Premises Breakdown (If LA selected) */}
              {selectedLA && (
                <div className="mt-4 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg">
                  <div className="text-xs font-semibold mb-2 text-[#1A1A1A]">Licensed gambling premises (Gambling Commission register)</div>
                  <div className="space-y-1 text-xs text-[#404040]">
                    <div className="flex justify-between py-0.5"><span>Betting shops</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{selectedLA.g[0].toLocaleString('en-GB')}</b></div>
                    <div className="flex justify-between py-0.5"><span>Adult gaming centres</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{selectedLA.g[1].toLocaleString('en-GB')}</b></div>
                    <div className="flex justify-between py-0.5"><span>Bingo</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{selectedLA.g[2].toLocaleString('en-GB')}</b></div>
                    <div className="flex justify-between py-0.5"><span>Casinos</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{selectedLA.g[3].toLocaleString('en-GB')}</b></div>
                    <div className="flex justify-between border-t border-dashed border-[#E5E5E5] pt-1.5 mt-1">
                      <span>Footfall-adjusted density per 100k (GB: 11.7)</span>
                      <b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{(selectedLA.g.reduce((a, b) => a + b, 0) / expPop(selectedLA) * 1e5).toFixed(1)}</b>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#404040] mt-2 italic">
                    Premises data is admissible evidence for your Local Area Profile and statement of licensing principles.
                  </p>
                </div>
              )}

              {/* Advanced Sliders for Population Demographics */}
              {isAdvanced && (
                <div className="space-y-4 pt-4 border-t border-dashed border-[#E5E5E5] mt-4">
                  {/* Young Share Slider */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-sm">Share of adults aged 18–34</span>
                      <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#166F94]">{Math.round(young)}%</span>
                    </div>
                    <p className="text-xs text-[#404040] mb-2">From ONS mid-year estimates (GB ≈ 27.6%). PGSI 8+ runs 5.3% at 18–24 to 0.3% at 75+.</p>
                    <input
                      type="range" min="0" max="60" step="0.5" value={young}
                      onChange={e => { setYoung(parseFloat(e.target.value)); markCustomScen(); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#404040] font-['IBM_Plex_Mono',monospace]"><span>0%</span><span>30%</span><span>60%</span></div>
                  </div>

                  {/* Male Share Slider */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-sm">Share of adults who are male</span>
                      <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#166F94]">{male.toFixed(1)}%</span>
                    </div>
                    <p className="text-xs text-[#404040] mb-2">From ONS mid-year estimates (GB ≈ 48.4%). PGSI 8+ is 3.7% in men vs 1.6% in women.</p>
                    <input
                      type="range" min="40" max="60" step="0.5" value={male}
                      onChange={e => { setMale(parseFloat(e.target.value)); markCustomScen(); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#404040] font-['IBM_Plex_Mono',monospace]"><span>40%</span><span>50%</span><span>60%</span></div>
                  </div>

                  {/* Ethnicity Slider */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-sm">Share of adults from minority ethnic groups</span>
                      <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#166F94]">{eth.toFixed(1)}%</span>
                    </div>
                    <p className="text-xs text-[#404040] mb-2">Census 2021 (auto-filled on selecting an English or Welsh authority).</p>
                    <input
                      type="range" min="0" max="60" step="0.5" value={eth}
                      onChange={e => { setEth(parseFloat(e.target.value)); markCustomScen(); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#404040] font-['IBM_Plex_Mono',monospace]"><span>0%</span><span>30%</span><span>60%</span></div>
                  </div>

                  {/* Visitor footfall input */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-sm">Visitor footfall: daily visitor-equivalents (optional)</span>
                      <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#166F94]">{vis ? `${Math.round(parseFloat(vis)).toLocaleString('en-GB')}/day` : '–'}</span>
                    </div>
                    <input
                      type="text"
                      value={vis}
                      onChange={e => setVis(e.target.value)}
                      placeholder="e.g. 60,000, leave blank if not a visitor economy"
                      className="w-full p-2 text-sm border border-[#E5E5E5] rounded-md font-['IBM_Plex_Mono',monospace]"
                    />
                  </div>

                  {/* Supply effect elasticity */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-sm">Supply effect: elasticity of harm to premises density</span>
                      <span className="font-['IBM_Plex_Mono',monospace] font-semibold text-[#166F94]">{sup.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-[#404040] mb-2">Applies (local density ÷ GB density)^ε to prevalence. Modest default 0.10.</p>
                    <input
                      type="range" min="0" max="0.5" step="0.05" value={sup}
                      onChange={e => { setSup(parseFloat(e.target.value)); markCustomScen(); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#404040] font-['IBM_Plex_Mono',monospace]"><span>0 (off)</span><span>0.25</span><span>0.5</span></div>
                  </div>

                  <p className="text-xs text-[#404040] pt-2 border-t border-[#E5E5E5]">
                    Combined local demographic adjustment: ×{calcResults.adj8.toFixed(2)} (PGSI 8+), ×{calcResults.adj37.toFixed(2)} (3–7), ×{calcResults.adj12.toFixed(2)} (1–2)
                  </p>
                </div>
              )}
            </div>

            {/* CARD: How your area compares (SVG Choropleth) */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">How your area compares</h2>
              <p className="text-[13px] text-[#404040] mb-4 leading-relaxed">
                All 207 upper-tier authorities in four bands against the GB average. No ranking and no local point estimate, because the survey behind it cannot support either. The pattern is the finding, not any one area’s position.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr] gap-5 items-start">
                {/* SVG UK Choropleth */}
                <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-2 flex items-center justify-center">
                  <svg viewBox="0 0 520 1049" className="w-full max-w-[280px] h-auto drop-shadow-xs" role="img" aria-label="Map of Great Britain shaded by estimated PGSI 1 plus prevalence per authority">
                    {mapPrevAll.map(({ la, band }) => {
                      const isSel = selectedLA && selectedLA.c === la.c;
                      const pathD = MAP[la.c];
                      if (!pathD) return null;
                      return (
                        <path
                          key={la.c}
                          d={pathD}
                          fill={band.c}
                          stroke={isSel ? '#1A1A1A' : '#FFFFFF'}
                          strokeWidth={isSel ? '2.5' : '0.7'}
                          className="cursor-pointer transition-colors duration-150 hover:opacity-85"
                          onClick={() => handleSelectLA(la)}
                        >
                          <title>{`${la.n}: ${band.t}`}</title>
                        </path>
                      );
                    })}
                  </svg>
                </div>

                {/* Map Key & Info */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#1A1A1A]">Estimated PGSI 1+ against the GB average</div>
                  <div className="space-y-1.5">
                    {MAP_BANDS.map((b, i) => (
                      <div key={b.t} className="grid grid-cols-[14px_1fr_auto] gap-2 items-center text-xs text-[#404040]">
                        <i className="w-3.5 h-3.5 rounded-xs border border-[#E5E5E5]" style={{ background: b.c }}></i>
                        <span>{b.t}</span>
                        <b className="font-['IBM_Plex_Mono',monospace]">{mapBandCounts[i]}</b>
                      </div>
                    ))}
                  </div>

                  {/* Here line */}
                  <div className="mt-3 p-2.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg text-xs leading-relaxed">
                    {selectedLA && selectedPrevItem ? (
                      <div className="flex gap-2 items-start text-[#1A1A1A]">
                        <i className="w-3.5 h-3.5 rounded-xs border border-[#E5E5E5] shrink-0 mt-0.5" style={{ background: selectedPrevItem.band.c }}></i>
                        <span>
                          <b>{selectedLA.n}</b> sits {selectedPrevItem.band.t.toLowerCase().replace('the gb average', 'the GB average')}.
                          {selectedLA.a < 100000 && ' This authority is small enough that the estimate carries wide uncertainty; treat the band as indicative only.'}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#404040] italic">Select an authority above to see which band it falls in.</span>
                    )}
                  </div>

                  {/* Map Hint */}
                  <p className="text-xs text-[#404040] italic mt-2 leading-relaxed">
                    Click any authority to select it. London boroughs are small at this scale; use the search box above to find one. Boundaries: ONS (ultra-generalised), December 2023.
                  </p>

                  {/* Drivers Accordion */}
                  <details className="mt-3 text-xs text-[#404040]">
                    <summary className="font-semibold text-[#166F94] cursor-pointer hover:underline">
                      What drives the pattern —
                    </summary>
                    <div className="mt-2 space-y-2 text-xs text-[#404040] leading-relaxed">
                      <p>• <b className="text-[#1A1A1A]">Age.</b> PGSI 8+ runs 5.3% among 18–24s against 0.25% among over-75s (GSGB table D.4), so younger populations carry more harm before anything local is considered.</p>
                      <p>• <b className="text-[#1A1A1A]">Deprivation.</b> 5.9% at PGSI 8+ in England’s most deprived IMD quintile against 1.0% in the least, and 21% of premises sit in the most deprived decile against 2% in the least.</p>
                      <p>• <b className="text-[#1A1A1A]">Supply.</b> The {driversInfo.hiCount} authorities above the GB average average {driversInfo.avgDensHi} licensed premises per 100,000 against {driversInfo.gbDens} nationally. Supply is counted, not modelled, so this comparison is firmer than the prevalence bands themselves.</p>
                      <p>• <b className="text-[#1A1A1A]">What this is not.</b> These are population characteristics, not council failures. An authority appears in a higher band largely because of who lives there and what has been licensed near them.</p>
                    </div>
                  </details>
                </div>
              </div>

              {/* Bottom explanatory note */}
              <p className="text-xs text-[#404040] italic mt-4 pt-3 border-t border-[#E5E5E5] leading-relaxed">
                Read this as four groups, not 207 positions. Bands are set at 15% and 50% either side of the GB average, and an authority near a band edge could sit either side of it on a different survey draw. Authorities under roughly 100,000 people carry the widest uncertainty of all, and small-area estimates should not be presented to spurious precision (HNA v9.9). The one figure on this page that is counted rather than modelled is premises density, which is why it is reported separately and exactly.
              </p>
            </div>

            {/* CARD: Local supply map (Leaflet) */}
            {selectedLA && (
              <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs relative z-0 isolate" id="localmap-card">
                <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">
                  {isAdvanced && <span>6 · </span>}Local area profile: supply map, {selectedLA.n}
                </h2>
                <p className="text-[13px] text-[#404040] mb-3">
                  Every licensed gambling premises in {selectedLA.n} (Gambling Commission register, geocoded).
                </p>

                {/* Overlays Toggle */}
                <div className="flex flex-wrap gap-4 text-xs mb-3 items-center">
                  <label className="flex items-center gap-1.5 cursor-pointer text-[#1A1A1A]">
                    <input
                      type="checkbox"
                      checked={layerImd}
                      onChange={e => setLayerImd(e.target.checked)}
                      className="accent-[#166F94]"
                    />
                    Deprivation shading (IMD 2019)
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-[#1A1A1A]">
                    <input
                      type="checkbox"
                      checked={layerSch}
                      onChange={e => setLayerSch(e.target.checked)}
                      className="accent-[#166F94]"
                    />
                    Schools
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-[#1A1A1A]">
                    <input
                      type="checkbox"
                      checked={layerHos}
                      onChange={e => setLayerHos(e.target.checked)}
                      className="accent-[#166F94]"
                    />
                    Hospitals &amp; mental health
                  </label>
                  {ovStatus && <span className="text-[#0A4561] text-[11px] font-medium animate-pulse">{ovStatus}</span>}
                </div>

                {/* Leaflet Map Div */}
                <div
                  ref={mapContainerRef}
                  style={{ height: '400px', width: '100%' }}
                  className="border border-[#E5E5E5] rounded-lg overflow-hidden bg-[#FAFAFA] relative z-0 isolate"
                ></div>

                {/* Map Legend */}
                <div className="flex flex-wrap gap-3 mt-3 text-xs font-['IBM_Plex_Mono',monospace] text-[#404040]">
                  <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#166F94' }}></i>Betting shop</span>
                  <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#42A6CF' }}></i>Adult gaming centre</span>
                  <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#4A6A6E' }}></i>Bingo</span>
                  <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#1A1A1A' }}></i>Casino</span>
                  {layerSch && <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#8A9BA0' }}></i>School</span>}
                  {layerHos && <span className="flex items-center gap-1.5"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#0A4561' }}></i>Hospital</span>}
                </div>
              </div>
            )}

            {/* CARD: The Burden In Your Area */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">The burden in your area</h2>
              <div className="font-['IBM_Plex_Mono',monospace] text-xs text-[#404040] pb-2 mb-3 border-b border-[#E5E5E5]">
                Population: {fmtPop(calcResults.pop)} adults{selectedLA ? `, ${selectedLA.n}` : (calcResults.pop === 53529600 ? ', Great Britain (all 207 authorities)' : ', custom population')}
              </div>

              {/* Hero Stat */}
              <div className="py-2 pb-4 border-b border-[#1A1A1A]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-3xl sm:text-4xl text-[#0A4561] leading-tight">
                  {fmtPeople(calcResults.yld)}
                </div>
                <div className="text-[13px] text-[#404040] mt-1">
                  years of health and wellbeing lost to gambling harm each year, including people affected by someone else's gambling and children (HNA utility-decrement basis)
                </div>
                <div className="text-[11px] font-['IBM_Plex_Mono',monospace] text-[#404040] mt-2">
                  {surveyMode === 'gsgb'
                    ? `range ${round3sf(calcResults.yldCiLo).toLocaleString('en-GB')} – ${round3sf(calcResults.yldCiHi).toLocaleString('en-GB')} on GSGB 95% sampling intervals. Across the three surveys: ${calcResults.envLo.toLocaleString('en-GB')} – ${calcResults.envHi.toLocaleString('en-GB')}.`
                    : `Across the three surveys the same population gives ${calcResults.envLo.toLocaleString('en-GB')} – ${calcResults.envHi.toLocaleString('en-GB')}.`
                  }
                </div>
                {calcResults.pop > 0 && calcResults.pop < 100000 && (
                  <div className="mt-2 text-xs bg-[#FBF4E7] text-[#5C4210] p-2 rounded-md">
                    This population is below the ~100,000 reliability floor for small-area estimates. Treat this as an order of magnitude.
                  </div>
                )}
              </div>

              {/* Premises Density Stat */}
              <div className="py-3 border-b border-dashed border-[#E5E5E5]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#166F94]">
                  {selectedLA ? calcResults.dens.toFixed(1) : '11.7'}
                </div>
                <div className="text-[13px] text-[#404040] mt-0.5">
                  licensed gambling premises per 100,000 people {selectedLA ? `in ${selectedLA.n} (footfall-adjusted)` : 'across Great Britain'}. Counted from the Gambling Commission register, not modelled.
                </div>
              </div>

              {/* Treatment Gap Stat */}
              <div className="py-3 border-b border-dashed border-[#E5E5E5]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#0A4561]">
                  {fmtPeople(calcResults.n8 * 0.95)}
                </div>
                <div className="text-[13px] text-[#404040] mt-0.5">
                  adults at PGSI 8+ likely <em>not</em> in structured treatment (estimated ≈95% treatment gap).
                </div>
              </div>

              {/* Costs for Policy Use */}
              <div className="pt-3 border-t border-[#E5E5E5] text-[12.5px] text-[#404040] space-y-2">
                <div>
                  <strong className="font-['Hanken_Grotesk',sans-serif] uppercase tracking-wider text-xs text-[#1A1A1A]">Costs for policy use. </strong>
                  OHID's (2023) cost-of-illness scales to <strong className="font-['IBM_Plex_Mono',monospace] text-[#1A1A1A]">{fmtMoney(calcResults.ohidLo)}–{fmtMoney(calcResults.ohidHi)}/yr</strong>; full social-cost accounting (Browne et al., 2025) gives <strong className="font-['IBM_Plex_Mono',monospace] text-[#1A1A1A]">≈ {fmtMoney(calcResults.vicMid)}/yr</strong>.
                </div>

                <details className="text-xs">
                  <summary className="font-semibold text-[#166F94] cursor-pointer hover:underline">
                    Where the wider social costs fall
                  </summary>
                  <div className="mt-2 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md space-y-1">
                    {VIC_SH.map(([label, share]) => (
                      <div key={label} className="flex justify-between py-0.5">
                        <span>{label}</span>
                        <b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{fmtMoney(calcResults.vicMid * share)}</b>
                      </div>
                    ))}
                  </div>
                </details>
              </div>

              {/* Wellbeing Valuation */}
              <div className="pt-3 border-t border-dashed border-[#E5E5E5] mt-2">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-xl text-[#0A4561]">
                  ≈ {fmtMoney(calcResults.money)}
                </div>
                <div className="text-[13px] text-[#404040]">
                  societal <em>wellbeing valuation</em> (£{((calcResults.qalyK) * 1000).toLocaleString('en-GB')}/healthy year; HM Treasury Green Book framing).
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 space-y-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className={`w-full py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-lg text-white transition-colors cursor-pointer ${copySuccess ? 'bg-[#1A1A1A]' : 'bg-[#166F94] hover:bg-[#0A4561]'}`}
                >
                  {copySuccess ? 'Copied ✓' : 'Copy summary for your report'}
                </button>
                <button
                  type="button"
                  onClick={handlePrintPDF}
                  className="w-full py-3 px-4 font-bold text-xs uppercase tracking-wider rounded-lg text-white bg-[#1A1A1A] hover:bg-[#404040] transition-colors cursor-pointer"
                >
                  Download PDF report for this area
                </button>
              </div>
            </div>

            {/* CARD: Who it affects */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-3 text-[#1A1A1A]">Who it affects</h2>

              {/* Adults experiencing harm */}
              <div className="py-2 border-b border-[#E5E5E5]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#166F94]">
                  {fmtPeople(calcResults.n1plus)}
                </div>
                <div className="text-[13px] text-[#404040]">adults experiencing gambling harm (PGSI 1+)</div>

                <div className="mt-2 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md text-xs space-y-1">
                  <div className="font-semibold text-[#1A1A1A]">Estimated profile of adults at PGSI 8+</div>
                  <div className="flex justify-between"><span>Aged 18–34</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{Math.round(calcResults.profYoung)}% (vs {Math.round(calcResults.bands[0] + calcResults.bands[1])}%)</b></div>
                  <div className="flex justify-between"><span>Men</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{Math.round(calcResults.profMale)}% (vs {Math.round(male)}%)</b></div>
                  <div className="flex justify-between"><span>Minority ethnic groups</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{Math.round(calcResults.profEth)}% (vs {Math.round(eth)}%)</b></div>
                </div>
              </div>

              {/* Affected others */}
              <div className="py-3 border-b border-[#E5E5E5]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#0A4561]">
                  {fmtPeople(calcResults.nAo)}
                </div>
                <div className="text-[13px] text-[#404040]">adults affected by someone else's gambling</div>

                <div className="mt-2 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-md text-xs space-y-1">
                  <div className="font-semibold text-[#1A1A1A]">Whose gambling harms them</div>
                  <div className="flex justify-between"><span>Someone at PGSI 8+</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{round3sf(calcResults.nAo8).toLocaleString('en-GB')} people · {round3sf(calcResults.yldAo8).toLocaleString('en-GB')} yrs</b></div>
                  <div className="flex justify-between"><span>Someone at PGSI 3–7</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{round3sf(calcResults.nAo37).toLocaleString('en-GB')} people · {round3sf(calcResults.yldAo * (calcResults.shPct[1] / 100)).toLocaleString('en-GB')} yrs</b></div>
                  <div className="flex justify-between"><span>Someone at PGSI 1–2</span><b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">{round3sf(calcResults.nAo12).toLocaleString('en-GB')} people</b></div>
                  <div className="pt-1 text-[11px] text-[#404040] italic">
                    {calcResults.aoShare8}% of the health burden on family and friends traces to severe gambling (PGSI 8+).
                  </div>
                </div>
              </div>

              {/* Stacked Burden Share Bar */}
              <div className="pt-3">
                <div className="text-[13px] font-semibold mb-2 text-[#1A1A1A]">Where the health burden sits</div>
                <div className="flex h-5.5 rounded-md overflow-hidden border border-[#E5E5E5]">
                  <div style={{ width: `${calcResults.shLow * 100}%`, background: '#CFF1FF' }}></div>
                  <div style={{ width: `${calcResults.shMod * 100}%`, background: '#2989B0' }}></div>
                  <div style={{ width: `${calcResults.shHigh * 100}%`, background: '#0A4561' }}></div>
                  <div style={{ width: `${calcResults.shAo * 100}%`, background: '#7E9296' }}></div>
                  <div style={{ width: `${calcResults.shKids * 100}%`, background: '#C8D2D4' }}></div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2 text-xs font-['IBM_Plex_Mono',monospace] text-[#404040]">
                  <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#CFF1FF' }}></i>PGSI 1–2 <b>{calcResults.shPct[0]}%</b></span>
                  <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#2989B0' }}></i>PGSI 3–7 <b>{calcResults.shPct[1]}%</b></span>
                  <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#0A4561' }}></i>PGSI 8+ <b>{calcResults.shPct[2]}%</b></span>
                  <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#7E9296' }}></i>Family &amp; friends <b>{calcResults.shPct[3]}%</b></span>
                  <span className="flex items-center gap-1"><i className="w-2.5 h-2.5 rounded-xs" style={{ background: '#C8D2D4' }}></i>Children <b>{calcResults.shPct[4]}%</b></span>
                </div>

                <p className="text-xs text-[#404040] mt-2 italic">
                  {calcResults.outsideSevere > 50
                    ? `${calcResults.outsideSevere}% of the health burden sits outside the most severe category. Counting only PGSI 8+ misses most of the harm.`
                    : 'Most of the health burden sits in the most severe category.'
                  }
                </p>
              </div>
            </div>

            {/* CARD: Children in this area */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-2 text-[#1A1A1A]">Children in this area</h2>
              <div className="py-2 border-b border-[#E5E5E5]">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#166F94]">
                  {fmtPeople(calcResults.nKids)}
                </div>
                <div className="text-[13px] text-[#404040]">
                  children estimated to live with an adult who may benefit from gambling treatment or support (OHID headcount rate, scaled)
                </div>
              </div>

              <div className="py-2">
                <div className="font-['IBM_Plex_Mono',monospace] font-semibold text-2xl text-[#0A4561]">
                  {fmtPeople(calcResults.yldKids)}
                </div>
                <div className="text-[13px] text-[#404040]">
                  healthy years lost by those children each year on the HNA proxy method
                </div>
              </div>

              <div className="border-l-3 border-[#4A6A6E] bg-[#FBF4E7] p-3 rounded-r-lg text-xs text-[#5C4210] mt-2">
                <strong>Use OHID's own figure for your area if you can.</strong> OHID publishes a per-authority figure in the 2023 workbook. Where the two differ, cite OHID's.
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Survey Picker, Assumptions, Scenarios, Audit */}
          <aside className="space-y-5 lg:sticky lg:top-28 self-start">

            {/* CARD: 2 · Which survey do you want to count on? */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">
                {isAdvanced && <span>2 · </span>}Which survey do you want to count on?
              </h2>
              <p className="text-[13px] text-[#404040] mb-3 leading-relaxed">
                Three UK surveys measure gambling harm and disagree by about five times at the severe end.
              </p>

              {/* Radio Group */}
              <div className="space-y-2">
                <div className="grid grid-cols-[16px_minmax(0,1fr)_48px_48px_minmax(0,105px)] gap-2 text-[10.5px] uppercase tracking-wider text-[#404040] font-semibold px-3 pb-0.5">
                  <span></span>
                  <span>Survey</span>
                  <span className="text-right">PGSI 1+</span>
                  <span className="text-right">PGSI 8+</span>
                  <span className="text-right">How it was asked</span>
                </div>
                {Object.entries(SURVEYS).map(([key, s]) => {
                  const isChecked = surveyMode === key;
                  return (
                    <label
                      key={key}
                      className={`grid grid-cols-[16px_minmax(0,1fr)_48px_48px_minmax(0,105px)] gap-2 items-center p-3 rounded-lg text-xs border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-[#166F94] bg-[#E5F4FB] font-semibold text-[#1A1A1A] shadow-xs'
                          : 'border-[#E5E5E5] bg-white text-[#404040] hover:border-[#42A6CF]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="survey-picker"
                        checked={isChecked}
                        onChange={() => applySurvey(key)}
                        className="w-4 h-4 accent-[#166F94] cursor-pointer"
                      />
                      <span className="font-medium text-[#1A1A1A]">
                        {s.name} {key === 'gsgb' && <span title="GHUK recommended default" className="text-[#166F94]">★</span>}
                      </span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-right text-[#1A1A1A] font-semibold">{s.p1plus}</span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-right text-[#1A1A1A] font-semibold">{s.p8plus}</span>
                      <span className="text-[11px] text-[#404040] text-right font-normal leading-tight">{s.method}</span>
                    </label>
                  );
                })}
              </div>

              <p className="text-xs text-[#404040] mt-3 italic leading-relaxed">
                {surveyMode === 'custom'
                  ? 'Custom prevalence selected (one or more bands have been set by hand).'
                  : (SURVEYS[surveyMode]?.note || '')}
              </p>

              <details className="mt-3 text-xs text-[#404040]">
                <summary className="font-semibold text-[#166F94] cursor-pointer hover:underline">
                  Why the three disagree, and which to pick
                </summary>
                <div className="mt-2 space-y-2 text-xs text-[#404040] leading-relaxed">
                  <p>
                    It is how the question was asked, not a change in the population. People disclose more gambling to a screen than to an interviewer, a mode effect of roughly four percentage points. The Gambling Commission cautions that push-to-web GSGB must not be compared with older telephone or face-to-face surveys. The independent Sturgis review (2024) found a non-negligible risk that GSGB <em>overstates</em> harm through topic-interest non-response, while noting that older interviewer-based surveys probably <em>under</em>-counted it.
                  </p>
                  <p>
                    So the honest reading is that the true figure sits somewhere inside this envelope, not that one survey is right. <b className="text-[#1A1A1A]">GSGB if you want the official statistic</b> and consistency with the GHUK Health Needs Assessment. <b className="text-[#1A1A1A]">APMS if you need a floor</b> no one can call inflated. <b className="text-[#1A1A1A]">BGPS if you are answering someone quoting the old face-to-face series</b> back at you.
                  </p>
                  <p>
                    Burden is counted from <b className="text-[#1A1A1A]">PGSI 1+</b> on every basis: harm does not begin at a clinical threshold. Health Survey for England is not offered, because HNA v9.9 uses it as a wellbeing signal rather than a prevalence basis.
                  </p>
                </div>
              </details>
            </div>

            {/* CARD (Advanced Only): 3 · Prevalence detail and local variation */}
            {isAdvanced && (
              <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
                <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">3 · Prevalence detail &amp; local variation</h2>
                <div className="flex border-[1.5px] border-[#1A1A1A] rounded-lg overflow-hidden my-3">
                  {[
                    { k: 'blend', l: 'Blended ★' },
                    { k: 'ga', l: 'Survey (MRP)' },
                    { k: 'model', l: 'Structural' }
                  ].map(b => (
                    <button
                      key={b.k}
                      type="button"
                      onClick={() => setBasisMode(b.k)}
                      className={`flex-1 py-2 font-bold text-xs uppercase transition-colors ${basisMode === b.k ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#404040] hover:text-[#166F94]'}`}
                    >
                      {b.l}
                    </button>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  {/* Slider PGSI 1-2 */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-xs">PGSI 1–2 (Low severity)</span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">{p12.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range" min="0" max="20" step="0.1" value={p12}
                      onChange={e => { setP12(parseFloat(e.target.value)); setSurveyMode('custom'); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                  </div>

                  {/* Slider PGSI 3-7 */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-xs">PGSI 3–7 (Moderate severity)</span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">{p37.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range" min="0" max="10" step="0.1" value={p37}
                      onChange={e => { setP37(parseFloat(e.target.value)); setSurveyMode('custom'); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                  </div>

                  {/* Slider PGSI 8+ */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-xs">PGSI 8+ (Severe harm)</span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">{p8.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range" min="0" max="6" step="0.1" value={p8}
                      onChange={e => { setP8(parseFloat(e.target.value)); setSurveyMode('custom'); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                  </div>

                  {/* Slider Affected Others */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-semibold text-xs">Adults affected by someone else</span>
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">{ao.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range" min="0" max="20" step="0.5" value={ao}
                      onChange={e => { setAo(parseFloat(e.target.value)); setSurveyMode('custom'); }}
                      className="w-full accent-[#166F94] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CARD (Advanced Only): 4 · Health Disutility */}
            {isAdvanced && (
              <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
                <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">4 · Health disutility (Moayeri 2020)</h2>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="p-2 border border-[#E5E5E5] rounded-md">
                    <span className="text-[11px] block font-semibold">PGSI 1–2</span>
                    <input
                      type="number" step="0.001" value={dw12}
                      onChange={e => { setDw12(parseFloat(e.target.value) || 0); markCustomScen(); }}
                      className="w-full text-center font-['IBM_Plex_Mono',monospace] text-sm font-semibold p-1 border rounded"
                    />
                  </div>
                  <div className="p-2 border border-[#E5E5E5] rounded-md">
                    <span className="text-[11px] block font-semibold">PGSI 3–7</span>
                    <input
                      type="number" step="0.001" value={dw37}
                      onChange={e => { setDw37(parseFloat(e.target.value) || 0); markCustomScen(); }}
                      className="w-full text-center font-['IBM_Plex_Mono',monospace] text-sm font-semibold p-1 border rounded"
                    />
                  </div>
                  <div className="p-2 border border-[#E5E5E5] rounded-md">
                    <span className="text-[11px] block font-semibold">PGSI 8+</span>
                    <input
                      type="number" step="0.001" value={dw8}
                      onChange={e => { setDw8(parseFloat(e.target.value) || 0); markCustomScen(); }}
                      className="w-full text-center font-['IBM_Plex_Mono',monospace] text-sm font-semibold p-1 border rounded"
                    />
                  </div>
                </div>

                {/* Attribution Slider */}
                <div className="mt-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-xs">Causal attribution of weights</span>
                    <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">{af.toFixed(2)}</span>
                  </div>
                  <input
                    type="range" min="0.2" max="1" step="0.05" value={af}
                    onChange={e => { setAf(parseFloat(e.target.value)); markCustomScen(); }}
                    className="w-full accent-[#166F94] cursor-pointer"
                  />
                </div>

                {/* QALY Valuation */}
                <div className="mt-3">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-xs">Value of a healthy life-year</span>
                    <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold text-[#166F94]">£{qalyK}k</span>
                  </div>
                  <input
                    type="range" min="0" max="100" step="5" value={qalyK}
                    onChange={e => setQalyK(parseInt(e.target.value, 10))}
                    className="w-full accent-[#166F94] cursor-pointer"
                  />
                </div>

                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-3 text-xs text-[#166F94] underline hover:text-[#0A4561] cursor-pointer block text-right w-full"
                >
                  Reset all to evidence defaults
                </button>
              </div>
            )}

            {/* CARD (Advanced Only): 5 · Scenarios & Sensitivity (Tornado) */}
            {isAdvanced && (
              <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
                <h2 className="font-bold text-sm tracking-wider uppercase mb-1 text-[#1A1A1A]">5 · Scenarios &amp; sensitivity</h2>
                <div className="flex border-[1.5px] border-[#1A1A1A] rounded-lg overflow-hidden my-3">
                  {[
                    { k: 'mid', l: 'Central ★' },
                    { k: 'moa', l: 'Adjusted' },
                    { k: 'ao30', l: '30% Floor' }
                  ].map(b => (
                    <button
                      key={b.k}
                      type="button"
                      onClick={() => applyScen(b.k)}
                      className={`flex-1 py-2 font-bold text-xs uppercase transition-colors ${activeScen === b.k ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#404040] hover:text-[#166F94]'}`}
                    >
                      {b.l}
                    </button>
                  ))}
                </div>

                {/* Tornado diagram */}
                <div className="space-y-3 mt-4">
                  <div className="text-xs font-semibold text-[#1A1A1A]">One-way sensitivity of total wellbeing-years</div>
                  {tornadoItems.map((it, idx) => {
                    const l = Math.min(it.lo, it.hi), r = Math.max(it.lo, it.hi);
                    const left = 50 + (l - calcResults.yld) / maxDev * 48;
                    const width = (r - l) / maxDev * 48;
                    return (
                      <div key={idx} className="text-xs space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-[#404040] truncate max-w-[240px]">{it.l}</span>
                          <b className="font-['IBM_Plex_Mono',monospace] text-[#0A4561]">±{round3sf(it.swing / 2).toLocaleString('en-GB')}</b>
                        </div>
                        <div className="relative h-3.5 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xs">
                          <div
                            className="absolute top-0 bottom-0 bg-gradient-to-r from-[#B4707D] to-[#0A4561] rounded-xs"
                            style={{ left: `${Math.max(0, left)}%`, width: `${Math.max(width, 1)}%` }}
                          ></div>
                          <div className="absolute top-[-2px] bottom-[-2px] w-[2px] bg-[#1A1A1A] left-1/2"></div>
                        </div>
                        <div className="text-[10px] font-['IBM_Plex_Mono',monospace] text-[#404040]">
                          {round3sf(l).toLocaleString('en-GB')} – {round3sf(r).toLocaleString('en-GB')} yrs
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CARD: Methodology & Audit */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-2 text-[#1A1A1A]">Methodology &amp; audit</h2>
              <p className="text-xs text-[#404040] leading-relaxed">
                Every estimate on this page is built from named official statistics and peer-reviewed evidence: GSGB 2024 (Gambling Commission) for prevalence and gradients; GambleAware–YouGov MRP local profiles (OCSI, 2024); ONS populations, Census 2021, IMD 2019 and the Gambling Commission premises register for local structure; Moayeri (2020) for the health-utility decrements the burden figures are built on; BGPS 2010 and APMS 2023/24 as alternative prevalence bases; OHID (2023) and Browne, Tulloch et al. (2025) for costs. The full model specification, parameter audit table with robustness ratings, data provenance, limitations and citation guidance are on the <a href="/methodology" className="text-[#166F94] font-semibold hover:underline">methodology &amp; audit page</a>.
              </p>
              <p className="text-xs text-[#404040] mt-3 leading-relaxed">
                Estimates are <b>ecological</b>: they describe expected burden in a population given its structure and survey signal. They do not identify individuals, and area-level associations must not be read as individual-level risk.
              </p>
              <p className="text-[11.5px] text-[#404040] mt-3 pt-3 border-t border-[#E5E5E5] font-['IBM_Plex_Mono',monospace] leading-relaxed">
                Model v2.6 (presentation revision, 12 July 2026; all default parameters frozen as v2.5, 11 July 2026). Data vintages: GSGB 2024 · ONS mid-2023 populations · Census 2021 ethnicity · IMD 2019 · GambleAware/OCSI MRP profiles 2024 · Gambling Commission premises register July 2026 · ONS boundaries Dec 2023 · BRES jobs.
              </p>
            </div>

            {/* CARD: Act Locally: Precedents */}
            <div className="bg-white border border-[#E5E5E5] rounded-[10px] p-5 shadow-xs">
              <h2 className="font-bold text-sm tracking-wider uppercase mb-2 text-[#1A1A1A]">Act locally: precedents</h2>
              <p className="text-xs text-[#404040] mb-3 leading-relaxed">
                Councils that have already put gambling harm into strategic and licensing documents, precedents for your own JSNA chapter, statement of licensing principles or needs assessment:
              </p>
              <div className="text-xs text-[#404040] space-y-2 leading-relaxed">
                <p>
                  <b className="text-[#1A1A1A]">Westminster</b>, Gambling Vulnerability Zones and an interactive local area profile in its <a href="https://www.westminster.gov.uk/licensing/licensing-policy-and-strategy/statement-principles-gambling-westminster" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">statement of principles</a>.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Newham</b>, <a href="https://www.newham.gov.uk/downloads/file/5161/current-gambling-a4-v2-online-2022-policy" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">gambling policy</a> plus a Local Plan cumulative-impact approach limiting betting-shop clustering (400m rule) since 2016.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Sheffield</b>, gambling harms chapter in the JSNA, alongside alcohol and drugs.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Brent</b>, dedicated <a href="https://data.brent.gov.uk/download/20d1j/698/JSNA_Gambling_AV.pdf" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">JSNA on gambling</a>.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Brighton &amp; Hove</b>, <a href="https://www.brighton-hove.gov.uk/joint-strategic-needs-assessment-jsna/area-profiles/local-area-profile-assessing-gambling-related-harm-2024" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">local area profile for assessing gambling-related harm (2024)</a> within the JSNA.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Leeds</b>, <a href="https://www.leeds.gov.uk/licensing/licensing-policies/statement-of-licensing-policy" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">statement of licensing policy (2025)</a> with a cumulative impact assessment approved January 2026.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Swindon</b>, rapid health needs assessment on the scale and costs of gambling harms.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Greater Manchester Combined Authority</b>, <a href="https://www.gamblingcommission.gov.uk/news/article/spotlight-on-innovative-local-public-health-approaches-to-reducing-gambling" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">strategic needs assessment (2022)</a> and a whole-system harm-reduction programme.
                </p>
                <p>
                  <b className="text-[#1A1A1A]">Hertfordshire</b>, <a href="https://www.hertshealthevidence.org/microsites/jsna/jsna-documents/gambling-related-harms-jsna-briefing-2022.pdf" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">JSNA briefing on gambling-related harms (2022)</a> and a county gambling harms strategy.
                </p>
              </div>
              <p className="text-xs text-[#404040] italic mt-3 pt-2.5 border-t border-[#E5E5E5] leading-relaxed">
                See also the LGA’s <a href="https://www.local.gov.uk/publications/tackling-gambling-related-harm-whole-council-approach" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">whole-council approach</a> guidance and the Gambling Commission’s <a href="https://www.gamblingcommission.gov.uk/authorities/guide/reducing-gambling-harms-resources" target="_blank" rel="noreferrer" className="text-[#166F94] underline hover:text-[#0A4561]">reducing gambling harms resources</a>.
              </p>
            </div>

            {/* Caution language note */}
            <div className="border-l-4 border-[#0A4561] bg-[#FBF4E7] p-4 rounded-r-lg text-xs text-[#1A1A1A] leading-relaxed shadow-xs">
              <b className="font-bold text-[#1A1A1A]">Language note.</b> This tool describes people experiencing gambling harm and populations placed at risk, it does not use "problem gambler" framing. Harm is produced by products, environments and industry practices, not by a category of person. PGSI labels are retained only to reference source statistics.
            </div>
          </aside>
        </main>
      </div>

      {/* Embedded Print CSS for exact 1-Page PDF Download */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm 10mm;
          }
          html, body {
            background: #ffffff !important;
            color: #1A1A1A !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Hide the entire website header, footer, navigation and interactive app */
          header, footer, nav, #header, #footer, .navbar, .site-header, .site-footer,
          .burden-mapping-page > div:not(#print-report),
          .burden-mapping-page > section,
          .burden-mapping-page > main {
            display: none !important;
          }
          .burden-mapping-page {
            background: #ffffff !important;
            padding: 0 !important;
            margin: 0 !important;
            min-height: auto !important;
          }
          #print-report {
            display: block !important;
            visibility: visible !important;
            position: relative !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            padding: 0 !important;
            background: #ffffff !important;
            color: #1A1A1A !important;
            font-family: 'Hanken Grotesk', system-ui, -apple-system, sans-serif !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          #print-report .pr-eyebrow {
            font-family: 'IBM Plex Mono', monospace !important;
            font-size: 10px !important;
            letter-spacing: .14em !important;
            color: #166F94 !important;
            font-weight: 700 !important;
            margin-bottom: 3px !important;
            text-transform: uppercase !important;
          }
          #print-report h1 {
            font-family: 'Hanken Grotesk', sans-serif !important;
            font-size: 20px !important;
            font-weight: 800 !important;
            letter-spacing: -.01em !important;
            margin: 0 0 2px 0 !important;
            line-height: 1.15 !important;
            color: #1A1A1A !important;
          }
          #print-report .pr-meta {
            font-family: 'IBM Plex Mono', monospace !important;
            font-size: 9.5px !important;
            color: #404040 !important;
            margin-bottom: 8px !important;
            line-height: 1.35 !important;
          }
          #print-report .pr-sec {
            margin: 8px 0 2px !important;
            font-family: 'Hanken Grotesk', sans-serif !important;
            font-weight: 800 !important;
            font-size: 10.5px !important;
            letter-spacing: .04em !important;
            text-transform: uppercase !important;
            border-bottom: 1.5px solid #1A1A1A !important;
            padding-bottom: 2px !important;
            color: #1A1A1A !important;
          }
          #print-report .pr-row {
            display: flex !important;
            justify-content: space-between !important;
            gap: 8px !important;
            font-size: 11px !important;
            padding: 2.5px 0 !important;
            border-bottom: 1px solid #E5E5E5 !important;
            line-height: 1.25 !important;
          }
          #print-report .pr-row span {
            color: #1A1A1A !important;
          }
          #print-report .pr-row b {
            font-family: 'IBM Plex Mono', monospace !important;
            white-space: nowrap !important;
            font-weight: 700 !important;
            color: #1A1A1A !important;
          }
          #print-report .pr-note {
            font-size: 9.5px !important;
            color: #404040 !important;
            margin-top: 4px !important;
            line-height: 1.35 !important;
            text-align: justify !important;
          }
          #print-report .pr-foot {
            margin-top: 10px !important;
            padding-top: 6px !important;
            border-top: 1px solid #E5E5E5 !important;
            font-size: 8.5px !important;
            color: #666666 !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>

      {/* 1-Page PDF Report Container (Hidden on screen, exactly 1 sheet on print) */}
      <div id="print-report" className="hidden" aria-hidden="true">
        <div className="pr-eyebrow">
          GAMBLING HARM UK · LOCAL SYSTEMS TOOLKIT
        </div>
        <h1>
          Gambling harm burden estimate, {selectedLA ? selectedLA.n : 'Custom population'}
        </h1>
        <div className="pr-meta">
          Adult population {fmtPop(calcResults.pop)} · generated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · scenario: {activeScen === 'custom' ? 'custom' : activeScen === 'moa' ? 'Adjusted weights (Moayeri 2020 / GHS-AO)' : activeScen === 'ao30' ? 'Family-side 30% transfer floor' : 'Central (published defaults)'} · prevalence: {surveyMode === 'custom' ? 'custom bands' : SURVEYS[surveyMode].name} · basis: {basisMode === 'ga' ? 'survey (MRP)' : basisMode === 'blend' ? 'blended (default)' : 'structural'}
        </div>

        <div className="pr-sec">HEADLINE BURDEN</div>
        <div className="pr-row">
          <span>Years of health and wellbeing lost annually (HNA utility-decrement basis), incl. family, friends and children</span>
          <b>≈ {round3sf(calcResults.yld).toLocaleString('en-GB')}</b>
        </div>
        <div className="pr-row">
          <span>OHID (2023) cost-of-illness (policy-use reference)</span>
          <b>{fmtMoney(calcResults.ohidLo)}–{fmtMoney(calcResults.ohidHi)}/yr</b>
        </div>
        <div className="pr-row">
          <span>Full social-cost accounting (Browne, Tulloch et al. 2025 transfer; non-additive)</span>
          <b>≈ {fmtMoney(calcResults.vicMid)}/yr</b>
        </div>
        <div className="pr-row">
          <span>Sensitivity: societal wellbeing valuation (£{(calcResults.qalyK * 1000).toLocaleString('en-GB')}/healthy yr; upper-envelope framing, not a cashflow cost)</span>
          <b>≈ {fmtMoney(calcResults.money)}/yr</b>
        </div>

        <div className="pr-sec">WHO IS AFFECTED</div>
        <div className="pr-row">
          <span>Adults experiencing gambling harm (PGSI 1+)</span>
          <b>≈ {round3sf(calcResults.n1plus).toLocaleString('en-GB')}</b>
        </div>
        <div className="pr-row">
          <span>,  of whom PGSI 8+ (severe)</span>
          <b>{round3sf(calcResults.n8).toLocaleString('en-GB')} ({calcResults.p8e.toFixed(1)}%)</b>
        </div>
        <div className="pr-row">
          <span>,  PGSI 3–7</span>
          <b>{round3sf(calcResults.n37).toLocaleString('en-GB')} ({calcResults.p37e.toFixed(1)}%)</b>
        </div>
        <div className="pr-row">
          <span>,  PGSI 1–2</span>
          <b>{round3sf(calcResults.n12).toLocaleString('en-GB')} ({calcResults.p12e.toFixed(1)}%)</b>
        </div>
        <div className="pr-row">
          <span>Adults affected by someone else's gambling (children additional, uncounted)</span>
          <b>≈ {round3sf(calcResults.nAo).toLocaleString('en-GB')}</b>
        </div>
        <div className="pr-row">
          <span>Adults at PGSI 8+ likely not receiving structured treatment (≈95% gap)</span>
          <b>≈ {round3sf(calcResults.n8 * 0.95).toLocaleString('en-GB')}</b>
        </div>

        {selectedLA && (
          <>
            <div className="pr-sec">LOCAL AREA PROFILE EVIDENCE, LICENSED PREMISES (GAMBLING COMMISSION REGISTER, JULY 2026)</div>
            {PREM_LABELS.map((l, i) => (
              <div key={l} className="pr-row">
                <span>{l}</span>
                <b>{selectedLA.g[i]}</b>
              </div>
            ))}
            <div className="pr-row">
              <span>Footfall-adjusted density (GB baseline 11.7 per 100k)</span>
              <b>{(selectedLA.g.reduce((a, b) => a + b, 0) / expPop(selectedLA) * 1e5).toFixed(1)}/100k</b>
            </div>
          </>
        )}

        <div className="pr-sec">METHOD IN ONE PARAGRAPH</div>
        <div className="pr-note">
          Burden = population × prevalence × health disutility, counted from PGSI 1+ and including family and friends. Prevalence: GSGB 2024 ({calcResults.p12}/{calcResults.p37}/{calcResults.p8}% by category), locally adjusted ×{calcResults.adj8.toFixed(2)} at PGSI 8+ under the {basisMode === 'ga' ? 'survey (MRP)' : basisMode === 'blend' ? 'blended' : 'structural'} basis{calcResults.ceilHit ? '; 25% PGSI 1+ ceiling binding (categories rescaled)' : ''}. Disability weights: Moayeri (2020) basis ({calcResults.dw12}/{calcResults.dw37}/{calcResults.dw8}; family and friends {calcResults.dwao12}/{calcResults.dwao37}/{calcResults.dwao8} by source severity; directly elicited disability weights are not used in this tool). Causal-attribution factor {calcResults.af.toFixed(2)} applied to all weights. Prevalence basis: {surveyMode === 'custom' ? 'custom hand-set bands' : SURVEYS[surveyMode].name}. Any sampling range shown reflects GSGB intervals only; full uncertainty spans the scenario envelope. “Years of health and wellbeing lost” uses the Moayeri (2020) utility-decrement basis and is not comparable to GBD YLD. Deprivation is modelled for English authorities (GSGB D.8 × IMD 2019); online gambling has no local supply term; estimates are ecological.
        </div>

        <div className="pr-foot">
          Gambling Harm UK Burden Calculator v2.6 (defaults frozen as v2.5, 11 July 2026); registered charity 1196530. Estimates are ecological population-level planning figures, not individual-level risk or surveillance counts. Children are counted via the OHID proxy method (see methods); online gambling has no local supply term. Full methodology, parameter audit and citation guidance: the calculator's methodology & audit page.
        </div>
      </div>
    </div>
  );
}
