//Load Faktor

(function() {
        var fakt = document.createElement('script');
        fakt.async = true;
        fakt.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        fakt.src = (useSSL ? 'https:' : 'http:') + '//config-prod.choice.faktor.io/8c970794-65fd-47af-94f8-f3ffea5e2a00/faktor.js';
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
    googletag.defineSlot('/87190325/Noud_home/noud_home_top', [[300, 250],[728, 90]],
        'div-gpt-ad-1548232464104-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.enableServices();
  });


//CMP Logic
  let showConsentManager= () => {
    __cmp('showConsentManager', true, function(data) {console.log(data)});
}


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

