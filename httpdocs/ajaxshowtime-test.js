//Load blockthrough

(function() {
    var blt = document.createElement("script");
    blt.async = true;
    blt.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    blt.src =
      (useSSL ? "https:" : "http:") +
      "//massarius-com.videoplayerhub.com/galleryloader.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(blt, node);
  })();

//Inject gumgum	
  (function() {	
    console.log("gumgum injected");	
    var mspb = document.createElement("script");	
    mspb.type = "text/javascript";	
    mspb.innerHTML = "ggv2id='fr3y5rsf';";	
    var node = document.getElementsByTagName("script")[0];	
    node.parentNode.insertBefore(mspb, node);	
  })();	
  //Load gumgum	
  (function() {	
    console.log("gumgum loaded");	
    var mspb = document.createElement("script");	
    mspb.async = true;	
    mspb.type = "text/javascript";	
    var useSSL = "https:" == document.location.protocol;	
    mspb.src = (useSSL ? 'https:' : 'http:') + '//js.gumgum.com/services.js';	
    var node = document.getElementsByTagName("script")[0];	
    node.parentNode.insertBefore(mspb, node);	
  })();	

var ms_debug = false;
if (window.location.href.includes('ms_debug')) {
    ms_debug = true;
};

if(ms_debug){
(function() {
  var preconnect = document.createElement("link");
  preconnect.rel = "preconnect";
  var useSSL = "https:" == document.location.protocol;
  preconnect.href =
    (useSSL ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
  preconnect.as= "script";
  var node = document.getElementsByTagName("link")[0];
  node.parentNode.insertBefore(preconnect, node);
})();
}

var scrw = window.screen.availWidth;
var scrh = window.screen.availHeight;

//Load Faktor

(function() {
  var fakt = document.createElement("script");
  fakt.async = true;
  fakt.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  fakt.src =
    (useSSL ? "https:" : "http:") +
    "//config-prod.choice.faktor.io/12249281-29fb-4dd3-8d6b-6c0fb54cdaab/faktor.js";
  fakt.onload = function() {
    window.__cmp("addEventListener", "acceptAllButtonClicked", function() {
      checkConsent();
    });
    window.__cmp("addEventListener", "exitButtonClicked", function() {
      checkConsent();
    });
    window.__cmp("addEventListener", "cmpReady", function() {
      checkConsent();
    });
  };
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(fakt, node);
})();

//load Neustar

var gdpr;
var iab_string;

loadNeustar = () => {
  setTimeout(function() {
    var nst = document.createElement("script");
    nst.type = "text/javascript";
    nst.innerHTML = function setUpAgknTag(tag) {
      tag.setBpId("massarius");
      tag.setCat("Sport");
      tag.setGdpr(gdpr);
      tag.setGdprConsent(iab_string);
    };
    var tagjs = document.createElement("script");
    tagjs.async = true;
    tagjs.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    tagjs.src = (useSSL ? "https:" : "http:") + "//js.agkn.com/prod/v0/tag.js";
    document.body.appendChild(nst);
    document.body.appendChild(tagjs);
  }, 1500);
};

//Load Google

(function() {
  var gads = document.createElement("script");
  gads.async = true;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src =
    (useSSL ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(gads, node);
})();

var wpAvaillable = false;
var skyBidsLeft = [0];
var wpBids = [0];
var bbBids = [0];
var gptadslots = [];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

//load prebid
if(!ms_debug){
(function() {
  var mspb = document.createElement("script");
  mspb.async = true;
  mspb.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  mspb.src =
    (useSSL ? "https:" : "http:") +
    "//massariuscdn.com/prod/prebid.2.25.0-gridFix.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(mspb, node);
})();
} else {
  console.log("weboramaFix");
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
}

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
  googletag.pubads().disableInitialLoad();
});

var artikelLBDesktopSizes = [[728, 90]];
var artikelLBMobileSizes = [[320, 50], [320, 100]];
var artikelBBDesktopSizes = [[970, 250], [1800, 1000], [970, 1000], [1, 1]];
var artikelBBMobileSizes = [[320, 240], [320, 100], [320, 50], [300, 250], [1, 1]];
var artikelHPADesktopSizes = [[336, 600], [300, 600], [336, 280], [300, 250]];
var artikelHPAMobileSizes = [[320, 50], [320, 100], [320, 240], [300, 250]];

var artikelBtfDesktopSizes = [[600, 300], [336, 280], [300, 250]];
var artikelBtfMobileSizes = [[300, 250], [336, 280]];

var rectangle1DesktopSizes = [[336, 280], [300, 250]];
var rectangle1MobileSizes = [[320, 50], [320, 100], [320, 240], [300, 250]];
var rectangle2Sizes = [[336, 280], [300, 250]];

