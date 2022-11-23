var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var ms_debug = true;
if (window.location.href.includes('ms_debug')) {
    ms_debug = false;
};

// //load gpt
// (function() {
//     var gads = document.createElement('script');
//     gads.async = true;
//     gads.type = 'text/javascript';
//     var useSSL = 'https:' == document.location.protocol;
//     gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
//     var node = document.getElementsByTagName('script')[0];
//     node.parentNode.insertBefore(gads, node);
// })();

if (ms_debug) {

    //Load faktor
    (function () {
        var fakt = document.createElement('script');
        fakt.async = true;
        fakt.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        fakt.src = (useSSL ? 'https:' : 'http:') + '//config-prod.choice.faktor.io/34d3a677-35a7-4f5b-a5d6-452462d8ad84/faktor.js';
        fakt.onload = function () {
            window.__cmp('addEventListener', 'acceptAllButtonClicked', function () {
                checkConsent();
            });
            window.__cmp('addEventListener', 'exitButtonClicked', function () {
                checkConsent();
            });
            window.__cmp('addEventListener', 'cmpReady', function () {
                checkConsent();
            });
        };
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(fakt, node);
    })();

    var pbjs = pbjs || {};
    pbjs.que = pbjs.que || [];

    // load gpt
    (function() {
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();

    // load prebid
    (function () {
        var mspb = document.createElement('script');
        mspb.async = true;
        mspb.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        mspb.src = (useSSL ? 'https:' : 'http:') + '//massariuscdn.com/prod/prebid.js'
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(mspb, node);
    })();

    var gptadslots = [];
    var PREBID_TIMEOUT = 1000;
    var FAILSAFE_TIMEOUT = 3000;


    var width = window.screen.availWidth;
    var floorad_sizes = [[1, 1]];

    if (width >= 1170) {
        var width = 'xxl';
        var leaderboard_sizes = [[120, 90], [728, 90], [970, 250], [970, 90]];
        var incontent_sizes = [[1, 1], [300, 250], [336, 280], [16, 9]];
        var bottom_sizes = [[728, 90], [970, 90], [970, 250]];
        var sidebar_sizes = [[300, 250], [300, 600]];
        var sidebarbottom_sizes = [[300, 250]];
    } else if (width > 979 && width < 1170) {
        width = 'xl';
        var leaderboard_sizes = [[120, 90], [728, 90], [970, 90], [970, 250], [970, 500]];
        var incontent_sizes = [[1, 1], [300, 250], [336, 280], [16, 9]];
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
        var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500], [16, 9]];
        var bottom_sizes = [[1, 1]];
        var sidebar_sizes = [[320, 50], [320, 100], [320, 320], [300, 250], [320, 240], [300, 600]];
        var sidebarbottom_sizes = [[1, 1]];
    } else if (width <= 468) {
        width = 's';
        var leaderboard_sizes = [[320, 50], [320, 100], [300, 250], [320, 240]];
        var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500], [16, 9]];
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
                labelAny: ['s', 'm'],
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
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942710
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540660767',
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
            },
            {
                bidder: 'justpremium',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    zone: '68397',
                    allow: ["pu", "wp", "fa", "sa", "pa"]
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
            },/*{
                    bidder: 'criteo',
                    labelAny: ['xxl', 'xl'],
                    params: {
                        zoneId: '1047632', //970x250
                        subPubId: 'alarmeringen'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['xxl', 'xl', 'l'],
                    params: {
                        zoneId: '1407631', //728x90
                        subPubId: 'alarmeringen'
                    }
                },  
                {
                    bidder: 'criteo',
                    labelAny: ['m', 's'],
                    params: {
                        zoneId: '1407629', //300x250
                        subPubId: 'alarmeringen'
                    }
                }*/
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
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942711
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294015
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m', 's'],
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
            },
            {
                bidder: 'visx',
                labelAny: ['s'],
                params: {
                    uid: '907253'
                }
            },
            {
                bidder: 'justpremium',
                labelAny: ['s'],
                params: {
                    zone: '68397',
                    allow: ["cf", "is"]
                }
            },
                /*            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1407629', //300x250
                                    subPubId: 'alarmeringen'
                                }
                            }*/
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
            {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294018
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
            },
                /*            {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl'],
                                    params: {
                                        zoneId: '1407632', //970x250
                                        subPubId: 'alarmeringen'
                                    }
                                },
                                {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l'],
                                    params: {
                                        zoneId: '1407631', //728x90
                                        subPubId: 'alarmeringen'
                                    }
                                }*/
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
                    unit: '540660767',
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
            },
                /*            {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l', 'm', 's'],
                                    params: {
                                        zoneId: '1407630', //300x600
                                        subPubId: 'alarmeringen'
                                    }
                                }, 
                                {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l', 'm', 's'],
                                    params: {
                                        zoneId: '1407629', //300x250
                                        subPubId: 'alarmeringen'
                                    }
                                }*/
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
            },
                /*            {
                                bidder: 'criteo',
                                labelAny: ['xxl', 'xl', 'l'],
                                params: {
                                    zoneId: '1407629', //300x250
                                    subPubId: 'alarmeringen'
                                }
                            }*/
            ]
        },
    ];

    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
    })

    const customConfigObject = {
        "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 2.50,
            "increment": 0.01
        },
        {
            "precision": 2,
            "min": 2.50,
            "max": 10,
            "increment": 0.10
        },
        {
            "precision": 2,
            "min": 10,
            "max": 20,
            "increment": 0.2
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 0.5
        }]
    };


    pbjs.que.push(function () {
        pbjs.setConfig({
            //rubicon single request throws error in responses -- need to figure out why
            /*        rubicon: {
                        singleRequest: false
                    }*/
            //debug: false,
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
                'sizesSupported': [[1, 1], [120, 90], [300, 250], [300, 600], [336, 280], [628, 300], [728, 90], [970, 250], [970, 90], [1800, 1000], [640, 480], [970, 1000], [1800, 200], [970, 500], [16, 9]],
                'labels': ['xxl']
            }, {
                'mediaQuery': '(min-width: 980px) and (max-width: 1169px)',
                'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640, 480], [16, 9]],
                'labels': ['xl']
            }, {
                'mediaQuery': '(min-width: 768px) and (max-width: 979px)',
                'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640, 480], [16, 9]],
                'labels': ['l']
            },
            {
                'mediaQuery': '(min-width: 468px) and (max-width: 767px)',
                'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [336, 280], [640, 480], [320, 500], [320, 320], [300, 600], [16, 9]],
                'labels': ['m']
            },
            {
                'mediaQuery': '(min-width: 0px) and (max-width: 467px)',
                'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [300, 300], [640, 480], [320, 500], [320, 320], [300, 600], [16, 9]],
                'labels': ['s']
            }]
        });
    });

    pbjs.bidderSettings = {
        improvedigital: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        tmp1: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 1.3;
            }
        },
        tmp2: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 2;
            }
        },
        pubmatic: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        openx: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        rubicon: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 0.8 * DefM;  // rubicon has a gross bid
            }
        },
        appnexus: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 0.7 * DefM;  // appnexus has a gross bid
            }
        }
    };

    pbjs.bidderSettings = {

    }

    // pbjs.que.push(function () {
    //     pbjs.aliasBidder('appnexus', 'tmp1');
    //     pbjs.aliasBidder('appnexus', 'tmp2');
    //     pbjs.aliasBidder('improvedigital', 'weborama');
    //     pbjs.addAdUnits(adUnits);
    //     pbjs.requestBids({
    //         bidsBackHandler: initAdserver,
    //         timeout: PREBID_TIMEOUT
    //     });
    // });

    function initAdserver(bids) {
        for (let i in bids) {
            for (let j in bids[i].bids) {
                let bid = bids[i].bids[j];
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
        googletag.cmd.push(function () {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh();
            });
        });
    }


    // setTimeout(function () {
    //     initAdserver();
    // }, FAILSAFE_TIMEOUT);


    var gptadslots = [];

    googletag.cmd.push(function () {
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
        googletag.pubads().setCentering(true);
        googletag.pubads().collapseEmptyDivs();
        googletag.pubads().enableLazyLoad({
            fetchMarginPercent: 100,
            renderMarginPercent: 50,
            mobileScaling: 1.0
        }); 
        googletag.enableServices();
    });



    /*
     !Paste wherever you want just make sure it executes before DFP responds with the first ads for rendering (execution)
     !!Don't forget the settings: https://gist.github.com/Slind14/79d706178fb3e4eb8b20359d816f0d76
     */

    var assertive_entityId = 'bgEwPQiCdZi46SnEn';
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
    ! function () {
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
            t = t || localStorage.getItem("assertiveYield") && -1 !== localStorage.getItem("assertiveYield").indexOf("debug") || -1 !== d("assertiveYield").indexOf("debug");

        function E(e) { return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, E) }

        function d(e) { return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")) }

        function R(e) { t && console.log(e) } Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function (e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var t = Object(this),
                    n = t.length >>> 0;
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var i = arguments[1], r = 0; r < n;) {
                    var o = t[r];
                    if (e.call(i, o, r, t)) return o;
                    r++
                }
            },
            configurable: !0,
            writable: !0
        }),
            function () {
                if (!localStorage.getItem(s) || Date.now() > localStorage.getItem(s)) {
                    localStorage.setItem(y, E()), localStorage.setItem(a, Math.random()), document.referrer ? localStorage.setItem(b, document.referrer) : localStorage.removeItem(b);
                    var e = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                        t = {};
                    for (var n in e) {
                        var i = e[n],
                            r = d(i);
                        "" !== r && (t[i] = r)
                    }
                    var o = JSON.stringify(t);
                    o !== JSON.stringify({}) ? localStorage.setItem(h, o) : localStorage.removeItem(h)
                }
                localStorage.setItem(s, Date.now() + 18e5)
            }(), -1 !== d("assertiveYield").indexOf("check") && alert("Assertive Yield: Check"), ("undefined" == typeof assertive_sampleRate || assertive_sampleRate && localStorage.getItem(a) < assertive_sampleRate) && function e() {
                if (n) return;
                if ("undefined" == typeof googletag || !googletag.pubadsReady) return void setTimeout(e, 20);
                n = !0;
                var v = null;
                window.addEventListener("blur", function () {
                    if (v) {
                        var e = new XMLHttpRequest,
                            t = _ + "?event=click&entityId=" + assertive_entityId + "&impressionUUID=" + U[v];
                        e.open("GET", t, !0), e.send()
                    }
                });
                googletag.cmd.push(function () {
                    googletag.pubads().addEventListener("slotRenderEnded", function (e) {
                        if (!e.isEmpty)
                            if ("undefined" != typeof assertive_entityId) {
                                var t = e.slot,
                                    n = t.getSlotElementId(),
                                    i = t.getAdUnitPath(),
                                    r = document.getElementById(n),
                                    o = null;
                                if (r) {
                                    if (pbjs.adUnits.find(function (e) { return e.code === n })) o = n;
                                    else {
                                        if (!pbjs.adUnits.find(function (e) { return e.code === i })) return;
                                        o = i
                                    }
                                    var s = r.getElementsByTagName("iframe")[0];
                                    s.addEventListener("mouseover", function () { v = n }), s.addEventListener("touchstart", function () { v = n }), s.addEventListener("mouseout", function () { v = null }), s.addEventListener("touchend", function () { v = null });
                                    var a = t.getHtml(),
                                        d = /(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(a),
                                        l = d ? d[1] : t.getTargeting("hb_adid")[0],
                                        u = !!d,
                                        c = pbjs.getBidResponsesForAdUnitCode(o).bids.find(function (e) { return e.adId === l });
                                    U[n] = E(), R("Session UUID: " + localStorage.getItem(y) + ", PageView UUID: " + w + ", Impression UUID: " + U[n]), R("Slot Id: " + n + ", AdUnitPath: " + i), c && R(" - Highest PreBid " + c.cpm + " from " + c.bidderCode + " with id " + l), c || R(" - No PreBids!!!"), R(" - Winner: " + (u ? "prebid" : "dfp (Direct/AdX/AdSense)") + " with size " + (u ? c.width : e.size[0]) + "x" + (u ? c.height : e.size[1])), R("---------------");
                                    var m = null,
                                        p = null;
                                    c && (c.appnexus ? m = c.appnexus.buyerMemberId ? c.appnexus.buyerMemberId : null : c.rubicon && (m = c.rubicon.networkId ? c.rubicon.networkId : null, p = c.rubicon.advertiserId ? c.rubicon.advertiserId : null));
                                    var f = { version: I, entityId: assertive_entityId, siteUUID: "undefined" != typeof assertive_siteUUID ? assertive_siteUUID : null, sessionUUID: localStorage.getItem(y), pageViewUUID: w, impressionUUID: U[n], slotId: n, adUnitPath: i, highestPreBid: c ? c.cpm : 0, highestPreBid_partner: c ? c.bidderCode : "", buyerId: m, brandId: p, dealId: c && c.dealId ? c.dealId : null, creativeId: c && c.creativeId ? c.creativeId : null, mediaType: c && c.mediaType ? c.mediaType : null, currency: c && c.currency ? c.currency : null, netRevenue: c && c.netRevenue ? c.netRevenue : null, creative_width: u ? c.width : e.size[0], creative_height: u ? c.height : e.size[1], preBidWon: u, timeToRespond: c ? c.timeToRespond : null, protocol: window.location.protocol, host: window.location.host, pathname: window.location.pathname, pathname_split: window.location.pathname.split("/").filter(function (e) { return e }), referrer: localStorage.getItem(b), utm: localStorage.getItem(h), prebid_timeout: assertive_timeout || null, prebid_version: pbjs.version || null, userState: "undefined" != typeof assertive_userState ? assertive_userState : null, layout: "undefined" != typeof assertive_layout ? assertive_layout : null, custom_1: "undefined" != typeof assertive_custom_1 ? assertive_custom_1 : null, custom_2: "undefined" != typeof assertive_custom_2 ? assertive_custom_2 : null, custom_3: "undefined" != typeof assertive_custom_3 ? assertive_custom_3 : null, custom_4: "undefined" != typeof assertive_custom_4 ? assertive_custom_4 : null, custom_5: "undefined" != typeof assertive_custom_5 ? assertive_custom_5 : null, bps_type: t.getTargeting("ay_bid")[0] || null, bps_algo: t.getTargeting("ay_algo")[0] || null };
                                    S.push(f);
                                    var g = new XMLHttpRequest;
                                    g.open("POST", _, !0), g.setRequestHeader("Content-Type", "text/plain"), g.send(JSON.stringify(f)), R("SENT!!!")
                                }
                            } else console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...")
                    }), googletag.pubads().addEventListener("impressionViewable", function (e) {
                        var t = e.slot.getSlotElementId();
                        if (U[t]) {
                            var n = new XMLHttpRequest,
                                i = _ + "?event=activeView&entityId=" + assertive_entityId + "&impressionUUID=" + U[t];
                            n.open("GET", i, !0), n.send()
                        }
                    })
                })
            }();
        var n = !1
    }();

    //CMP Logic

    var consentForAds;
    var checkConsent = function () {
        window.__cmp('getVendorConsents', undefined, function (data) {
            var newConsentForAds = (data.purposeConsents[1] && data.purposeConsents[2] && data.purposeConsents[3] && data.purposeConsents[4] && data.purposeConsents[5]);
            if (consentForAds !== newConsentForAds) {
                consentForAds = newConsentForAds;
                googletag.cmd.push(function () {
                    googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1);
                });
                window.__cmp('getConsentData', undefined, function (data) {
                    googletag.cmd.push(function () {
                        googletag.pubads().setTargeting('iab_string', [data.consentData]);
                        googletag.pubads().setTargeting('consent', [consentForAds ? 1 : 0]);
                        googletag.pubads().setTargeting('rev_consent', [consentForAds ? 0 : 1]);
                        pbjs.que.push(function () {
                            pbjs.requestBids({
                                bidsBackHandler: initAdserver,
                                timeout: PREBID_TIMEOUT
                            });
                        })

                    });
                });
            }
        });
    }


} else {

    console.log("else?");

        //load prebid
        (function () {
            var mspb = document.createElement('script');
            mspb.async = true;
            mspb.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            mspb.src = (useSSL ? 'https:' : 'http:') + '//massariuscdn.com/prod/prebid.js'
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(mspb, node);
        })();


    //load gpt
    (function() {
        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
    })();

    var width = window.screen.availWidth;
    var floorad_sizes = [[1, 1]];

    if (width >= 1170) {
        var width = 'xxl';
        var leaderboard_sizes = [[120, 90], [728, 90], [970, 250], [970, 90]];
        var incontent_sizes = [[1, 1], [300, 250], [336, 280], [16, 9]];
        var bottom_sizes = [[728, 90], [970, 90], [970, 250]];
        var sidebar_sizes = [[300, 250], [300, 600]];
        var sidebarbottom_sizes = [[300, 250]];
    } else if (width > 979 && width < 1170) {
        width = 'xl';
        var leaderboard_sizes = [[120, 90], [728, 90], [970, 90], [970, 250], [970, 500]];
        var incontent_sizes = [[1, 1], [300, 250], [336, 280], [16, 9]];
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
        var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500], [16, 9]];
        var bottom_sizes = [[1, 1]];
        var sidebar_sizes = [[320, 50], [320, 100], [320, 320], [300, 250], [320, 240], [300, 600]];
        var sidebarbottom_sizes = [[1, 1]];
    } else if (width <= 468) {
        width = 's';
        var leaderboard_sizes = [[320, 50], [320, 100], [300, 250], [320, 240]];
        var incontent_sizes = [[1, 1], [320, 50], [320, 100], [300, 250], [320, 240], [320, 500], [16, 9]];
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
                labelAny: ['s', 'm'],
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
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942710
                }
            }, {
                bidder: 'openx',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    unit: '540660767',
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
            },
            {
                bidder: 'justpremium',
                labelAny: ['l', 'xl', 'xxl'],
                params: {
                    zone: '68397',
                    allow: ["pu", "wp", "fa", "sa", "pa"]
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
            },/*{
                    bidder: 'criteo',
                    labelAny: ['xxl', 'xl'],
                    params: {
                        zoneId: '1047632', //970x250
                        subPubId: 'alarmeringen'
                    }
                },
                {
                    bidder: 'criteo',
                    labelAny: ['xxl', 'xl', 'l'],
                    params: {
                        zoneId: '1407631', //728x90
                        subPubId: 'alarmeringen'
                    }
                },  
                {
                    bidder: 'criteo',
                    labelAny: ['m', 's'],
                    params: {
                        zoneId: '1407629', //300x250
                        subPubId: 'alarmeringen'
                    }
                }*/
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
            {
                bidder: 'appnexus',
                params: {
                    placementId: 10942711
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294015
                }
            }, {
                bidder: 'improvedigital',
                labelAny: ['m', 's'],
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
            },
            {
                bidder: 'visx',
                labelAny: ['s'],
                params: {
                    uid: '907253'
                }
            },
            {
                bidder: 'justpremium',
                labelAny: ['s'],
                params: {
                    zone: '68397',
                    allow: ["cf", "is"]
                }
            },
                /*            {
                                bidder: 'criteo',
                                params: {
                                    zoneId: '1407629', //300x250
                                    subPubId: 'alarmeringen'
                                }
                            }*/
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
            {
                bidder: 'improvedigital',
                labelAny: ['xxl', 'xl', 'l'],
                params: {
                    placementId: 13294018
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
            },
                /*            {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl'],
                                    params: {
                                        zoneId: '1407632', //970x250
                                        subPubId: 'alarmeringen'
                                    }
                                },
                                {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l'],
                                    params: {
                                        zoneId: '1407631', //728x90
                                        subPubId: 'alarmeringen'
                                    }
                                }*/
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
                    unit: '540660767',
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
            },
                /*            {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l', 'm', 's'],
                                    params: {
                                        zoneId: '1407630', //300x600
                                        subPubId: 'alarmeringen'
                                    }
                                }, 
                                {
                                    bidder: 'criteo',
                                    labelAny: ['xxl', 'xl', 'l', 'm', 's'],
                                    params: {
                                        zoneId: '1407629', //300x250
                                        subPubId: 'alarmeringen'
                                    }
                                }*/
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
            },
                /*            {
                                bidder: 'criteo',
                                labelAny: ['xxl', 'xl', 'l'],
                                params: {
                                    zoneId: '1407629', //300x250
                                    subPubId: 'alarmeringen'
                                }
                            }*/
            ]
        },
    ];

    var DefM = 1.3;
    var PREBID_TIMEOUT = 1300;
    var FAILSAFE_TIMEOUT = 2000;

    const customConfigObject = {
        "buckets": [{
            "precision": 2,
            "min": 0,
            "max": 2.50,
            "increment": 0.01
        },
        {
            "precision": 2,
            "min": 2.50,
            "max": 10,
            "increment": 0.10
        },
        {
            "precision": 2,
            "min": 10,
            "max": 20,
            "increment": 0.2
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 0.5
        }]
    };


    pbjs.que.push(function () {
        pbjs.setConfig({
            //rubicon single request throws error in responses -- need to figure out why
            /*        rubicon: {
                        singleRequest: false
                    }*/
            //debug: false,
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
                'sizesSupported': [[1, 1], [120, 90], [300, 250], [300, 600], [336, 280], [628, 300], [728, 90], [970, 250], [970, 90], [1800, 1000], [640, 480], [970, 1000], [1800, 200], [970, 500], [16, 9]],
                'labels': ['xxl']
            }, {
                'mediaQuery': '(min-width: 980px) and (max-width: 1169px)',
                'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640, 480], [16, 9]],
                'labels': ['xl']
            }, {
                'mediaQuery': '(min-width: 768px) and (max-width: 979px)',
                'sizesSupported': [[1, 1], [728, 90], [970, 500], [120, 90], [970, 250], [970, 90], [300, 250], [300, 600], [336, 280], [592, 300], [640, 480], [16, 9]],
                'labels': ['l']
            },
            {
                'mediaQuery': '(min-width: 468px) and (max-width: 767px)',
                'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [336, 280], [640, 480], [320, 500], [320, 320], [300, 600], [16, 9]],
                'labels': ['m']
            },
            {
                'mediaQuery': '(min-width: 0px) and (max-width: 467px)',
                'sizesSupported': [[1, 1], [320, 50], [320, 100], [468, 60], [300, 250], [320, 240], [300, 300], [640, 480], [320, 500], [320, 320], [300, 600], [16, 9]],
                'labels': ['s']
            }]
        });
    });

    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
        googletag.pubads().disableInitialLoad();
    });

    pbjs.bidderSettings = {
        improvedigital: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        tmp1: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 1.3;
            }
        },
        tmp2: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 2;
            }
        },
        pubmatic: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        openx: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * DefM * 1;
            }
        },
        rubicon: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 0.8 * DefM;  // rubicon has a gross bid
            }
        },
        appnexus: {
            bidCpmAdjustment: function (bidCpm) {
                return bidCpm * 0.7 * DefM;  // appnexus has a gross bid
            }
        }
    };

    pbjs.bidderSettings = {

    }

    pbjs.que.push(function () {
        pbjs.aliasBidder('appnexus', 'tmp1');
        pbjs.aliasBidder('appnexus', 'tmp2');
        pbjs.aliasBidder('improvedigital', 'weborama');
        pbjs.addAdUnits(adUnits);
        pbjs.requestBids({
            bidsBackHandler: initAdserver,
            timeout: PREBID_TIMEOUT
        });
    });

    function initAdserver(bids) {
        for (let i in bids) {
            for (let j in bids[i].bids) {
                let bid = bids[i].bids[j];
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
        googletag.cmd.push(function () {
            pbjs.que.push(function() {
                pbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh();
            });
        });
    }


    // setTimeout(function () {
    //     initAdserver();
    // }, FAILSAFE_TIMEOUT);


    var gptadslots = [];

    googletag.cmd.push(function () {
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



    /*
     !Paste wherever you want just make sure it executes before DFP responds with the first ads for rendering (execution)
     !!Don't forget the settings: https://gist.github.com/Slind14/79d706178fb3e4eb8b20359d816f0d76
     */

    var assertive_entityId = 'bgEwPQiCdZi46SnEn';
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
    ! function () {
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
            t = t || localStorage.getItem("assertiveYield") && -1 !== localStorage.getItem("assertiveYield").indexOf("debug") || -1 !== d("assertiveYield").indexOf("debug");

        function E(e) { return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, E) }

        function d(e) { return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(e).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1")) }

        function R(e) { t && console.log(e) } Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function (e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var t = Object(this),
                    n = t.length >>> 0;
                if ("function" != typeof e) throw new TypeError("predicate must be a function");
                for (var i = arguments[1], r = 0; r < n;) {
                    var o = t[r];
                    if (e.call(i, o, r, t)) return o;
                    r++
                }
            },
            configurable: !0,
            writable: !0
        }),
            function () {
                if (!localStorage.getItem(s) || Date.now() > localStorage.getItem(s)) {
                    localStorage.setItem(y, E()), localStorage.setItem(a, Math.random()), document.referrer ? localStorage.setItem(b, document.referrer) : localStorage.removeItem(b);
                    var e = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                        t = {};
                    for (var n in e) {
                        var i = e[n],
                            r = d(i);
                        "" !== r && (t[i] = r)
                    }
                    var o = JSON.stringify(t);
                    o !== JSON.stringify({}) ? localStorage.setItem(h, o) : localStorage.removeItem(h)
                }
                localStorage.setItem(s, Date.now() + 18e5)
            }(), -1 !== d("assertiveYield").indexOf("check") && alert("Assertive Yield: Check"), ("undefined" == typeof assertive_sampleRate || assertive_sampleRate && localStorage.getItem(a) < assertive_sampleRate) && function e() {
                if (n) return;
                if ("undefined" == typeof googletag || !googletag.pubadsReady) return void setTimeout(e, 20);
                n = !0;
                var v = null;
                window.addEventListener("blur", function () {
                    if (v) {
                        var e = new XMLHttpRequest,
                            t = _ + "?event=click&entityId=" + assertive_entityId + "&impressionUUID=" + U[v];
                        e.open("GET", t, !0), e.send()
                    }
                });
                googletag.cmd.push(function () {
                    googletag.pubads().addEventListener("slotRenderEnded", function (e) {
                        if (!e.isEmpty)
                            if ("undefined" != typeof assertive_entityId) {
                                var t = e.slot,
                                    n = t.getSlotElementId(),
                                    i = t.getAdUnitPath(),
                                    r = document.getElementById(n),
                                    o = null;
                                if (r) {
                                    if (pbjs.adUnits.find(function (e) { return e.code === n })) o = n;
                                    else {
                                        if (!pbjs.adUnits.find(function (e) { return e.code === i })) return;
                                        o = i
                                    }
                                    var s = r.getElementsByTagName("iframe")[0];
                                    s.addEventListener("mouseover", function () { v = n }), s.addEventListener("touchstart", function () { v = n }), s.addEventListener("mouseout", function () { v = null }), s.addEventListener("touchend", function () { v = null });
                                    var a = t.getHtml(),
                                        d = /(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(a),
                                        l = d ? d[1] : t.getTargeting("hb_adid")[0],
                                        u = !!d,
                                        c = pbjs.getBidResponsesForAdUnitCode(o).bids.find(function (e) { return e.adId === l });
                                    U[n] = E(), R("Session UUID: " + localStorage.getItem(y) + ", PageView UUID: " + w + ", Impression UUID: " + U[n]), R("Slot Id: " + n + ", AdUnitPath: " + i), c && R(" - Highest PreBid " + c.cpm + " from " + c.bidderCode + " with id " + l), c || R(" - No PreBids!!!"), R(" - Winner: " + (u ? "prebid" : "dfp (Direct/AdX/AdSense)") + " with size " + (u ? c.width : e.size[0]) + "x" + (u ? c.height : e.size[1])), R("---------------");
                                    var m = null,
                                        p = null;
                                    c && (c.appnexus ? m = c.appnexus.buyerMemberId ? c.appnexus.buyerMemberId : null : c.rubicon && (m = c.rubicon.networkId ? c.rubicon.networkId : null, p = c.rubicon.advertiserId ? c.rubicon.advertiserId : null));
                                    var f = { version: I, entityId: assertive_entityId, siteUUID: "undefined" != typeof assertive_siteUUID ? assertive_siteUUID : null, sessionUUID: localStorage.getItem(y), pageViewUUID: w, impressionUUID: U[n], slotId: n, adUnitPath: i, highestPreBid: c ? c.cpm : 0, highestPreBid_partner: c ? c.bidderCode : "", buyerId: m, brandId: p, dealId: c && c.dealId ? c.dealId : null, creativeId: c && c.creativeId ? c.creativeId : null, mediaType: c && c.mediaType ? c.mediaType : null, currency: c && c.currency ? c.currency : null, netRevenue: c && c.netRevenue ? c.netRevenue : null, creative_width: u ? c.width : e.size[0], creative_height: u ? c.height : e.size[1], preBidWon: u, timeToRespond: c ? c.timeToRespond : null, protocol: window.location.protocol, host: window.location.host, pathname: window.location.pathname, pathname_split: window.location.pathname.split("/").filter(function (e) { return e }), referrer: localStorage.getItem(b), utm: localStorage.getItem(h), prebid_timeout: assertive_timeout || null, prebid_version: pbjs.version || null, userState: "undefined" != typeof assertive_userState ? assertive_userState : null, layout: "undefined" != typeof assertive_layout ? assertive_layout : null, custom_1: "undefined" != typeof assertive_custom_1 ? assertive_custom_1 : null, custom_2: "undefined" != typeof assertive_custom_2 ? assertive_custom_2 : null, custom_3: "undefined" != typeof assertive_custom_3 ? assertive_custom_3 : null, custom_4: "undefined" != typeof assertive_custom_4 ? assertive_custom_4 : null, custom_5: "undefined" != typeof assertive_custom_5 ? assertive_custom_5 : null, bps_type: t.getTargeting("ay_bid")[0] || null, bps_algo: t.getTargeting("ay_algo")[0] || null };
                                    S.push(f);
                                    var g = new XMLHttpRequest;
                                    g.open("POST", _, !0), g.setRequestHeader("Content-Type", "text/plain"), g.send(JSON.stringify(f)), R("SENT!!!")
                                }
                            } else console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...")
                    }), googletag.pubads().addEventListener("impressionViewable", function (e) {
                        var t = e.slot.getSlotElementId();
                        if (U[t]) {
                            var n = new XMLHttpRequest,
                                i = _ + "?event=activeView&entityId=" + assertive_entityId + "&impressionUUID=" + U[t];
                            n.open("GET", i, !0), n.send()
                        }
                    })
                })
            }();
        var n = !1
    }();
}