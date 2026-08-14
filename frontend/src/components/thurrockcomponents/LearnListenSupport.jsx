import React from "react";
import { Link } from "react-router-dom";

export default function LearnListenSupport() {
  const podcasts = [
    {
      title: "All Bets Are Off",
      description:
        "Recovery stories, support, and expert insights on gambling harm.",
      buttonText: "Listen on Spotify",
      link: "https://open.spotify.com/show/4z82qZk6wMvI2Bsn3wLecM",
    },
    {
      title: "Hold or Fold",
      description:
        "Gambling-related harm and its impact on people affected by the Criminal Justice System. Hosted by Ben and Steve, sharing stories of addiction, struggle and recovery.",
      buttonText: "Listen on Spotify",
      link: "https://open.spotify.com/show/5oWzP4w77m8iApxVlY7y4g",
    },
    {
      title: "The Invisible Addiction",
      description:
        "Real stories and experiences from people affected by gambling harm.",
      buttonText: "Listen on Spotify",
      link: "https://open.spotify.com/show/6X2p8D0c5G6u2vY21G0QeQ",
    },
  ];

  const resources = [
    {
      title: "Guides",
      description:
        "Specially produced guides giving practical advice, insights, and support around gambling harm.",
      buttonText: "View all guides",
      to: "/news-and-research",
    },
    {
      title: "Fact sheets",
      description:
        "Clear, easy-to-read information on gambling harm and its impact.",
      buttonText: "View all fact sheets",
      to: "/news-and-research",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-white border-t border-gray-200/40">
      <div className="max-w-5xl mx-auto px-4  text-[#1f2937]">
        {/* Header */}
        <header className="mb-10">
          <div className="w-12 h-1 bg-[#156E94] mb-4"></div>{" "}
          {/* Teal accent bar */}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Learn, listen and stay supported
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Explore resources to help you understand gambling harms and hear
            from others with lived experience.
          </p>
        </header>

        {/* Row 1: Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="bg-white border border-gray-150/80 p-5 lg:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[300px]"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                  {podcast.description}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-sm py-3 px-5 transition-colors"
                >
                  {podcast.buttonText}
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-150/80 p-5 lg:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[220px]"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-sm py-3 px-5 transition-colors"
                >
                  {item.buttonText}
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
