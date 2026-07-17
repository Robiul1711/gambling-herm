import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Accessibility, 
  Volume2, 
  VolumeX, 
  Type, 
  Ruler, 
  RotateCcw, 
  X,
  Heading,
  Eye,
  Link2,
  Sparkles,
  ChevronRight,
  Focus
} from "lucide-react";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Accessibility settings state
  const [fontSize, setFontSize] = useState("normal"); // 'normal' | 'large' | 'xl'
  const [fontFamily, setFontFamily] = useState("default"); // 'default' | 'readable' | 'dyslexic'
  const [theme, setTheme] = useState("default"); // 'default' | 'dark' | 'monochrome' | 'yellow-black' | 'invert'
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightFocus, setHighlightFocus] = useState(false);
  const [readingRuler, setReadingRuler] = useState(false);
  const [readingMask, setReadingMask] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);

  // Cursor height tracking for ruler/mask
  const [mouseY, setMouseY] = useState(0);

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("ghuk_accessibility_settings");
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        if (parsed.fontSize) setFontSize(parsed.fontSize);
        if (parsed.fontFamily) setFontFamily(parsed.fontFamily);
        if (parsed.theme) setTheme(parsed.theme);
        if (parsed.highlightLinks !== undefined) setHighlightLinks(parsed.highlightLinks);
        if (parsed.highlightFocus !== undefined) setHighlightFocus(parsed.highlightFocus);
        if (parsed.readingRuler !== undefined) setReadingRuler(parsed.readingRuler);
        if (parsed.readingMask !== undefined) setReadingMask(parsed.readingMask);
        if (parsed.textToSpeech !== undefined) setTextToSpeech(parsed.textToSpeech);
      }
    } catch (e) {
      console.error("Error loading accessibility settings", e);
    }
  }, []);

  // Save settings on change
  const saveSettings = (updated) => {
    localStorage.setItem(
      "ghuk_accessibility_settings",
      JSON.stringify({
        fontSize,
        fontFamily,
        theme,
        highlightLinks,
        highlightFocus,
        readingRuler,
        readingMask,
        textToSpeech,
        ...updated
      })
    );
  };

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // 1. Color Themes
    root.classList.remove("dark");
    body.classList.remove("accessibility-grayscale", "accessibility-invert", "accessibility-yellow-black");

    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "monochrome") {
      body.classList.add("accessibility-grayscale");
    } else if (theme === "invert") {
      body.classList.add("accessibility-invert");
    } else if (theme === "yellow-black") {
      body.classList.add("accessibility-yellow-black");
    }

    // 2. Font Sizing
    root.classList.remove("accessibility-text-lg", "accessibility-text-xl");
    if (fontSize === "large") {
      root.classList.add("accessibility-text-lg");
    } else if (fontSize === "xl") {
      root.classList.add("accessibility-text-xl");
    }

    // 3. Font Style
    body.classList.remove("accessibility-font-readable", "accessibility-font-dyslexic");
    if (fontFamily === "readable") {
      body.classList.add("accessibility-font-readable");
    } else if (fontFamily === "dyslexic") {
      body.classList.add("accessibility-font-dyslexic");
    }

    // 4. Visual Overlays/Helpers
    if (highlightLinks) {
      body.classList.add("accessibility-highlight-links");
    } else {
      body.classList.remove("accessibility-highlight-links");
    }

    if (highlightFocus) {
      body.classList.add("accessibility-highlight-focus");
    } else {
      body.classList.remove("accessibility-highlight-focus");
    }
  }, [theme, fontSize, fontFamily, highlightLinks, highlightFocus]);

  // Track cursor position for reading ruler and screen mask
  useEffect(() => {
    if (!readingRuler && !readingMask) return;

    const handleMouseMove = (e) => {
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [readingRuler, readingMask]);

  // Text to Speech click-to-speak logic
  useEffect(() => {
    if (!textToSpeech) {
      window.speechSynthesis?.cancel();
      return;
    }

    const handleTextClick = (e) => {
      // Find the closest text-containing element
      const element = e.target.closest("p, h1, h2, h3, h4, h5, h6, li, span, a, button");
      if (!element) return;

      // Prevent triggers on clicking widget buttons
      if (element.closest(".accessibility-no-tts")) return;

      const text = element.innerText || element.textContent;
      if (text) {
        window.speechSynthesis?.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        window.speechSynthesis?.speak(utterance);
      }
    };

    document.addEventListener("click", handleTextClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleTextClick, { capture: true });
      window.speechSynthesis?.cancel();
    };
  }, [textToSpeech]);

  // Reset all settings
  const handleReset = () => {
    setFontSize("normal");
    setFontFamily("default");
    setTheme("default");
    setHighlightLinks(false);
    setHighlightFocus(false);
    setReadingRuler(false);
    setReadingMask(false);
    setTextToSpeech(false);

    localStorage.removeItem("ghuk_accessibility_settings");

    const root = document.documentElement;
    const body = document.body;
    root.classList.remove("dark", "accessibility-text-lg", "accessibility-text-xl");
    body.classList.remove(
      "accessibility-grayscale", 
      "accessibility-invert", 
      "accessibility-yellow-black",
      "accessibility-font-readable",
      "accessibility-font-dyslexic",
      "accessibility-highlight-links",
      "accessibility-highlight-focus"
    );
    window.speechSynthesis?.cancel();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open accessibility settings panel"
        aria-expanded={isOpen}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[999] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#156E94] hover:bg-[#0092D0] text-white rounded-full shadow-lg shadow-[#156E94]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0092D0] focus-visible:ring-offset-2 transition-all duration-200 accessibility-no-tts"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Accessibility className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-16 sm:bottom-20 left-4 sm:left-6 z-[999] w-[calc(100vw-32px)] sm:w-96 max-h-[80vh] overflow-y-auto accessibility-no-tts rounded-2xl border border-white/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl p-6 text-slate-800 dark:text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-[#156E94] dark:text-[#0092D0]" />
                  Accessibility Settings
                </h2>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  Adjust options for your comfort (WCAG 2.2 AA)
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close accessibility settings panel"
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Settings Body */}
            <div className="py-4 space-y-6">
              
              {/* Text to Speech Mode */}
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center justify-between">
                  <span>Text-To-Speech (Read Aloud)</span>
                  {textToSpeech ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded">Active</span>
                  ) : null}
                </label>
                <button
                  onClick={() => {
                    setTextToSpeech(!textToSpeech);
                    saveSettings({ textToSpeech: !textToSpeech });
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl border flex items-center justify-between text-left transition-all ${
                    textToSpeech 
                      ? "border-[#156E94] bg-[#156E94]/5 dark:bg-[#156E94]/10 text-[#156E94] dark:text-[#0092D0] font-medium" 
                      : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm">
                    {textToSpeech ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                    {textToSpeech ? "Click elements to listen" : "Enable Click-to-Speech"}
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-55" />
                </button>
                {textToSpeech && (
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 italic">
                    ℹ️ Click on any text, heading, or link on the page to hear it read.
                  </p>
                )}
              </div>

              {/* Font Size Adjuster */}
              <div className="space-y-2">
                <span className="text-sm font-semibold flex items-center gap-1.5">
                  <Type className="w-4 h-4" /> Text Size
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "normal", label: "Default" },
                    { id: "large", label: "Large" },
                    { id: "xl", label: "X-Large" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setFontSize(item.id);
                        saveSettings({ fontSize: item.id });
                      }}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        fontSize === item.id
                          ? "border-[#156E94] bg-[#156E94] text-white shadow-sm shadow-[#156E94]/20"
                          : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Style Adjuster */}
              <div className="space-y-2">
                <span className="text-sm font-semibold flex items-center gap-1.5">
                  <Heading className="w-4 h-4" /> Font Profile
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "default", label: "Default" },
                    { id: "readable", label: "Readable" },
                    { id: "dyslexic", label: "Dyslexia" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setFontFamily(item.id);
                        saveSettings({ fontFamily: item.id });
                      }}
                      className={`py-2 px-2.5 rounded-xl border text-[11px] font-semibold transition-all ${
                        fontFamily === item.id
                          ? "border-[#156E94] bg-[#156E94] text-white shadow-sm shadow-[#156E94]/20"
                          : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Themes */}
              <div className="space-y-2">
                <span className="text-sm font-semibold flex items-center gap-1.5">
                  <Eye className="w-4 h-4" /> Color Contrast
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "default", label: "Default Colors" },
                    { id: "dark", label: "High Contrast Dark" },
                    { id: "monochrome", label: "Monochrome" },
                    { id: "yellow-black", label: "Yellow on Black" },
                    { id: "invert", label: "Inverted Colors" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setTheme(item.id);
                        saveSettings({ theme: item.id });
                      }}
                      className={`py-2 px-3 rounded-xl border text-[11px] font-semibold text-left transition-all ${
                        theme === item.id
                          ? "border-[#156E94] bg-[#156E94] text-white"
                          : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reading Guides */}
              <div className="space-y-2">
                <span className="text-sm font-semibold flex items-center gap-1.5">
                  <Ruler className="w-4 h-4" /> Reading Tools
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setReadingRuler(!readingRuler);
                      saveSettings({ readingRuler: !readingRuler });
                    }}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      readingRuler
                        ? "border-[#156E94] bg-[#156E94]/10 text-[#156E94] dark:text-[#0092D0]"
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    Reading Ruler
                  </button>
                  <button
                    onClick={() => {
                      setReadingMask(!readingMask);
                      saveSettings({ readingMask: !readingMask });
                    }}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      readingMask
                        ? "border-[#156E94] bg-[#156E94]/10 text-[#156E94] dark:text-[#0092D0]"
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    Screen Mask
                  </button>
                </div>
              </div>

              {/* Navigational Aids */}
              <div className="space-y-2">
                <span className="text-sm font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Navigational Helpers
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setHighlightLinks(!highlightLinks);
                      saveSettings({ highlightLinks: !highlightLinks });
                    }}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                      highlightLinks
                        ? "border-[#156E94] bg-[#156E94]/10 text-[#156E94] dark:text-[#0092D0]"
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <Link2 className="w-3 h-3" /> Highlight Links
                  </button>
                  <button
                    onClick={() => {
                      setHighlightFocus(!highlightFocus);
                      saveSettings({ highlightFocus: !highlightFocus });
                    }}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                      highlightFocus
                        ? "border-[#156E94] bg-[#156E94]/10 text-[#156E94] dark:text-[#0092D0]"
                        : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850"
                    }`}
                  >
                    <Focus className="w-3 h-3" /> Focus Borders
                  </button>
                </div>
              </div>

            </div>

            {/* Footer / Reset Button */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={handleReset}
                className="text-xs font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Settings
              </button>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                V1.0
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reading Ruler DOM Element */}
      {readingRuler && (
        <div 
          className="fixed left-0 right-0 h-2 bg-rose-500/80 pointer-events-none transition-all duration-75 shadow-lg shadow-rose-500/20"
          style={{ top: `${mouseY - 4}px`, zIndex: 999999 }}
        />
      )}

      {/* Screen Mask DOM Elements */}
      {readingMask && (
        <>
          <div 
            className="fixed left-0 right-0 top-0 bg-black/60 pointer-events-none transition-all duration-75"
            style={{ height: `${Math.max(0, mouseY - 50)}px`, zIndex: 999998 }}
          />
          <div 
            className="fixed left-0 right-0 bottom-0 bg-black/60 pointer-events-none transition-all duration-75"
            style={{ top: `${mouseY + 50}px`, zIndex: 999998 }}
          />
        </>
      )}
    </>
  );
};

export default AccessibilityWidget;
