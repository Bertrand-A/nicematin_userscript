// ==UserScript==
// @name        nice-matin
// @namespace   nicematin
// @description userscript for nicematin website
// @include     http://www.nicematin.com/*
// @include     http://www.nicematin.com/*/*
// @include     http://www.nicematin.com/*?t=*
// @version     1.0
// @grant       none
// ==/UserScript==

(function() {
console.log('init userscript');

// HISTORIQUE DES VERSIONS DU USERSCRIPT
//
// Version 1.0 : + Version initiale
//               + Cache la pop-p anti-adblock
//               + Modifie les valeurs générées DFP Google
//               + Modification de la page d'index (2 articles côte à c$ote)
//               + Cache les articles sponsorisés
//               + Cache le bandeau d'article en haut de page
//
//

// init google DFP vars to 0;
var dfpVars=0;
var dfpPositions=0;
var dfpSizes=0;
var dfpPageTypes=0;
var dfpTargeting=0;

// Ne detecte pas adblock.. :)
window.adblockdetected = false;
var adblockdetected = false;

// cache une colonne non visible
var nm_hp_timeline = document.querySelector('.nm_hp_timeline');
if(nm_hp_timeline!=null){nm_hp_timeline.style.display="none";}
else{console.log('#1 : nm_hp_timeline not found');}

// reduit la colonne principale a 75%
var nm_hp_articles_container = document.querySelector('.nm_hp_articles_container');
if(nm_hp_articles_container!=null){nm_hp_articles_container.style.width="75%";}
else{console.log('#2 : .nm_hp_articles_container not found');}

// reduit les cases d'articles à 49% chacun, pour faire 2 cote à cote
var grid_item = document.querySelectorAll('#grid .grid-item');
if(grid_item!=null){for(var j=0; j<grid_item.length;j++){grid_item[j].style.width="49%";grid_item[j].style.display="inline-block";}}
else{console.log('#3 : #grid.grid-item not found');}

// Cache les grid_items bibons (pub, sponsorisés, etc)
var grid_item_r = document.querySelectorAll('#grid .grid-item.grid-item-r');
if(grid_item_r!=null){for(var j=0; j<grid_item_r.length;j++){grid_item_r[j].style.display="none";}}
else{console.log('#4 : #grid.grid-item.grid-item-r not found');}

// reduit les polices de titres des cases cote à cote
var nm_hp_article_h2 = document.querySelectorAll('.nm_hp_article article h2');
if(nm_hp_article_h2!=null){for(var j=0; j<nm_hp_article_h2.length;j++){nm_hp_article_h2[j].style.fontSize="1rem";nm_hp_article_h2[j].style.padding="0px";}}
else{console.log('#5 : .nm_hp_article article h2 not found');}

// Supprime le bandeau d'article en haut de page
var reco_header_article = document.querySelector('#reco_header_article');
if(reco_header_article!=null){reco_header_article.style.display="none";}
else{console.log('#6 : #reco_header_article not found');}

// Cache la pop-up anti adblock (1)
var RhooBg = document.querySelector('body div.RhooBg');
if(RhooBg!=null){RhooBg.style.display="none";}
else{console.log('#7 : body div.RhooBg not found');}

// Cache la pop-up anti adblock (2)
var modalRhoo = document.querySelector('body div.modalRhoo');
if(modalRhoo!=null){modalRhoo.style.display="none";}
else{console.log('#8 : body div.modalRhoo not found');}

})();