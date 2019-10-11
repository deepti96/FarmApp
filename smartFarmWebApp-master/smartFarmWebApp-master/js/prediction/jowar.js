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

        mpld3.draw_figure("fig_el124901398488362738809628417702", {
            "id": "el12490139848836273880",
            "data": {
                "data01": [
                    [1997.0, 267300.0],
                    [1998.0, 153760.0],
                    [1999.0, 173226.0],
                    [2000.0, 134525.0],
                    [2001.0, 254398.0],
                    [2002.0, 68484.0],
                    [2003.0, 527422.0],
                    [2004.0, 263900.0],
                    [2005.0, 169732.0],
                    [2006.0, 367816.0],
                    [2007.0, 392653.0],
                    [2008.0, 333003.0],
                    [2009.0, 104192.0],
                    [2010.0, 508877.0]
                ],
                "data04": [
                    [0.6568847072879331, 0.02299484915378955],
                    [0.9790919952210274, 0.02299484915378955],
                    [0.9850657108721624, 0.02299484915378955],
                    [0.9850657108721624, 0.03219278881530538],
                    [0.9850657108721624, 0.16556291390728475],
                    [0.9850657108721624, 0.17476085356880058],
                    [0.9790919952210274, 0.17476085356880058],
                    [0.6568847072879331, 0.17476085356880058],
                    [0.6509109916367981, 0.17476085356880058],
                    [0.6509109916367981, 0.16556291390728475],
                    [0.6509109916367981, 0.03219278881530538],
                    [0.6509109916367981, 0.02299484915378955],
                    [0.6568847072879331, 0.02299484915378955]
                ],
                "data03": [
                    [0.662858422939068, 0.13566961000735833, 0.0666850625459897],
                    [0.7225955794504181, 0.13566961000735833, 0.0666850625459897]
                ],
                "data02": [
                    [2011.0, 206795.57978069037],
                    [2012.0, 384619.3647217192],
                    [2013.0, 410341.69666994736],
                    [2014.0, 587480.1006649584],
                    [2015.0, 525369.1509285476],
                    [2016.0, 278745.0832621213],
                    [2017.0, 389496.63209959306]
                ]
            },
            "plugins": [{
                "type": "reset"
            }, {
                "button": true,
                "type": "zoom",
                "enabled": false
            }, {
                "button": true,
                "type": "boxzoom",
                "enabled": false
            }],
            "axes": [{
                "id": "el12490139848837155080",
                "xlim": [1996.0, 2018.0],
                "texts": [{
                    "color": "#000000",
                    "id": "el12490139848834373616",
                    "h_anchor": "middle",
                    "text": "Years",
                    "rotation": -0.0,
                    "position": [0.49999999999999994, -0.09657836644591611],
                    "fontsize": 10.0,
                    "alpha": 1,
                    "v_baseline": "hanging",
                    "coordinates": "axes",
                    "zorder": 3
                }, {
                    "color": "#000000",
                    "id": "el12490139848833471040",
                    "h_anchor": "middle",
                    "text": "Jowar",
                    "rotation": -90.0,
                    "position": [-0.14523596176821982, 0.49999999999999994],
                    "fontsize": 10.0,
                    "alpha": 1,
                    "v_baseline": "auto",
                    "coordinates": "axes",
                    "zorder": 3
                }, {
                    "color": "#000000",
                    "id": "el12490139848836624680",
                    "h_anchor": "middle",
                    "text": "Jowar Yield",
                    "rotation": -0.0,
                    "position": [0.49999999999999994, 1.0275938189845473],
                    "fontsize": 12.0,
                    "alpha": 1,
                    "v_baseline": "auto",
                    "coordinates": "axes",
                    "zorder": 3
                }, {
                    "color": "#000000",
                    "id": "el12490139848837601656",
                    "h_anchor": "start",
                    "text": "Old Stats",
                    "rotation": -0.0,
                    "position": [0.7464904420549582, 0.11957321559970566],
                    "fontsize": 10.0,
                    "alpha": 1,
                    "v_baseline": "auto",
                    "coordinates": "axes",
                    "zorder": 1000003.0
                }, {
                    "color": "#000000",
                    "id": "el12490139848837603224",
                    "h_anchor": "start",
                    "text": "Predicted Stats",
                    "rotation": -0.0,
                    "position": [0.7464904420549582, 0.05058866813833701],
                    "fontsize": 10.0,
                    "alpha": 1,
                    "v_baseline": "auto",
                    "coordinates": "axes",
                    "zorder": 1000003.0
                }],
                "sharex": [],
                "ylim": [42534.19496675208, 613429.9056982063],
                "sharey": [],
                "yscale": "linear",
                "zoomable": true,
                "lines": [{
                    "color": "#1F77B4",
                    "id": "el12490139848837680432",
                    "alpha": 1,
                    "xindex": 0,
                    "drawstyle": "default",
                    "data": "data01",
                    "dasharray": "none",
                    "zorder": 2,
                    "linewidth": 1.5,
                    "yindex": 1,
                    "coordinates": "data"
                }, {
                    "color": "#FF7F0E",
                    "id": "el12490139848837680824",
                    "alpha": 1,
                    "xindex": 0,
                    "drawstyle": "default",
                    "data": "data02",
                    "dasharray": "none",
                    "zorder": 2,
                    "linewidth": 1.5,
                    "yindex": 1,
                    "coordinates": "data"
                }, {
                    "color": "#1F77B4",
                    "id": "el12490139848837602160",
                    "alpha": 1,
                    "xindex": 0,
                    "drawstyle": "default",
                    "data": "data03",
                    "dasharray": "none",
                    "zorder": 1000002.0,
                    "linewidth": 1.5,
                    "yindex": 1,
                    "coordinates": "axes"
                }, {
                    "color": "#FF7F0E",
                    "id": "el12490139848836231576",
                    "alpha": 1,
                    "xindex": 0,
                    "drawstyle": "default",
                    "data": "data03",
                    "dasharray": "none",
                    "zorder": 1000002.0,
                    "linewidth": 1.5,
                    "yindex": 2,
                    "coordinates": "axes"
                }],
                "xdomain": [1996.0, 2018.0],
                "paths": [{
                    "id": "el12490139848837601152",
                    "xindex": 0,
                    "edgewidth": 1.0,
                    "dasharray": "none",
                    "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                    "coordinates": "axes",
                    "data": "data04",
                    "alpha": 0.8,
                    "edgecolor": "#CCCCCC",
                    "zorder": 1000000.0,
                    "facecolor": "#FFFFFF",
                    "yindex": 1
                }],
                "xscale": "linear",
                "images": [],
                "bbox": [0.125, 0.125, 0.775, 0.755],
                "markers": [],
                "axesbgalpha": null,
                "collections": [],
                "axesbg": "#FFFFFF",
                "ydomain": [42534.19496675208, 613429.9056982063],
                "axes": [{
                    "tickformat": null,
                    "scale": "linear",
                    "fontsize": 10.0,
                    "grid": {
                        "gridOn": false
                    },
                    "tickvalues": null,
                    "visible": true,
                    "nticks": 11,
                    "position": "bottom"
                }, {
                    "tickformat": null,
                    "scale": "linear",
                    "fontsize": 10.0,
                    "grid": {
                        "gridOn": false
                    },
                    "tickvalues": null,
                    "visible": true,
                    "nticks": 8,
                    "position": "left"
                }]
            }],
            "height": 288.0,
            "width": 432.0
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

            mpld3.draw_figure("fig_el124901398488362738809628417702", {
                "id": "el12490139848836273880",
                "data": {
                    "data01": [
                        [1997.0, 267300.0],
                        [1998.0, 153760.0],
                        [1999.0, 173226.0],
                        [2000.0, 134525.0],
                        [2001.0, 254398.0],
                        [2002.0, 68484.0],
                        [2003.0, 527422.0],
                        [2004.0, 263900.0],
                        [2005.0, 169732.0],
                        [2006.0, 367816.0],
                        [2007.0, 392653.0],
                        [2008.0, 333003.0],
                        [2009.0, 104192.0],
                        [2010.0, 508877.0]
                    ],
                    "data04": [
                        [0.6568847072879331, 0.02299484915378955],
                        [0.9790919952210274, 0.02299484915378955],
                        [0.9850657108721624, 0.02299484915378955],
                        [0.9850657108721624, 0.03219278881530538],
                        [0.9850657108721624, 0.16556291390728475],
                        [0.9850657108721624, 0.17476085356880058],
                        [0.9790919952210274, 0.17476085356880058],
                        [0.6568847072879331, 0.17476085356880058],
                        [0.6509109916367981, 0.17476085356880058],
                        [0.6509109916367981, 0.16556291390728475],
                        [0.6509109916367981, 0.03219278881530538],
                        [0.6509109916367981, 0.02299484915378955],
                        [0.6568847072879331, 0.02299484915378955]
                    ],
                    "data03": [
                        [0.662858422939068, 0.13566961000735833, 0.0666850625459897],
                        [0.7225955794504181, 0.13566961000735833, 0.0666850625459897]
                    ],
                    "data02": [
                        [2011.0, 206795.57978069037],
                        [2012.0, 384619.3647217192],
                        [2013.0, 410341.69666994736],
                        [2014.0, 587480.1006649584],
                        [2015.0, 525369.1509285476],
                        [2016.0, 278745.0832621213],
                        [2017.0, 389496.63209959306]
                    ]
                },
                "plugins": [{
                    "type": "reset"
                }, {
                    "button": true,
                    "type": "zoom",
                    "enabled": false
                }, {
                    "button": true,
                    "type": "boxzoom",
                    "enabled": false
                }],
                "axes": [{
                    "id": "el12490139848837155080",
                    "xlim": [1996.0, 2018.0],
                    "texts": [{
                        "color": "#000000",
                        "id": "el12490139848834373616",
                        "h_anchor": "middle",
                        "text": "Years",
                        "rotation": -0.0,
                        "position": [0.49999999999999994, -0.09657836644591611],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "hanging",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848833471040",
                        "h_anchor": "middle",
                        "text": "Jowar",
                        "rotation": -90.0,
                        "position": [-0.14523596176821982, 0.49999999999999994],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848836624680",
                        "h_anchor": "middle",
                        "text": "Jowar Yield",
                        "rotation": -0.0,
                        "position": [0.49999999999999994, 1.0275938189845473],
                        "fontsize": 12.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848837601656",
                        "h_anchor": "start",
                        "text": "Old Stats",
                        "rotation": -0.0,
                        "position": [0.7464904420549582, 0.11957321559970566],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 1000003.0
                    }, {
                        "color": "#000000",
                        "id": "el12490139848837603224",
                        "h_anchor": "start",
                        "text": "Predicted Stats",
                        "rotation": -0.0,
                        "position": [0.7464904420549582, 0.05058866813833701],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 1000003.0
                    }],
                    "sharex": [],
                    "ylim": [42534.19496675208, 613429.9056982063],
                    "sharey": [],
                    "yscale": "linear",
                    "zoomable": true,
                    "lines": [{
                        "color": "#1F77B4",
                        "id": "el12490139848837680432",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data01",
                        "dasharray": "none",
                        "zorder": 2,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "data"
                    }, {
                        "color": "#FF7F0E",
                        "id": "el12490139848837680824",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data02",
                        "dasharray": "none",
                        "zorder": 2,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "data"
                    }, {
                        "color": "#1F77B4",
                        "id": "el12490139848837602160",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data03",
                        "dasharray": "none",
                        "zorder": 1000002.0,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "axes"
                    }, {
                        "color": "#FF7F0E",
                        "id": "el12490139848836231576",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data03",
                        "dasharray": "none",
                        "zorder": 1000002.0,
                        "linewidth": 1.5,
                        "yindex": 2,
                        "coordinates": "axes"
                    }],
                    "xdomain": [1996.0, 2018.0],
                    "paths": [{
                        "id": "el12490139848837601152",
                        "xindex": 0,
                        "edgewidth": 1.0,
                        "dasharray": "none",
                        "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                        "coordinates": "axes",
                        "data": "data04",
                        "alpha": 0.8,
                        "edgecolor": "#CCCCCC",
                        "zorder": 1000000.0,
                        "facecolor": "#FFFFFF",
                        "yindex": 1
                    }],
                    "xscale": "linear",
                    "images": [],
                    "bbox": [0.125, 0.125, 0.775, 0.755],
                    "markers": [],
                    "axesbgalpha": null,
                    "collections": [],
                    "axesbg": "#FFFFFF",
                    "ydomain": [42534.19496675208, 613429.9056982063],
                    "axes": [{
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "tickvalues": null,
                        "visible": true,
                        "nticks": 11,
                        "position": "bottom"
                    }, {
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "tickvalues": null,
                        "visible": true,
                        "nticks": 8,
                        "position": "left"
                    }]
                }],
                "height": 288.0,
                "width": 432.0
            });
        });
    });
} else {
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function () {
        mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.js", function () {

            mpld3.draw_figure("fig_el124901398488362738809628417702", {
                "id": "el12490139848836273880",
                "data": {
                    "data01": [
                        [1997.0, 267300.0],
                        [1998.0, 153760.0],
                        [1999.0, 173226.0],
                        [2000.0, 134525.0],
                        [2001.0, 254398.0],
                        [2002.0, 68484.0],
                        [2003.0, 527422.0],
                        [2004.0, 263900.0],
                        [2005.0, 169732.0],
                        [2006.0, 367816.0],
                        [2007.0, 392653.0],
                        [2008.0, 333003.0],
                        [2009.0, 104192.0],
                        [2010.0, 508877.0]
                    ],
                    "data04": [
                        [0.6568847072879331, 0.02299484915378955],
                        [0.9790919952210274, 0.02299484915378955],
                        [0.9850657108721624, 0.02299484915378955],
                        [0.9850657108721624, 0.03219278881530538],
                        [0.9850657108721624, 0.16556291390728475],
                        [0.9850657108721624, 0.17476085356880058],
                        [0.9790919952210274, 0.17476085356880058],
                        [0.6568847072879331, 0.17476085356880058],
                        [0.6509109916367981, 0.17476085356880058],
                        [0.6509109916367981, 0.16556291390728475],
                        [0.6509109916367981, 0.03219278881530538],
                        [0.6509109916367981, 0.02299484915378955],
                        [0.6568847072879331, 0.02299484915378955]
                    ],
                    "data03": [
                        [0.662858422939068, 0.13566961000735833, 0.0666850625459897],
                        [0.7225955794504181, 0.13566961000735833, 0.0666850625459897]
                    ],
                    "data02": [
                        [2011.0, 206795.57978069037],
                        [2012.0, 384619.3647217192],
                        [2013.0, 410341.69666994736],
                        [2014.0, 587480.1006649584],
                        [2015.0, 525369.1509285476],
                        [2016.0, 278745.0832621213],
                        [2017.0, 389496.63209959306]
                    ]
                },
                "plugins": [{
                    "type": "reset"
                }, {
                    "button": true,
                    "type": "zoom",
                    "enabled": false
                }, {
                    "button": true,
                    "type": "boxzoom",
                    "enabled": false
                }],
                "axes": [{
                    "id": "el12490139848837155080",
                    "xlim": [1996.0, 2018.0],
                    "texts": [{
                        "color": "#000000",
                        "id": "el12490139848834373616",
                        "h_anchor": "middle",
                        "text": "Years",
                        "rotation": -0.0,
                        "position": [0.49999999999999994, -0.09657836644591611],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "hanging",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848833471040",
                        "h_anchor": "middle",
                        "text": "Jowar",
                        "rotation": -90.0,
                        "position": [-0.14523596176821982, 0.49999999999999994],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848836624680",
                        "h_anchor": "middle",
                        "text": "Jowar Yield",
                        "rotation": -0.0,
                        "position": [0.49999999999999994, 1.0275938189845473],
                        "fontsize": 12.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 3
                    }, {
                        "color": "#000000",
                        "id": "el12490139848837601656",
                        "h_anchor": "start",
                        "text": "Old Stats",
                        "rotation": -0.0,
                        "position": [0.7464904420549582, 0.11957321559970566],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 1000003.0
                    }, {
                        "color": "#000000",
                        "id": "el12490139848837603224",
                        "h_anchor": "start",
                        "text": "Predicted Stats",
                        "rotation": -0.0,
                        "position": [0.7464904420549582, 0.05058866813833701],
                        "fontsize": 10.0,
                        "alpha": 1,
                        "v_baseline": "auto",
                        "coordinates": "axes",
                        "zorder": 1000003.0
                    }],
                    "sharex": [],
                    "ylim": [42534.19496675208, 613429.9056982063],
                    "sharey": [],
                    "yscale": "linear",
                    "zoomable": true,
                    "lines": [{
                        "color": "#1F77B4",
                        "id": "el12490139848837680432",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data01",
                        "dasharray": "none",
                        "zorder": 2,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "data"
                    }, {
                        "color": "#FF7F0E",
                        "id": "el12490139848837680824",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data02",
                        "dasharray": "none",
                        "zorder": 2,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "data"
                    }, {
                        "color": "#1F77B4",
                        "id": "el12490139848837602160",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data03",
                        "dasharray": "none",
                        "zorder": 1000002.0,
                        "linewidth": 1.5,
                        "yindex": 1,
                        "coordinates": "axes"
                    }, {
                        "color": "#FF7F0E",
                        "id": "el12490139848836231576",
                        "alpha": 1,
                        "xindex": 0,
                        "drawstyle": "default",
                        "data": "data03",
                        "dasharray": "none",
                        "zorder": 1000002.0,
                        "linewidth": 1.5,
                        "yindex": 2,
                        "coordinates": "axes"
                    }],
                    "xdomain": [1996.0, 2018.0],
                    "paths": [{
                        "id": "el12490139848837601152",
                        "xindex": 0,
                        "edgewidth": 1.0,
                        "dasharray": "none",
                        "pathcodes": ["M", "L", "S", "L", "S", "L", "S", "L", "S", "Z"],
                        "coordinates": "axes",
                        "data": "data04",
                        "alpha": 0.8,
                        "edgecolor": "#CCCCCC",
                        "zorder": 1000000.0,
                        "facecolor": "#FFFFFF",
                        "yindex": 1
                    }],
                    "xscale": "linear",
                    "images": [],
                    "bbox": [0.125, 0.125, 0.775, 0.755],
                    "markers": [],
                    "axesbgalpha": null,
                    "collections": [],
                    "axesbg": "#FFFFFF",
                    "ydomain": [42534.19496675208, 613429.9056982063],
                    "axes": [{
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "tickvalues": null,
                        "visible": true,
                        "nticks": 11,
                        "position": "bottom"
                    }, {
                        "tickformat": null,
                        "scale": "linear",
                        "fontsize": 10.0,
                        "grid": {
                            "gridOn": false
                        },
                        "tickvalues": null,
                        "visible": true,
                        "nticks": 8,
                        "position": "left"
                    }]
                }],
                "height": 288.0,
                "width": 432.0
            });
        })
    });
}