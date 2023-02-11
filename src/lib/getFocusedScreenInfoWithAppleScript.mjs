export default async function getFocusedScreenInfo() {

  const appleScript = `
    on toString(num)
      set str to num as text
      set AppleScript's text item delimiters to ","
      set tokens to every text item of str
      set AppleScript's text item delimiters to ""
      return item 1 of tokens
    end toString

    tell application "BetterTouchTool"
      set focusedScreenX to get_number_variable "focused_screen_visible_frame_x"
      set focusedScreenY to get_number_variable "focused_screen_visible_frame_y"
      set focusedScreenWidth to get_number_variable "focused_screen_visible_frame_width"
      set focusedScreenHeight to get_number_variable "focused_screen_visible_frame_height"
    end tell

    return "[" & toString(focusedScreenX) & "," & toString(focusedScreenY) & "," & toString(focusedScreenWidth) & "," & toString(focusedScreenHeight) & "]"
  `;

  const resultStr = await runAppleScript(appleScript);
  const result = JSON.parse(resultStr);
  const [focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight] = result.map((str) =>
    parseInt(str, 10)
  );
  return {
    focusedScreenX,
    focusedScreenY,
    focusedScreenWidth,
    focusedScreenHeight,
  };
}
