import React from "react";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useClient from "@/hooks/useClient";

export default function CrisisHeader() {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["footer"],
    url: "/footer",
  });
  const footerData = responseData?.data;

  // Show skeleton while loading
  if (isLoading) {
    return (
      <div className="w-full py-2 bg-slate-200 animate-pulse">
        <div className="flex items-center justify-center gap-3">
          <div className="w-4 h-4 rounded-full bg-slate-300 shrink-0" />
          <div className="h-3 w-64 bg-slate-300 rounded" />
          <div className="h-3 w-24 bg-slate-300 rounded" />
        </div>
      </div>
    );
  }
  if (!footerData) return null;
  if (footerData.crisisHeaderShow === false || footerData.crisisHeaderShow === "false") return null;

  const bgColor = footerData.crisisHeaderBgColor || "#C92525";
  const textColor = footerData.crisisHeaderTextColor || "#ffffff";

  return (
    <div 
      className="w-full overflow-hidden py-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex items-center justify-center whitespace-nowrap md:whitespace-normal animate-marquee md:animate-none">
        <AlertCircle className="w-4 h-4 mx-3 shrink-0 animate-pulse" />

        <span className="text-xs font-medium">
          {footerData.crisisHeaderText || "In Crisis Or Thinking About Suicide? Call"}{" "}
          {footerData.crisisHeaderPhone && (
            <a 
              href={`tel:${footerData.crisisHeaderPhoneLink || "116123"}`} 
              className="font-bold underline mx-1 hover:opacity-90 transition-opacity"
              style={{ color: textColor }}
            >
              {footerData.crisisHeaderPhone}
            </a>
          )}
         Free, 24/7.
        </span>

        {footerData.crisisHeaderBtnText && (
          <Link
            to={footerData.crisisHeaderBtnLink || "/urgent-help"}
            className="md:font-bold md:ml-4 md:mr-8 font-medium underline text-sm hover:opacity-90 transition-opacity"
            style={{ color: textColor }}
          >
            {footerData.crisisHeaderBtnText}
          </Link>
        )}
      </div>
    </div>
  );
}