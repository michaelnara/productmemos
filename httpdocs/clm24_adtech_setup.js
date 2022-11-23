var gptadslots = [];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

//load prebid
(function() {
  var mspb = document.createElement("script");
  mspb.async = true;
  mspb.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  mspb.src =
    (useSSL ? "https:" : "http:") +
    "//massariuscdn.com/prod/prebid.2.25.0-weboramaFix.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(mspb, node);
})();

//Load quantcast
(function() {
  var elem = document.createElement("script");
  elem.async = true;
  elem.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  elem.src =
    (useSSL ? "https:" : "http:") + "//quantcast.mgr.consensu.org/cmp.js";
  var scpt = document.getElementsByTagName("script")[0];
  scpt.parentNode.insertBefore(elem, scpt);
})();

//load gpt
(function() {
  var gads = document.createElement("script");
  gads.async = false;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src =
    (useSSL ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(gads, node);
})();

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
  googletag.pubads().disableInitialLoad();
});

var rectangleDesktopSizes = [[300, 600], [300, 250], [300, 300]];
var rectangleHomeDesktopSizes = [[300, 250], [300, 300]];
var mobileSizes = [
  [320, 100],
  [300, 100],
  [300, 250],
  [320, 240],
  [300, 50],
  [300, 300],
  [320, 50],
  [1, 1],
  [320, 180]
];
var leaderboardDesktopSizes = [[728, 90], [980, 90], [970, 90]];
var megaDesktopSizes = [[728, 90], [980, 90], [970, 90]];
var skyScraperSizes = [[120, 600], [160, 600]];

var rectangleSizes;
var leaderBoardSizes;
var megaSizes;

//define sizes for desktop/mobile
if (window.screen.availWidth < 768) {
  rectangleSizes = mobileSizes;
  rectangleHomeSizes = mobileSizes;
  leaderBoardSizes = mobileSizes;
  megaSizes = mobileSizes;
} else {
  rectangleSizes = rectangleDesktopSizes;
  rectangleHomeSizes = rectangleHomeDesktopSizes;
  leaderBoardSizes = leaderboardDesktopSizes;
  megaSizes = megaDesktopSizes;
}

//Define ad units
var adUnits = [];
var slot1 = {
  code: "/13436254/CLM24_rectangle_right_column",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909543"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061274,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061289,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot2 = {
  code: "/13436254/CLM24_banner_header_right",
  mediaTypes: {
    banner: {
      sizes: [[234, 90]]
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540862422",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22127078,
        keyValues: {
          hb: ["true"]
        }
      }
    }
  ]
};

var slot3 = {
  code: "/13436254/CLM24_rectangle_right_column2",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061274,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061289,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909465"
      }
    }
  ]
};

var slot4 = {
  code: "/13436254/CLM24_rectangle_right_column3",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061274,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061289,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909632"
      }
    }
  ]
};

