// ==UserScript==
// @name         Namuru-button
// @namespace    https://github.com/yuzulabo
// @version      1.0.1
// @description  南無りまくれぇ！
// @author       neziri_wasabi (yuzu_1203)
// @match        https://knzkoniisan.m.to/*
// @license       MIT License
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js
// ==/UserScript==

// 「ゴーン」効果音について
// 効果音はフリー素材を使用しています。 http://maoudamashii.jokersounds.com/

(function() {
    var css = ".fa-star:before {content: \"\ﾅﾑ\";white-space: nowrap;}";
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));

    var audio_elem = document.createElement("audio");
    audio_elem.src = "https://yuzu.tk/files/yuzu_1203/gooooon.wav"; //どこか直リンできそうなとこないかなぁ...
    audio_elem.setAttribute('controls', '0');
    audio_elem.setAttribute('id', 'namuru_audio');
    audio_elem.setAttribute('preload', 'auto');

    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
        heads[0].appendChild(audio_elem);
    } else {
        document.documentElement.appendChild(node);
        document.documentElement.appendChild(audio_elem);
    }

    var audio_c = document.getElementById("namuru_audio");
    $(document).on('click', 'button.star-icon', function() {
        console.log("南無！");
        audio_c.currentTime = 0;
        audio_c.play();
    });

})();
