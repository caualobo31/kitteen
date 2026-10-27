"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const VIDEO_SRC =
  "https://player.vimeo.com/video/1239683659?badge=0&autopause=0&player_id=0&app_id=58479";

// Quando a thumbnail definitiva existir, coloque o arquivo em /public e informe o caminho aqui
// (ex.: "/thumb-vsl.jpg"). Enquanto for null, o placeholder visual é exibido.
const THUMBNAIL_SRC: string | null = null;

export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-[340px] md:max-w-sm mx-auto aspect-[9/16] rounded-2xl overflow-hidden bg-text-primary shadow-lg shadow-accent/10">
      {playing ? (
        <iframe
          src={`${VIDEO_SRC}&autoplay=1&muted=0`}
          title="Kit Consultório Teen — apresentação"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Assistir ao vídeo"
          className="group absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {THUMBNAIL_SRC ? (
            <Image
              src={THUMBNAIL_SRC}
              alt=""
              fill
              sizes="(min-width: 768px) 384px, 340px"
              className="object-cover"
              priority
            />
          ) : (
            <span className="absolute inset-0 bg-gradient-to-br from-accent/30 via-text-primary to-text-primary" />
          )}
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <span className="relative flex flex-col items-center gap-4 px-4 text-center">
            <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-white shadow-xl shadow-black/30 ring-8 ring-white/25 transition-transform duration-200 group-hover:scale-105">
              <Play className="w-9 h-9 md:w-10 md:h-10 ml-1 fill-current" strokeWidth={0} />
            </span>
            <span className="font-inter font-semibold text-sm md:text-base text-white bg-black/50 backdrop-blur-sm rounded-full px-5 py-2.5">
              Toque para assistir com som
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