var slot5 = {
  code: "/13436254/CLM24_banner_above_body",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 2208119,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080985,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot6 = {
  code: "/13436254/CLM24_banner_comments",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081170,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080947,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot7 = {
  code: "/13436254/CLM24_banner_intext",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061271,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061288,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot8 = {
  code: "/13436254/CLM24_banner_intext2",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061271,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061288,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot9 = {
  code: "/13436254/CLM24_banner_infeed1",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540862426",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22127020,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22127033,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot10 = {
  code: "/13436254/CLM24_banner_infeed2",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540862426",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22127041,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22127058,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot11 = {
  code: "/13436254/CLM24_banner_infeed3",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540862426",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22127053,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22127071,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot12 = {
  code: "/13436254/CLM24_banner_infeed4",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540862426",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22127057,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22127074,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot13 = {
  code: "/13436254/CLM24_banner_under_body",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081192,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080952,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot14 = {
  code: "/13436254/CLM24_banner_under_image",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081160,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080937,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot15 = {
  code: "/13436254/CLM24_banner_under_menu",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081187,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080995,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot16 = {
  code: "/13436254/CLM24_Flotante_horizontal",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081164,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080941,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot17 = {
  code: "/13436254/CLM24_Flotante_mega",
  mediaTypes: {
    banner: {
      sizes: megaSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540821841",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081188,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22081000,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909543"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot18 = {
  code: "/13436254/CLM24_Flotante_rectangular",
  mediaTypes: {
    banner: {
      sizes: rectangleSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081144,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061285,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909632"
      }
    }
  ]
};

var slot19 = {
  code: "/13436254/CLM24_horizontal_banner",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909465"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081182,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080990,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot20 = {
  code: "/13436254/CLM24_horizontal_banner2",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909543"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081182,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080990,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot21 = {
  code: "/13436254/CLM24_horizontal_banner3",
  mediaTypes: {
    banner: {
      sizes: leaderBoardSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819297",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081182,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080990,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot22 = {
  code: "/13436254/CLM24_megabanner_footer",
  mediaTypes: {
    banner: {
      sizes: megaSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540821841",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081155,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080933,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot23 = {
  code: "/13436254/CLM24_megabanner_middle",
  mediaTypes: {
    banner: {
      sizes: megaSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540821841",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081174,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22080980,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot24 = {
  code: "/13436254/CLM24_rectangle_in_home",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot25 = {
  code: "/13436254/CLM24_rectangle_in_home1.2",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot26 = {
  code: "/13436254/CLM24_rectangle_in_home1.5",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot27 = {
  code: "/13436254/CLM24_rectangle_in_home2.4",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot28 = {
  code: "/13436254/CLM24_rectangle_in_home2.1",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22131852,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22131853,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot29 = {
  code: "/13436254/CLM24_rectangle_in_home_3.1",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot30 = {
  code: "/13436254/CLM24_rectangle_in_home_3.2",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot31 = {
  code: "/13436254/CLM24_rectangle_in_home_3.5",
  mediaTypes: {
    banner: {
      sizes: rectangleHomeSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22081132,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268111"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    }
  ]
};

var slot32 = {
  code: "/13436254/CLM_24_megabanner_header",
  mediaTypes: {
    banner: {
      sizes: megaSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540821841",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061272,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268109"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268118"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2268115"
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "694985937688374_694986237688344"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: 22061287,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432054"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819365",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "openx",
      labelAny: ["phone"],
      params: {
        unit: "540819367",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909545"
      }
    }
  ]
};

var slot33 = {
  code: "/13436254/CLM24_Skyscraper",
  mediaTypes: {
    banner: {
      sizes: skyScraperSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061268,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268101"
      }
    }
  ]
};

var slot34 = {
  code: "/13436254/CLM24_Skyscraper_inner",
  mediaTypes: {
    banner: {
      sizes: skyScraperSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061268,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268101"
      }
    }
  ]
};

var slot35 = {
  code: "/13436254/CLM24_Skyscraper_right",
  mediaTypes: {
    banner: {
      sizes: skyScraperSizes
    }
  },
  bids: [
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540819300",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "284986",
        zoneId: "1432052"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 22061268,
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2268101"
      }
    }
  ]
};

if (msTag.page === "home") {
  adUnits = [
    slot18,
    slot19,
    slot20,
    slot21,
    slot22,
    slot23,
    slot24,
    slot25,
    slot26,
    slot27,
    slot28,
    slot29,
    slot30,
    slot31,
    slot32,
  ];
  if(window.screen.width > 1520) {
    adUnits.push(slot33,slot35);
  }
} else if (msTag.page === "article" || msTag.page === "rosText") {
  adUnits = [
    slot1,
    slot2,
    slot3,
    slot4,
    slot7,
    slot8,
    slot14,
    slot22,
    slot32
  ];
  if(window.screen.width > 1520) {
    adUnits.push(slot33,slot34,slot35);
  }
} else if (msTag.page === "section") {
  adUnits = [
    slot1,
    slot2,
    slot3,
    slot4,
    slot9,
    slot10,
    slot11,
    slot12,
    slot22,
    slot32
  ];
  if(window.screen.width > 1520) {
    adUnits.push(slot33,slot35);
  }
} else if (msTag.page === "ros" || msTag.page === "rosHome") {
  adUnits = [slot1, slot2, slot3, slot4, slot22, slot32];
  if(window.screen.width > 1520) {
    adUnits.push(slot33,slot35);
  }
} else {
  adUnits = [
    slot1,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6,
    slot7,
    slot8,
    slot9,
    slot10,
    slot11,
    slot12,
    slot13,
    slot14,
    slot15,
    slot16,
    slot17,
    slot18,
    slot19,
    slot20,
    slot21,
    slot22,
    slot23,
    slot24,
    slot25,
    slot26,
    slot27,
    slot28,
    slot29,
    slot30,
    slot31,
    slot32
  ];
  if(window.screen.width > 1520) {
    adUnits.push(slot33,slot34,slot35);
  }
}

var PREBID_TIMEOUT = 2500;
var FAILSAFE_TIMEOUT = 2000;
var DefM = 3.8;

var bidCap = 20;

pbjs.bidderSettings = {
  improvedigital: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  tmp1: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1.1, bidCap);
      }
    }
  },
  tmp2: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1.1, bidCap);
      }
    }
  },
  pubmatic: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  openx: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  justpremium: {
    bidCpmAdjustment: function(bidCpm, bid) {
      //ignore bids on wallpaper < 6EUR
      if (bid.cpm < 6.0 && bid.format == "wp") {
        return 0;
        //else send bid through as usual
      } else {
        if (bidCpm >= bidCap) {
          if (bidCpm >= bidCap) {
            return bidCpm;
          } else {
            return Math.min(bidCpm * DefM * 1, bidCap);
          }
        }
      }
    }
  },
  weborama: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  rubicon: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  visx: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  grid: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  appnexus: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  audienceNetwork: {
    bidCpmAdjustment: function(bidCpm) {
      if (bidCpm >= bidCap) {
        return bidCpm;
      } else {
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  }
};

const customConfigObject = {
  buckets: [
    {
      precision: 2,
      min: 0,
      max: 2.5,
      increment: 0.01
    },
    {
      precision: 2,
      min: 2.5,
      max: 10,
      increment: 0.1
    },
    {
      precision: 2,
      min: 10,
      max: 20,
      increment: 0.2
    },
    {
      precision: 2,
      min: 20,
      max: 50,
      increment: 0.5
    }
  ]
};

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.aliasBidder("improvedigital", "weborama");
  pbjs.aliasBidder("appnexus", "tmp1");
  pbjs.aliasBidder("appnexus", "tmp2");
  pbjs.setConfig({
    sizeConfig: [
      {
        mediaQuery: "(min-width: 1025px)",
        sizesSupported: [
          [1800, 1000],
          [1800, 200],
          [980, 90],
          [970, 1000],
          [970, 500],
          [970, 90],
          [728, 90],
          [300, 250],
          [300, 300],
          [320, 50],
          [160, 600],
          [120, 600],
          [120, 90],
          [300, 600],
          [234, 90]
        ],
        labels: ["desktop"]
      },
      {
        mediaQuery: "(min-width: 901px) and (max-width: 1024px)",
        sizesSupported: [
          [728, 90],
          [300, 250],
          [300, 300],
          [320, 50],
          [160, 600],
          [120, 600],
          [120, 90],
          [300, 600],
          [234, 90]
        ],
        labels: ["tablet"]
      },
      {
        mediaQuery: "(min-width: 0px) and (max-width: 900px)",
        sizesSupported: [
          [300, 250],
          [320, 240],
          [300, 600],
          [300, 50],
          [300, 300],
          [320, 50],
          [300, 100],
          [320, 100],
          [468, 60],
          [16, 9]
        ],
        labels: ["phone"]
      }
    ],
    priceGranularity: customConfigObject,
    improvedigital: {
      usePrebidSizes: true
    },
    enableSendAllBids: true,
    bidderSequence: "random",
    bidderTimeout: PREBID_TIMEOUT,
    userSync: {
      syncDelay: 3000,
      syncEnabled: true,
      syncsPerBidder: 5,
      iframeEnabled: true
    },
    currency: {
      adServerCurrency: "EUR"
    }
  });
});

function initAdserver(bids) {
  console.log("request bids");
  for (let i in bids) {
    for (let j in bids[i].bids) {
      let bid = bids[i].bids[j];
      bid.adserverTargeting.hbBid = true;
      if (bid.width == 1800 && bid.height == 1000) {
        bid.width = 728;
        bid.height = 90;
      } else if (bid.width == 970 && bid.height == 1000) {
        bid.width = 970;
        bid.height = 250;
      }
    }
  }
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    pbjs.que.push(function() {
      pbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh();
    });
  });
}

googletag.cmd.push(function() {
  //Responsive mapping
  var rectangleMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 600], [300, 250], [300, 300]])
    .addSize([768, 0], [[300, 600], [300, 250], [300, 300]])
    .addSize(
      [0, 0],
      [
        [320, 100],
        [300, 100],
        [300, 250],
        [320, 240],
        [300, 50],
        [300, 300],
        [320, 50],
        [1, 1],
        [320, 180]
      ]
    )
    .build();

  var rectangleHomeMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 250], [300, 300]])
    .addSize([768, 0], [[300, 250], [300, 300]])
    .addSize(
      [0, 0],
      [
        [320, 100],
        [300, 100],
        [300, 250],
        [320, 240],
        [300, 50],
        [300, 300],
        [320, 50],
        [1, 1],
        [320, 180]
      ]
    )
    .build();

  var bannerHeaderRightMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[234, 90]])
    .addSize([768, 0], [[234, 90]])
    .addSize([0, 0], [])
    .build();

  var leaderboardMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90], [980, 90], [970, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [
        [320, 100],
        [300, 100],
        [300, 250],
        [320, 240],
        [300, 50],
        [300, 300],
        [320, 50],
        [1, 1],
        [320, 180]
      ]
    )
    .build();

  var megaMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90], [980, 90], [970, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize(
      [0, 0],
      [
        [320, 100],
        [300, 100],
        [300, 250],
        [320, 240],
        [300, 50],
        [300, 300],
        [320, 50],
        [1, 1],
        [320, 180]
      ]
    )
    .build();

  var skyscraperMapping = googletag
    .sizeMapping()
    .addSize([1520, 0], [[120, 600], [160, 600]])
    .addSize([0, 0], [])
    .build();

  var infeedMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 600], [300, 250], [300, 300], [728, 90]])
    .addSize([768, 0], [[300, 600], [300, 250], [300, 300], [728, 90]])
    .addSize(
      [0, 0],
      [
        [320, 100],
        [300, 100],
        [300, 250],
        [320, 240],
        [300, 50],
        [300, 300],
        [320, 50],
        [1, 1],
        [320, 180]
      ]
    )
    .build();

  var skyscraperInnerMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[120, 600]])
    .addSize([0, 0], [])
    .build();

  if (msTag.page === "home") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1565101471657-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home1.2",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313478855-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home1.5",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313531348-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home2.4",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313568116-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.1",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313633215-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.2",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313667803-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.5",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313701525-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home2.1",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569503152572-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[8] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1565101350014-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[9] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner2",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1569313739320-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[10] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner3",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1569313771958-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[11] = googletag
      .defineSlot(
        "/13436254/CLM24_Flotante_rectangular",
        [
          [320, 50],
          [320, 100],
          [300, 300],
          [300, 600],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 100]
        ],
        "div-gpt-ad-1565101323925-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[12] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_middle",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1565101443555-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[13] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_footer",
        [
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 100],
          [320, 240],
          [300, 250],
          [300, 50],
          [300, 300],
          [320, 50],
          [970, 90]
        ],
        "div-gpt-ad-1565101379306-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

      gptadslots[14] = googletag
      .defineSlot(
        "/13436254/CLM_24_megabanner_header",
        [
          [300, 300],
          [300, 250],
          [970, 90],
          [320, 50],
          [300, 100],
          [320, 100],
          [300, 50],
          [320, 240],
          [728, 90],
          [980, 90]
        ],
        "div-gpt-ad-1565101594355-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    if(window.screen.width > 1520) {
    gptadslots[15] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1565101501776-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

    gptadslots[16] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper_right",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1569313331835-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());
    }

  } else if (msTag.page === "article" || msTag.page === "rosText") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1565101921536-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column2",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569310993245-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column3",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569311610555-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_intext",
        [
          [320, 100],
          [300, 100],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 300],
          [300, 600],
          [320, 50]
        ],
        "div-gpt-ad-1565101126615-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_intext2",
        [
          [320, 100],
          [300, 100],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 300],
          [300, 600],
          [320, 50]
        ],
        "div-gpt-ad-1569311663632-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/CLM_24_megabanner_header",
        [
          [300, 300],
          [300, 250],
          [970, 90],
          [320, 50],
          [300, 100],
          [320, 100],
          [300, 50],
          [320, 240],
          [728, 90],
          [980, 90]
        ],
        "div-gpt-ad-1565101594355-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_header_right",
        [[234, 90]],
        "div-gpt-ad-1569313285443-0"
      )
      .defineSizeMapping(bannerHeaderRightMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_footer",
        [
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 100],
          [320, 240],
          [300, 250],
          [300, 50],
          [300, 300],
          [320, 50],
          [970, 90]
        ],
        "div-gpt-ad-1565101379306-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[8] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_under_image",
        [
          [320, 240],
          [300, 100],
          [300, 250],
          [300, 300],
          [970, 90],
          [300, 50],
          [320, 100],
          [320, 50],
          [980, 90],
          [728, 90]
        ],
        "div-gpt-ad-1565101176894-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

      if(window.screen.width > 1520) {
    gptadslots[9] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1565101501776-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

    gptadslots[10] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper_right",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1569313331835-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

    gptadslots[11] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper_inner",
        [[120, 600]],
        "div-gpt-ad-1569313367396-0"
      )
      .defineSizeMapping(skyscraperInnerMapping)
      .addService(googletag.pubads());
      }
  } else if (msTag.page === "section") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1565101921536-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column2",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569310993245-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column3",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569311610555-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed1",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569311713053-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed2",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313166778-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed3",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313202608-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed4",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313241481-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/CLM_24_megabanner_header",
        [
          [300, 300],
          [300, 250],
          [970, 90],
          [320, 50],
          [300, 100],
          [320, 100],
          [300, 50],
          [320, 240],
          [728, 90],
          [980, 90]
        ],
        "div-gpt-ad-1565101594355-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[8] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_header_right",
        [[234, 90]],
        "div-gpt-ad-1569313285443-0"
      )
      .defineSizeMapping(bannerHeaderRightMapping)
      .addService(googletag.pubads());

    gptadslots[9] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_footer",
        [
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 100],
          [320, 240],
          [300, 250],
          [300, 50],
          [300, 300],
          [320, 50],
          [970, 90]
        ],
        "div-gpt-ad-1565101379306-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

      if(window.screen.width > 1520) {
    gptadslots[10] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1565101501776-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

    gptadslots[11] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper_right",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1569313331835-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());
      }
  } else if (msTag.page === "rosHome" || msTag.page === "ros") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1565101921536-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column2",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569310993245-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column3",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569311610555-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/CLM_24_megabanner_header",
        [
          [300, 300],
          [300, 250],
          [970, 90],
          [320, 50],
          [300, 100],
          [320, 100],
          [300, 50],
          [320, 240],
          [728, 90],
          [980, 90]
        ],
        "div-gpt-ad-1565101594355-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_header_right",
        [[234, 90]],
        "div-gpt-ad-1569313285443-0"
      )
      .defineSizeMapping(bannerHeaderRightMapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_footer",
        [
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 100],
          [320, 240],
          [300, 250],
          [300, 50],
          [300, 300],
          [320, 50],
          [970, 90]
        ],
        "div-gpt-ad-1565101379306-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

      if(window.screen.width > 1520) {
    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1565101501776-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/CLM24_Skyscraper_right",
        [[120, 600], [160, 600]],
        "div-gpt-ad-1569313331835-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());
      }
  } else {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1565101921536-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_above_body",
        [
          [300, 250],
          [300, 300],
          [300, 100],
          [300, 50],
          [320, 240],
          [320, 100],
          [300, 600],
          [320, 50]
        ],
        "div-gpt-ad-1565101044440-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_comments",
        [
          [300, 250],
          [320, 240],
          [970, 90],
          [300, 300],
          [320, 50],
          [728, 90],
          [320, 100],
          [980, 90],
          [300, 50],
          [300, 100]
        ],
        "div-gpt-ad-1565101097681-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_intext",
        [
          [320, 100],
          [300, 100],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 300],
          [300, 600],
          [320, 50]
        ],
        "div-gpt-ad-1565101126615-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_under_body",
        [
          [300, 300],
          [320, 240],
          [300, 100],
          [300, 600],
          [300, 50],
          [320, 100],
          [320, 50],
          [300, 250]
        ],
        "div-gpt-ad-1565101150520-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_under_image",
        [
          [320, 240],
          [300, 100],
          [300, 250],
          [300, 300],
          [970, 90],
          [300, 50],
          [320, 100],
          [320, 50],
          [980, 90],
          [728, 90]
        ],
        "div-gpt-ad-1565101176894-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_under_menu",
        [
          [320, 240],
          [300, 100],
          [300, 250],
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 50],
          [970, 90],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1565101243433-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/CLM24_Flotante_horizontal",
        [
          [300, 100],
          [300, 50],
          [320, 100],
          [320, 240],
          [980, 90],
          [300, 300],
          [320, 50],
          [970, 90],
          [728, 90],
          [300, 250]
        ],
        "div-gpt-ad-1565101268944-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[8] = googletag
      .defineSlot(
        "/13436254/CLM24_Flotante_mega",
        [
          [300, 50],
          [980, 90],
          [300, 100],
          [728, 90],
          [320, 50],
          [320, 240],
          [320, 100],
          [300, 300],
          [970, 90],
          [300, 250]
        ],
        "div-gpt-ad-1565101298465-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[9] = googletag
      .defineSlot(
        "/13436254/CLM24_Flotante_rectangular",
        [
          [320, 50],
          [320, 100],
          [300, 300],
          [300, 600],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 100]
        ],
        "div-gpt-ad-1565101323925-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[10] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1565101350014-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[11] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_footer",
        [
          [320, 100],
          [980, 90],
          [728, 90],
          [300, 100],
          [320, 240],
          [300, 250],
          [300, 50],
          [300, 300],
          [320, 50],
          [970, 90]
        ],
        "div-gpt-ad-1565101379306-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[12] = googletag
      .defineSlot(
        "/13436254/CLM24_megabanner_middle",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1565101443555-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[13] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1565101471657-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[14] = googletag
      .defineSlot(
        "/13436254/CLM_24_megabanner_header",
        [
          [300, 300],
          [300, 250],
          [970, 90],
          [320, 50],
          [300, 100],
          [320, 100],
          [300, 50],
          [320, 240],
          [728, 90],
          [980, 90]
        ],
        "div-gpt-ad-1565101594355-0"
      )
      .defineSizeMapping(megaMapping)
      .addService(googletag.pubads());

    gptadslots[15] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column2",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569310993245-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[16] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_right_column3",
        [
          [300, 100],
          [300, 50],
          [300, 600],
          [300, 250],
          [300, 300],
          [320, 50],
          [320, 100],
          [320, 240]
        ],
        "div-gpt-ad-1569311610555-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[17] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_intext2",
        [
          [320, 100],
          [300, 100],
          [300, 250],
          [320, 240],
          [300, 50],
          [300, 300],
          [300, 600],
          [320, 50]
        ],
        "div-gpt-ad-1569311663632-0"
      )
      .defineSizeMapping(rectangleMapping)
      .addService(googletag.pubads());

    gptadslots[18] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home1.2",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313478855-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[19] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home1.5",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313531348-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[20] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home2.4",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313568116-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[21] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.1",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313633215-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[22] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.2",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313667803-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[23] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home_3.5",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569313701525-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[24] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner2",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1569313739320-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[25] = googletag
      .defineSlot(
        "/13436254/CLM24_horizontal_banner3",
        [
          [320, 240],
          [300, 300],
          [300, 50],
          [300, 100],
          [320, 100],
          [980, 90],
          [320, 50],
          [970, 90],
          [300, 250],
          [728, 90]
        ],
        "div-gpt-ad-1569313771958-0"
      )
      .defineSizeMapping(leaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[26] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed1",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569311713053-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[27] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed2",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313166778-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[28] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed3",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313202608-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[29] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_infeed4",
        [
          [300, 250],
          [320, 100],
          [300, 300],
          [300, 600],
          [320, 50],
          [300, 50],
          [300, 100],
          [728, 90],
          [320, 240]
        ],
        "div-gpt-ad-1569313241481-0"
      )
      .defineSizeMapping(infeedMapping)
      .addService(googletag.pubads());

    gptadslots[30] = googletag
      .defineSlot(
        "/13436254/CLM24_rectangle_in_home2.1",
        [
          [300, 50],
          [300, 100],
          [320, 240],
          [320, 100],
          [300, 250],
          [300, 300],
          [320, 50]
        ],
        "div-gpt-ad-1569503152572-0"
      )
      .defineSizeMapping(rectangleHomeMapping)
      .addService(googletag.pubads());

    gptadslots[31] = googletag
      .defineSlot(
        "/13436254/CLM24_banner_header_right",
        [[234, 90]],
        "div-gpt-ad-1569313285443-0"
      )
      .defineSizeMapping(bannerHeaderRightMapping)
      .addService(googletag.pubads());

      if(window.screen.width > 1520) {
        gptadslots[32] = googletag
          .defineSlot(
            "/13436254/CLM24_Skyscraper",
            [[120, 600], [160, 600]],
            "div-gpt-ad-1565101501776-0"
          )
          .defineSizeMapping(skyscraperMapping)
          .addService(googletag.pubads());
    
          gptadslots[33] = googletag
          .defineSlot(
            "/13436254/CLM24_Skyscraper_inner",
            [[120, 600]],
            "div-gpt-ad-1569313367396-0"
          )
          .defineSizeMapping(skyscraperInnerMapping)
          .addService(googletag.pubads());
    
          gptadslots[34] = googletag
          .defineSlot(
            "/13436254/CLM24_Skyscraper_right",
            [[120, 600], [160, 600]],
            "div-gpt-ad-1569313331835-0"
          )
          .defineSizeMapping(skyscraperMapping)
          .addService(googletag.pubads());
          }
  }

  googletag.pubads().setTargeting("hb", ["true"]);
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setCentering(true);
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 300,
    renderMarginPercent: 100,
    mobileScaling: 1.0
  });
  googletag.enableServices();
});

