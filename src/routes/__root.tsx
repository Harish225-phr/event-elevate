import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Emcee Pramod — Wedding Anchor & Corporate Host in India" },
      {
        name: "description",
        content:
          "Emcee Pramod — premium wedding anchor, corporate event host & live show MC. 500+ events. Book the best emcee for weddings, corporate events & team building in India.",
      },
      {
        name: "keywords",
        content:
          "wedding anchor India, best emcee for wedding, corporate event host India, professional emcee services, event host near me, wedding MC services, Bengaluru emcee",
      },
      { name: "author", content: "Emcee Pramod" },
      { property: "og:title", content: "Emcee Pramod — Experience Creator | Wedding Anchor | Corporate MC" },
      {
        property: "og:description",
        content:
          "Turning events into unforgettable experiences. 500+ events hosted across weddings, corporate stages and live shows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='56' fill='%23111827'/%3E%3Ccircle cx='128' cy='128' r='74' fill='%23c9a25d'/%3E%3C/svg%3E",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
