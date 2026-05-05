import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.25_295/0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-full bg-primary-gradient grid place-items-center font-display text-lg font-bold text-primary-foreground shadow-glow">
                P
              </span>
              <span className="font-display text-2xl">
                Emcee <span className="text-gradient-gold">Pramod</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-foreground/70">
              Wedding anchor, corporate host and live show emcee — turning every
              event into an unforgettable experience.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-secondary" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={`tel:${SITE.phone}`} className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-secondary" aria-label="Call">
                <Phone className="h-4 w-4" />
              </a>
              <a href={`mailto:${SITE.email}`} className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-secondary" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href={SITE.google} target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-secondary" aria-label="Google">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-foreground/60">
              Quick Links
            </h4>
            <ul className="mt-4 grid gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/80 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-foreground/60">
              Services
            </h4>
            <ul className="mt-4 grid gap-2 text-foreground/80">
              <li>Wedding Anchor</li>
              <li>Corporate Events</li>
              <li>Team Building</li>
              <li>Live Shows & Stage</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/60">
          <p>© {new Date().getFullYear()} Emcee Pramod. All rights reserved.</p>
          <p>
            Powered by{" "}
            <span className="text-gradient-gold font-semibold">
              TechHim Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}