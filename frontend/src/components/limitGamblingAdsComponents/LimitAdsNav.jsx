import React from "react";

const LimitAdsNav = () => {
  const navItems = [
    { label: "Operator marketing", id: "operator-marketing" },
    { label: "Platform-level controls", id: "platform-level-controls" },
    { label: "Device & browser", id: "device-browser" },
    { label: "Broadcast & sport", id: "broadcast-sport" },
    { label: "For parents & carers", id: "for-parents-carers" },
    { label: "Our position", id: "our-position" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="w-full bg-[#fbfdfd] border-b border-gray-200/60 py-8 md:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-[2px] bg-[#0082c3]"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0082c3]">
            On this page
          </span>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-6 text-sm sm:text-base">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-gray-900 underline underline-offset-4 decoration-gray-400 hover:text-[#0082c3] hover:decoration-[#0082c3] transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LimitAdsNav;
