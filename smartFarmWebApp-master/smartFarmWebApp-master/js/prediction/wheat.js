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

        mpld3.draw_figure("fig_el1101215908994948086944580377", {
            "width": 640.0,
            "height": 480.0,
            "axes": [{
                "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                "xlim": [1996.0, 2018.0],
                "ylim": [4484944.4505431475, 13132606.538593907],
                "xdomain": [1996.0, 2018.0],
                "ydomain": [4484944.4505431475, 13132606.538593907],
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
                    "nticks": 11,
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
                "id": "el110121591000596720",
                "lines": [{
                    "data": "data01",
                    "xindex": 0,
                    "yindex": 1,
                    "coordinates": "data",
                    "id": "el110121591004542008",
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
                    "id": "el110121591004542456",
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
                    "id": "el110121591004656304",
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
                    "id": "el110121591004657816",
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
                    "id": "el110121591004544640",
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
                    "id": "el110121591000598960"
                }, {
                    "text": "Wheat",
                    "position": [-0.17243503584229392, 0.5],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -90.0,
                    "fontsize": 10.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el110121591004310888"
                }, {
                    "text": "Wheat Yield",
                    "position": [0.5, 1.0225468975468976],
                    "coordinates": "axes",
                    "h_anchor": "middle",
                    "v_baseline": "auto",
                    "rotation": -0.0,
                    "fontsize": 12.0,
                    "color": "#000000",
                    "alpha": 1,
                    "zorder": 3,
                    "id": "el110121591004448976"
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
                    "id": "el110121591004655800"
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
                    "id": "el110121591004657368"
                }],
                "collections": [],
                "images": [],
                "sharex": [],
                "sharey": []
            }],
            "data": {
                "data01": [
                    [1997.0, 6701000.0],
                    [1998.0, 6879818.0],
                    [1999.0, 6731932.0],
                    [2000.0, 5547100.0],
                    [2001.0, 6389030.0],
                    [2002.0, 4878020.0],
                    [2003.0, 5875862.0],
                    [2004.0, 5706871.0],
                    [2005.0, 5865293.0],
                    [2006.0, 7755883.0],
                    [2007.0, 7126040.0],
                    [2008.0, 7287074.0],
                    [2009.0, 7500851.0],
                    [2010.0, 10424350.0]
                ],
                "data02": [
                    [2011.0, 9832933.074089825],
                    [2012.0, 10015850.619470537],
                    [2013.0, 11407275.537572145],
                    [2014.0, 11250989.597190678],
                    [2015.0, 11095146.77871126],
                    [2016.0, 12217805.602549672],
                    [2017.0, 12739530.989137053]
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
            "id": "el110121590899494808",
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

            mpld3.draw_figure("fig_el1101215908994948086944580377", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [4484944.4505431475, 13132606.538593907],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [4484944.4505431475, 13132606.538593907],
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
                        "nticks": 11,
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
                    "id": "el110121591000596720",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el110121591004542008",
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
                        "id": "el110121591004542456",
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
                        "id": "el110121591004656304",
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
                        "id": "el110121591004657816",
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
                        "id": "el110121591004544640",
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
                        "id": "el110121591000598960"
                    }, {
                        "text": "Wheat",
                        "position": [-0.17243503584229392, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el110121591004310888"
                    }, {
                        "text": "Wheat Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el110121591004448976"
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
                        "id": "el110121591004655800"
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
                        "id": "el110121591004657368"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 6701000.0],
                        [1998.0, 6879818.0],
                        [1999.0, 6731932.0],
                        [2000.0, 5547100.0],
                        [2001.0, 6389030.0],
                        [2002.0, 4878020.0],
                        [2003.0, 5875862.0],
                        [2004.0, 5706871.0],
                        [2005.0, 5865293.0],
                        [2006.0, 7755883.0],
                        [2007.0, 7126040.0],
                        [2008.0, 7287074.0],
                        [2009.0, 7500851.0],
                        [2010.0, 10424350.0]
                    ],
                    "data02": [
                        [2011.0, 9832933.074089825],
                        [2012.0, 10015850.619470537],
                        [2013.0, 11407275.537572145],
                        [2014.0, 11250989.597190678],
                        [2015.0, 11095146.77871126],
                        [2016.0, 12217805.602549672],
                        [2017.0, 12739530.989137053]
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
                "id": "el110121590899494808",
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

            mpld3.draw_figure("fig_el1101215908994948086944580377", {
                "width": 640.0,
                "height": 480.0,
                "axes": [{
                    "bbox": [0.125, 0.10999999999999999, 0.775, 0.77],
                    "xlim": [1996.0, 2018.0],
                    "ylim": [4484944.4505431475, 13132606.538593907],
                    "xdomain": [1996.0, 2018.0],
                    "ydomain": [4484944.4505431475, 13132606.538593907],
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
                        "nticks": 11,
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
                    "id": "el110121591000596720",
                    "lines": [{
                        "data": "data01",
                        "xindex": 0,
                        "yindex": 1,
                        "coordinates": "data",
                        "id": "el110121591004542008",
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
                        "id": "el110121591004542456",
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
                        "id": "el110121591004656304",
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
                        "id": "el110121591004657816",
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
                        "id": "el110121591004544640",
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
                        "id": "el110121591000598960"
                    }, {
                        "text": "Wheat",
                        "position": [-0.17243503584229392, 0.5],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -90.0,
                        "fontsize": 10.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el110121591004310888"
                    }, {
                        "text": "Wheat Yield",
                        "position": [0.5, 1.0225468975468976],
                        "coordinates": "axes",
                        "h_anchor": "middle",
                        "v_baseline": "auto",
                        "rotation": -0.0,
                        "fontsize": 12.0,
                        "color": "#000000",
                        "alpha": 1,
                        "zorder": 3,
                        "id": "el110121591004448976"
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
                        "id": "el110121591004655800"
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
                        "id": "el110121591004657368"
                    }],
                    "collections": [],
                    "images": [],
                    "sharex": [],
                    "sharey": []
                }],
                "data": {
                    "data01": [
                        [1997.0, 6701000.0],
                        [1998.0, 6879818.0],
                        [1999.0, 6731932.0],
                        [2000.0, 5547100.0],
                        [2001.0, 6389030.0],
                        [2002.0, 4878020.0],
                        [2003.0, 5875862.0],
                        [2004.0, 5706871.0],
                        [2005.0, 5865293.0],
                        [2006.0, 7755883.0],
                        [2007.0, 7126040.0],
                        [2008.0, 7287074.0],
                        [2009.0, 7500851.0],
                        [2010.0, 10424350.0]
                    ],
                    "data02": [
                        [2011.0, 9832933.074089825],
                        [2012.0, 10015850.619470537],
                        [2013.0, 11407275.537572145],
                        [2014.0, 11250989.597190678],
                        [2015.0, 11095146.77871126],
                        [2016.0, 12217805.602549672],
                        [2017.0, 12739530.989137053]
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
                "id": "el110121590899494808",
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