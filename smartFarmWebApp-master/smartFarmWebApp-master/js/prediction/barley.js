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

         mpld3.draw_figure("fig_el124901398489009299687220451363", {
             "id": "el12490139848900929968",
             "data": {
                 "data01": [
                     [1997.0, 502300.0],
                     [1998.0, 426352.0],
                     [1999.0, 365249.0],
                     [2000.0, 408688.0],
                     [2001.0, 446645.0],
                     [2002.0, 447087.0],
                     [2003.0, 408791.0],
                     [2004.0, 416445.0],
                     [2005.0, 457997.0],
                     [2006.0, 591582.0],
                     [2007.0, 538982.0],
                     [2008.0, 878382.0],
                     [2009.0, 619766.0],
                     [2010.0, 934651.0]
                 ],
                 "data04": [
                     [0.020908004778972505, 0.8252391464311994],
                     [0.3408751493428913, 0.8252391464311994],
                     [0.34684886499402623, 0.8252391464311994],
                     [0.34684886499402623, 0.8344370860927152],
                     [0.34684886499402623, 0.9678072111846947],
                     [0.34684886499402623, 0.9770051508462105],
                     [0.3408751493428913, 0.9770051508462105],
                     [0.020908004778972505, 0.9770051508462105],
                     [0.014934289127837508, 0.9770051508462105],
                     [0.014934289127837508, 0.9678072111846947],
                     [0.014934289127837508, 0.8344370860927152],
                     [0.014934289127837508, 0.8252391464311994],
                     [0.020908004778972505, 0.8252391464311994]
                 ],
                 "data03": [
                     [0.026881720430107503, 0.9379139072847682, 0.8689293598233996],
                     [0.08661887694145756, 0.9379139072847682, 0.8689293598233996]
                 ],
                 "data02": [
                     [2011.0, 1111353.4189847112],
                     [2012.0, 570035.4646688178],
                     [2013.0, 731652.5800231323],
                     [2014.0, 465110.4085942507],
                     [2015.0, 1094023.3100273162],
                     [2016.0, 858615.9623855129],
                     [2017.0, 907319.6857239604]
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
                 "id": "el12490139848833774984",
                 "xlim": [1996.0, 2018.0],
                 "texts": [{
                     "color": "#000000",
                     "id": "el12490139848833424744",
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
                     "id": "el12490139848837549136",
                     "h_anchor": "middle",
                     "text": "Barley",
                     "rotation": -90.0,
                     "position": [-0.16427718040621267, 0.49999999999999994],
                     "fontsize": 10.0,
                     "alpha": 1,
                     "v_baseline": "auto",
                     "coordinates": "axes",
                     "zorder": 3
                 }, {
                     "color": "#000000",
                     "id": "el12490139848837563560",
                     "h_anchor": "middle",
                     "text": "Barley Yield",
                     "rotation": -0.0,
                     "position": [0.49999999999999994, 1.0275938189845473],
                     "fontsize": 12.0,
                     "alpha": 1,
                     "v_baseline": "auto",
                     "coordinates": "axes",
                     "zorder": 3
                 }, {
                     "color": "#000000",
                     "id": "el12490139848834364304",
                     "h_anchor": "start",
                     "text": "Old Stats",
                     "rotation": -0.0,
                     "position": [0.11051373954599761, 0.9218175128771156],
                     "fontsize": 10.0,
                     "alpha": 1,
                     "v_baseline": "auto",
                     "coordinates": "axes",
                     "zorder": 1000003.0
                 }, {
                     "color": "#000000",
                     "id": "el12490139848836005392",
                     "h_anchor": "start",
                     "text": "predicted stats",
                     "rotation": -0.0,
                     "position": [0.11051373954599761, 0.8528329654157469],
                     "fontsize": 10.0,
                     "alpha": 1,
                     "v_baseline": "auto",
                     "coordinates": "axes",
                     "zorder": 1000003.0
                 }],
                 "sharex": [],
                 "ylim": [327943.77905076445, 1148658.6399339468],
                 "sharey": [],
                 "yscale": "linear",
                 "zoomable": true,
                 "lines": [{
                     "color": "#1F77B4",
                     "id": "el12490139848836673152",
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
                     "id": "el12490139848836669568",
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
                     "id": "el12490139848834366656",
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
                     "id": "el12490139848836005056",
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
                     "id": "el12490139848834363800",
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
                 "ydomain": [327943.77905076445, 1148658.6399339468],
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
                     "nticks": 10,
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

             mpld3.draw_figure("fig_el124901398489009299687220451363", {
                 "id": "el12490139848900929968",
                 "data": {
                     "data01": [
                         [1997.0, 502300.0],
                         [1998.0, 426352.0],
                         [1999.0, 365249.0],
                         [2000.0, 408688.0],
                         [2001.0, 446645.0],
                         [2002.0, 447087.0],
                         [2003.0, 408791.0],
                         [2004.0, 416445.0],
                         [2005.0, 457997.0],
                         [2006.0, 591582.0],
                         [2007.0, 538982.0],
                         [2008.0, 878382.0],
                         [2009.0, 619766.0],
                         [2010.0, 934651.0]
                     ],
                     "data04": [
                         [0.020908004778972505, 0.8252391464311994],
                         [0.3408751493428913, 0.8252391464311994],
                         [0.34684886499402623, 0.8252391464311994],
                         [0.34684886499402623, 0.8344370860927152],
                         [0.34684886499402623, 0.9678072111846947],
                         [0.34684886499402623, 0.9770051508462105],
                         [0.3408751493428913, 0.9770051508462105],
                         [0.020908004778972505, 0.9770051508462105],
                         [0.014934289127837508, 0.9770051508462105],
                         [0.014934289127837508, 0.9678072111846947],
                         [0.014934289127837508, 0.8344370860927152],
                         [0.014934289127837508, 0.8252391464311994],
                         [0.020908004778972505, 0.8252391464311994]
                     ],
                     "data03": [
                         [0.026881720430107503, 0.9379139072847682, 0.8689293598233996],
                         [0.08661887694145756, 0.9379139072847682, 0.8689293598233996]
                     ],
                     "data02": [
                         [2011.0, 1111353.4189847112],
                         [2012.0, 570035.4646688178],
                         [2013.0, 731652.5800231323],
                         [2014.0, 465110.4085942507],
                         [2015.0, 1094023.3100273162],
                         [2016.0, 858615.9623855129],
                         [2017.0, 907319.6857239604]
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
                     "id": "el12490139848833774984",
                     "xlim": [1996.0, 2018.0],
                     "texts": [{
                         "color": "#000000",
                         "id": "el12490139848833424744",
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
                         "id": "el12490139848837549136",
                         "h_anchor": "middle",
                         "text": "Barley",
                         "rotation": -90.0,
                         "position": [-0.16427718040621267, 0.49999999999999994],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 3
                     }, {
                         "color": "#000000",
                         "id": "el12490139848837563560",
                         "h_anchor": "middle",
                         "text": "Barley Yield",
                         "rotation": -0.0,
                         "position": [0.49999999999999994, 1.0275938189845473],
                         "fontsize": 12.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 3
                     }, {
                         "color": "#000000",
                         "id": "el12490139848834364304",
                         "h_anchor": "start",
                         "text": "Old Stats",
                         "rotation": -0.0,
                         "position": [0.11051373954599761, 0.9218175128771156],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 1000003.0
                     }, {
                         "color": "#000000",
                         "id": "el12490139848836005392",
                         "h_anchor": "start",
                         "text": "predicted stats",
                         "rotation": -0.0,
                         "position": [0.11051373954599761, 0.8528329654157469],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 1000003.0
                     }],
                     "sharex": [],
                     "ylim": [327943.77905076445, 1148658.6399339468],
                     "sharey": [],
                     "yscale": "linear",
                     "zoomable": true,
                     "lines": [{
                         "color": "#1F77B4",
                         "id": "el12490139848836673152",
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
                         "id": "el12490139848836669568",
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
                         "id": "el12490139848834366656",
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
                         "id": "el12490139848836005056",
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
                         "id": "el12490139848834363800",
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
                     "ydomain": [327943.77905076445, 1148658.6399339468],
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
                         "nticks": 10,
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

             mpld3.draw_figure("fig_el124901398489009299687220451363", {
                 "id": "el12490139848900929968",
                 "data": {
                     "data01": [
                         [1997.0, 502300.0],
                         [1998.0, 426352.0],
                         [1999.0, 365249.0],
                         [2000.0, 408688.0],
                         [2001.0, 446645.0],
                         [2002.0, 447087.0],
                         [2003.0, 408791.0],
                         [2004.0, 416445.0],
                         [2005.0, 457997.0],
                         [2006.0, 591582.0],
                         [2007.0, 538982.0],
                         [2008.0, 878382.0],
                         [2009.0, 619766.0],
                         [2010.0, 934651.0]
                     ],
                     "data04": [
                         [0.020908004778972505, 0.8252391464311994],
                         [0.3408751493428913, 0.8252391464311994],
                         [0.34684886499402623, 0.8252391464311994],
                         [0.34684886499402623, 0.8344370860927152],
                         [0.34684886499402623, 0.9678072111846947],
                         [0.34684886499402623, 0.9770051508462105],
                         [0.3408751493428913, 0.9770051508462105],
                         [0.020908004778972505, 0.9770051508462105],
                         [0.014934289127837508, 0.9770051508462105],
                         [0.014934289127837508, 0.9678072111846947],
                         [0.014934289127837508, 0.8344370860927152],
                         [0.014934289127837508, 0.8252391464311994],
                         [0.020908004778972505, 0.8252391464311994]
                     ],
                     "data03": [
                         [0.026881720430107503, 0.9379139072847682, 0.8689293598233996],
                         [0.08661887694145756, 0.9379139072847682, 0.8689293598233996]
                     ],
                     "data02": [
                         [2011.0, 1111353.4189847112],
                         [2012.0, 570035.4646688178],
                         [2013.0, 731652.5800231323],
                         [2014.0, 465110.4085942507],
                         [2015.0, 1094023.3100273162],
                         [2016.0, 858615.9623855129],
                         [2017.0, 907319.6857239604]
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
                     "id": "el12490139848833774984",
                     "xlim": [1996.0, 2018.0],
                     "texts": [{
                         "color": "#000000",
                         "id": "el12490139848833424744",
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
                         "id": "el12490139848837549136",
                         "h_anchor": "middle",
                         "text": "Barley",
                         "rotation": -90.0,
                         "position": [-0.16427718040621267, 0.49999999999999994],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 3
                     }, {
                         "color": "#000000",
                         "id": "el12490139848837563560",
                         "h_anchor": "middle",
                         "text": "Barley Yield",
                         "rotation": -0.0,
                         "position": [0.49999999999999994, 1.0275938189845473],
                         "fontsize": 12.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 3
                     }, {
                         "color": "#000000",
                         "id": "el12490139848834364304",
                         "h_anchor": "start",
                         "text": "Old Stats",
                         "rotation": -0.0,
                         "position": [0.11051373954599761, 0.9218175128771156],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 1000003.0
                     }, {
                         "color": "#000000",
                         "id": "el12490139848836005392",
                         "h_anchor": "start",
                         "text": "predicted stats",
                         "rotation": -0.0,
                         "position": [0.11051373954599761, 0.8528329654157469],
                         "fontsize": 10.0,
                         "alpha": 1,
                         "v_baseline": "auto",
                         "coordinates": "axes",
                         "zorder": 1000003.0
                     }],
                     "sharex": [],
                     "ylim": [327943.77905076445, 1148658.6399339468],
                     "sharey": [],
                     "yscale": "linear",
                     "zoomable": true,
                     "lines": [{
                         "color": "#1F77B4",
                         "id": "el12490139848836673152",
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
                         "id": "el12490139848836669568",
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
                         "id": "el12490139848834366656",
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
                         "id": "el12490139848836005056",
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
                         "id": "el12490139848834363800",
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
                     "ydomain": [327943.77905076445, 1148658.6399339468],
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
                         "nticks": 10,
                         "position": "left"
                     }]
                 }],
                 "height": 288.0,
                 "width": 432.0
             });
         })
     });
 }