//Quantcast logic

(function() {
  var gdprAppliesGlobally = false;
  function addFrame() {
    if (!window.frames["__cmpLocator"]) {
      if (document.body) {
        var body = document.body,
          iframe = document.createElement("iframe");
        iframe.style = "display:none";
        iframe.name = "__cmpLocator";
        body.appendChild(iframe);
      } else {
        // In the case where this stub is located in the head,
        // this allows us to inject the iframe more quickly than
        // relying on DOMContentLoaded or other events.
        setTimeout(addFrame, 5);
      }
    }
  }
  addFrame();
  function cmpMsgHandler(event) {
    var msgIsString = typeof event.data === "string";
    var json;
    if (msgIsString) {
      json =
        event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
    } else {
      json = event.data;
    }
    if (json.__cmpCall) {
      var i = json.__cmpCall;
      window.__cmp(i.command, i.parameter, function(retValue, success) {
        var returnMsg = {
          __cmpReturn: {
            returnValue: retValue,
            success: success,
            callId: i.callId
          }
        };
        event.source.postMessage(
          msgIsString ? JSON.stringify(returnMsg) : returnMsg,
          "*"
        );
      });
    }
    checkConsent();
  }
  window.__cmp = function(c) {
    var b = arguments;
    if (!b.length) {
      return __cmp.a;
    } else if (b[0] === "ping") {
      b[2](
        { gdprAppliesGlobally: gdprAppliesGlobally, cmpLoaded: false },
        true
      );
    } else if (c == "__cmp") {
      return false;
    } else {
      if (typeof __cmp.a === "undefined") {
        __cmp.a = [];
      }
      __cmp.a.push([].slice.apply(b));
    }
  };
  window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
  window.__cmp.msgHandler = cmpMsgHandler;
  if (window.addEventListener) {
    window.addEventListener("message", cmpMsgHandler, false);
  } else {
    window.attachEvent("onmessage", cmpMsgHandler);
  }
})();

