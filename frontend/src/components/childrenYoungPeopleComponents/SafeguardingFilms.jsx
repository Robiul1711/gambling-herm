import React from "react";
import useClient from "@/hooks/useClient";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  if (url.includes("youtube.com/embed/")) return url;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

const SafeguardingFilms = () => {
  // Fetch section header data
  const { data: headerResponse } = useClient({
    queryKey: ["about", "cyp-safeguarding-header"],
    url: "/about/cyp-safeguarding-header",
  });

  // Fetch individual films data from API
  const { data: film1Response } = useClient({
    queryKey: ["about", "cyp-safeguarding-film-1"],
    url: "/about/cyp-safeguarding-film-1",
  });

  const { data: film2Response } = useClient({
    queryKey: ["about", "cyp-safeguarding-film-2"],
    url: "/about/cyp-safeguarding-film-2",
  });

  const { data: film3Response } = useClient({
    queryKey: ["about", "cyp-safeguarding-film-3"],
    url: "/about/cyp-safeguarding-film-3",
  });

  const headerData = headerResponse?.data;
  const film1Data = film1Response?.data;
  const film2Data = film2Response?.data;
  const film3Data = film3Response?.data;

  const sectionTitle = headerData?.title || "Safeguarding films";
  const sectionDescription =
    headerData?.description ||
    "These films were developed with lived experience input to ensure authenticity and reflect real safeguarding scenarios reported by children and families affected by gambling harm.";

  const films = [
    {
      id: 1,
      title: film1Data?.title || "Mother and Daughter",
      description:
        film1Data?.description ||
        "This film focuses on how gambling can dominate attention and decision-making, leading to repeated emotional and practical neglect. When gambling becomes a priority, children become unseen.",
      themes: [
        "Food-related neglect",
        "Emotional neglect",
        "Children becoming unseen",
        "Gambling taking priority over caregiving",
      ],
      videoUrls: [
        film1Data?.videoUrl1 || film1Data?.videoUrl || "",
        film1Data?.videoUrl2 || "",
      ].filter(Boolean),
      defaultEmbeds: [
        "https://www.youtube.com/embed/eUINa1CNsSY",
        "https://www.youtube.com/embed/m0iK5vGk4Wo",
      ],
    },
    {
      id: 2,
      title: film2Data?.title || "Birthday Card",
      description:
        film2Data?.description ||
        "This film highlights how children can be harmed through subtle pressure rather than overt force, and how such behaviour can become normalised. Often those who are harmed the most are the people we love the most.",
      themes: [
        "Manipulation and coercion",
        "Stealing from a child",
        "Repeated patterns of harm",
        "Shame, guilt, and loss of trust",
      ],
      videoUrls: [
        film2Data?.videoUrl1 || film2Data?.videoUrl || "",
      ].filter(Boolean),
      defaultEmbeds: [],
    },
    {
      id: 3,
      title: film3Data?.title || "Brothers",
      description:
        film3Data?.description ||
        "Gambling takes more than money. It can take you away from those who need you most. The film ends before the football cards are given, leaving the younger brother standing alone and disappointed.",
      themes: [
        "Broken promises",
        "Emotional distance",
        "Lost time and missed memories",
        "Gambling pulling caregivers away",
        "Gateway behaviours",
      ],
      videoUrls: [
        film3Data?.videoUrl1 || film3Data?.videoUrl || "",
      ].filter(Boolean),
      defaultEmbeds: [
        "https://www.youtube.com/embed/g31dWx0J5y8",
      ],
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10 md:py-16">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

      {/* Main Section Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4 tracking-tight">
        {sectionTitle}
      </h2>

      {/* Section Subtitle */}
      <p className="text-[#555555] text-[15px] md:text-base mb-10 max-w-3xl leading-relaxed">
        {sectionDescription}
      </p>

      {/* Film Cards List */}
      <div className="space-y-8">
        {films.map((film) => {
          const videoList =
            film.videoUrls.length > 0
              ? film.videoUrls.map(getYouTubeEmbedUrl)
              : film.defaultEmbeds;

          return (
            <div
              key={film.id}
              className="bg-white border border-gray-200/90 p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              {/* Card Header & Description */}
              <h3 className="text-xl md:text-2xl font-bold text-[#2d2d2d] mb-4">
                {film.title}
              </h3>
              <p className="text-[#4b5563] text-sm md:text-[15px] leading-relaxed mb-6">
                {film.description}
              </p>

              {/* Safeguarding Themes List */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-[#2d2d2d] mb-3">
                  Safeguarding themes
                </h4>
                <div className="divide-y divide-dashed divide-gray-200 border-b border-dashed border-gray-200">
                  {film.themes.map((theme, index) => (
                    <div
                      key={index}
                      className="py-3 text-[14.5px] text-[#4b5563] first:pt-0"
                    >
                      {theme}
                    </div>
                  ))}
                </div>
              </div>

              {/* YouTube Video Players Container */}
              {videoList.length > 0 && (
                <div
                  className={`grid grid-cols-1 ${
                    videoList.length > 1 ? "md:grid-cols-2" : "max-w-2xl"
                  } gap-5 pt-2`}
                >
                  {videoList.map((embedUrl, idx) => (
                    <div
                      key={idx}
                      className="relative w-full aspect-video overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs"
                    >
                      {embedUrl && (
                        <iframe
                          src={embedUrl}
                          title={`${film.title} - Video ${idx + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SafeguardingFilms;