"use client";

import { useEffect, useState } from "react";

const DURATION_HOURS = 12;

function getInitialSecs() {
  if (typeof window === "undefined") return DURATION_HOURS * 3600;
  const stored = sessionStorage.getItem("topbanner_end");
  if (stored) {
    const remaining = Math.floor((Number(stored) - Date.now()) / 1000);
    if (remaining > 0) return remaining;
  }
  const end = Date.now() + DURATION_HOURS * 3600 * 1000;
  sessionStorage.setItem("topbanner_end", String(end));
  return DURATION_HOURS * 3600;
}

export default function TopBanner() {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(getInitialSecs());
  }, []);

  useEffect(() => {
    if (secs === null || secs <= 0) return;
    const id = setInterval(() => setSecs((s) => (s !== null && s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [secs]);

  if (secs === null || secs <= 0) return null;

  const hh = String(Math.floor(secs / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  return (
    <div className="w-full bg-[#C94040] text-white text-center py-3 px-4">
      <p className="font-inter font-bold text-sm md:text-base tracking-wide">
        Esta página sairá do ar em:{" "}
        <span className="tabular-nums">
          {hh}:{mm}:{ss}
        </span>
      </p>
    </div>
  );
}
