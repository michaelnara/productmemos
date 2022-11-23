//load prebid
(function() {
    var mspb = document.createElement('script');
    mspb.async = true;
    mspb.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    mspb.src = (useSSL ? 'https:' : 'http:') + 
    '//massariuscdn.com/pubs/alarmeringen/prebid2.0.0.js'   //prebid 2.0
    // '//massariuscdn.com/prod/prebid.js';                 //prebid 1.29
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(mspb, node);
})();

//load gpt
// (function() {
//     var gads = document.createElement('script');
//     gads.async = true;
//     gads.type = 'text/javascript';
//     var useSSL = 'https:' == document.location.protocol;
//     gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
//     var node = document.getElementsByTagName('script')[0];
//     node.parentNode.insertBefore(gads, node);
// })();

var width = window.screen.availWidth;
var floorad_sizes = [[1, 1]];

if (width >= 1170) {
    var width = 'xxl';
    var leaderboard_sizes = [[120, 90], [728, 90], [970, 250], [970, 90], [970, 500], [970, 1000], [1800, 1000], [1800, 200]];
    var incontent_sizes = [[1, 1], [300, 250], [336, 280]];
    var bottom_sizes = [[728, 90], [970, 90], [970, 250]];
    var sidebar_sizes = [[300, 250], [300, 600]];
    var sidebarbottom_sizes = [[300, 250]];
} else if (width > 979 && width < 1170) {
    width = 'xl';
    var leaderboard_sizes = [[120, 90], [728, 90], [970, 90], [970, 250], [970, 500]];
    var incontent_sizes = [[1, 1], [300, 250], [336, 280]];
    var bottom_sizes = [[728, 90], [970, 90], [970, 250]];
    var sidebar_sizes = [[300, 250], [300, 600]];
    var sidebarbottom_sizes = [[300, 250]];
} else if (width > 767 && width < 979) {
    width = 'l';
    var leaderboard_sizes = [[120, 90], [728, 90], [970, 90], [970, 250], [970, 500]];
    var incontent_sizes = [[1, 1], [300, 250], [336, 280]];
    var bottom_sizes = [[728, 90], [970, 90], [970, 250]];
    var sidebar_sizes = [[300, 250], [300, 600]];
    var sidebarbottom_sizes = [[300, 250]];
} else if (width <= 767 && width >= 468) {
    width = 'm';
    var leaderboard_sizes = [[320, 50], [320, 100], [300, 250], [320, 240]];
    var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500]];
    var bottom_sizes = [[1, 1]];
    var sidebar_sizes = [[320, 50], [320, 100], [320, 320], [300, 250], [320, 240], [300, 600]];
    var sidebarbottom_sizes = [[1, 1]];
} else if (width <= 468) {
    width = 's';
    var leaderboard_sizes = [[320, 50], [320, 100], [300, 250], [320, 240]];
    var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500]];
    var bottom_sizes = [[1, 1]];
    var sidebar_sizes = [[320, 50], [320, 100], [320, 320], [300, 250], [320, 240], [300, 600]];
    var sidebarbottom_sizes = [[1, 1]];
}

