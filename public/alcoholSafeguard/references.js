"use strict";

var references = {
    "Ambadath-2010": {
        "text": "Ambadath V, Comparative study of the efficacy of ascorbic acid (Vitamin C), quercetin, and thiamine (Vitamin B1) for reversing ethanol-induced toxicity. Journal of medicinal food. Dec 2010;13(6):1485-1489.",
        "lines": 3
    },
    "Chen-2013": {
        "text": "Chen Y, Glutathione defense mechanism in liver injury: Insights from animal models. Food and chemical toxicology: an international journal published for the British Industrial Biological Research Association. Oct 2013;60:38-44.",
        "lines": 4
    },
    "Das-2010": {
        "text": "Das SK, Protective effect of resveratrol and vitamin E against ethanol-induced oxidative damage in mice: biochemical and immunological basis. Indian journal of biochemistry & biophysics. Feb 2010;47(1):32-37.",
        "lines": 3
    },
    "EFSA-2010": {
        "text": "EFSA Journal, Scientific opinion on the substantiation of health claims related to vitamin B6\" 2010. doi:10.2903/j.efsa.2010.1759",
        "lines": 2
    },
    "Eriksson-2020": {
        "text": "Eriksson CJP, L-Cysteine containing vitamin supplement which prevents or alleviates alcohol-related hangover symptoms: nausea, headache, stress, and anxiety. Alcohol. Oct 20 2020;55(6):660-666. doi:10.1093/alcalc/agaa082",
        "lines": 4
    },
    "Fang-2016": {
        "text": "Fang W, Natural Products for the Prevention and Treatment of Hangover and Alcohol Use Disorder. Molecules 2016, 21(1), 64;",
        "lines": 2
    },
    "Gao-2015": {
        "text": "Gao Y, Anti-inflammatory function of ginsenoside Rg1 (ginseng extract) on alcoholic hepatitis through glucocorticoid receptor related nuclear factor-kappa B pathway. Journal of Ethnopharmacology. Sep 15 2015;173:231-240.",
        "lines": 4
    },
    "Gibson-2008": {
        "text": "Gibson A, Alcohol increases homocysteine and reduces B vitamin concentration in healthy male volunteers. 2008 Nov;101(11):881-7",
        "lines": 2
    },
    "Han-2016": {
        "text": "Han KH, Relationships among alcoholic liver disease, antioxidants, and antioxidant enzymes. World journal of gastroenterology: WJG. Jan 7 2016;22(1):37-49.",
        "lines": 3
    },
    "Hobson-2010": {
        "text": "Hobson R, Hydration status and the diuretic action of a small dose of alcohol. 2010 Jul-Aug;45(4):366-73.",
        "lines": 2
    },
    "Khan-1973": {
        "text": "Khan MA, Alcohol-induced hangover. A double-blind comparison of pyritinol (Vitamin B6) and placebo in preventing hangover symptoms. Quarterly journal of studies on alcohol. Dec 1973;34(4):1195-1201.",
        "lines": 3
    },
    "Kim-2013": {
        "text": "Kim HG, Antifatigue effects of Panax ginseng: a randomised, double-blind, placebo-controlled trial. PloS one. 2013;8(4):e61271.",
        "lines": 2
    },
    "Lee-2009": {
        "text": "Lee HS, Effects of a preparation of combined glutathione-enriched yeast ... extracts on ethanol hangover. Journal of medicinal food. Dec 2009;12(6):1359-1367.",
        "lines": 3
    },
    "Lee-Kwak-2014": {
        "text": "Lee MH, Kwak JH, Red ginseng relieves the effects of alcohol consumption and hangover symptoms in healthy men: a randomized crossover study. Food Funct. Mar 2014;5(3):528-534.",
        "lines": 3
    },
    "Lee-Kim-2014": {
        "text": "Lee DI, Kim ST, Ginsenoside-free molecules from steam-dried ginseng berry promote ethanol metabolism: an alternative choice for an alcohol hangover. J Food Sci. Jul 2014;79(7):C1323-1330.",
        "lines": 3
    },
    "Li-2019": {
        "text": "Li et al. Dihydromyricetin ameliorates memory impairment induced by acute sleep deprivation. European Journal of Pharmacology (2019).",
        "lines": 2
    },
    "Li-2014": {
        "text": "Li JP, Nrf2 pathway activation contributes to anti-fibrosis effects of ginsenoside Rg1 (ginseng extract) in a rat model of alcohol- and CCl4-induced hepatic fibrosis. Acta pharmacologica Sinica. Aug 2014;35(8):1031-1044.",
        "lines": 4
    },
    "Li-2012": {
        "text": "Li, l-Theanine prevents alcoholic liver injury through enhancing the antioxidant capability of hepatocytes. Food Chem Toxicol. 2012 Feb;50(2):363-72.",
        "lines": 3
    },
    "McCarty-2013": {
        "text": "McCarty MF. Nutraceutical strategies for ameliorating the toxic effects of alcohol. Med Hypotheses. Apr 2013;80(4):456-462.",
        "lines": 2
    },
    "Medici-2013": {
        "text": "Medici V, Folate (Vitamin B9), alcohol, and liver disease. Mol Nutr Food Res. Apr 2013;57(4):596-606.",
        "lines": 2
    },
    "Min-2010": {
        "text": "Min JA, The application of minerals in managing alcohol hangover: a preliminary review. Current drug abuse reviews. Jun 2010;3(2):110-115.",
        "lines": 2
    },
    "Mosharov-2000": {
        "text": "Mosharov, The quantitatively important relationship between homocysteine metabolism and glutathione synthesis by the transsulfuration pathway and its regulation by redox changes. Biochemistry. 2000;39:13005-13011.",
        "lines": 4
    },
    "Ojeda-2015": {
        "text": "Ojeda ML, Binge drinking during adolescence disrupts selenium homeostasis and its main hepatic selenoprotein expression. Alcohol Clin Exp Res. May 2015;39(5):818-826.",
        "lines": 3
    },
    "Ong-2015": {
        "text": "Ong WY, Protective effects of ginseng on neurological disorders. Front Aging Neurosci. 2015;7:129.",
        "lines": 2
    },
    "Palatty-2013": {
        "text": "Palatty, Ginger in the prevention of nausea and vomiting: a review. Review Crit Rev Food Sci Nutr. 2013;53(7):659-69.",
        "lines": 2
    },
    "Romani-2008": {
        "text": "Romani AM, Magnesium homeostasis and alcohol consumption. Magnesium research: official organ of the International Society for the Development of Research on Magnesium. Dec 2008;21(4):197-204.",
        "lines": 3
    },
    "Rouma-2012": {
        "text": "Rouma K. Evaluation of Opuntia ficus indica f. inermis (Prickly Pear) fruit juice hepatoprotective effect upon alcohol toxicity in rats. Gen. Physiol. Biophys. 2012, 31, 335-342.",
        "lines": 3
    },
    "Rua-2014": {
        "text": "Rua RM, Serum selenium levels and oxidative balance as differential markers in hepatic damage caused by alcohol. Life sciences. Jan 17 2014;94(2):158-163.",
        "lines": 3
    },
    "Sadzuka-2005": {
        "text": "Sadzuka Y, Effects of theanine on alcohol metabolism and hepatic toxicity Biol Pharm Bull 2005 Sep;28(9):1702-6. doi: 10.1248/bpb.28.1702.",
        "lines": 2
    },
    "Sanders-1996": {
        "text": "Sanders, A relatively unknown antioxidant, alpha-lipoic acid, may be more potent than vitamins C and E. Press Release University of California at Berkeley, Public Information Office.",
        "lines": 3
    },
    "Shen-2012": {
        "text": "Shen Ye, Dihydromyricetin as a novel anti-alcohol intoxication medication Journal of Neuroscience 4 January 2012, 32 (1) 390-401",
        "lines": 2
    },
    "Silva-2020": {
        "text": "Silva J, Dihydromyricetin protects the liver via changes in lipid metabolism and enhanced ethanol (alcohol) metabolism. Alcohol Clin Exp Res 2020 May;44(5):1046-1060.",
        "lines": 3
    },
    "Sprince-1975": {
        "text": "Sprince, Protective action of ascorbic acid (vitamin C) and sulfur compounds (cysteine) against acetaldehyde toxicity: implications in alcoholism and smoking. Agents and Actions 1975 May;5(2):164-73.",
        "lines": 3
    },
    "Uneyama-2017": {
        "text": "Uneyama, New functions and potential applications of amino acids, Adv Biochem Eng Biotechnol 2017;159:273-287.",
        "lines": 2
    },
    "Vargas-Mendoza-2014": {
        "text": "Vargas-Mendoza N, Hepatoprotective effect of silymarin (Milk Thistle extract). World J Hepatol. Mar 27 2014;6(3):144-149.",
        "lines": 2
    },
    "Verster-2019": {
        "text": "Verster, Dietary nutrient intake, alcohol metabolism, and hangover severity. J Clin Med. 2019 Sep; 8(9): 1316.",
        "lines": 2
    },
    "Wiese-2004": {
        "text": "Wiese J, Effect of Opuntia ficus indica (Prickly Pear) on symptoms of the alcohol hangover. Arch Intern Med. 2004;164(12):1334-1340.",
        "lines": 2
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
    var text = references[referenceClass].text;
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
    caretBorder.style.top  = (y - 4.5 - tooltipFallHeight) + "px";
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