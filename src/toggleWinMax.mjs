import "./lib/setupMocks.mjs";
import focusedWindowIsMaximised from "./lib/focusedWindowIsMaximised.mjs";

(async () => {
  const isMaximised = await focusedWindowIsMaximised();
  returnToBTT(isMaximised ? "focused window is maximised" : "focused window is not maximised");
})();
