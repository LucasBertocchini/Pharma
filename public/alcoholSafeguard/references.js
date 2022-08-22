"use strict";

var references = {
    "Ambadath-2010": {
        "lines": 3
    },
    "Chapman-1970": {
        "lines": 2
    },
    "Chen-2013": {
        "lines": 4
    },
    "Coghlan-2012": {
        "lines": 2
    },
    "Das-2010": {
        "lines": 3
    },
    "EFSA-2010": {
        "lines": 2
    },
    "Eriksson-2020": {
        "lines": 4
    },
    "Fang-2016": {
        "lines": 2
    },
    "Gao-2015": {
        "lines": 4
    },
    "Gibson-2008": {
        "lines": 2
    },
    "Gould-2019": {
        "lines": 3
    },
    "Han-2016": {
        "lines": 3
    },
    "Hobson-2010": {
        "lines": 2
    },
    "Khan-1973": {
        "lines": 3
    },
    "Kim-2013": {
        "lines": 2
    },
    "Lee-2009": {
        "lines": 3
    },
    "Lee-Kwak-2014": {
        "lines": 3
    },
    "Lee-Kim-2014": {
        "lines": 3
    },
    "Li-2019": {
        "lines": 2
    },
    "Li-2014": {
        "lines": 4
    },
    "Li-2012": {
        "lines": 3
    },
    "McCarty-2013": {
        "lines": 2
    },
    "McCarty-2018": {
        "lines": 3
    },
    "Medici-2013": {
        "lines": 2
    },
    "Min-2010": {
        "lines": 2
    },
    "Mosharov-2000": {
        "lines": 4
    },
    "Ojeda-2015": {
        "lines": 3
    },
    "Ong-2015": {
        "lines": 2
    },
    "Palatty-2013": {
        "lines": 2
    },
    "Romani-2008": {
        "lines": 3
    },
    "Rouma-2012": {
        "lines": 3
    },
    "Rua-2014": {
        "lines": 3
    },
    "Sadzuka-2005": {
        "lines": 2
    },
    "Sanders-1996": {
        "lines": 3
    },
    "Sastre-1996": {
        "lines": 2
    },
    "Shen-2012": {
        "lines": 2
    },
    "Silva-2020": {
        "lines": 3
    },
    "Sprince-1975": {
        "lines": 3
    },
    "Uneyama-2017": {
        "lines": 2
    },
    "Vargas-Mendoza-2014": {
        "lines": 2
    },
    "Verster-2019": {
        "lines": 2
    },
    "Wiese-2004": {
        "lines": 2
    },
    "Yang-1995": {
        "lines": 3
    },
};

var tooltipDelay = 200; // ms
var tooltipFallHeight = 24; // px
var referenceLinks = document.querySelectorAll(".reference");

var tooltipOpen = false;
var openTooltips = [];

function closeTooltip(tooltip, caretBorder, caretInner, referenceLink, y, lines) {
    if (tooltipOpen) return;

    tooltip.style.top  = (y - 22 - 18 * lines) + "px";
    caretBorder.style.top  = (y - 4.5) + "px";
    caretInner.style.top  = (y - 5) + "px";
    tooltip.style.opacity = "1";
    caretBorder.style.opacity = "1";
    caretInner.style.opacity = "1";
    setTimeout(function() {
        tooltip.style.top  = (y - 22 - tooltipFallHeight - 18 * lines) + "px";
        caretBorder.style.top  = (y - 4.5 - tooltipFallHeight) + "px";
        caretInner.style.top  = (y - 5 - tooltipFallHeight) + "px";
        tooltip.style.opacity = "0";
        caretBorder.style.opacity = "0";
        caretInner.style.opacity = "0";
    }, 1);

    setTimeout(function () {
        tooltip.remove();
        caretBorder.remove();
        caretInner.remove();
        referenceLink.onmouseover = e => {
            createTooltip(referenceLink);
        };
    }, tooltipDelay);
}

function keepTooltipOpen() {
    tooltipOpen = true;
}

