import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-gold mb-5"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-gold italic">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}