var homepageLBDesktopSizes = [[728, 90]];
var homepageLBMobileSizes = [[320, 100], [320, 50]];
var homepageBBDesktopSizes = [[970, 250], [1800, 1000], [970, 1000], [1, 1]];
var homepageBBMobileSizes = [[320, 240], [320, 100], [320, 50], [300, 250], [1, 1]];
var homepageHPADesktopSizes = [[300, 600], [300, 250], [336, 600], [336, 280]];
var homepageHPAMobileSizes = [[300, 250], [320, 240], [320, 100], [320, 50]];

var skyscraperSize = [];

//define sizes for desktop/mobile
if (window.innerWidth > 768) {
  homepageLBSizes = homepageLBDesktopSizes;
  artikelLBSizes = artikelLBDesktopSizes;
  homepageBBSizes = homepageBBDesktopSizes;
  artikelBBSizes = artikelBBDesktopSizes;
  homepageHPASizes = homepageHPADesktopSizes;
  artikelHPASizes = artikelHPADesktopSizes;
  rectangle1Sizes = rectangle1DesktopSizes;
  artikelBtfSizes = artikelBtfDesktopSizes;
} else {
  homepageLBSizes = homepageLBMobileSizes;
  artikelLBSizes = artikelLBMobileSizes;
  homepageBBSizes = homepageBBMobileSizes;
  artikelBBSizes = artikelBBMobileSizes;
  homepageHPASizes = homepageHPAMobileSizes;
  artikelHPASizes = artikelHPAMobileSizes;
  rectangle1Sizes = rectangle1MobileSizes;
  artikelBtfSizes = artikelBtfMobileSizes;
}

if (window.innerWidth > 1650) {
  skyscraperSize = [[120, 600], [160, 600], [300, 600]];
} else if (window.innerWidth > 1350) {
  skyscraperSize = [[120, 600], [160, 600]];
} else {
  skyscraperSize = [];
}

