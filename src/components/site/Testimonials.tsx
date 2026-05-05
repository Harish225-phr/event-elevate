import { SectionTitle } from "./SectionTitle";
import { Star, Quote } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const REVIEWS = [
  {
    name: "Ananya & Rohit",
    role: "Bengaluru Wedding",
    avatar: a3,
    rating: 5,
    text:
      "Pramod made our wedding feel like a movie. The energy, the timing, the emotion — every guest is still talking about it.",
  },
  {
    name: "Karthik Reddy",
    role: "Director, NovaTech",
    avatar: a2,
    rating: 5,
    text:
      "We've worked with many MCs for our annual conclave — Pramod is on a different level. Polished, sharp and effortlessly engaging.",
  },
  {
    name: "Priya Menon",
    role: "Wedding Planner",
    avatar: a1,
    rating: 5,
    text:
      "My go-to anchor for premium weddings. Clients ask for him by name now. He simply elevates every event.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Kind Words"
          title="Loved by Couples"
          highlight="& Brands Alike"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal relative glass rounded-3xl p-7 hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="absolute -top-3 -left-3 h-10 w-10 text-gold opacity-80" />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/85 leading-relaxed">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-foreground/60">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}