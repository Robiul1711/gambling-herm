import React from "react";
import { AlertCircle } from "lucide-react";

export default function CrisisHeader() {
  return (
    <div className="w-full bg-[#C92525] text-white overflow-hidden py-2 md:py-3">
      <div className="flex items-center justify-center whitespace-nowrap md:whitespace-normal animate-marquee md:animate-none">
        <AlertCircle className="w-4 h-4 mx-3 shrink-0 animate-pulse" />

        <span className="text-xs md:text-sm font-medium">
          In Crisis Or Thinking About Suicide? Call{" "}
          <a href="tel:116123" className="font-bold underline mx-1">
            Samaritans 116 123
          </a>
          , Free, 24/7.
        </span>

        <a
          href="#urgent-help"
          className="md:font-bold md:ml-4 md:mr-8 font-semibold underline text-sm md:text-base"
        >
          Urgent Help →
        </a>
      </div>
    </div>
  );
}