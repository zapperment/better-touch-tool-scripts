// this module sets up mock functions for the BTT API
// only for testing in local IDE, this will be stripped
// when the dist files are created

if (process.env.NODE_ENV !== "production") {
  function BTTLog(message) {
    console.log(message);
  }
  async function callBTT() {}

  async function runAppleScript() {
    return "[2123,319,700,730,-573,0,3440,2557]";
  }

  async function runShellScript() {
    return `{
  "SPDisplaysDataType" : [
    {
      "_name" : "Apple M1 Pro",
      "_spdisplays_airplay" : "spdisplays_yes",
      "spdisplays_mtlgpufamilysupport" : "spdisplays_metal3",
      "spdisplays_ndrvs" : [
        {
          "_name" : "DELL U3419W",
          "_spdisplays_display-product-id" : "a130",
          "_spdisplays_display-serial-number" : "3046324c",
          "_spdisplays_display-vendor-id" : "10ac",
          "_spdisplays_display-week" : "24",
          "_spdisplays_display-year" : "2020",
          "_spdisplays_displayID" : "2",
          "_spdisplays_pixels" : "3440 x 1440",
          "_spdisplays_resolution" : "3440 x 1440 @ 60.00Hz",
          "spdisplays_main" : "spdisplays_yes",
          "spdisplays_mirror" : "spdisplays_off",
          "spdisplays_online" : "spdisplays_yes",
          "spdisplays_pixelresolution" : "spdisplays_uwqhd",
          "spdisplays_resolution" : "3440 x 1440 @ 60.00Hz",
          "spdisplays_rotation" : "spdisplays_supported"
        },
        {
          "_name" : "Color LCD",
          "_spdisplays_display-product-id" : "a050",
          "_spdisplays_display-serial-number" : "fd626d62",
          "_spdisplays_display-vendor-id" : "610",
          "_spdisplays_display-week" : "0",
          "_spdisplays_display-year" : "0",
          "_spdisplays_displayID" : "1",
          "_spdisplays_pixels" : "3456 x 2234",
          "_spdisplays_resolution" : "1728 x 1117 @ 120.00Hz",
          "spdisplays_ambient_brightness" : "spdisplays_yes",
          "spdisplays_connection_type" : "spdisplays_internal",
          "spdisplays_display_type" : "spdisplays_built-in-liquid-retina-xdr",
          "spdisplays_mirror" : "spdisplays_off",
          "spdisplays_online" : "spdisplays_yes",
          "spdisplays_pixelresolution" : "spdisplays_3456x2234Retina"
        },
        {
          "_name" : "Sidecar Display",
          "_spdisplays_CGSDID" : "4",
          "_spdisplays_display-product-id" : "69506164",
          "_spdisplays_display-serial-number" : "539",
          "_spdisplays_display-vendor-id" : "6161706c",
          "_spdisplays_display-week" : "0",
          "_spdisplays_display-year" : "0",
          "_spdisplays_displayID" : "4",
          "_spdisplays_pixels" : "2732 x 2048",
          "_spdisplays_resolution" : "1366 x 1024 @ 60.00Hz",
          "spdisplays_connection_type" : "spdisplays_airplay",
          "spdisplays_depth" : "CGSThirtytwoBitColor",
          "spdisplays_mirror" : "spdisplays_off",
          "spdisplays_pixelresolution" : "2732 x 2048",
          "spdisplays_resolution" : "1366 x 1024 @ 60.00Hz",
          "spdisplays_virtualdevice" : "spdisplays_yes"
        }
      ],
      "spdisplays_vendor" : "sppci_vendor_Apple",
      "sppci_bus" : "spdisplays_builtin",
      "sppci_cores" : "16",
      "sppci_device_type" : "spdisplays_gpu",
      "sppci_model" : "Apple M1 Pro"
    }
  ]
}`;
  }

  function returnToBTT() {}

  global.BTTLog = BTTLog;
  global.callBTT = callBTT;
  global.runAppleScript = runAppleScript;
  global.runShellScript = runShellScript;
  global.returnToBTT = returnToBTT;
}
