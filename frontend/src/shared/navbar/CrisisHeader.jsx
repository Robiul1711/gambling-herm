import React from "react";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function CrisisHeader() {
  return (
    <div className="w-full bg-[#C92525] text-white overflow-hidden py-2 ">
      <div className="flex items-center justify-center whitespace-nowrap md:whitespace-normal animate-marquee md:animate-none">
        <AlertCircle className="w-4 h-4 mx-3 shrink-0 animate-pulse" />

        <span className="text-xs  font-medium">
          In Crisis Or Thinking About Suicide? Call{" "}
          <a href="tel:116123" className="font-bold underline mx-1">
            Samaritans 116 123
          </a>
          , Free, 24/7.
        </span>

        <Link
          to="/urgent-help"
          className="md:font-bold md:ml-4 md:mr-8 font-medium underline text-sm "
        >
          Urgent Help →
        </Link>
      </div>
    </div>
  );
}