import { useEffect, useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { X } from "lucide-react";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import crowd from "@/assets/gallery-crowd.jpg";
import moment from "@/assets/gallery-moment.jpg";
import stage from "@/assets/gallery-stage.jpg";
import team from "@/assets/gallery-team.jpg";

const IMAGES = [
  { src: wedding, alt: "Wedding host on stage with chandelier", span: "lg:col-span-2 lg:row-span-2" },
  { src: crowd, alt: "Energetic crowd interaction with confetti" },
  { src: corporate, alt: "Corporate event hosting on stage" },
  { src: moment, alt: "Emcee with bride and groom on stage" },
  { src: stage, alt: "Luxury wedding stage decor" },
  { src: team, alt: "Team building hosting outdoors" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Gallery"
          title="Moments That"
          highlight="Made History"
        />

        <div className="reveal mt-14 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl glass shadow-elegant ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-left translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs tracking-widest uppercase text-gold">View</div>
                <div className="text-sm font-semibold">{img.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md grid place-items-center p-4 animate-fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full glass-strong"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={IMAGES[open].src}
            alt={IMAGES[open].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-glow"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}