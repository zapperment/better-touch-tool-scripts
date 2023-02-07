/**
 * Gets information about the currently available screens, the focused window,
 * and the screen that the focused window is on.
 */

// noinspection JSUnresolvedVariable,SpellCheckingInspection

import "./lib/setupMocks.mjs";
import getDisplaysInfo from "./lib/getDisplaysInfo.mjs";
import getWindowAndDesktopInfo from "./lib/getWindowAndDesktopInfo.mjs";
import logError from "./lib/logError.mjs";
import getFocusedScreenInfo from "./lib/getFocusedScreenInfo.mjs";

// --------------------
// COPY CODE BELOW THIS
// --------------------

function getByLabel(displays, label) {
  return displays.find((display) => display.label === label);
}

(async () => {
  let displays;
  try {
    displays = await getDisplaysInfo();
  } catch (e) {
    logError("Error getting displays info with Shell script", e);
    return;
  }
  let winPosX, winPosY, winWidth, winHeight, deskPosX, deskPosY, deskWidth, deskHeight;
  try {
    ({ winPosX, winPosY, winWidth, winHeight, deskPosX, deskPosY, deskWidth, deskHeight } =
      await getWindowAndDesktopInfo());
  } catch (e) {
    logError("Error getting active window and desktop info with AppleScript", e);
    return;
  }

  const main = getByLabel(displays, "main");
  const extra1 = getByLabel(displays, "extra1");
  const extra2 = getByLabel(displays, "extra2");
  const extra3 = getByLabel(displays, "extra3");

  const bttVariables = [
    { isString: true, variable_name: "active_window_position_x", to: winPosX },
    { isString: true, variable_name: "active_window_position_y", to: winPosY },
    { variable_name: "active_window_width", to: winWidth },
    { variable_name: "active_window_height", to: winHeight },
    { variable_name: "desktop_position_x", to: deskPosX },
    { variable_name: "desktop_position_y", to: deskPosY },
    { variable_name: "desktop_width", to: deskWidth },
    { variable_name: "desktop_height", to: deskHeight },
    { isString: true, variable_name: "main_display_name", to: main.name },
    {
      isString: true,
      variable_name: "main_display_nickname",
      to: main.nickName,
    },
    { variable_name: "main_display_width", to: main.width },
    { variable_name: "main_display_height", to: main.height },
    { variable_name: "main_display_scale", to: main.scale },
    {
      isString: true,
      variable_name: "extra_display1_name",
      to: extra1?.name || "",
    },
    {
      isString: true,
      variable_name: "extra_display1_nickname",
      to: extra1?.nickName || "",
    },
    { variable_name: "extra_display1_width", to: extra1?.width || 0 },
    { variable_name: "extra_display1_height", to: extra1?.height || 0 },
    { variable_name: "extra_display1_scale", to: extra1?.scale || 0 },
    {
      isString: true,
      variable_name: "extra_display2_name",
      to: extra2?.name || "",
    },
    {
      isString: true,
      variable_name: "extra_display2_nickname",
      to: extra2?.nickName || "",
    },
    { variable_name: "extra_display2_width", to: extra2?.width || 0 },
    { variable_name: "extra_display2_height", to: extra2?.height || 0 },
    { variable_name: "extra_display2_scale", to: extra2?.scale || 0 },
    {
      isString: true,
      variable_name: "extra_display3_name",
      to: extra3?.name || "",
    },
    {
      isString: true,
      variable_name: "extra_display3_nickname",
      to: extra3?.nickName || "",
    },
    { variable_name: "extra_display3_width", to: extra3?.width || 0 },
    { variable_name: "extra_display3_height", to: extra3?.height || 0 },
    { variable_name: "extra_display3_scale", to: extra3?.scale || 0 },
  ];
  try {
    await Promise.all(
      bttVariables.map(({ isString, variable_name, to }) =>
        callBTT(isString ? "set_string_variable" : "set_number_variable", {
          variable_name,
          to,
        })
      )
    );
  } catch (e) {
    logError("Error setting variables", e);
    return;
  }

  let focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight;
  try {
    ({ focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight } = await getFocusedScreenInfo());
  } catch (e) {
    logError("Error getting focused screen info from BTT", e);
    return;
  }

  for (const { variable_name, to } of bttVariables) {
    BTTLog(`Variable: ${variable_name} = ${to}`);
  }

  BTTLog(`Variable: focused_screen_x = ${focusedScreenX}`);
  BTTLog(`Variable: focused_screen_y = ${focusedScreenY}`);
  BTTLog(`Variable: focused_screen_width = ${focusedScreenWidth}`);
  BTTLog(`Variable: focused_screen_height = ${focusedScreenHeight}`);

  returnToBTT("Success");
})();
