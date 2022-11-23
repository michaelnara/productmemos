//Inject gumgum
(function() {
  var elem = document.createElement("script");
  elem.type = "text/javascript";
  elem.innerHTML =
    "ggv2id='avcbnbt4';";
  var scpt = document.getElementsByTagName("script")[0];
  scpt.parentNode.insertBefore(elem, scpt);
})();

//Load gumgum
(function() {
  var mspb = document.createElement("script");
  mspb.async = true;
  mspb.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  mspb.src =
    (useSSL ? "https:" : "http:") + "//js.gumgum.com/services.js";
  var node = document.getElementsByTagName("script")[0];
  node.parentNode.insertBefore(mspb, node);
})();