import getFocusedScreenInfo from "./getFocusedScreenInfoWithBttApi.mjs";
import getMenuBarHeight from "./getMenuBarHeight.mjs";
import { stageManagerMarginWidth } from "./config.mjs";
import getFocusedWindowInfo from "./getFocusedWindowInfo.mjs";

export default async function focusedWindowIsMaximised() {
  const { focusedScreenX, focusedScreenY, focusedScreenWidth, focusedScreenHeight } =
    await getFocusedScreenInfo();
  const { focusedWindowX, focusedWindowY, focusedWindowWidth, focusedWindowHeight } =
    await getFocusedWindowInfo();
  const menuBarHeight = getMenuBarHeight(focusedScreenWidth, focusedScreenHeight);

  const isInUpperLeftCorner =
    focusedWindowX === focusedScreenX + stageManagerMarginWidth &&
    focusedWindowY === focusedScreenY + menuBarHeight;
  const isMaximumSize =
    focusedWindowWidth === focusedScreenWidth - stageManagerMarginWidth &&
    focusedWindowHeight === focusedScreenHeight - menuBarHeight;
  const isMaximised = isInUpperLeftCorner && isMaximumSize;

  BTTLog(`focusedScreenX: ${focusedScreenX}`);
  BTTLog(`focusedScreenY: ${focusedScreenY}`);
  BTTLog(`focusedScreenWidth: ${focusedScreenWidth}`);
  BTTLog(`focusedScreenHeight: ${focusedScreenHeight}`);
  BTTLog(`focusedWindowX: ${focusedWindowX}`);
  BTTLog(`focusedWindowY: ${focusedWindowY}`);
  BTTLog(`focusedWindowWidth: ${focusedWindowWidth}`);
  BTTLog(`focusedWindowHeight: ${focusedWindowHeight}`);
  BTTLog(`menuBarHeight: ${menuBarHeight}`);
  BTTLog(`stageManagerWidth: ${stageManagerMarginWidth}`);
  BTTLog(`isInUpperLeftCorner: ${isInUpperLeftCorner}`);
  BTTLog(`isMaximumSize: ${isMaximumSize}`);
  BTTLog(`isMaximised: ${isMaximised}`);

  return isMaximised;
}
