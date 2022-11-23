//Load Smartadserver
var bidAvaillable = false;

(function () {
    var gads = document.createElement("script");
    gads.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    gads.src =
        (useSSL ? "https:" : "http:") +
        "//ec.sascdn.com/tag/3001/smart.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(gads, node);
})();

//load prebid
(function () {
    var mspb = document.createElement("script");
    mspb.async = true;
    mspb.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    mspb.src =
        (useSSL ? "https:" : "http:") +
        "//massariuscdn.com/prod/prebids2s.js";
    var node = document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(mspb, node);
})();

var PREBID_TIMEOUT = 1300;
var FAILSAFE_TIMEOUT = 2000;

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function () {
    console.log("1");
    var adUnits = [{
        code: 'sas_68479',
        mediaTypes: {
            banner: {
                sizes: [
                    [728, 90]
                ]
            }
        },
        bids: [
            {
                bidder: "rubicon",
                params: {
                    accountId: "20952",
                    siteId: "315380",
                    zoneId: "1608784"
                }
            },
            {
                bidder: "openx",
                params: {
                    unit: "541009240",
                    delDomain: "massarius-d.openx.net"
                }
            },
            {
                bidder: "appnexus",
                params: {
                    placementId: "19034776"
                }
            }
        ]
    }];
    pbjs.addAdUnits(adUnits);
    pbjs.requestBids({
        // This callback gets triggered when all bids for this
        // ad unit come back. 
        bidsBackHandler: sendAdserverRequest
    });
});

var sendAdserverRequest = function (bidResponses) {
    console.log("2");
    sas.cmd.push(function () {
        console.log("3");
        pbjs.que.push(function () {
            console.log("4");
            var bid = pbjs.getHighestCpmBids("sas_68479")[0];
            if (bid) {
                bidAvaillable = true;
                console.log("5");
                sas.setHeaderBiddingWinner("sas_68479", bid);
            }
        });
        console.log('9');
        var targetString = "";
        if (bidAvaillable) {
            targetString = "hb=true;hbBid=true";
        } else {
            targetString = "hb=true;";
        }
        sas.refresh(68479, { target: targetString });
    });
};

var sas = sas || {};
sas.cmd = sas.cmd || [];
sas.cmd.push(function () {
    console.log("6");
    sas.setup({ networkid: 3001, domain: "//www.smartadserver.com", async: true });
});
sas.cmd.push(function () {
    console.log("7");
    sas.call("onecall", {
        siteId: 234801,
        pageId: 971065,
        formats: [{
            id: 68479,
            tagId: "sas_68479"
        }]
    }, {
        // IF No Smart Over bid or Premium --> Rendering Ads from Header Bidding best bidder (one per HB placement)
        onNoad: function (a) {
            console.log("8");
            // Display sas_68479 from best bidder
            if (a.tagId == "sas_68479") {
                var bid = pbjs.getHighestCpmBids("sas_68479")[0];
                if (bid) {
                    var i = document.createElement("iframe");
                    i.style.width = 300;
                    i.style.height = 250;
                    i.style.overflow = "hidden";
                    i.setAttribute('frameBorder', 0); //to remove the default iframe border
                    i.setAttribute('scrolling', 'no'); //to remove any scrollbars
                    document.getElementById("sas_68479").appendChild(i);
                    pbjs.renderAd(i.contentWindow.document, bid.adId);
                    i.contentWindow.document.body.style.padding = '0'; //so there is no extra spacing in our iframe
                    i.contentWindow.document.body.style.margin = '0'; //so there is no extra spacing in our iframe
                }
            }
        }
    });
});