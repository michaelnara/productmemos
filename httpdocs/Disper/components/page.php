<?php
include("translation.php");

$language = get_language();
$strings = $translations[$page][$language];
if ($language != "en") {
    $description = $strings[$SUBTITLE_TEXT];

    switch ($language) {
//        case "en":
//            $locale = "en_US";
//            break;
        case "de":
            $locale = "de_DE";
            break;
        default:
            break;
    }
}
?>