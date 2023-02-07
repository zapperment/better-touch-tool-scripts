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
