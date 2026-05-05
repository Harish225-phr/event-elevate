import { SectionTitle } from "./SectionTitle";
import { Instagram as InstagramIcon } from "lucide-react";
import { SITE } from "@/lib/site";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import crowd from "@/assets/gallery-crowd.jpg";
import moment from "@/assets/gallery-moment.jpg";
import stage from "@/assets/gallery-stage.jpg";
import team from "@/assets/gallery-team.jpg";

const FEED = [wedding, crowd, corporate, moment, stage, team];

export function Instagram() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="@emceepramodgowda"
          title="Follow the"
          highlight="Behind The Mic"
          description="Reels, BTS and event highlights — fresh from the stage."
        />

        <div className="reveal mt-14 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {FEED.map((src, i) => (
            <a
              key={i}
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt="Instagram post"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 grid place-items-center transition-opacity">
                <InstagramIcon className="h-7 w-7 text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-secondary"
          >
            <InstagramIcon className="h-4 w-4 text-gold" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}