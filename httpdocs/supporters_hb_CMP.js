// (function() {
//     var mscmp = document.createElement('script');
//     mscmp.async = false;
//     mscmp.type = 'text/javascript';
//     var useSSL = 'https:' == document.location.protocol;
//     mscmp.src = (useSSL ? 'https:' : 'http:') + '//cmp-loader.choice.faktor.io/O1TI0E.js';
//     var node = document.getElementsByTagName('script')[0];
//     node.parentNode.insertBefore(mscmp, node);
// })();

//load prebid
(function() {
    var mspb = document.createElement('script');
    mspb.async = false;
    mspb.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    mspb.src = (useSSL ? 'https:' : 'http:') + '//massariuscdn.com/prod/prebid.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(mspb, node);
})();

//load gpt
(function() {
    var gads = document.createElement('script');
    gads.async = false;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

var prebidReady = false;

const Header_tag = true; const Inarticlevideo_tag = true; const MPU_ATF_tag = true; const MPU_BTF_tag = true; 
const MPU_BTFV1_tag = true;    
const MPU_Native_BTF_tag = true;

// Define sizes per screen
var HeaderDesktopSizes = [[728, 90],[970, 250],[970,500],[970,90],[1800,1000],[970,1000]];
var MPU_BTF_Desktop = [[300,250],[300,600]];
var NativeDesktop = [300,250];
var MPU_ATF_Desktop = [[300,250],[300,600]];
var MPU_BTFV1_Desktop = [[300,250],[300,600]];
var MobileSizes = [[300,50],[320,50],[320,100],[320,240],[300,250]];

//call the right sizes based on viewport
if (window.screen.availWidth > 768) {
    HeaderSizes = HeaderDesktopSizes
    MPU_ATF_Sizes = MPU_ATF_Desktop
    MPU_BTF_Sizes = MPU_BTF_Desktop
    MPU_BTFV1_Sizes = MPU_BTFV1_Desktop
    Native_BTF_Sizes = NativeDesktop;
} else {
    HeaderSizes = MobileSizes
    MPU_ATF_Sizes = MobileSizes
    MPU_BTF_Sizes = MobileSizes
    MPU_BTFV1_Sizes = MobileSizes
    Native_BTF_Sizes = MobileSizes;
}

const customConfigObject = { //price buckets as set up in Massarius Ad Manager
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

var adUnits = []

if(Header_tag){
    adUnits.push(
        {
    code: '/13436254/Supporters_Header',
    mediaTypes: {
        banner: {
            sizes: HeaderSizes //HeaderSizes differs per viewport
        }
    },
    bids: [{
            bidder: 'improvedigital', //define bidder or alias name
            labelAny: ['desktop', 'tablet'],    //this placement should only be called if it meets criteria 
                                                //for tablet or desktop as defined in pbjs.setConfig.SizeConfig()
            params: {
                placementId: '1155793', //improve placement id
                keyValues: {
                    hb: ['true'] //add a keyvalue - this will be used to exclude tag-based and other campaings that should not run over HB
                }
            }
        },
        {
            bidder: 'improvedigital',
            labelAny: ['phone'], //This placement ID will be called when it meets criteria for phone
            params: {
                placementId: '1155809',
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['phone'],
            params: {
                publisherId: '156546',
                adSlot: '1637044'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['desktop','tablet'],
            params: {
                placementId: '13894926'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['phone'],
            params: {
                placementId: '13896329'
            }
        }
    ]
})};
if(MPU_ATF_tag){
    adUnits.push(
{
    code: '/13436254/Supporters_MPU_ATF',
    mediaTypes: {
        banner: {
            sizes: MPU_ATF_Sizes //HeaderSizes differs per viewport
        }
    },
    bids: [{
            bidder: 'improvedigital', //define bidder or alias name
            labelAny: ['desktop', 'tablet'],    //this placement should only be called if it meets criteria 
                                                //for tablet or desktop as defined in pbjs.setConfig.SizeConfig()
            params: {
                placementId: '1155794', //improve placement id
                keyValues: {
                    hb: ['true'] //add a keyvalue - this will be used to exclude tag-based and other campaings that should not run over HB
                }
            }
        },
        {
            bidder: 'improvedigital',
            labelAny: ['phone'], //This placement ID will be called when it meets criteria for phone
            params: {
                placementId: '1155809',
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['phone'],
            params: {
                publisherId: '156546',
                adSlot: '1637044'
            }
        },
                {
            bidder: 'tmp1',
            labelAny: ['desktop','tablet'],
            params: {
                placementId: '13894926'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['phone'],
            params: {
                placementId: '13896329'
            }
        }
    ]
}
        )
};

if(MPU_BTF_tag){
    adUnits.push(
{
    code: '/13436254/Supporters_MPU_BTF',
    mediaTypes: {
        banner: {
            sizes: MPU_BTF_Sizes //HeaderSizes differs per viewport
        }
    },
    bids: [{
            bidder: 'improvedigital', 
            labelAny: ['desktop', 'tablet'],   
            params: {
                placementId: '1155795', //improve placement id
                keyValues: {
                    hb: ['true'] 
                }
            }
        },
        {
            bidder: 'improvedigital',
            labelAny: ['phone'], 
            params: {
                placementId: '1155813',
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['phone'],
            params: {
                publisherId: '156546',
                adSlot: '1637044'
            }
        },
                {
            bidder: 'tmp1',
            labelAny: ['desktop','tablet'],
            params: {
                placementId: '13894926'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['phone'],
            params: {
                placementId: '13896329'
            }
        }
    ]
}
        )
};

if(MPU_BTFV1_tag){
    adUnits.push(
{
    code: '/13436254/Supporters_MPU_BTFV1',
    mediaTypes: {
        banner: {
            sizes: MPU_BTFV1_Sizes //HeaderSizes differs per viewport
        }
    },
    bids: [{
            bidder: 'improvedigital', 
            labelAny: ['desktop', 'tablet'],    
            params: {
                placementId: '1155803', 
                keyValues: {
                    hb: ['true'] 
                }
            }
        },
                {
            bidder: 'improvedigital',
            labelAny: ['phone'], 
            params: {
                placementId: '1155811',
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['phone'],
            params: {
                publisherId: '156546',
                adSlot: '1637044'
            }
        },
                {
            bidder: 'tmp1',
            labelAny: ['desktop','tablet'],
            params: {
                placementId: '13894926'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['phone'],
            params: {
                placementId: '13896329'
            }
        }
    ]
}
        )
};

if(MPU_Native_BTF_tag){
    adUnits.push(
{
    code: '/13436254/Supporters_Native_BTF',
    mediaTypes: {
        banner: {
            sizes: Native_BTF_Sizes //HeaderSizes differs per viewport
        }
    },
    bids: [{
            bidder: 'improvedigital',
            labelAny: ['desktop', 'tablet'],
            params: {
                placementId: '1155806', //improve placement id
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'improvedigital',
            labelAny: ['phone'], 
            params: {
                placementId: '1155811',
                keyValues: {
                    hb: ['true']
                }
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['desktop', 'tablet'],
            params: {
                publisherId: '156546',
                adSlot: '1636279'
            }
        },
        {
            bidder: 'pubmatic',
            labelAny: ['phone'],
            params: {
                publisherId: '156546',
                adSlot: '1637044'
            }
        },
                {
            bidder: 'tmp1',
            labelAny: ['desktop','tablet'],
            params: {
                placementId: '13894926'
            }
        },
        {
            bidder: 'tmp1',
            labelAny: ['phone'],
            params: {
                placementId: '13896329'
            }
        }
    ]
}
    )
};

var PREBID_TIMEOUT = 1500;
var FAILSAFE_TIMEOUT = 3000;
var msCorrection = 1.3;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
    pbjs.addAdUnits(adUnits);                 
    pbjs.aliasBidder('improvedigital', 'weborama'); //You can also call improvedigital by bidder name weborama
    pbjs.aliasBidder('appnexus', 'tmp1');
    pbjs.aliasBidder('appnexus', 'tmp2');
    pbjs.setConfig({
        sizeConfig: [{
            'mediaQuery': '(min-width: 1025px)', //if viewport > 1025
            'sizesSupported': [[1800, 1000],[970, 1000],[970, 500],[970, 250],[970, 90],[728, 90],[300, 250],[300, 600]], //>call these sizes
            'labels': ['desktop'] //label impression as 'desktop', can be used for label targeting
        }, {
            'mediaQuery': '(min-width: 769px) and (max-width: 1024px)',
            'sizesSupported': [[970, 250],[970, 90],[728, 90],[300, 250],[300, 600]],
            'labels': ['tablet']
        }, {
            'mediaQuery': '(min-width: 0px) and (max-width: 768px)',
            'sizesSupported': [[300, 250],[320, 240],[300, 600],[300, 50],[320, 50],[300, 100],[320, 100]],
            'labels': ['phone']
        }],
        priceGranularity: customConfigObject, //use defined buckets
        enableSendAllBids: true, //send all bids to the ad server (not only winning bid)
        bidderSequence: "fixed", //call bidders in random order
        bidderTimeout: PREBID_TIMEOUT, //time bidders have to respond
        debug: false, //turn on debugger in inspect > console
        consentManagement: {
            cmpApi: 'iab',
            timeout: 100000,
            allowAuctionWithoutConsent: false
          },
        userSync: {
            syncDelay: 3000, //user syncs will be dropped 3s after page load (not instantly, to avoid interfering with loading important stuff )
            syncEnabled: true, //user syncs enabled
            syncsPerBidder: 5, //5 syncs per bidder
            iframeEnabled: true //serve user syncs in separate iframes
        },
        "currency": {
            "adServerCurrency": "EUR" //call bids in EUR
        }
    });
// Same as for TV gids:
    pbjs.bidderSettings = {
    improvedigital: {
        bidCpmAdjustment: function(bidCpm) {
            return bidCpm * msCorrection * 1;  //standard adjustment assuming this bidder:
                                                    //bids net & in EUR
        }
    },
    tmp1: {
        bidCpmAdjustment: function(bidCpm) { 
            return bidCpm * 1.3;                    //Standard TMP adjustment * 1.3
        }
    },
    tmp2: {
        bidCpmAdjustment: function(bidCpm) {
            return bidCpm * 2;                      //Audience TMP adjustment * 2.0
        }
    },
    pubmatic: {
        bidCpmAdjustment: function(bidCpm) {
            return bidCpm * msCorrection * 1;
        }
    },
    openx: {
        bidCpmAdjustment: function(bidCpm) {
            return bidCpm * msCorrection * 1;
        }
    }
};
    pbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});


function initAdserver() {
    if (pbjs.initAdserverSet) return;
    pbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        pbjs.que.push(function() {
            pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
            // Set prebidReady
                        var prebidReady = true
                        prebidFunction();
        });
    });
}

var consentForAds;
var checkConsent = function() {
    console.log('Faktor.io CMP: checkConsent');
    window.__cmp('getVendorConsents', undefined, function(data) {
        var newConsentForAds = (data.purposeConsents[1] && data.purposeConsents[2] && data.purposeConsents[3] && data.purposeConsents[4] && data.purposeConsents[5])
        console.log('consentForAds: ' + newConsentForAds);
        if (consentForAds !== newConsentForAds) {
            consentForAds = newConsentForAds;
            googletag.cmd.push(function() {
                googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1); //request non-personalized ads for no consent
            });
            window.__cmp('getConsentData', undefined, function(data) {
                googletag.cmd.push(function() {
                    googletag.pubads().setTargeting('iab_string', [data.consentData]); //send IAB string KV to DFP
                    googletag.pubads().setTargeting('consent', [consentForAds ? 1 : 0]); //send consent 1/0 KV to DFP
                    googletag.pubads().setTargeting('rev_consent', [consentForAds ? 0 : 1]); //send rev_consent (equal to NPA) KV to DFP
                    
                    //mark CMP as ready for refresh    
                    cmpReady = true
                    cmpFunction()
                });
            });
        }
    });
}
// refresh ads on pressing accept button (also after changing via fingerprint)
window.__cmp('addEventListener', 'acceptAllButtonClicked', function(data) {
    checkConsent();
     
});
// refresh ads on pressing exit button (also after changing via fingerprint)
window.__cmp('addEventListener', 'exitButtonClicked', function(data) {
    checkConsent();
});
//listener for CMP ready - refresh ads when consent is found
window.__cmp('addEventListener', 'cmpReady', function(data) {
    checkConsent();
});

  setTimeout(function() {
      initAdserver();
  }, FAILSAFE_TIMEOUT);

googletag.cmd.push(function(){
if(Header_tag){
    googletag.defineSlot('/13436254/Supporters_Header', HeaderSizes, 'div-gpt-ad-1525421665586-0').
    addService(googletag.pubads());
console.log('Header_tag_defined')};
if(MPU_ATF_tag){
    googletag.defineSlot('/13436254/Supporters_MPU_ATF', MPU_ATF_Sizes, 'div-gpt-ad-1525421665586-1').
    addService(googletag.pubads())};
if(MPU_BTF_tag){
    googletag.defineSlot('/13436254/Supporters_MPU_BTF', MPU_BTF_Sizes, 'div-gpt-ad-1525421665586-2').
    addService(googletag.pubads())};
if(MPU_BTFV1_tag){
googletag.defineSlot('/13436254/Supporters_MPU_BTFV1', MPU_BTFV1_Sizes, 'div-gpt-ad-1525421665586-3').
    addService(googletag.pubads())};
if(MPU_Native_BTF_tag){
googletag.defineSlot('/13436254/Supporters_Native_BTF', Native_BTF_Sizes, 'div-gpt-ad-1525421347873-3').
    addService(googletag.pubads())};
googletag.pubads().setTargeting('hb', ['true']);
googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs();
googletag.enableServices();
});

var timeStampInMs1;
var timeStampInMs2;
function prebidFunction () {
    if (cmpReady) {
        console.log("Prebid: CMP was faster (A)")
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
            console.log("prebid + cmp ready: ads refreshed (A)")
            //log timestamp
/*                        var timeStampInMs1 = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
            console.log("A: " + timeStampInMs1, Date.now());
            console.log("Page head till prebidReady: " + (timeStampInMs1 - timeStampInMs3));*/
        });
    } else {
        console.log("Prebid: Waiting for CMP (A)")
        //log timestamp
/*                    var timeStampInMs1 = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
        console.log("A: " + timeStampInMs1, Date.now());
        console.log("Page head till prebidReady: " + (timeStampInMs1 - timeStampInMs3));*/
    }
}
function cmpFunction () {
    if (prebidReady) {
        console.log("CMP: Prebid was faster(B)")
        googletag.cmd.push(function() {
            googletag.pubads().refresh();
            console.log("prebid + cmp ready: ads refreshed (B)")

    })
}}