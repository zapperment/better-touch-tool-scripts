/**
 * Gets information about the screen that the focused window is on.
 */

import "./lib/setupMocks.mjs";
import logError from "./lib/logError.mjs";
import getFocusedScreenInfo from "./lib/getFocusedScreenInfo.mjs";

(async () => {
  let focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight;
  try {
    ({ focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight } = await getFocusedScreenInfo());
  } catch (e) {
    logError("Error getting focused screen info from BTT", e);
    return;
  }
  BTTLog(`focused screen visible frame width: ${focusedScreenWidth}`);

  const bttVariables = [
    { variable_name: "focused_screen_x", to: focusedScreenX },
    { variable_name: "focused_screen_y", to: focusedScreenY },
    { variable_name: "focused_screen_width", to: focusedScreenWidth },
    { variable_name: "focused_screen_height", to: focusedScreenHeight },
  ];

  for (const { variable_name, to } of bttVariables) {
    BTTLog(`${variable_name} = ${to}`);
  }

  returnToBTT(
    JSON.stringify(
      {
        focused_screen_x: focusedScreenX,
        focused_screen_y: focusedScreenY,
        focused_screen_width: focusedScreenWidth,
        focused_screen_height: focusedScreenHeight,
      },
      null,
      2
    )
  );
})();
