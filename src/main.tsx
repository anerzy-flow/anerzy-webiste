import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "motion/react";

// Self-hosted fonts (no CDN dependency). Explicit `.css` paths so the strict
// side-effect import check can resolve them via Vite's ambient css module.
// Fraunces carries headlines (editorial, human); Source Sans 3 carries body
// text; IBM Plex Mono is reserved for data figures inside the demo.
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/source-sans-3/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

// Global styles: tokens first (define the variables), then base, then animations.
import "./styles/tokens.css";
import "./styles/globals.css";
import "./styles/animations.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Honor the OS "reduce motion" setting — animations resolve instantly. */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>,
);