window.__cmp("getConsentData", 1, function(consentData, isSuccess1) {
  window.__cmp("getVendorConsents", [11], function(consents, isSuccess2) {
    console.log(consents.gdprApplies);
    if (!consents.gdprApplies) {
      pbjs.que.push(function() {
        pbjs.requestBids({
          bidsBackHandler: initAdserver,
          timeout: PREBID_TIMEOUT
        });
      });
    }
  });
});

window.__cmp("init", {
  Language: "es",
  "Initial Screen Body Text Option": 1,
  "Publisher Name": "Castilla-La Mancha 24",
  "Publisher Purpose IDs": [1, 2, 3, 4, 5],
  "Consent Scope": "service",
  "No Option": false,
  "Display Persistent Consent Link": false,
  "Default Value for Toggles": "on",
  "UI Layout": "banner",
  "Initial Screen Title Text": "Tu privacidad es importante para nosotros",
  "Initial Screen Reject Button Text": "No acepto",
  "Initial Screen Accept Button Text": "Aceptar",
  "Initial Screen Purpose Link Text": "Ver propósitos",
  "Initial Screen Body Text":
    "Tanto nuestros partners como nosotros utilizamos cookies en nuestro sitio web para personalizar contenido y publicidad, proporcionar funcionalidades a las redes sociales, o analizar nuestro tráfico. Haciendo click consientes el uso de esta tecnologia en nuestra web. Puedes cambiar de opinion y personalizar tu consentimiento siempre que quieras volviendo a esta web",
  "Purpose Screen Title Text": "Tu privacidad es importante para nosotros",
  "Purpose Screen Header Title Text": "Configuración de privacidad",
  "Purpose Screen Body Text":
    "Puedes configurar tus preferencias y elegir como quieres que tus datos sean utilizados para los siguientes propósitos. Puedes elegir configurar tus preferencias solo con nosotros independientemente del resto de nuestros partners. Cada propósito tiene una descripción para que puedas saber como nosotros y nuestros partners utilizamos tus datos",
  "Purpose Screen Enable All Button Text": "Habilitar todo",
  "Purpose Screen Vendor Link Text": "Ver lista completa de partners",
  "Purpose Screen Cancel Button Text": "Cancelar",
  "Purpose Screen Save and Exit Button Text": "Guardar y salir",
  "Vendor Screen Title Text": "Tu privacidad es importante para nosotros",
  "Vendor Screen Body Text":
    "Puedes dar tu consentimiento de manera individual a cada partner. Ver la lista de todos los propósitos para los cuales utilizan tus datos para tener más información. En algunos casos, las empresas pueden revelar que usan tus datos sin pedir tu consentimiento, en función de intereses legítimos. Puedes hacer click en su política de privacidad para obtener más información al respecto o para rechazarlo.",
  "Vendor Screen Reject All Button Text": "Rechazar todo",
  "Vendor Screen Accept All Button Text": "Aceptar todo",
  "Vendor Screen Purposes Link Text": "Volver a los propósitos",
  "Vendor Screen Cancel Button Text": "Cancelar",
  "Vendor Screen Save and Exit Button Text": "Guardar y salir"
});

var consentForAds;
var checkConsent = function() {
  window.__cmp("getGooglePersonalization", function(consents, b) {
    var newConsentForAds = consents.googlePersonalizationData.consentValue;
    if (consentForAds !== newConsentForAds) {
      consentForAds = newConsentForAds;
      googletag.cmd.push(function() {
        googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1);
      });
      window.__cmp("getConsentData", undefined, function(data) {
        googletag.cmd.push(function() {
          googletag.pubads().setTargeting("iab_string", [data.consentData]);
          googletag
            .pubads()
            .setTargeting("consent", [consentForAds ? "1" : "0"]);
          googletag
            .pubads()
            .setTargeting("rev_consent", [consentForAds ? "0" : "1"]);
          pbjs.que.push(function() {
            pbjs.requestBids({
              bidsBackHandler: initAdserver,
              timeout: PREBID_TIMEOUT
            });
          });
        });
      });
    }
  });
};
