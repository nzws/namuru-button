// ==UserScript==
// @name         Namuru-button
// @namespace    https://github.com/yuzulabo
// @version      1.2.1
// @description  南無りまくれぇ！
// @author       neziri_wasabi (yuzu_1203)
// @match        https://knzkoniisan.m.to/*
// @license       MIT License
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js
// ==/UserScript==

/*
 「ゴーン」効果音について
フリー素材を使用しています。魔王魂: http://maoudamashii.jokersounds.com/

「チーン」効果音について
フリー素材を使用しています。http://nico.ms/nc42872

 レア音声：神崎おにいさんについて
 可視光線様のKNZK_ZONEの一部を使用しています。: http://nico.ms/sm31146004

 これらの音声はスクリプト作者の個人サーバにアップロードされていますが、問題があればお問い合わせください。
 連絡先: https://knzkoniisan.m.to/@y
*/
(function() {
    var css = ".fa-star:before {content: \"\ﾅﾑ\";white-space: nowrap;}";
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));

    var audio_elem = document.createElement("audio");
    audio_elem.src = "https://yuzu.tk/files/yuzu_1203/gooooon.wav";
    audio_elem.setAttribute('controls', '0');
    audio_elem.setAttribute('id', 'namuru_audio');
    audio_elem.setAttribute('preload', 'auto');

    var audio2_elem = document.createElement("audio");
    audio2_elem.src = "https://yuzu.tk/files/yuzu_1203/knzk.wav";
    audio2_elem.setAttribute('controls', '0');
    audio2_elem.setAttribute('id', 'namuru2_audio');
    audio2_elem.setAttribute('preload', 'auto');

    var audio3_elem = document.createElement("audio");
    audio3_elem.src = "https://yuzu.tk/files/yuzu_1203/nc42872.wav";
    audio3_elem.setAttribute('controls', '0');
    audio3_elem.setAttribute('id', 'namuru3_audio');
    audio3_elem.setAttribute('preload', 'auto');

    var heads = document.getElementsByTagName("head");
    heads[0].appendChild(node);
    heads[0].appendChild(audio_elem);
    heads[0].appendChild(audio2_elem);
    heads[0].appendChild(audio3_elem);

    var audio_d = document.getElementById("namuru_audio");
    var audio_d2 = document.getElementById("namuru2_audio");
    var audio_d3 = document.getElementById("namuru3_audio");
    var audio_rand = 0;
    $(document).on('click', 'button.star-icon', function() {
        audio_rand = Math.floor( Math.random() * 10000 );
        console.log("南無！");
        if (audio_rand < 334) {
            audio_d2.currentTime = 0;
            audio_d2.play();
        } else if (audio_rand < 5167) { //適当
            audio_d3.currentTime = 0;
            audio_d3.play();
        } else {
            audio_d.currentTime = 0;
            audio_d.play();
        }
    });
})();
