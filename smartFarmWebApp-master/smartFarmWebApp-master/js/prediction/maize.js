function mpld3_load_lib(url, callback) {
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function () {
        console.warn("failed to load library " + url);
    };
    document.getElementsByTagName("head")[0].appendChild(s);
}

if (typeof (mpld3) !== "undefined" && mpld3._mpld3IsLoaded) {
    // already loaded: just create the figure
    ! function (mpld3) {

        mpld3.draw_figure("fig_el28441593081450392375801200", {
            "width": 640.0,
            "height": 480.0,
            "axes": [{
                "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                "xlim": [1996.0, 2018.0],
                "ylim": [810307.85, 2129343.15],
                "xdomain": [1996.0, 2018.0],
                "ydomain": [810307.85, 2129343.15],
                "xscale": "linear",
                "yscale": "linear",
                "axes": [{
                    "position": "bottom",
                    "nticks": 11,
                    "tickvalues": null,
                    "tickformat": null,
                    "scale": "linear",
                    "fontsize": 10.0,
                    "grid": {
                        "gridOn": false
                    },
                    "visible": true
                }, {
                    "position": "left",
                    "nticks": 8,
                    "tickvalues": null,
                    "tickformat": null,
                    "scale": "linear",
                    "fontsize": 10.0,
                    "grid": {
                        "gridOn": false
                    },
                    "visible": true
                }],
                "axesbg": "#FFFFFF",
                "axesbgalpha": null,
                "zoomable": true,
                "id": "el28441593182556400",
                "lines": [{
                    "data": "data01",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "data",
                    "id": "el28441593186501688",
                    "color": "#1F77B4",
                    "linewidth": 1.5,
                    "dasharray": "none",
                    "alpha": 1,
                    "zorder": 2,
                    "drawstyle": "default"
                }, {
                    "data": "data02",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "data",
                    "id": "el28441593186502136",
                    "color": "#FF7F0E",
                    "linewidth": 1.5,
                    "dasharray": "none",
                    "alpha": 1,
                    "zorder": 2,
                    "drawstyle": "default"
                }, {
                    "data": "data03",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "axes",
                    "id": "el28441593186607792",
                    "color": "#1F77B4",
                    "linewidth": 1.5,
                    "dasharray": "none",
                    "alpha": 1,
                    "zorder": 1000002.0,
                    "drawstyle": "default"
                }, {
                    "data": "data03",
                    "xindex": 0,
                    "yindex": 2,
                    "coordinates": "axes",
                    "id": "el28441593186609304",
                    "color": "#FF7F0E",
                    "linewidth": 1.5,
                    "dasharray": "none",
                    "alpha": 1,
                    "zorder": 1000002.0,
                    "drawstyle": "default"
                }],
                "paths": [{
                    "data": "data04",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "axes",
                    "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                    "id": "el28441593186504320",
                    "dasharray": "none",
                    "alpha": 0.8,
                    "facecolor": "#FFFFFF",
                    "edgecolor": "#CCCCCC",
                    "edgewidth": 1.0,
                    "zorder": 1000000.0
                }],
                "markers": [],
                "texts": [{
                    "text": "Years",
                    "position": [0.5, -0.07921476671476671],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "hanging",
                    "rotation": -0.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el28441593182558640"
                }, {
                    "text": "Maize",
                    "position": [-0.15479390681003585, 0.5],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -90.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el28441593186266472"
                }, {
                    "text": "Maize_Yield",
                    "position": [0.5, 1.0225468975468976],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 12.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el28441593186408656"
                }, {
                    "text": "Old Stats",
                    "position": [0.7613407258064516, 0.09860509860509864],
                    "coordinates": "axes",
                    "h_anchor": "start",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 1000003.0,
                    "id": "el28441593186607288"
                }, {
                    "text": "Predicted Stats",
                    "position": [0.7613407258064516, 0.04193722943722947],
                    "coordinates": "axes",
                    "h_anchor": "start",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 1000003.0,
                    "id": "el28441593186608856"
                }],
                "collections": [],
                "images": [],
                "sharex": [],
                "sharey": []
            }],
            "data": {
                "data01": [
                    [1997.0, 1222300.0],
                    [1998.0, 1022458.0],
                    [1999.0, 968657.0],
                    [2000.0, 1015326.0],
                    [2001.0, 1478871.0],
                    [2002.0, 870264.0],
                    [2003.0, 2069387.0],
                    [2004.0, 1265243.0],
                    [2005.0, 1103841.0],
                    [2006.0, 1117941.0],
                    [2007.0, 1961513.0],
                    [2008.0, 1831110.0],
                    [2009.0, 1144716.0],
                    [2010.0, 2061424.0]
                ],
                "data02": [
                    [2011.0, 1173922.543967083],
                    [2012.0, 1456452.2483345792],
                    [2013.0, 1329462.1599015817],
                    [2014.0, 1492480.5539130792],
                    [2015.0, 1935372.1955685988],
                    [2016.0, 1210727.0183506906],
                    [2017.0, 1965129.3246142864]
                ],
                "data03": [
                    [0.6829357078853047, 0.11175745550745554, 0.05508958633958637],
                    [0.7389392921146953, 0.11175745550745554, 0.05508958633958637]
                ],
                "data04": [
                    [0.6773353494623655, 0.0187890812890813],
                    [0.9803987455197131, 0.0187890812890813],
                    [0.9859991039426522, 0.0187890812890813],
                    [0.9859991039426522, 0.02630471380471383],
                    [0.9859991039426522, 0.13588263588263594],
                    [0.9859991039426522, 0.1433982683982684],
                    [0.9803987455197131, 0.1433982683982684],
                    [0.6773353494623655, 0.1433982683982684],
                    [0.6717349910394265, 0.1433982683982684],
                    [0.6717349910394265, 0.13588263588263594],
                    [0.6717349910394265, 0.02630471380471383],
                    [0.6717349910394265, 0.0187890812890813],
                    [0.6773353494623655, 0.0187890812890813]
                ]
            },
            "id": "el28441593081450392",
            "plugins": [{
                "type": "reset"
            }, {
                "type": "zoom",
                "button": true,
                "enabled": false
            }, {
                "type": "boxzoom",
                "button": true,
                "enabled": false
            }]
        });
    }(mpld3);
} else if (typeof define === "function" && define.amd) {
    // require.js is available: use it to load d3/mpld3
    require.config({
        paths: {
            d3: "https://mpld3.github.io/js/d3.v3.min"
        }
    });
    require(["d3"], function (d3) {
        window.d3 = d3;
        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function () {

            mpld3.draw_figure("fig_el28441593081450392375801200", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [810307.85, 2129343.15],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [810307.85, 2129343.15],
                    "xscale": "linear",
                    "yscale": "linear",
                    "axes": [{
                        "position": "bottom",
                        "nticks": 11,
                        "tickvalues": null,
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "visible": true
                    }, {
                        "position": "left",
                        "nticks": 8,
                        "tickvalues": null,
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "visible": true
                    }],
                    "axesbg": "#FFFFFF",
                    "axesbgalpha": null,
                    "zoomable": true,
                    "id": "el28441593182556400",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el28441593186501688",
                        "color": "#1F77B4",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 2,
                        "drawstyle": "default"
                    }, {
                        "data": "data02",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el28441593186502136",
                        "color": "#FF7F0E",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 2,
                        "drawstyle": "default"
                    }, {
                        "data": "data03",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "axes",
                        "id": "el28441593186607792",
                        "color": "#1F77B4",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 1000002.0,
                        "drawstyle": "default"
                    }, {
                        "data": "data03",
                        "xindex": 0,
                        "yindex": 2,
                        "coordinates": "axes",
                        "id": "el28441593186609304",
                        "color": "#FF7F0E",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 1000002.0,
                        "drawstyle": "default"
                    }],
                    "paths": [{
                        "data": "data04",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "axes",
                        "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                        "id": "el28441593186504320",
                        "dasharray": "none",
                        "alpha": 0.8,
                        "facecolor": "#FFFFFF",
                        "edgecolor": "#CCCCCC",
                        "edgewidth": 1.0,
                        "zorder": 1000000.0
                    }],
                    "markers": [],
                    "texts": [{
                        "text": "Years",
                        "position": [0.5, -0.07921476671476671],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "hanging",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593182558640"
                    }, {
                        "text": "Maize",
                        "position": [-0.15479390681003585, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593186266472"
                    }, {
                        "text": "Maize_Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593186408656"
                    }, {
                        "text": "Old Stats",
                        "position": [0.7613407258064516, 0.09860509860509864],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el28441593186607288"
                    }, {
                        "text": "Predicted Stats",
                        "position": [0.7613407258064516, 0.04193722943722947],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el28441593186608856"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 1222300.0],
                        [1998.0, 1022458.0],
                        [1999.0, 968657.0],
                        [2000.0, 1015326.0],
                        [2001.0, 1478871.0],
                        [2002.0, 870264.0],
                        [2003.0, 2069387.0],
                        [2004.0, 1265243.0],
                        [2005.0, 1103841.0],
                        [2006.0, 1117941.0],
                        [2007.0, 1961513.0],
                        [2008.0, 1831110.0],
                        [2009.0, 1144716.0],
                        [2010.0, 2061424.0]
                    ],
                    "data02": [
                        [2011.0, 1173922.543967083],
                        [2012.0, 1456452.2483345792],
                        [2013.0, 1329462.1599015817],
                        [2014.0, 1492480.5539130792],
                        [2015.0, 1935372.1955685988],
                        [2016.0, 1210727.0183506906],
                        [2017.0, 1965129.3246142864]
                    ],
                    "data03": [
                        [0.6829357078853047, 0.11175745550745554, 0.05508958633958637],
                        [0.7389392921146953, 0.11175745550745554, 0.05508958633958637]
                    ],
                    "data04": [
                        [0.6773353494623655, 0.0187890812890813],
                        [0.9803987455197131, 0.0187890812890813],
                        [0.9859991039426522, 0.0187890812890813],
                        [0.9859991039426522, 0.02630471380471383],
                        [0.9859991039426522, 0.13588263588263594],
                        [0.9859991039426522, 0.1433982683982684],
                        [0.9803987455197131, 0.1433982683982684],
                        [0.6773353494623655, 0.1433982683982684],
                        [0.6717349910394265, 0.1433982683982684],
                        [0.6717349910394265, 0.13588263588263594],
                        [0.6717349910394265, 0.02630471380471383],
                        [0.6717349910394265, 0.0187890812890813],
                        [0.6773353494623655, 0.0187890812890813]
                    ]
                },
                "id": "el28441593081450392",
                "plugins": [{
                    "type": "reset"
                }, {
                    "type": "zoom",
                    "button": true,
                    "enabled": false
                }, {
                    "type": "boxzoom",
                    "button": true,
                    "enabled": false
                }]
            });
        });
    });
} else {
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function () {
        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function () {

            mpld3.draw_figure("fig_el28441593081450392375801200", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [810307.85, 2129343.15],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [810307.85, 2129343.15],
                    "xscale": "linear",
                    "yscale": "linear",
                    "axes": [{
                        "position": "bottom",
                        "nticks": 11,
                        "tickvalues": null,
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "visible": true
                    }, {
                        "position": "left",
                        "nticks": 8,
                        "tickvalues": null,
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "visible": true
                    }],
                    "axesbg": "#FFFFFF",
                    "axesbgalpha": null,
                    "zoomable": true,
                    "id": "el28441593182556400",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el28441593186501688",
                        "color": "#1F77B4",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 2,
                        "drawstyle": "default"
                    }, {
                        "data": "data02",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el28441593186502136",
                        "color": "#FF7F0E",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 2,
                        "drawstyle": "default"
                    }, {
                        "data": "data03",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "axes",
                        "id": "el28441593186607792",
                        "color": "#1F77B4",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 1000002.0,
                        "drawstyle": "default"
                    }, {
                        "data": "data03",
                        "xindex": 0,
                        "yindex": 2,
                        "coordinates": "axes",
                        "id": "el28441593186609304",
                        "color": "#FF7F0E",
                        "linewidth": 1.5,
                        "dasharray": "none",
                        "alpha": 1,
                        "zorder": 1000002.0,
                        "drawstyle": "default"
                    }],
                    "paths": [{
                        "data": "data04",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "axes",
                        "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                        "id": "el28441593186504320",
                        "dasharray": "none",
                        "alpha": 0.8,
                        "facecolor": "#FFFFFF",
                        "edgecolor": "#CCCCCC",
                        "edgewidth": 1.0,
                        "zorder": 1000000.0
                    }],
                    "markers": [],
                    "texts": [{
                        "text": "Years",
                        "position": [0.5, -0.07921476671476671],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "hanging",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593182558640"
                    }, {
                        "text": "Maize",
                        "position": [-0.15479390681003585, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593186266472"
                    }, {
                        "text": "Maize_Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el28441593186408656"
                    }, {
                        "text": "Old Stats",
                        "position": [0.7613407258064516, 0.09860509860509864],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el28441593186607288"
                    }, {
                        "text": "Predicted Stats",
                        "position": [0.7613407258064516, 0.04193722943722947],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el28441593186608856"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 1222300.0],
                        [1998.0, 1022458.0],
                        [1999.0, 968657.0],
                        [2000.0, 1015326.0],
                        [2001.0, 1478871.0],
                        [2002.0, 870264.0],
                        [2003.0, 2069387.0],
                        [2004.0, 1265243.0],
                        [2005.0, 1103841.0],
                        [2006.0, 1117941.0],
                        [2007.0, 1961513.0],
                        [2008.0, 1831110.0],
                        [2009.0, 1144716.0],
                        [2010.0, 2061424.0]
                    ],
                    "data02": [
                        [2011.0, 1173922.543967083],
                        [2012.0, 1456452.2483345792],
                        [2013.0, 1329462.1599015817],
                        [2014.0, 1492480.5539130792],
                        [2015.0, 1935372.1955685988],
                        [2016.0, 1210727.0183506906],
                        [2017.0, 1965129.3246142864]
                    ],
                    "data03": [
                        [0.6829357078853047, 0.11175745550745554, 0.05508958633958637],
                        [0.7389392921146953, 0.11175745550745554, 0.05508958633958637]
                    ],
                    "data04": [
                        [0.6773353494623655, 0.0187890812890813],
                        [0.9803987455197131, 0.0187890812890813],
                        [0.9859991039426522, 0.0187890812890813],
                        [0.9859991039426522, 0.02630471380471383],
                        [0.9859991039426522, 0.13588263588263594],
                        [0.9859991039426522, 0.1433982683982684],
                        [0.9803987455197131, 0.1433982683982684],
                        [0.6773353494623655, 0.1433982683982684],
                        [0.6717349910394265, 0.1433982683982684],
                        [0.6717349910394265, 0.13588263588263594],
                        [0.6717349910394265, 0.02630471380471383],
                        [0.6717349910394265, 0.0187890812890813],
                        [0.6773353494623655, 0.0187890812890813]
                    ]
                },
                "id": "el28441593081450392",
                "plugins": [{
                    "type": "reset"
                }, {
                    "type": "zoom",
                    "button": true,
                    "enabled": false
                }, {
                    "type": "boxzoom",
                    "button": true,
                    "enabled": false
                }]
            });
        })
    });
}