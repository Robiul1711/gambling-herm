const GamblingNotNormalProduct = () => {
  return (
    <section
      id="normal-product"
      className="bg-[#262323] text-white py-10 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-5">

        {/* Top Accent */}
        <div className="w-12 h-[3px] bg-[#1ea7e1] mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          2. Gambling is not a normal product
        </h2>

        {/* Intro */}
        <p className="max-w-3xl text-[#c6c6c6] text-base md:text-lg leading-8">
          "Normal" consumer goods make their money by being good enough that
          people choose them again. Gambling, in its modern engineered form,
          makes its money by ensuring that people cannot easily stop choosing
          it, and by extracting more from those who can stop least.
        </p>

        {/* Sub Heading */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            The commercial determinants of health (CDOH) framing
          </h3>

          <p className="text-[#c6c6c6] leading-8 max-w-4xl">
            For UK gambling operators, the evidence is unambiguous: a small
            share of customers (those experiencing harm) generates a large
            share of operator revenue. In Great Britain, the top 10% of online
            customers generate around 79% of operators' net revenue, and the
            top 1% alone roughly 37% (NatCen, Patterns of Play, 2023). This is
            not a marginal phenomenon. It is the central economics of the
            sector.
          </p>
        </div>

        {/* Position Card */}
        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="border-l-4 border-[#1ea7e1] h-full px-6 md:px-10 py-8 md:py-10">

            <h4 className="text-[#1ea7e1] font-medium text-lg mb-6">
              Our position
            </h4>

            <p className="text-[#626262] leading-8 text-base">
              A product whose business model depends on a substantial share of
              revenue coming from customers experiencing harm should not be
              regulated as if it were an ordinary leisure good. The CDOH
              framing (the same framing applied to tobacco, alcohol and
              ultra-processed food) is the framing UK gambling regulation should
              adopt.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingNotNormalProduct;