// see https://community.folivora.ai/t/get-width-and-height-of-the-display-that-the-currently-active-window-is-on-with-a-multi-monitor-setup/30234

export default async function getFocusedScreenInfo() {

  const focusedScreenX = await callBTT("get_number_variable", {
    variable_name: "focused_screen_visible_frame_x",
  });
  const focusedScreenY = await callBTT("get_number_variable", {
    variable_name: "focused_screen_visible_frame_y",
  });
  const focusedScreenWidth = await callBTT("get_number_variable", {
    variable_name: "focused_screen_visible_frame_width",
  });
  const focusedScreenHeight = await callBTT("get_number_variable", {
    variable_name: "focused_screen_visible_frame_height",
  });
  return {
    focusedScreenX,
    focusedScreenY,
    focusedScreenWidth,
    focusedScreenHeight,
  };
}
