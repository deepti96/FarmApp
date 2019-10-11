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

        mpld3.draw_figure("fig_el706415667263125687783256249", {
            "width": 640.0,
            "height": 480.0,
            "axes": [{
                "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                "xlim": [1996.0, 2018.0],
                "ylim": [358137.4645560039, 8273903.244323918],
                "xdomain": [1996.0, 2018.0],
                "ydomain": [358137.4645560039, 8273903.244323918],
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
                    "nticks": 10,
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
                "id": "el70641566825653696",
                "lines": [{
                    "data": "data01",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "data",
                    "id": "el70641566831515184",
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
                    "id": "el70641566831515632",
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
                    "id": "el70641566831600808",
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
                    "id": "el70641566831602320",
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
                    "id": "el70641566831599800",
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
                    "id": "el70641566825655936"
                }, {
                    "text": "Bajra",
                    "position": [-0.1545418906810036, 0.5],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -90.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el70641566831309432"
                }, {
                    "text": "Bajra Yield",
                    "position": [0.5, 1.0225468975468976],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 12.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el70641566831414184"
                }, {
                    "text": "Old Stats",
                    "position": [0.10360663082437274, 0.936417748917749],
                    "coordinates": "axes",
                    "h_anchor": "start",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 1000003.0,
                    "id": "el70641566831600304"
                }, {
                    "text": "Predicted Stats",
                    "position": [0.10360663082437274, 0.87974987974988],
                    "coordinates": "axes",
                    "h_anchor": "start",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 1000003.0,
                    "id": "el70641566831601872"
                }],
                "collections": [],
                "images": [],
                "sharex": [],
                "sharey": []
            }],
            "data": {
                "data01": [
                    [1997.0, 2509800.0],
                    [1998.0, 1800328.0],
                    [1999.0, 1300764.0],
                    [2000.0, 2046659.0],
                    [2001.0, 3819783.0],
                    [2002.0, 717945.0],
                    [2003.0, 6669825.0],
                    [2004.0, 3011054.0],
                    [2005.0, 2168332.0],
                    [2006.0, 3440400.0],
                    [2007.0, 4240852.0],
                    [2008.0, 4293938.0],
                    [2009.0, 2034875.0],
                    [2010.0, 6117800.0]
                ],
                "data02": [
                    [2011.0, 5722633.499195579],
                    [2012.0, 6378930.632102411],
                    [2013.0, 5295071.465819154],
                    [2014.0, 7914095.708879922],
                    [2015.0, 5512558.130130243],
                    [2016.0, 5525699.463653944],
                    [2017.0, 5771605.609908845]
                ],
                "data03": [
                    [0.025201612903225812, 0.9495701058201059, 0.8929022366522369],
                    [0.0812051971326165, 0.9495701058201059, 0.8929022366522369]
                ],
                "data04": [
                    [0.01960125448028671, 0.8566017316017316],
                    [0.3226646505376345, 0.8566017316017316],
                    [0.32826500896057353, 0.8566017316017316],
                    [0.32826500896057353, 0.8641173641173643],
                    [0.32826500896057353, 0.9736952861952863],
                    [0.32826500896057353, 0.9812109187109188],
                    [0.3226646505376345, 0.9812109187109188],
                    [0.01960125448028671, 0.9812109187109188],
                    [0.014000896057347667, 0.9812109187109188],
                    [0.014000896057347667, 0.9736952861952863],
                    [0.014000896057347667, 0.8641173641173643],
                    [0.014000896057347667, 0.8566017316017316],
                    [0.01960125448028671, 0.8566017316017316]
                ]
            },
            "id": "el70641566726312568",
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

            mpld3.draw_figure("fig_el706415667263125687783256249", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [358137.4645560039, 8273903.244323918],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [358137.4645560039, 8273903.244323918],
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
                        "nticks": 10,
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
                    "id": "el70641566825653696",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el70641566831515184",
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
                        "id": "el70641566831515632",
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
                        "id": "el70641566831600808",
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
                        "id": "el70641566831602320",
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
                        "id": "el70641566831599800",
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
                        "id": "el70641566825655936"
                    }, {
                        "text": "Bajra",
                        "position": [-0.1545418906810036, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el70641566831309432"
                    }, {
                        "text": "Bajra Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el70641566831414184"
                    }, {
                        "text": "Old Stats",
                        "position": [0.10360663082437274, 0.936417748917749],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el70641566831600304"
                    }, {
                        "text": "Predicted Stats",
                        "position": [0.10360663082437274, 0.87974987974988],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el70641566831601872"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 2509800.0],
                        [1998.0, 1800328.0],
                        [1999.0, 1300764.0],
                        [2000.0, 2046659.0],
                        [2001.0, 3819783.0],
                        [2002.0, 717945.0],
                        [2003.0, 6669825.0],
                        [2004.0, 3011054.0],
                        [2005.0, 2168332.0],
                        [2006.0, 3440400.0],
                        [2007.0, 4240852.0],
                        [2008.0, 4293938.0],
                        [2009.0, 2034875.0],
                        [2010.0, 6117800.0]
                    ],
                    "data02": [
                        [2011.0, 5722633.499195579],
                        [2012.0, 6378930.632102411],
                        [2013.0, 5295071.465819154],
                        [2014.0, 7914095.708879922],
                        [2015.0, 5512558.130130243],
                        [2016.0, 5525699.463653944],
                        [2017.0, 5771605.609908845]
                    ],
                    "data03": [
                        [0.025201612903225812, 0.9495701058201059, 0.8929022366522369],
                        [0.0812051971326165, 0.9495701058201059, 0.8929022366522369]
                    ],
                    "data04": [
                        [0.01960125448028671, 0.8566017316017316],
                        [0.3226646505376345, 0.8566017316017316],
                        [0.32826500896057353, 0.8566017316017316],
                        [0.32826500896057353, 0.8641173641173643],
                        [0.32826500896057353, 0.9736952861952863],
                        [0.32826500896057353, 0.9812109187109188],
                        [0.3226646505376345, 0.9812109187109188],
                        [0.01960125448028671, 0.9812109187109188],
                        [0.014000896057347667, 0.9812109187109188],
                        [0.014000896057347667, 0.9736952861952863],
                        [0.014000896057347667, 0.8641173641173643],
                        [0.014000896057347667, 0.8566017316017316],
                        [0.01960125448028671, 0.8566017316017316]
                    ]
                },
                "id": "el70641566726312568",
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

            mpld3.draw_figure("fig_el706415667263125687783256249", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [358137.4645560039, 8273903.244323918],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [358137.4645560039, 8273903.244323918],
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
                        "nticks": 10,
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
                    "id": "el70641566825653696",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el70641566831515184",
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
                        "id": "el70641566831515632",
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
                        "id": "el70641566831600808",
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
                        "id": "el70641566831602320",
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
                        "id": "el70641566831599800",
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
                        "id": "el70641566825655936"
                    }, {
                        "text": "Bajra",
                        "position": [-0.1545418906810036, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el70641566831309432"
                    }, {
                        "text": "Bajra Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el70641566831414184"
                    }, {
                        "text": "Old Stats",
                        "position": [0.10360663082437274, 0.936417748917749],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el70641566831600304"
                    }, {
                        "text": "Predicted Stats",
                        "position": [0.10360663082437274, 0.87974987974988],
                        "coordinates": "axes",
                        "h_anchor": "start",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 1000003.0,
                        "id": "el70641566831601872"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 2509800.0],
                        [1998.0, 1800328.0],
                        [1999.0, 1300764.0],
                        [2000.0, 2046659.0],
                        [2001.0, 3819783.0],
                        [2002.0, 717945.0],
                        [2003.0, 6669825.0],
                        [2004.0, 3011054.0],
                        [2005.0, 2168332.0],
                        [2006.0, 3440400.0],
                        [2007.0, 4240852.0],
                        [2008.0, 4293938.0],
                        [2009.0, 2034875.0],
                        [2010.0, 6117800.0]
                    ],
                    "data02": [
                        [2011.0, 5722633.499195579],
                        [2012.0, 6378930.632102411],
                        [2013.0, 5295071.465819154],
                        [2014.0, 7914095.708879922],
                        [2015.0, 5512558.130130243],
                        [2016.0, 5525699.463653944],
                        [2017.0, 5771605.609908845]
                    ],
                    "data03": [
                        [0.025201612903225812, 0.9495701058201059, 0.8929022366522369],
                        [0.0812051971326165, 0.9495701058201059, 0.8929022366522369]
                    ],
                    "data04": [
                        [0.01960125448028671, 0.8566017316017316],
                        [0.3226646505376345, 0.8566017316017316],
                        [0.32826500896057353, 0.8566017316017316],
                        [0.32826500896057353, 0.8641173641173643],
                        [0.32826500896057353, 0.9736952861952863],
                        [0.32826500896057353, 0.9812109187109188],
                        [0.3226646505376345, 0.9812109187109188],
                        [0.01960125448028671, 0.9812109187109188],
                        [0.014000896057347667, 0.9812109187109188],
                        [0.014000896057347667, 0.9736952861952863],
                        [0.014000896057347667, 0.8641173641173643],
                        [0.014000896057347667, 0.8566017316017316],
                        [0.01960125448028671, 0.8566017316017316]
                    ]
                },
                "id": "el70641566726312568",
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