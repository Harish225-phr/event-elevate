import { SectionTitle } from "./SectionTitle";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get in Touch"
          title="Let's Talk"
          highlight="Soon"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <div className="reveal grid sm:grid-cols-2 gap-4">
            <ContactCard
              icon={Phone}
              label="Call"
              value={SITE.phoneDisplay}
              href={`tel:${SITE.phone}`}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Chat with Pramod"
              href={SITE.whatsapp}
              accent
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactCard
              icon={MapPin}
              label="Find on Google"
              value="Google Business"
              href={SITE.google}
            />
          </div>

          <div className="reveal rounded-3xl overflow-hidden glass-strong shadow-elegant aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
            <iframe
              title="Bengaluru map"
              src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-all hover:shadow-glow"
    >
      <div
        className={`h-11 w-11 rounded-xl grid place-items-center ${accent ? "bg-gold-gradient shadow-gold" : "bg-primary-gradient shadow-glow"} group-hover:rotate-6 transition-transform`}
      >
        <Icon className={`h-5 w-5 ${accent ? "text-gold-foreground" : "text-primary-foreground"}`} />
      </div>
      <div className="mt-4 text-xs uppercase tracking-widest text-foreground/60">
        {label}
      </div>
      <div className="mt-1 font-semibold break-all">{value}</div>
    </a>
  );
}