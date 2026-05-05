import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import crowd from "@/assets/gallery-crowd.jpg";

const VIDEOS = [
  {
    title: "Grand Wedding Reception — Bengaluru",
    tag: "Wedding",
    cover: wedding,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Annual Awards Night — Tech Conclave",
    tag: "Corporate",
    cover: corporate,
    youtubeId: "ScMzIvxBSi4",
  },
  {
    title: "Live Concert Stage Hosting",
    tag: "Live Show",
    cover: crowd,
    youtubeId: "M7lc1UVf-VE",
  },
];

export function Videos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = VIDEOS[active];

  const go = (delta: number) => {
    setPlaying(false);
    setActive((i) => (i + delta + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <section id="videos" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.25_295/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Watch Reel"
          title="Highlights from"
          highlight="The Stage"
          description="A glimpse into the energy, the moments and the magic — straight from real events."
        />

        <div className="reveal mt-14 grid lg:grid-cols-[1.6fr_1fr] gap-6">
          {/* Main player */}
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-strong shadow-glow group">
            {playing ? (
              <iframe
                key={v.youtubeId}
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                title={v.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={v.cover}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gold-gradient grid place-items-center shadow-gold animate-pulse-glow group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 fill-gold-foreground text-gold-foreground translate-x-0.5" />
                  </span>
                </button>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                      {v.tag}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl mt-1">
                      {v.title}
                    </h3>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-secondary transition"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => go(1)}
                      className="h-11 w-11 rounded-full glass grid place-items-center hover:bg-secondary transition"
                      aria-label="Next"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Playlist */}
          <div className="grid gap-4">
            {VIDEOS.map((item, i) => (
              <button
                key={item.title}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
                className={`group flex items-center gap-4 rounded-2xl p-3 text-left transition-all ${
                  i === active
                    ? "glass-strong ring-1 ring-gold/60 shadow-gold"
                    : "glass hover:-translate-y-0.5"
                }`}
              >
                <div className="relative h-20 w-32 shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-black/30">
                    <Play className="h-5 w-5 text-white fill-white" />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-widest uppercase text-gold">
                    {item.tag}
                  </div>
                  <div className="text-sm font-semibold mt-0.5 line-clamp-2">
                    {item.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}