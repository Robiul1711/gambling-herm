import React, { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      <div className="bg-[#e6f6fe] rounded-[24px] px-6 py-8 sm:px-10 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
            Follow Our Work
          </h3>
          <p className="text-[#64748b] text-[14px] sm:text-[15px] leading-relaxed">
            Roughly monthly. No spam. Our research, consultation responses and briefings, sent when we publish them.
          </p>
        </div>

        {/* Right Side: Form */}
        <form 
          onSubmit={handleSubmit}
          className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0"
        >
          <div className="relative min-w-[240px] sm:w-[280px] lg:w-[320px]">
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] bg-[#f0f9ff]/50 text-[#1a1a1a] placeholder-[#94a3b8] text-[15px] outline-none focus:border-[#146b93] focus:ring-1 focus:ring-[#146b93] transition-all"
            />
          </div>
          
          <button
            type="submit"
            className="bg-[#146b93] hover:bg-[#0f5271] text-white font-medium text-[15px] px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 tracking-wide shrink-0 whitespace-nowrap"
          >
            Subscribe <span>&rarr;</span>
          </button>
        </form>

      </div>
    </div>
  );
};

export default NewsletterBanner;