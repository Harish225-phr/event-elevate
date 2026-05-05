import { SectionTitle } from "./SectionTitle";
import { Flame, MessageCircle, Trophy, Wand2, Crown } from "lucide-react";

const REASONS = [
  { icon: Flame, t: "Energetic Hosting", d: "Bringing the room to life from the very first word." },
  { icon: MessageCircle, t: "Audience Engagement", d: "Reading the crowd and making every guest feel involved." },
  { icon: Trophy, t: "Professional Experience", d: "500+ events. Weddings, brands, festivals — handled with calm." },
  { icon: Wand2, t: "Customized Events", d: "Scripts, formats and games tailored to your story and audience." },
  { icon: Crown, t: "Premium Presence", d: "A polished, charismatic stage personality your event deserves." },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.25_295/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Me"
          title="Booked for"
          highlight="A Reason"
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, t, d }, i) => (
            <div
              key={t}
              className="reveal group relative glass rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition-all"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-6 left-7 h-12 w-12 rounded-2xl bg-gold-gradient grid place-items-center shadow-gold group-hover:rotate-6 transition-transform">
                <Icon className="h-5 w-5 text-gold-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mt-6">{t}</h3>
              <p className="text-sm text-foreground/70 mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}