//Define ad units
//1030791/Homepage_Leaderboard
var Homepage_Leaderboard = {
  code: "/13436254/AST_Homepage_Leaderboard",
  mediaTypes: {
    banner: {
      sizes: homepageLBSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529707",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831549",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825082",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "1636225"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "1637516"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721777
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721839
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 16
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    }
  ]
};
//1030791/Homepage_billboard
var Homepage_billboard = {
  code: "/13436254/AST_Homepage_billboard",
  mediaTypes: {
    banner: {
      sizes: homepageBBSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529705",
        keyValues: {
          hb: ["true"],
          scrw: [scrw],
          scrh: [scrh]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825083",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "weborama",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 1189168
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["phone"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278490"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "1637516"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721785
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721845
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 17
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: 'justpremium',
      labelAny: ["desktop", "tablet"],
      params: {
          zone: '65792',
          allow: ["pu", "wp"]
    }
  },
  {
    bidder: "audienceNetwork",
    labelAny: ["phone"],
    params: {
      placementId: "1923526581083478\_1946852595417543"
    }
  }
  ]
};
//1030791/Homepage_HPA
var Homepage_HPA = {
  code: "/13436254/AST_Homepage_HPA",
  mediaTypes: {
    banner: {
      sizes: homepageHPASizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529709",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825084",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278491"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721817
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721846
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 15
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Homepage_rectangle_1
var Homepage_rectangle_1 = {
  code: "/13436254/AST_Homepage_rectangle_1",
  mediaTypes: {
    banner: {
      sizes: rectangle1Sizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529713",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825086",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278492"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721822
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721849
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 14
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Homepage_rectangle_V2
var Homepage_rectangle_V2 = {
  code: "/13436254/AST_Homepage_rectangle_V2",
  mediaTypes: {
    banner: {
      sizes: rectangle2Sizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529713",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825086",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909329"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278492"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721822
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721849
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 14
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Artikel_leaderboard
var Artikel_leaderboard = {
  code: "/13436254/AST_Artikel_leaderboard",
  mediaTypes: {
    banner: {
      sizes: artikelLBSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529707",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831549",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825082",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "1636225"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "1637516"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721777
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721851
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 16
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    }
  ]
};
//1030791/Artikel_billboard
var Artikel_billboard = {
  code: "/13436254/AST_Artikel_billboard",
  mediaTypes: {
    banner: {
      sizes: artikelBBSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529705",
        keyValues: {
          hb: ["true"],
          scrw: [scrw],
          scrh: [scrh]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825083",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278490"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "1637516"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721785
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721845
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 17
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Artikel_HPA
var Artikel_HPA = {
  code: "/13436254/AST_Artikel_HPA",
  mediaTypes: {
    banner: {
      sizes: artikelHPASizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529709",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825084",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278491"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721817
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721846
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 15
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Artikel_rectangle_1
var Artikel_rectangle_1 = {
  code: "/13436254/AST_Artikel_rectangle_1",
  mediaTypes: {
    banner: {
      sizes: rectangle1Sizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529713",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825086",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278492"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279874"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721822
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721849
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 14
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Artikel_rectangle_V2
var Artikel_rectangle_V2 = {
  code: "/13436254/AST_Artikel_rectangle_V2",
  mediaTypes: {
    banner: {
      sizes: rectangle2Sizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "529713",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "909329"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "831541",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825086",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2278492"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721822
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721849
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 14
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};
//1030791/Artikel_BTF
var Artikel_BTF = {
  code: "/13436254/AST_Artikel_BTF",
  mediaTypes: {
    banner: {
      sizes: artikelBtfSizes
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "603679",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "visx",
      labelAny: ["phone"],
      params: {
        uid: "907805"
      }
    },
    {
      bidder: "improvedigital",
      labelAny: ["phone"],
      params: {
        placementId: "1066588",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540825089",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332416"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2279876"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["phone"],
      params: {
        publisherId: "156546",
        adSlot: "2279875"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16721827
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["phone"],
      params: {
        placementId: 16721853
      }
    },
    {
      bidder: "audienceNetwork",
      labelAny: ["phone"],
      params: {
        placementId: "1923526581083478\_1946852595417543"
      }
    }
  ]
};

//13436254/AST_Homepage_SKY//HPA
var Homepage_SKY = {
  code: "13436254/AST_Homepage_SKY//HPA",
  mediaTypes: {
    banner: {
      sizes: skyscraperSize
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "1114823",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540844552",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2302939"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16818908
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 13
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    }
  ]
};

//13436254/AST_Artikel_SKY//HPA
var Artikel_SKY = {
  code: "13436254/AST_Artikel_SKY//HPA",
  mediaTypes: {
    banner: {
      sizes: skyscraperSize
    }
  },
  bids: [
    {
      bidder: "improvedigital",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: "1114823",
        keyValues: {
          hb: ["true"]
        }
      }
    },
    {
      bidder: "openx",
      labelAny: ["desktop", "tablet"],
      params: {
        unit: "540844552",
        delDomain: "massarius-d.openx.net"
      }
    },
    {
      bidder: "rubicon",
      labelAny: ["desktop", "tablet"],
      params: {
        accountId: "20952",
        siteId: "268296",
        zoneId: "1332422"
      }
    },
    {
      bidder: "pubmatic",
      labelAny: ["desktop", "tablet"],
      params: {
        publisherId: "156546",
        adSlot: "2302939"
      }
    },
    {
      bidder: "tmp1",
      labelAny: ["desktop", "tablet"],
      params: {
        placementId: 16818908
      }
    },
    {
      bidder: "grid",
      labelAny: ["desktop", "tablet"],
      params: {
        uid: 13
      }
    },
    {
      bidder: "grid",
      labelAny: ["phone"],
      params: {
        uid: 18
      }
    }
  ]
};

var adUnits = [];

if (msTag) {
  if (msTag.page === "home") {
    if (window.innerWidth > 1350) {
      adUnits.push(
        Homepage_Leaderboard,
        Homepage_HPA,
        Homepage_billboard,
        Homepage_rectangle_1,
        Homepage_rectangle_V2,
        Homepage_SKY
      );
    } else {
      adUnits.push(
        Homepage_Leaderboard,
        Homepage_HPA,
        Homepage_billboard,
        Homepage_rectangle_1,
        Homepage_rectangle_V2
      );
    }
  } else if (msTag.page === "article") {
    if (window.innerWidth > 1350) {
      adUnits.push(
        Artikel_BTF,
        Artikel_HPA,
        Artikel_billboard,
        Artikel_leaderboard,
        Artikel_rectangle_1,
        Artikel_rectangle_V2,
        Artikel_SKY
      );
    } else {
      adUnits.push(
        Artikel_BTF,
        Artikel_HPA,
        Artikel_billboard,
        Artikel_leaderboard,
        Artikel_rectangle_1,
        Artikel_rectangle_V2
      );
    }
  }
}

var PREBID_TIMEOUT = 1300;
var FAILSAFE_TIMEOUT = 2000;
var DefM = 2.5;
var bidCap = 20;

pbjs.bidderSettings = {
  improvedigital: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  tmp1: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1.3, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1.3, bidCap);
      }
    }
  },
  tmp2: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 2, bidCap)
        // );
        return Math.min(bidCpm * DefM * 2, bidCap);
      }
    }
  },
  pubmatic: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  openx: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
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
          // console.log("The original bid was: " + bidCpm);
          if (bidCpm >= bidCap) {
            // console.log("The original bid was above the bidCap of " + bidCap);
            return bidCpm;
          } else {
            // console.log("The original bid was below the bidCap of " + bidCap);
            // console.log(
            //   "The new bid after the adjustment is " +
            //     Math.min(bidCpm * DefM * 1, bidCap)
            // );
            return Math.min(bidCpm * DefM * 1, bidCap);
          }
        }
      }
    }
  },
  weborama: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  rubicon: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  visx: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  grid: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
        return Math.min(bidCpm * DefM * 1, bidCap);
      }
    }
  },
  appnexus: {
    bidCpmAdjustment: function(bidCpm) {
      // console.log("The original bid was: " + bidCpm);
      if (bidCpm >= bidCap) {
        // console.log("The original bid was above the bidCap of " + bidCap);
        return bidCpm;
      } else {
        // console.log("The original bid was below the bidCap of " + bidCap);
        // console.log(
        //   "The new bid after the adjustment is " +
        //     Math.min(bidCpm * DefM * 1, bidCap)
        // );
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
          [970, 250],
          [970, 90],
          [728, 90],
          [300, 250],
          [300, 300],
          [320, 50],
          [160, 600],
          [120, 600],
          [120, 90],
          [300, 600],
          [336, 600],
          [336, 280],
          [600, 300]
        ],
        labels: ["desktop"]
      },
      {
        mediaQuery: "(min-width: 901px) and (max-width: 1024px)",
        sizesSupported: [
          [728, 90],
          [300, 250],
          [300, 300],
          [300, 600],
          [336, 600],
          [160, 600],
          [600, 300],
          [120, 600]
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
    consentManagement: {
      cmpApi: "iab",
      allowAuctionWithoutConsent: true
    },
    currency: {
      adServerCurrency: "EUR"
    }
  });
});

function initAdserver(bids) {
  var slots = Object.keys(bids);
  slots.forEach(slot => {
    let slotbids = bids[slot].bids;
    slotbids.forEach(bid => {
      bid.adserverTargeting.hbBid = true;
      if (bid.width == 970 && bid.height == 250) {
        bbBids.push(bid.cpm);
      } else if (bid.width == 1800 && bid.height == 1000) {
        wpBids.push(bid.cpm);
        wpAvaillable = true;
        bid.width = 728;
        bid.height = 90;
      } else if (bid.width == 970 && bid.height == 1000) {
        wpBids.push(bid.cpm);
        wpAvaillable = true;
        bid.width = 970;
        bid.height = 250;
      } else if (
        bid.adUnitCode == "13436254/AST_Artikel_SKY//HPA" ||
        bid.adUnitCode == "13436254/AST_Homepage_SKY//HPA"
      ) {
        skyBidsLeft.push(bid.cpm);
      }
    });
  });
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    pbjs.que.push(function() {
      pbjs.setTargetingForGPTAsync();
      var maxBidSky = skyBidsLeft.reduce(function(a, b) {
        return Math.max(a, b);
      });
      var maxBidBB = bbBids.reduce(function(a, b) {
        return Math.max(a, b);
      });
      var maxBidWp = wpBids.reduce(function(a, b) {
        return Math.max(a, b);
      });
      var sumSkyBb = maxBidBB + maxBidSky;

      if (msTag.page == "home") {
        if (wpAvaillable && maxBidWp > sumSkyBb) {
          googletag.pubads().refresh([
            gptadslots[0],
            gptadslots[1],
            gptadslots[2],
            gptadslots[3],
            gptadslots[4],
            gptadslots[6]
          ]);
        } else {
          if (window.innerWidth > 1350) {
            googletag.pubads().refresh(gptadslots);
          } else {
            googletag.pubads().refresh([
              gptadslots[0],
              gptadslots[1],
              gptadslots[2],
              gptadslots[3],
              gptadslots[4],
              gptadslots[6]
            ]);
          }
        }
      } else if (msTag.page == "article") {
        if (wpAvaillable && maxBidWp > sumSkyBb) {
          googletag
            .pubads()
            .refresh([
              gptadslots[0],
              gptadslots[1],
              gptadslots[2],
              gptadslots[3],
              gptadslots[4],
              gptadslots[5],
              gptadslots[6],
              gptadslots[8]
            ]);
        } else {
          if (!wpAvaillable && window.innerWidth > 1350) {
            googletag.pubads().refresh(gptadslots);
          } else {
            googletag
              .pubads()
              .refresh([
                gptadslots[0],
                gptadslots[1],
                gptadslots[2],
                gptadslots[3],
                gptadslots[4],
                gptadslots[5],
                gptadslots[6],
                gptadslots[8]
              ]);
          }
        }
      }
    });
  });
}

googletag.cmd.push(function() {
  //Responsive mapping
  var homepageLeaderBoardMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize([0, 0], [[320, 100], [320, 50]])
    .build();

  var billboardMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[970, 250], [1, 1]])
    .addSize([768, 0], [[970, 250], [1, 1]])
    .addSize([0, 0], [[320, 100], [300, 250], [320, 240], [320, 50], [1, 1]])
    .build();

  var hpaMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[300, 600], [336, 600], [336, 280], [300, 250]])
    .addSize([768, 0], [[300, 600], [336, 600], [336, 280], [300, 250]])
    .addSize(
      [0, 0],
      [[336, 280], [300, 250], [320, 240], [320, 100], [320, 50]]
    )
    .build();

  var rectangle1Mapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[336, 280], [300, 250]])
    .addSize([768, 0], [[336, 280], [300, 250]])
    .addSize(
      [0, 0],
      [[336, 280], [300, 250], [320, 240], [320, 100], [320, 50]]
    )
    .build();

  var rectangle2Mapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[336, 280], [300, 250]])
    .addSize([768, 0], [[336, 280], [300, 250]])
    .addSize([0, 0], [[336, 280], [300, 250]])
    .build();

  var artikelLeaderboardMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[728, 90]])
    .addSize([768, 0], [[728, 90]])
    .addSize([0, 0], [[320, 50], [320, 100]])
    .build();

  var artikelBtfMapping = googletag
    .sizeMapping()
    .addSize([1024, 0], [[600, 300], [300, 250], [336, 280]])
    .addSize([768, 0], [[600, 300], [300, 250], [336, 280]])
    .addSize([0, 0], [[300, 250], [336, 280]])
    .build();

  var skyscraperMapping = googletag
    .sizeMapping()
    .addSize([1650, 0], [[300, 600], [120, 600], [160, 600]])
    .addSize([1350, 0], [[120, 600], [160, 600]])
    .addSize([0, 0], [])
    .build();

  if (msTag.page == "home") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_Leaderboard",
        [[320, 50], [320, 100], [728, 90]],
        "div-gpt-ad-1529665429499-1"
      )
      .defineSizeMapping(homepageLeaderBoardMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_billboard",
        [[1, 1], [970, 250], [320, 50], [320, 100], [300, 250], [320, 240]],
        "div-gpt-ad-1529665429499-2"
      )
      .defineSizeMapping(billboardMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_HPA",
        [
          [320, 50],
          [320, 100],
          [336, 280],
          [336, 600],
          [320, 240],
          [300, 250],
          [300, 600]
        ],
        "div-gpt-ad-1529665429499-3"
      )
      .defineSizeMapping(hpaMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_rectangle_1",
        [[320, 50], [320, 100], [320, 240], [300, 250], [336, 280]],
        "div-gpt-ad-1529665429499-4"
      )
      .defineSizeMapping(rectangle1Mapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_rectangle_V2",
        [[300, 250], [336, 280]],
        "div-gpt-ad-1529665429499-5"
      )
      .defineSizeMapping(rectangle2Mapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/AST_Homepage_SKY//HPA",
        [[300, 600], [120, 600], [160, 600]],
        "div-gpt-ad-1567084735261-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());

      gptadslots[6] = googletag
      .defineSlot(
        "/13436254/AST_article_inread",
        [[1, 1]],
        "div-gpt-ad-1569944468955-0"
      )
      .addService(googletag.pubads());

  } else if (msTag.page == "article") {
    gptadslots[0] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_leaderboard",
        [[320, 50], [728, 90], [320, 100]],
        "div-gpt-ad-1529665865536-0"
      )
      .defineSizeMapping(artikelLeaderboardMapping)
      .addService(googletag.pubads());

    gptadslots[1] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_billboard",
        [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [970, 250]],
        "div-gpt-ad-1529665865536-1"
      )
      .defineSizeMapping(billboardMapping)
      .addService(googletag.pubads());

    gptadslots[2] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_HPA",
        [
          [320, 50],
          [320, 100],
          [320, 240],
          [300, 250],
          [336, 280],
          [300, 600],
          [336, 600]
        ],
        "div-gpt-ad-1529665865536-2"
      )
      .defineSizeMapping(hpaMapping)
      .addService(googletag.pubads());

    gptadslots[3] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_rectangle_1",
        [[320, 50], [320, 100], [320, 240], [300, 250], [336, 280]],
        "div-gpt-ad-1529665865536-3"
      )
      .defineSizeMapping(rectangle1Mapping)
      .addService(googletag.pubads());

    gptadslots[4] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_rectangle_V2",
        [[300, 250], [336, 280]],
        "div-gpt-ad-1529666594101-6"
      )
      .defineSizeMapping(rectangle2Mapping)
      .addService(googletag.pubads());

    gptadslots[5] = googletag
      .defineSlot(
        "/13436254/AST_article_inread",
        [[1, 1]],
        "div-gpt-ad-1529665865536-4"
      )
      .addService(googletag.pubads());

    gptadslots[6] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_BTF",
        [[300, 250], [336, 280], [600, 300]],
        "div-gpt-ad-1529665865536-5"
      )
      .defineSizeMapping(artikelBtfMapping)
      .addService(googletag.pubads());

    gptadslots[7] = googletag
      .defineSlot(
        "/13436254/AST_Artikel_SKY//HPA",
        [[300, 600], [120, 600], [160, 600]],
        "div-gpt-ad-1567084704171-0"
      )
      .defineSizeMapping(skyscraperMapping)
      .addService(googletag.pubads());
    gptadslots[8] = googletag
      .defineSlot(
        "/13436254/AST_ROS_Seedtag_1x1",
        [1, 1],
        "div-gpt-ad-1568627954090-0"
      )
      .addService(googletag.pubads());
  }
  googletag.pubads().setTargeting("hb", ["true"]);
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setCentering(true);
  googletag.pubads().enableLazyLoad({
    fetchMarginPercent: 100,
    renderMarginPercent: 50,
    mobileScaling: 1.0
  });
  googletag.enableServices();
});

