import { SectionTitle } from "./SectionTitle";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-emcee.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.25_295/0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src={heroImg}
              alt="Pramod hosting on stage"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-8 -right-4 sm:-right-10 glass-strong rounded-2xl p-5 shadow-glow w-56">
            <div className="font-display text-4xl font-bold text-gradient-gold">
              10+
            </div>
            <div className="text-sm text-foreground/80 mt-1">
              Years of stage experience
            </div>
          </div>
          <div className="absolute -top-6 -left-4 glass rounded-2xl px-4 py-3 text-sm font-medium">
            ⭐ 5.0 Google Rated
          </div>
        </div>

        <div>
          <SectionTitle
            align="left"
            eyebrow="About Pramod"
            title="The Voice Behind"
            highlight="Every Memorable Moment"
          />
          <p className="reveal mt-6 text-lg text-foreground/80 leading-relaxed">
            Emcee Pramod is a dynamic host known for creating engaging,
            energetic and unforgettable event experiences. From luxury
            weddings to corporate shows, every event becomes special — crafted
            with charisma, timing, and a deep understanding of the audience.
          </p>
          <ul className="reveal mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Bilingual hosting — English & Kannada",
              "Pan-India destination events",
              "Custom scripts for every event",
              "Premium stage presence",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex items-center gap-4">
            <a
              href="#booking"
              className="rounded-full bg-primary-gradient px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Check Availability
            </a>
            <a
              href="#videos"
              className="text-sm font-semibold text-gold hover:underline"
            >
              See me in action →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}