var adUnits = [

    //leaderboard
    {
        code: '/49255849/leaderboard',
        mediaTypes: {
            banner: {
                sizes: leaderboard_sizes
            }
        },
        bids: [{
                bidder: 'improvedigital',
                labelAny: ['xxl'],
                params: {
                    placementId: 13294011
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xl', 'l'],
                params: {
                    placementId: 13294012
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m', 's'],
                params: {
                    placementId: 13294013
                }
            }, {
                bidder: 'weborama',
                labelAny: ['xxl'],
                params: {
                    placementId: 13300717
                }
            }, {
                bidder: 'rubicon',
                params: {
                    accountId: 18030,
                    siteId: 188180,
                    zoneId: 920572
                }
            },
            // UNCOMMENT TO ADD CRITEO
            // {
            //             bidder: 'criteo',
            //             labelAny: ['xxl', 'xl', 'l', 'm', 's'],
            //             params: {
            //                 zoneId: 1215715
            //             }
            // }, 
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942710
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540582983',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'openx',
                labelAny: ['m', 's'],
                params: {
                    unit: '540583010',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852915@1800x1000'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852911@970x250'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852912@970x90'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852910@728x90'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852924@320x100'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['s'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852923@320x50'
                }
            }
        ]
    },

    //incontent
    {
        code: '/49255849/incontent',
        mediaTypes: {
            banner: {
                sizes: incontent_sizes
            }
        },
        bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: 18030,
                    siteId: 188180,
                    zoneId: 920572
                }
            },
            // UNCOMMENT TO ADD CRITEO
            // {
            //             bidder: 'criteo',
            //             labelAny: ['xxl', 'xl', 'l', 'm'],
            //             params: {
            //                 zoneId: 1215716
            //             }
            // }, {
            //             bidder: 'criteo',
            //             labelAny: ['s'],
            //             params: {
            //                 zoneId: 1215718
            //             }
            // }, 
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942711
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl'],
                params: {
                    placementId: 13294015
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['l'],
                params: {
                    placementId: 13294015
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m'],
                params: {
                    placementId: 13294017
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['s'],
                params: {
                    placementId: 13294017
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540582993',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'openx',
                labelAny: ['m', 's'],
                params: {
                    unit: '540583011',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865663
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['m', 's'],
                params: {
                    placementId: 14865665
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865646
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['m', 's'],
                params: {
                    placementId: 14865650
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852917@300x250'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852920@336x280'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852926@300x250'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852928@320x240'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852924@320x100'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852923@320x50'
                }
            }
        ]
    },



    //bottom
    {
        code: '/49255849/bottom',
        mediaTypes: {
            banner: {
                sizes: bottom_sizes
            }
        },
        bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: 18030,
                    siteId: 188180,
                    zoneId: 920572
                }
            },
            // turning appnexus off on this position since we can not implement the sizes we want			
			// {
            //     bidder: 'appnexus',
            //     params: {
            //         placementId: 13574057
            //     }
            // }, 
			{
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl'],
                params: {
                    placementId: 13294018
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['l'],
                params: {
                    placementId: 13294019
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m'],
                params: {
                    placementId: 13294020
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['s'],
                params: {
                    placementId: 13294021
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540582994',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865663
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865646
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852912@970x90'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852910@728x90'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852911@970x250'
                }
            }
        ]
    },



    //sidebar
    {
        code: '/49255849/sidebar',
        mediaTypes: {
            banner: {
                sizes: sidebar_sizes
            }
        },
        bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: 18030,
                    siteId: 188180,
                    zoneId: 920572
                }
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: 13574059
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294022
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m', 's'],
                params: {
                    placementId: 13294024
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540582995',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'openx',
                labelAny: ['m', 's'],
                params: {
                    unit: '540583013',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865663
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['m', 's'],
                params: {
                    placementId: 14865665
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865646
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['m', 's'],
                params: {
                    placementId: 14865650
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852917@300x250'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852919@300x600'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852926@300x250'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852928@320x240'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852924@320x100'
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852923@320x50'
                }
            }, // {
               //   bidder: 'pubmatic',
               //   labelAny: ['m', 's'],
               //   params: {
               //       publisherId: '156546',
               //       adSlot: 'waiting_for_id@320x320'
               //   }
               //}
			{
                bidder: 'pubmatic',
                labelAny: ['m', 's'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852927@300x600'
                }
            }
        ]
    },



    //sidebarbottom
    {
        code: '/49255849/sidebarbottom',
        mediaTypes: {
            banner: {
                sizes: sidebarbottom_sizes
            }
        },
        bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: 18030,
                    siteId: 188180,
                    zoneId: 920572
                }
            }, {
                bidder: 'appnexus',
                params: {
                    placementId: 13574190
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294025
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540582998',
                    delDomain: 'massarius-d.openx.net'
                }
            }, {
                bidder: 'tmp1',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865663
                }
            }, {
                bidder: 'tmp2',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 14865646
                }
            }, {
                bidder: 'pubmatic',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    publisherId: '156546',
                    adSlot: '1852917@300x250'
                }
            }
        ]
    },
];

var PREBID_TIMEOUT = 1300;
var FAILSAFE_TIMEOUT = 3000;

