"use client";

import { useEffect, useState } from "react";
import SectionHeading from "./ui/SectionHeading";

export default function GithubGraph() {
  const [isLoading, setIsLoading] = useState(true);
  const username = "nissha29";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-8 mt-8">
      <SectionHeading>GitHub Activity</SectionHeading>

      <div className="pt-4 w-full overflow-x-auto">
        <div className="min-w-full">
          {isLoading ? (
            <div className="flex items-center justify-center h-40 border border-neutral-800 bg-neutral-900/30">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-rose-400/30 border-t-rose-400 rounded-full animate-spin"></div>
                <span className="text-sm text-neutral-500">
                  Loading GitHub activity...
                </span>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="flex flex-col gap-4">
                <div className="w-full overflow-hidden rounded">
                  <img
                    src={`https://ghchart.rshah.org/fb7185/${username}`}
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto"
                    style={{
                      imageRendering: "crisp-edges",
                      filter: "brightness(0.8) contrast(1.5)",
                    }}
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2 text-xs text-neutral-500">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white"></div>
                    <div className="w-3 h-3 bg-rose-200"></div>
                    <div className="w-3 h-3 bg-rose-400"></div>
                    <div className="w-3 h-3 bg-rose-500/80"></div>
                    <div className="w-3 h-3 bg-rose-800"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
