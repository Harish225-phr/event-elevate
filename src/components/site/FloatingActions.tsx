import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 grid place-items-center rounded-full text-white shadow-glow animate-pulse-glow hover:scale-110 transition-transform"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      >
        <MessageCircle className="h-6 w-6 fill-white" />
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call"
        className="h-14 w-14 grid place-items-center rounded-full bg-gold-gradient text-gold-foreground shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}