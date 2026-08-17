import React from "react";

const GamblingNotNormalProduct = () => {
  return (
    <section
      id="normal-product"
      className="bg-[#181818] text-white py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold leading-tight mb-5 tracking-tight text-white">
          2. Gambling is not a normal product
        </h2>

        {/* Intro */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
          "Normal" consumer goods make their money by being good enough that
          people choose them again. Gambling, in its modern engineered form,
          makes its money by ensuring that people cannot easily stop choosing
          it, and by extracting more from those who can stop least.
        </p>

        {/* Sub Heading & Paragraphs */}
        <div className="mb-10 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white tracking-tight">
            The commercial determinants of health (CDOH) framing
          </h3>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <strong className="text-white font-bold">
              Tobacco, alcohol, ultra-processed food and modern gambling share
              a structural feature: the product's commercial viability depends on
              a customer base whose use, in aggregate, causes substantial harm.
            </strong>{" "}
            The harm is not an unfortunate side-effect of an otherwise neutral
            business model, it <span className="italic">is</span> the business
            model.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <strong className="text-white font-bold">
              For UK gambling operators, the evidence is unambiguous: a small
              share of customers (those experiencing harm) generates a large
              share of operator revenue. In Great Britain, the top 10% of online
              customers generate around 79% of operators' net revenue, and the
              top 1% alone roughly 37% (NatCen,{" "}
              <span className="italic">Patterns of Play</span>, 2023). This is not
              a marginal phenomenon. It is the central economics of the sector.
            </strong>
          </p>
        </div>

        {/* Position Card */}
        <div className="bg-white border-l-[4px] border-[#1d7092] p-6 md:p-8 rounded-r-xl shadow-md">
          <h4 className="text-[#1d7092] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            A product whose business model depends on a substantial share of
            revenue coming from customers experiencing harm should not be
            regulated as if it were an ordinary leisure good. The CDOH framing
            (the same framing applied to tobacco, alcohol and ultra-processed
            food) is the framing UK gambling regulation should adopt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamblingNotNormalProduct;
