//Load Google

(function() {
  var gads = document.createElement("script");
  gads.async = true;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src =
    (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(gads, node);
})();

//Define ad units
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
  googletag.defineSlot('/13436254/Snackbar_test_unit', [320, 50], 'div-gpt-ad-1579691620912-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setCentering(true);
  googletag.enableServices();
});
