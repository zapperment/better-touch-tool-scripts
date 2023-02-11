// getting the variables with callBTT doesn't work for some reason,
// workaround is to get the variables from BTT via AppleScript (getFocusedScreenInfoWithAppleScript.mjs)
// see https://community.folivora.ai/t/get-width-and-height-of-the-display-that-the-currently-active-window-is-on-with-a-multi-monitor-setup/30234

export default async function getFocusedScreenInfo() {

  const focusedScreenX = await callBTT("get_number_variable", {
    variable_name: "focused_screen_x",
  });
  const focusedScreenY = await callBTT("get_number_variable", {
    variable_name: "focused_screen_y",
  });
  const focusedScreenWidth = await callBTT("get_number_variable", {
    variable_name: "focused_screen_width",
  });
  const focusedScreenHeight = await callBTT("get_number_variable", {
    variable_name: "focused_screen_height",
  });
  return {
    focusedScreenX,
    focusedScreenY,
    focusedScreenWidth,
    focusedScreenHeight,
  };
}
