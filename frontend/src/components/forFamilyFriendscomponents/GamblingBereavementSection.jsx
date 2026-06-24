import React from 'react';

export default function GamblingBereavementSection() {
  return (
    <section className="w-full bg-[#2c2a29] text-[#e5e7eb] py-16 md:py-24">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight leading-tight mb-8">
          If you have been bereaved by gambling
        </h2>
        
        {/* Content Paragraphs */}
        <div className="space-y-6 text-[15px] md:text-16px leading-relaxed text-[#d1d5db] max-w-4xl">
          <p>
            Bereavement by gambling-related suicide is one of the most isolating losses there is. It is also more 
            common than the public conversation reflects, up to 496 such deaths a year in England alone, on the most 
            recent PHE estimates.
          </p>
          
          <p>
            <strong className="text-white font-semibold">Gambling with Lives</strong> is the UK charity founded by 
            families bereaved this way, for families bereaved this way. They provide one-to-one and group bereavement 
            support, advocacy, and a community of people who understand what you are going through. Contact details 
            and resources are at{' '}
            <a 
              href="https://www.gamblingwithlives.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#38bdf8] hover:text-[#7dd3fc] underline underline-offset-4 decoration-1 transition-colors"
            >
              gamblingwithlives.org.
            </a>
          </p>
          
          <p className="pt-2">
            Your loss matters. The story your loved one's death tells about an industry, a regulator, and a culture, that 
            matters too.
          </p>
        </div>


      </div>
      </div>
    </section>
  );
}