const customConfigObject = {
  "buckets" : [{
      "precision": 2, 
      "min" : 0,
      "max" : 2.50,
      "increment" : 0.01  
    },
    {
      "precision": 2,
      "min" : 2.50,
      "max" : 10,
      "increment" : 0.10  
    },
    {
      "precision": 2,
      "min" : 10,
      "max" : 20,
      "increment" : 0.2  
    },
    {
      "precision": 2,
      "min" : 20,
      "max" : 50,
      "increment" : 0.5   
    }]
};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
    pbjs.setConfig({
        //rubicon single request throws error in responses -- need to figure out why
        /*        rubicon: {
                    singleRequest: false
                }*/
        debug: false,
        enableSendAllBids: true,
        priceGranularity: customConfigObject,
        pubcid: {
            enable: true
        },
        userSync: {
            syncDelay: 3000,
            syncEnabled: true,
            syncsPerBidder: 5,
            iframeEnabled: true
        },
        currency: {
            adServerCurrency: 'EUR'
        },
        sizeConfig: [{
            'mediaQuery': '(min-width: 1170px)',
            'sizesSupported': [[1, 1], [120, 90], [300, 250], [300, 600], [336, 280], [628, 300], [728, 90], [970, 250], [970, 90], [1800, 1000], [640,480], [970, 1000], [1800, 200], [970, 500]],
            'labels': ['xxl']
  }, {
            'mediaQuery': '(min-width: 980px) and (max-width: 1169px)',
            'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640,480]],
            'labels': ['xl']
  }, {
            'mediaQuery': '(min-width: 768px) and (max-width: 979px)',
            'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640,480]],
            'labels': ['l']
  }, {
            'mediaQuery': '(min-width: 468px) and (max-width: 767px)',
            'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [336, 280], [640,480], [320, 500], [320, 320], [300, 600]],
            'labels': ['m']
  }, {
            'mediaQuery': '(min-width: 0px) and (max-width: 467x)',
            'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [300, 300], [640,480], [320, 500], [320, 320], [300, 600]],
            'labels': ['s']
  }]
    });
});

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});


pbjs.bidderSettings = {
	rubicon: {
		bidCpmAdjustment: function(bidCpm) {
			return bidCpm * 0.8;  // rubicon has a gross bid
		}
	},
	appnexus: {
		bidCpmAdjustment: function(bidCpm) {
			return bidCpm * 0.7;  // appnexus has a gross bid
		}
	}
}



pbjs.que.push(function() {
    pbjs.aliasBidder('appnexus', 'tmp1');
    pbjs.aliasBidder('appnexus', 'tmp2');
    pbjs.aliasBidder('improvedigital', 'weborama');
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh();
    });
}


setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);


var gptadslots = [];

googletag.cmd.push(function() {
    if (leaderboard_sizes) {
        googletag.defineSlot('/49255849/leaderboard', leaderboard_sizes, 'ad-leaderboard').setTargeting('vp', width).setTargeting('source', 'firstpass').addService(googletag.pubads())
    };
    if (incontent_sizes) {
        googletag.defineSlot('/49255849/incontent', incontent_sizes, 'ad-incontent').setTargeting('vp', width).setTargeting('source', 'firstpass').addService(googletag.pubads())
    };
    if (bottom_sizes) {
        googletag.defineSlot('/49255849/bottom', bottom_sizes, 'ad-bottom').setTargeting('vp', width).setTargeting('source', 'firstpass').addService(googletag.pubads())
    };
    if (sidebar_sizes) {
        googletag.defineSlot('/49255849/sidebar', sidebar_sizes, 'ad-sidebar').setTargeting('vp', width).setTargeting('source', 'firstpass').addService(googletag.pubads())
    };
    if (sidebarbottom_sizes) {
        googletag.defineSlot('/49255849/sidebarbottom', sidebarbottom_sizes, 'ad-sidebarbottom').setTargeting('vp', width).setTargeting('source', 'firstpass').addService(googletag.pubads())
    };
    googletag.pubads().enableLazyLoad({
        fetchMarginPercent: 100,
        renderMarginPercent: 50,
        mobileScaling: 1.0
    });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
});
