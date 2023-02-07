function parsePixels({ _spdisplays_pixels, _spdisplays_resolution }) {
  let width, height;
  const regex = /^(\d+) x (\d+)/;
  [, width, height] = _spdisplays_pixels.match(regex);
  const pixels = { width: parseInt(width, 10), height: parseInt(height, 10) };
  [, width, height] = _spdisplays_resolution.match(regex);
  const resolution = {
    width: parseInt(width, 10),
    height: parseInt(height, 10),
  };
  const scale = pixels.width / resolution.width;
  return {
    ...resolution,
    scale,
  };
}

export default async function getDisplaysInfo() {
  const nickNames = {
    "DELL U3419W": "dell",
    "Color LCD": "hinkel",
    "Sidecar Display": "ipad",
  };

  const displayDataString = await runShellScript({
    script: "system_profiler SPDisplaysDataType -json",
  });
  const displayData = JSON.parse(displayDataString);
  const _displays = displayData.SPDisplaysDataType[0].spdisplays_ndrvs;

  let additionalDisplayCount = 0;
  return _displays.map((curr) => {
    const label =
      curr.spdisplays_main === "spdisplays_yes"
        ? "main"
        : `extra${++additionalDisplayCount}`;
    return {
      name: curr._name,
      nickName: nickNames[curr._name] || "external",
      label,
      ...parsePixels(curr),
    };
  });
}