//CMP Logic

var consentForAds;
var checkConsent = function() {
  window.__cmp("getVendorConsents", undefined, function(data) {
    var newConsentForAds =
      data.purposeConsents[1] &&
      data.purposeConsents[2] &&
      data.purposeConsents[3] &&
      data.purposeConsents[4] &&
      data.purposeConsents[5];
    if (consentForAds !== newConsentForAds) {
      consentForAds = newConsentForAds;
      googletag.cmd.push(function() {
        googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1);
      });
      window.__cmp("getConsentData", undefined, function(data) {
        // pbjs.que.push(function() {pbjs.setConfig({consentManagement:{allowAuctionWithoutConsent = true}});});

        googletag.cmd.push(function() {
          gdpr = consentForAds ? "1" : "0";
          iab_string = consentForAds == "1" ? data.consentData : "";
          loadNeustar();
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

/*
!Paste wherever you want just make sure it executes before DFP responds with the first ads for rendering (execution)
!!Don't forget the settings: https://gist.github.com/Slind14/79d706178fb3e4eb8b20359d816f0d76
*/

var assertive_entityId = "PEfAttA4HHcNtGLpk";
var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...

var assertive_timeout = PREBID_TIMEOUT;
var assertive_layout = null;
var assertive_userState = "LoggedOut";
var assertive_custom_1 = null;
var assertive_custom_2 = null;
var assertive_custom_3 = null;
var assertive_custom_4 = null;
var assertive_custom_5 = null;

/*  ####################################
 *  #    ASSERTIVE ANALYTICS CLIENT    #
 *  #        Version: 1.8.3            #
 *  ####################################
 */
!(function() {
  "use strict";
  var I = "1.8",
    _ = "https://api.assertcom.de",
    e = "assertive_analytics_",
    y = e.concat("sessionUUID"),
    s = e.concat("sessionStart"),
    a = e.concat("sessionRandom"),
    h = e.concat("sessionUTM"),
    b = e.concat("sessionReferrer"),
    w = E(),
    U = [],
    S = [],
    t =
      t ||
      (localStorage.getItem("assertiveYield") &&
        -1 !== localStorage.getItem("assertiveYield").indexOf("debug")) ||
      -1 !== d("assertiveYield").indexOf("debug");

  function E(e) {
    return e
      ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
      : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, E);
  }

  function d(e) {
    return decodeURI(
      window.location.search.replace(
        new RegExp(
          "^(?:.*[&\\?]" +
            escape(e).replace(/[\.\+\*]/g, "\\$&") +
            "(?:\\=([^&]*))?)?.*$",
          "i"
        ),
        "$1"
      )
    );
  }

  function R(e) {
    // t && console.log(e);
  }
  Array.prototype.find ||
    Object.defineProperty(Array.prototype, "find", {
      value: function(e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var t = Object(this),
          n = t.length >>> 0;
        if ("function" != typeof e)
          throw new TypeError("predicate must be a function");
        for (var i = arguments[1], r = 0; r < n; ) {
          var o = t[r];
          if (e.call(i, o, r, t)) return o;
          r++;
        }
      },
      configurable: !0,
      writable: !0
    }),
    (function() {
      if (!localStorage.getItem(s) || Date.now() > localStorage.getItem(s)) {
        localStorage.setItem(y, E()),
          localStorage.setItem(a, Math.random()),
          document.referrer
            ? localStorage.setItem(b, document.referrer)
            : localStorage.removeItem(b);
        var e = [
            "utm_source",
            "utm_medium",
            "utm_campaign",
            "utm_term",
            "utm_content"
          ],
          t = {};
        for (var n in e) {
          var i = e[n],
            r = d(i);
          "" !== r && (t[i] = r);
        }
        var o = JSON.stringify(t);
        o !== JSON.stringify({})
          ? localStorage.setItem(h, o)
          : localStorage.removeItem(h);
      }
      localStorage.setItem(s, Date.now() + 18e5);
    })(),
    -1 !== d("assertiveYield").indexOf("check") &&
      alert("Assertive Yield: Check"),
    ("undefined" == typeof assertive_sampleRate ||
      (assertive_sampleRate &&
        localStorage.getItem(a) < assertive_sampleRate)) &&
      (function e() {
        if (n) return;
        if ("undefined" == typeof googletag || !googletag.pubadsReady)
          return void setTimeout(e, 20);
        n = !0;
        var v = null;
        window.addEventListener("blur", function() {
          if (v) {
            var e = new XMLHttpRequest(),
              t =
                _ +
                "?event=click&entityId=" +
                assertive_entityId +
                "&impressionUUID=" +
                U[v];
            e.open("GET", t, !0), e.send();
          }
        });
        googletag.cmd.push(function() {
          googletag.pubads().addEventListener("slotRenderEnded", function(e) {
            if (!e.isEmpty)
              if ("undefined" != typeof assertive_entityId) {
                var t = e.slot,
                  n = t.getSlotElementId(),
                  i = t.getAdUnitPath(),
                  r = document.getElementById(n),
                  o = null;
                if (r) {
                  if (
                    pbjs.adUnits.find(function(e) {
                      return e.code === n;
                    })
                  )
                    o = n;
                  else {
                    if (
                      !pbjs.adUnits.find(function(e) {
                        return e.code === i;
                      })
                    )
                      return;
                    o = i;
                  }
                  var s = r.getElementsByTagName("iframe")[0];
                  s.addEventListener("mouseover", function() {
                    v = n;
                  }),
                    s.addEventListener("touchstart", function() {
                      v = n;
                    }),
                    s.addEventListener("mouseout", function() {
                      v = null;
                    }),
                    s.addEventListener("touchend", function() {
                      v = null;
                    });
                  var a = t.getHtml(),
                    d = /(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(
                      a
                    ),
                    l = d ? d[1] : t.getTargeting("hb_adid")[0],
                    u = !!d,
                    c = pbjs
                      .getBidResponsesForAdUnitCode(o)
                      .bids.find(function(e) {
                        return e.adId === l;
                      });
                  (U[n] = E()),
                    R(
                      "Session UUID: " +
                        localStorage.getItem(y) +
                        ", PageView UUID: " +
                        w +
                        ", Impression UUID: " +
                        U[n]
                    ),
                    R("Slot Id: " + n + ", AdUnitPath: " + i),
                    c &&
                      R(
                        " - Highest PreBid " +
                          c.cpm +
                          " from " +
                          c.bidderCode +
                          " with id " +
                          l
                      ),
                    c || R(" - No PreBids!!!"),
                    R(
                      " - Winner: " +
                        (u ? "prebid" : "dfp (Direct/AdX/AdSense)") +
                        " with size " +
                        (u ? c.width : e.size[0]) +
                        "x" +
                        (u ? c.height : e.size[1])
                    ),
                    R("---------------");
                  var m = null,
                    p = null;
                  c &&
                    (c.appnexus
                      ? (m = c.appnexus.buyerMemberId
                          ? c.appnexus.buyerMemberId
                          : null)
                      : c.rubicon &&
                        ((m = c.rubicon.networkId ? c.rubicon.networkId : null),
                        (p = c.rubicon.advertiserId
                          ? c.rubicon.advertiserId
                          : null)));
                  var f = {
                    version: I,
                    entityId: assertive_entityId,
                    siteUUID:
                      "undefined" != typeof assertive_siteUUID
                        ? assertive_siteUUID
                        : null,
                    sessionUUID: localStorage.getItem(y),
                    pageViewUUID: w,
                    impressionUUID: U[n],
                    slotId: n,
                    adUnitPath: i,
                    highestPreBid: c ? c.cpm : 0,
                    highestPreBid_partner: c ? c.bidderCode : "",
                    buyerId: m,
                    brandId: p,
                    dealId: c && c.dealId ? c.dealId : null,
                    creativeId: c && c.creativeId ? c.creativeId : null,
                    mediaType: c && c.mediaType ? c.mediaType : null,
                    currency: c && c.currency ? c.currency : null,
                    netRevenue: c && c.netRevenue ? c.netRevenue : null,
                    creative_width: u ? c.width : e.size[0],
                    creative_height: u ? c.height : e.size[1],
                    preBidWon: u,
                    timeToRespond: c ? c.timeToRespond : null,
                    protocol: window.location.protocol,
                    host: window.location.host,
                    pathname: window.location.pathname,
                    pathname_split: window.location.pathname
                      .split("/")
                      .filter(function(e) {
                        return e;
                      }),
                    referrer: localStorage.getItem(b),
                    utm: localStorage.getItem(h),
                    prebid_timeout: assertive_timeout || null,
                    prebid_version: pbjs.version || null,
                    userState:
                      "undefined" != typeof assertive_userState
                        ? assertive_userState
                        : null,
                    layout:
                      "undefined" != typeof assertive_layout
                        ? assertive_layout
                        : null,
                    custom_1:
                      "undefined" != typeof assertive_custom_1
                        ? assertive_custom_1
                        : null,
                    custom_2:
                      "undefined" != typeof assertive_custom_2
                        ? assertive_custom_2
                        : null,
                    custom_3:
                      "undefined" != typeof assertive_custom_3
                        ? assertive_custom_3
                        : null,
                    custom_4:
                      "undefined" != typeof assertive_custom_4
                        ? assertive_custom_4
                        : null,
                    custom_5:
                      "undefined" != typeof assertive_custom_5
                        ? assertive_custom_5
                        : null,
                    bps_type: t.getTargeting("ay_bid")[0] || null,
                    bps_algo: t.getTargeting("ay_algo")[0] || null
                  };
                  S.push(f);
                  var g = new XMLHttpRequest();
                  g.open("POST", _, !0),
                    g.setRequestHeader("Content-Type", "text/plain"),
                    g.send(JSON.stringify(f)),
                    R("SENT!!!");
                }
              } else
                console.error(
                  "Assertive Yield: Entity ID is mandatory and not defined, exiting..."
                );
          }),
            googletag
              .pubads()
              .addEventListener("impressionViewable", function(e) {
                var t = e.slot.getSlotElementId();
                if (U[t]) {
                  var n = new XMLHttpRequest(),
                    i =
                      _ +
                      "?event=activeView&entityId=" +
                      assertive_entityId +
                      "&impressionUUID=" +
                      U[t];
                  n.open("GET", i, !0), n.send();
                }
              });
        });
      })();
  var n = !1;
})();

var skyPosHome;
var skyPosHomeWidth;
var skyPosArticle;
var skyPosArticleWidth;

getDivAndWidth = () => {

skyPosHome = document.getElementById("google_ads_iframe_/13436254/AST_Homepage_SKY//HPA_0__container__");
skyPosHomeWidth = skyPosHome ? skyPosHome.getBoundingClientRect().width : 0;
skyPosArticle = document.getElementById("google_ads_iframe_/13436254/AST_Artikel_SKY//HPA_0__container__");
skyPosArticleWidth = skyPosArticle ? skyPosArticle.getBoundingClientRect().width : 0;
};

window.onload = setTimeout(getDivAndWidth, 5000);

checkIfSkyFits = () => {

if(skyPosHome || skyPosArticle){
  if (msTag.page == "home") {
    if (window.innerWidth < 1350) {
      skyPosHome.style.display = "none";
    } else {
      if (skyPosHomeWidth > 299) {
        if (window.innerWidth < 1650) {
          skyPosHome.style.display = "none";
        } else {
          skyPosHome.style.display = null;
        }
      } else {
        skyPosHome.style.display = null;
      }
    }
  } else {
    if (window.innerWidth < 1350) {
      skyPosArticle.style.display = "none";
    } else {
      if (skyPosArticleWidth > 299) {
        if (window.innerWidth < 1650) {
          skyPosArticle.style.display = "none";
        } else {
          skyPosArticle.style.display = null;
        }
      } else {
        skyPosArticle.style.display = null;
      }
    }
  }
}
};

window.onresize = checkIfSkyFits;
