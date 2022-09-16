"use strict";

var references = {
    "Martin-2009": {
        "lines": 2
    },
    "Body-2011": {
        "lines": 2
    },
    "Azagra-2011": {
        "lines": 3
    },
    "Bone-Health": {
        "lines": 2
    },
    "Ahmed-2009": {
        "lines": 2
    },
    "Osteoporosis-Foundation": {
        "lines": 2
    },
    "Panula-2011": {
        "lines": 3
    },
    "Genuis-2012": {
        "lines": 3
    },
    "Rude-2004": {
        "lines": 2
    },
    "Chen-2019": {
        "lines": 2
    },
    "Sizar-2022": {
        "lines": 1
    },
    "Cherniack-2008": {
        "lines": 2
    },
    "Lips-2010": {
        "lines": 2
    },
    "Shahnazari-2019": {
        "lines": 3
    },
    "Reid-2019": {
        "lines": 2
    },
    "Burt-2019": {
        "lines": 3
    },
    "Okura-2010": {
        "lines": 3
    },
    "Geleijnse-2004": {
        "lines": 3
    },
    "Bugel-2008": {
        "lines": 2
    },
    "Akbari-2018": {
        "lines": 2
    },
    "Rodriguez-2019": {
        "lines": 4
    },
    "Apalset-2011": {
        "lines": 2
    },
    "Bunyaratavej-2009": {
        "lines": 2
    },
    "Cockayne-2006": {
        "lines": 3
    },
    "Schwalfenberg-2017": {
        "lines": 2
    },
    "Iwamoto-2009": {
        "lines": 3
    },
    "Shiraki-2000": {
        "lines": 3
    },
    "Orimo-1992": {
        "lines": 3
    },
    "Harvard": {
        "lines": 1
    },
    "Zinnuroglu-2011": {
        "lines": 3
    },
    "Hall-1998": {
        "lines": 2
    },
    "Gabbay-2010": {
        "lines": 2
    },
    "Chuin-2009": {
        "lines": 2
    },
    "Malmir-2018": {
        "lines": 3
    },
    "Sahni-2009": {
        "lines": 3
    },
    "Lan-2022": {
        "lines": 3
    },
    "Wong-2019": {
        "lines": 3
    },
    "Shuid-2019": {
        "lines": 2
    },
    "Mata-Granados-2013": {
        "lines": 3
    },
    "Wolf-2006": {
        "lines": 2
    },
    "Hamidi-2012": {
        "lines": 2
    },
    "Straub-2007": {
        "lines": 2
    },
    "Cosman-2014": {
        "lines": 2
    },
    "Weaver-2016": {
        "lines": 3
    },
    "Bueno-2008": {
        "lines": 2
    },
    "Zhu-2013": {
        "lines": 3
    },
    "Waldman-2015": {
        "lines": 2
    },
    "Heaney-1989": {
        "lines": 2
    },
    "Matsuzaki-2006": {
        "lines": 3
    },
    "Grober-2015": {
        "lines": 2
    },
    "Barbagallo-2009": {
        "lines": 2
    },
    "Mahdavi-Roshan-2015": {
        "lines": 3
    },
    "Kunutsor-2017": {
        "lines": 3
    },
    "Veronese-2017": {
        "lines": 3
    },
    "Aydin-2010": {
        "lines": 3
    },
    "Orchard-2014": {
        "lines": 3
    },
    "Farsinejad-Marj-2016": {
        "lines": 3
    },
    "Abraham-1990": {
        "lines": 4
    },
    "Ryder-2005": {
        "lines": 3
    },
    "Carnauba-2017": {
        "lines": 3
    },
    "Dawson-Hughes-2009": {
        "lines": 4
    },
    "Sebastian-2005": {
        "lines": 3
    },
    "Tylavsky-2008": {
        "lines": 4
    },
    "MacDonald-2005": {
        "lines": 4
    },
    "Green-1991": {
        "lines": 3
    },
    "Lin-2003": {
        "lines": 3
    },
    "Cogswell-2012": {
        "lines": 2
    },
    "Price-2013": {
        "lines": 3
    },
    "Li-2010": {
        "lines": 3
    },
    "Spector-2008": {
        "lines": 4
    },
    "Higgs-2017": {
        "lines": 2
    },
    "Price-2012": {
        "lines": 3
    },
    "Khaliq-2018": {
        "lines": 2
    },
    "Pizzorno-2015": {
        "lines": 2
    },
    "Della-Pepa-2016": {
        "lines": 2
    },
    "Xinhua-2018": {
        "lines": 2
    },
    "Zofkova-2013": {
        "lines": 2
    },
    "Hoeg-2012": {
        "lines": 3
    },
    "Wang-2019": {
        "lines": 3
    },
    "Beukhof-2016": {
        "lines": 3
    },
    "Capozzi-2020": {
        "lines": 3
    },
    "O-Connor-2020": {
        "lines": 2
    },
    "Xinhua-2020": {
        "lines": 2
    },
    "Zhang-2022": {
        "lines": 3
    },
    "Jennings-2016": {
        "lines": 3
    },
    "Civitelli-1992": {
        "lines": 2
    },
    "Furst-1993": {
        "lines": 3
    },
    "de-Paz-Lugo-2007": {
        "lines": 3
    },
    "de-Paz-Lugo-2018": {
        "lines": 3
    },
    "Visser-1994": {
        "lines": 2
    },
    "Goel-2014": {
        "lines": 2
    },
    "Seigler-2021": {
        "lines": 2
    },
    "Pandey-2009": {
        "lines": 2
    },
    "Arts-2005": {
        "lines": 2
    },
    "Pojer-2013": {
        "lines": 2
    },
    "Minatel-2017": {
        "lines": 2
    },
    "Knekt-2002": {
        "lines": 2
    },
    "Habauzit-2012": {
        "lines": 3
    },
    "Neuhouser-2004": {
        "lines": 2
    },
    "Hertog-1995": {
        "lines": 3
    },
    "Ramesh-2021": {
        "lines": 3
    },
    "Martiniakova-2020": {
        "lines": 2
    },
    "Wong-SK-2019": {
        "lines": 3
    },
    "Sharma-2019": {
        "lines": 2
    },
    "Pang-2006": {
        "lines": 3
    },
    "Hirata-2009": {
        "lines": 2
    },
    "Wang-2017": {
        "lines": 2
    },
    "Kim-2011": {
        "lines": 3
    },
    "Jing-2019": {
        "lines": 3
    },
    "Vakili-2021": {
        "lines": 3
    },
    "Li-2011": {
        "lines": 3
    },
    "Niu-2020": {
        "lines": 3
    },
    "Welch-2012": {
        "lines": 3
    },
    "Chisari-2019": {
        "lines": 2
    },
    "Wang-2021": {
        "lines": 4
    },
    "Wong-2020": {
        "lines": 2
    },
    "Rao-2012": {
        "lines": 3
    },
    "Lee-2020": {
        "lines": 3
    },
    "Choi-2011": {
        "lines": 3
    },
    "Adhikary-2018": {
        "lines": 2
    },
    "Zhao-2019": {
        "lines": 2
    },
    "Tang-2022": {
        "lines": 3
    },
    "Liu-2021": {
        "lines": 3
    },
    "Wang-2013": {
        "lines": 3
    },
    "Martiniakova-2022": {
        "lines": 3
    },
    "Shen-2011": {
        "lines": 2
    },
    "Sun-2017": {
        "lines": 2
    },
    "Lee-2021": {
        "lines": 3
    },
    "Hegarty-2000": {
        "lines": 2
    },
    "Devine-2007": {
        "lines": 2
    },
    "Myers-2015": {
        "lines": 3
    },
};
