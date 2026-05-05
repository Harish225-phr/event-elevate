import { SectionTitle } from "./SectionTitle";
import { Heart, Briefcase, Users2, Mic2, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Heart,
    title: "Wedding Anchoring",
    desc: "From sangeet to reception — emotional, fun and beautifully timed hosting that makes your big day unforgettable.",
    tag: "Most booked",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Product launches, awards nights and conferences hosted with polish, professionalism and energy.",
  },
  {
    icon: Users2,
    title: "Team Building",
    desc: "Interactive games, ice-breakers and offsite hosting that brings teams together and creates real bonds.",
  },
  {
    icon: Mic2,
    title: "Live Shows & Stage",
    desc: "Concerts, festivals and brand activations — high-energy stage hosting that keeps the crowd hooked.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="What I Bring"
          highlight="To Your Stage"
          description="Every event is different. Every script is custom. Every moment is crafted to feel unforgettable."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc, tag }, i) => (
            <article
              key={title}
              className="reveal group relative glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_right,oklch(0.55_0.25_295/0.35),transparent_60%)]" />

              <div className="relative flex items-center justify-between">
                <div className="h-14 w-14 rounded-2xl bg-primary-gradient grid place-items-center shadow-glow group-hover:rotate-6 transition-transform">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                {tag && (
                  <span className="text-[10px] tracking-widest uppercase text-gold bg-gold/10 ring-gold rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-semibold">
                {title}
              </h3>
              <p className="relative mt-3 text-sm text-foreground/70 leading-relaxed">
                {desc}
              </p>
              <a
                href="#booking"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
              >
                Enquire <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}