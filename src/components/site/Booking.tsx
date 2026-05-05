import { useState } from "react";
import { z } from "zod";
import { SectionTitle } from "./SectionTitle";
import { SITE } from "@/lib/site";
import { Calendar, Sparkles, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9\s\-()]+$/, "Only numbers and + - ( ) allowed"),
  eventType: z.string().min(1, "Choose an event type"),
  date: z.string().min(1, "Pick a date"),
  message: z.string().trim().max(800).optional().or(z.literal("")),
});

const EVENTS = [
  "Wedding",
  "Sangeet / Reception",
  "Corporate Event",
  "Team Building",
  "Live Show",
  "Other",
];

export function Booking() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      eventType: String(fd.get("eventType") ?? ""),
      date: String(fd.get("date") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const k = String(i.path[0]);
        if (!next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    const text = encodeURIComponent(
      `Hi Pramod, I'd like to book you.\n\nName: ${data.name}\nPhone: ${data.phone}\nEvent: ${data.eventType}\nDate: ${data.date}\nNotes: ${data.message || "—"}`
    );
    window.open(`https://wa.me/91${SITE.phone}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.55_0.25_295/0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Booking"
              title="Let's Make Your"
              highlight="Event Iconic"
              description="Tell me a little about your event. I'll personally get back within 24 hours."
            />
            <div className="reveal mt-8 grid gap-3">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Calendar className="h-4 w-4 text-gold" /> Available across India
                & destinations
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <Sparkles className="h-4 w-4 text-gold" /> Custom packages for
                every budget
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="reveal glass-strong rounded-3xl p-6 sm:p-8 shadow-elegant grid gap-4"
          >
            <Field label="Your Name" name="name" placeholder="Full name" error={errors.name} />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" name="phone" type="tel" placeholder="+91 99999 99999" error={errors.phone} />
              <div className="grid gap-1.5">
                <label className="text-xs font-medium uppercase tracking-widest text-foreground/60">
                  Event Type
                </label>
                <select
                  name="eventType"
                  defaultValue=""
                  className="rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                >
                  <option value="" disabled>Select…</option>
                  {EVENTS.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
                {errors.eventType && <span className="text-xs text-destructive">{errors.eventType}</span>}
              </div>
            </div>
            <Field label="Event Date" name="date" type="date" error={errors.date} />
            <div className="grid gap-1.5">
              <label className="text-xs font-medium uppercase tracking-widest text-foreground/60">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={800}
                placeholder="Tell me about your event, venue, expected guests…"
                className="rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold hover:scale-[1.02] transition-transform"
            >
              <Send className="h-4 w-4" />
              Book Your Event
            </button>
            {sent && (
              <p className="text-sm text-gold text-center">
                Opening WhatsApp… I'll be in touch shortly!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-xs font-medium uppercase tracking-widest text-foreground/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}