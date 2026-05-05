import { SectionTitle } from "./SectionTitle";
import { ArrowUpRight, Clock } from "lucide-react";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import team from "@/assets/gallery-team.jpg";

const POSTS = [
  {
    cover: wedding,
    cat: "Weddings",
    title: "10 Wedding Hosting Tips That Make Guests Cheer",
    read: "5 min",
  },
  {
    cover: corporate,
    cat: "Corporate",
    title: "Designing a Corporate Event Your Team Won't Forget",
    read: "7 min",
  },
  {
    cover: team,
    cat: "Team Building",
    title: "Ice-Breakers That Actually Bring Teams Together",
    read: "4 min",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Insights"
          title="From the"
          highlight="Stage Notebook"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className="reveal group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-background/70 backdrop-blur px-2.5 py-1 rounded-full text-gold">
                  {p.cat}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <Clock className="h-3.5 w-3.5" /> {p.read} read
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                  {p.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                  Read article <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}