function createTooltip(referenceLink) {
    if (tooltipOpen) return;
    tooltipOpen = true;

    for (var openTooltip of openTooltips) {
        tooltipOpen = false;
        closeTooltip(
            openTooltip.tooltip,
            openTooltip.caretBorder,
            openTooltip.caretInner,
            openTooltip.referenceLink,
            openTooltip.y,
            openTooltip.lines
        );
    }
    openTooltips = [];

    var referenceClass = referenceLink.classList[1];
    var side = referenceLink.classList[2] || "center";
    var text = document.querySelector(`#${referenceClass}-reference`).innerHTML;
    var lines = references[referenceClass].lines;
    
    var leftOffset = 15;
    if (side == "center") leftOffset = 240 + 2;
    if (side == "right") leftOffset = 480 + 4;

    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.style.width = "480px";

    var tooltipText = document.createElement("span");
    tooltipText.innerHTML = text;
    tooltipText.style.fontSize = "16px";
    tooltip.append(tooltipText);

    var rect = referenceLink.getBoundingClientRect();
    var x = (rect.right + rect.left) / 2 + window.scrollX;
    var y = rect.top + window.scrollY;
    tooltip.style.left = (x - leftOffset) + "px";

    var caretBorder = document.createElement("a");
    caretBorder.href = `#${referenceClass}-reference`;
    caretBorder.classList.add("caret");
    caretBorder.classList.add("caret-border");
    caretBorder.style.left = (x - 6) + "px";
    caretBorder.onclick = e => {
        highlightLink(referenceClass);
    }

    var caretInner = document.createElement("a");
    caretInner.href = `#${referenceClass}-reference`;
    caretInner.classList.add("caret");
    caretInner.classList.add("caret-inner");
    caretInner.style.left = (x - 5) + "px";
    caretInner.onclick = e => {
        highlightLink(referenceClass);
    }
    
    tooltip.style.top  = (y - 22 - tooltipFallHeight - 18 * lines) + "px";
    caretBorder.style.top  = (y - 4 - tooltipFallHeight) + "px";
    caretInner.style.top  = (y - 5 - tooltipFallHeight) + "px";
    tooltip.style.opacity = "0";
    caretBorder.style.opacity = "0";
    caretInner.style.opacity = "0";
    setTimeout(function() {
        tooltip.style.top  = (y - 22 - 18 * lines) + "px";
        caretBorder.style.top  = (y - 4.5) + "px";
        caretInner.style.top  = (y - 5) + "px";
        tooltip.style.opacity = "1";
        caretBorder.style.opacity = "1";
        caretInner.style.opacity = "1";
    }, 1);

    document.body.append(tooltip);
    document.body.append(caretBorder);
    document.body.append(caretInner);

    openTooltips.push({
        "tooltip": tooltip,
        "caretBorder": caretBorder,
        "caretInner": caretInner,
        "referenceLink": referenceLink,
        "y": y,
        "lines": lines
    });

    var closeTooltipFunction = function () {
        tooltipOpen = false;
        setTimeout(function () {
            closeTooltip(tooltip, caretBorder, caretInner, referenceLink, y, lines);
        }, tooltipDelay);
    }

    tooltip.onmouseleave       = closeTooltipFunction;
    caretBorder.onmouseleave   = closeTooltipFunction;
    caretInner.onmouseleave    = closeTooltipFunction;
    referenceLink.onmouseleave = closeTooltipFunction;

    tooltip.onmouseover       = keepTooltipOpen;
    caretBorder.onmouseover   = keepTooltipOpen;
    caretInner.onmouseover    = keepTooltipOpen;
    referenceLink.onmouseover = keepTooltipOpen;
}

function highlightLink(referenceClass) {
    var id = `#${referenceClass}-reference`;
    var reference = document.querySelector(id);
    reference.style.backgroundColor = "rgba(153, 51, 255, 0.2)";
    setTimeout(function () {
        reference.style.transition = "background-color 2s";
        reference.style.backgroundColor = "#fff";
    }, 1);
    setTimeout(function () {
        reference.style.transition = "background-color 0s";
    }, 2000);
}

for (var referenceLink of referenceLinks) {
    referenceLink.onmouseover = e => {
        createTooltip(e.target.parentElement);
    }
    referenceLink.children[0].onclick = e => {
        var referenceClass = e.target.parentElement.classList[1];
        highlightLink(referenceClass);
    }
}