import { hinkelScreenDimensions, menuBarHeight } from "./config.mjs";

export default function getMenuBarHeight(screenWidth, screenHeight) {
  if (screenWidth === hinkelScreenDimensions.width && screenHeight === hinkelScreenDimensions.height) {
    return menuBarHeight.notch;
  }
  return menuBarHeight.normal;
}
