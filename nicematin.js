// ==UserScript==
// @name         Nice-Matin 2019
// @namespace    http://www.nicematin.com
// @version      19
// @description  -
// @author       Bertrand.A
// @match        http://www.nicematin.com/*
// @match        http://www.nicematin.com
// @match        http://www.nicematin.com/*/*
// @match        https://www.nicematin.com/*
// @match        https://www.nicematin.com
// @match        https://www.nicematin.com/*/*
// @grant        none
// ==/UserScript==
// Better Now...

(function() {
    'use strict';
    window.adblockdetected = false;
    var adblockdetected = false;
    var DFP='';
    var existsVP=true;
    var article_t='';
    var uri1 = document.location.href;
    var prefix = "www.nicematin.com";
    var regex = /[A-z]/gi;
    var checkURL = location.pathname.substr(1);

    // Modifs esthétiques
    $(document).ready(function() {
        console.log( "# STARTING PERSONNAL SCRIPT!" );
        $(".modalRhoo").hide();
        $(".RhooBg").hide();
        $("#reco_header_article").hide();
        $(".articles-stream").hide();
        $("#article-teaser").css('display','block');
        $("#article-teaser.smartwall").css('display','block');
        $(".nm_article_subscription").hide();
        $('.nm_article_lcol').css('max-width','100%');
        $('.nm_article_lcol').css('padding-right','0px');
        $('.nm_ap_container article p').css('text-align','justify');
        $('.nm_ap_container article p').css('font-size','1.2rem');
        $('.nm_ap_container article p').css('font-family','Segoe UI');
        $('.nm_hp_article.nm_hp_sponsored').hide();
        $('.digital-newspaper').hide();
        $('.fixed_popin').hide();
        $('#content').css('overflow-x','hidden');
     });
