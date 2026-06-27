import React from "react";
import bannerImg from "@/assets/images/cy1.png";
import useClient from "@/hooks/useClient";

export default function CYBanner() {
  const { data: responseData } = useClient({
    queryKey: ["about", "cyp-intro"],
    url: "/about/cyp-intro",
  });

  const sectionData = responseData?.data;

  const descriptionText = sectionData?.description || "Across two populations (children who gamble, and children of someone with gambling harm), the UK headline numbers point in the same direction.";
  const image = sectionData?.image || bannerImg;

  return (
    <section className="w-full max-w-7xl mx-auto section-padding-y">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="text-gray-800 dark:text-gray-200 order-2 md:order-1">
          <p className="text-base sm:text-lg leading-relaxed font-medium max-w-xl">
            {descriptionText}
          </p>
        </div>

        {/* Right Side: Graphic/Illustration */}
        <div className="w-full flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-md md:max-w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 p-2 sm:p-4">
            <img
              src={image}
              alt="Escape gambling ads woven into sport, social media plus"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}