import { useState } from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Download from "./sections/Download";

// Persists for the lifetime of the page load (module state survives client-side
// route changes, only resets on a full page reload) so entrance animations only
// play the first time Home mounts, not when navigating back to it.
let hasVisitedHome = false;

export default function Home() {
  const [shouldAnimate] = useState(() => {
    const isFreshLoad = !hasVisitedHome;
    hasVisitedHome = true;
    return isFreshLoad;
  });

  return (
    <>
      <Hero shouldAnimate={shouldAnimate} />
      <Features shouldAnimate={shouldAnimate} />
      <Download shouldAnimate={shouldAnimate} />
    </>
  );
}
