export default async function getWindowAndDesktopInfo() {
  const appleScript = `
    tell application "System Events"
      set appOfInterest to name of application processes whose frontmost is true
      set currentApplication to item 1 of appOfInterest
      set firstWindow to the first window of application process currentApplication
      set windowDimensions to size of firstWindow
      set windowPosition to position of firstWindow
    end tell
    tell application "Finder"
      set screenData to bounds of window of desktop
    end tell
    return "[" & (item 1 of windowPosition as text) & "," & (item 2 of windowPosition as text) & "," & (item 1 of windowDimensions as text) & "," & (item 2 of windowDimensions as text) & "," & (item 1 of screenData as text) & "," & (item 2 of screenData as text) & "," & (item 3 of screenData as text) & "," & (item 4 of screenData as text) & "]"
    `;

  const resultStr = await runAppleScript(appleScript);
  const result = JSON.parse(resultStr);
  const [
    winPosX,
    winPosY,
    winWidth,
    winHeight,
    deskPosX,
    deskPosY,
    deskWidth,
    deskHeight,
  ] = result.map((str) => parseInt(str, 10));

  return {
    winPosX,
    winPosY,
    winWidth,
    winHeight,
    deskPosX,
    deskPosY,
    deskWidth,
    deskHeight,
  };
}

