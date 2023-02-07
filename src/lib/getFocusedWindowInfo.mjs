export default async function getFocusedWindowInfo() {
  const appleScript = `
    tell application "System Events"
      set appOfInterest to name of application processes whose frontmost is true
      set currentApplication to item 1 of appOfInterest
      set firstWindow to the first window of application process currentApplication
      set windowDimensions to size of firstWindow
      set windowPosition to position of firstWindow
    end tell
    return "[" & (item 1 of windowPosition as text) & "," & (item 2 of windowPosition as text) & "," & (item 1 of windowDimensions as text) & "," & (item 2 of windowDimensions as text) & "]"
    `;

  const resultStr = await runAppleScript(appleScript);
  const result = JSON.parse(resultStr);
  const [focusedWindowX, focusedWindowY, focusedWindowWidth, focusedWindowHeight] = result.map((str) =>
    parseInt(str, 10)
  );

  return {
    focusedWindowX,
    focusedWindowY,
    focusedWindowWidth,
    focusedWindowHeight,
  };
}
