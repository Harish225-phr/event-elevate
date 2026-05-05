import { Play, Sparkles, Star, Users, Award } from "lucide-react";
import heroImg from "@/assets/hero-emcee.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background image (acts as full-screen visual; lightweight & SSR-safe) */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Emcee Pramod hosting a luxury event on stage"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.25_295/0.35),transparent_60%)]" />
      </div>

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
      <div
        className="pointer-events-none absolute bottom-10 -right-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-float-slow"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm font-medium text-foreground/90 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            {SITE.tagline}
          </div>

          <h1 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight">
            Turning Events into{" "}
            <span className="text-gradient-gold italic">Unforgettable</span>{" "}
            <span className="text-gradient-purple">Experiences</span>
          </h1>

          <p className="reveal mt-6 text-lg sm:text-xl text-foreground/75 max-w-2xl">
            Wedding Hosting · Corporate Events · Team Building · Live Shows
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-105 transition-transform animate-pulse-glow"
            >
              Book Now
              <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Videos
            </a>
          </div>

          {/* Trust strip */}
          <div className="reveal mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl">
            {[
              { icon: Users, k: "500+", v: "Events Hosted" },
              { icon: Star, k: "Top Rated", v: "Emcee" },
              { icon: Award, k: "Premium", v: "Trusted Clients" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={v} className="glass rounded-2xl p-4 sm:p-5 text-left">
                <Icon className="h-5 w-5 text-gold mb-2" />
                <div className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  {k}
                </div>
                <div className="text-xs sm:text-sm text-foreground/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/60 text-xs tracking-[0.3em] animate-bounce">
        SCROLL
      </div>
    </section>
  );
}