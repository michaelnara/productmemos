//Load Faktor

(function() {
    var fakt = document.createElement('script');
    fakt.async = true;
    fakt.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    fakt.src = (useSSL ? 'https:' : 'http:') + '//config-prod.choice.faktor.io/b2e60578-2f03-4cce-baef-35465ca230c2/faktor.js';
    fakt.onload = function() {
        window.__cmp('addEventListener', 'acceptAllButtonClicked', function() {
            checkConsent();
        });
        window.__cmp('addEventListener', 'exitButtonClicked', function() {
            checkConsent();
        });
        window.__cmp('addEventListener', 'cmpReady', function() {
            checkConsent();
        });
    };
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(fakt, node);
})();


//Load Google

(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();


//Define ad units
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];


googletag.cmd.push(function() {
if(msTag.page == 'ROS' ){
googletag.defineSlot('/13436254/Loonwijzer_Header', [[728, 90], [300, 50], [320, 100], [970, 250], [320, 50], [970, 90], [300, 100]], 'div-gpt-ad-1558616192901-0').addService(googletag.pubads());
googletag.defineSlot('/13436254/Loonwijzer_Pos1', [[300, 50], [300, 100], [300, 600], [320, 320], [300, 250], [336, 600], [336, 280], [320, 50], [320, 100], [320, 240]], 'div-gpt-ad-1558616219546-0').addService(googletag.pubads());
googletag.defineSlot('/13436254/Loonwijzer_Pos2', [[300, 250], [300, 100], [300, 50], [320, 240], [320, 100], [320, 50], [336, 280], [320, 320]], 'div-gpt-ad-1558616251931-0').addService(googletag.pubads());

}
else if(msTag.page == 'salarycheck'){
googletag.defineSlot('/13436254/Loonwijzer_Header', [[728, 90], [300, 50], [320, 100], [970, 250], [320, 50], [970, 90], [300, 100]], 'div-gpt-ad-1558616192901-0').addService(googletag.pubads());
googletag.defineSlot('/13436254/Loonwijzer_BTF', [[300, 100], [300, 50], [320, 240], [320, 100], [320, 50], [970, 90], [970, 250], [300, 250], [728, 90], [320, 320]], 'div-gpt-ad-1558616299746-0').addService(googletag.pubads());
}

googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs();
googletag.pubads().setCentering(true);
googletag.pubads().disableInitialLoad();
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
    console.log('Faktor.io CMP: checkConsent');
    window.__cmp('getVendorConsents', undefined, function(data) {
        var newConsentForAds = (data.purposeConsents[1] && data.purposeConsents[2] && data.purposeConsents[3] && data.purposeConsents[4] && data.purposeConsents[5]);
        console.log('consentForAds: ' + newConsentForAds);
        if (consentForAds !== newConsentForAds) {
            consentForAds = newConsentForAds;
            googletag.cmd.push(function() {
                googletag.pubads().setRequestNonPersonalizedAds(consentForAds ? 0 : 1);
            });
            window.__cmp('getConsentData', undefined, function(data) {
                // pbjs.que.push(function() {pbjs.setConfig({consentManagement:{allowAuctionWithoutConsent = true}});});

                googletag.cmd.push(function() {
                    googletag.pubads().setTargeting('iab_string', [data.consentData]);
                    googletag.pubads().setTargeting('consent', [consentForAds ? 1 : 0]);
                    googletag.pubads().setTargeting('rev_consent', [consentForAds ? 0 : 1]);
                    googletag.pubads().refresh();

                    //if (!pbjs.initAdserverSet) {
                    //    initAdserver();
                    });
                });
            }
    });
}



let showConsentManager= () => {
__cmp('showConsentManager', true, function(data) {console.log(data)});
}