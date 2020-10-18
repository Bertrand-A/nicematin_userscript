// ==UserScript==
// @name         Korben theme simplifié
// @namespace    https://korben.info/
// @version      2.0
// @description  Mon PC n'est pas une tablette..... !!!
// @author       Bertrand-A
// @match        https://korben.info
// @match        https://korben.info/page/*
// @match        https://korben.info/*
// @grant        none
// ==/UserScript==


// N'oubliez pas d'utiliser uBlock Origin !!
// Cet userscript modifie ou cache certains élements HTML
// Afin de rendre la lecture du site plus agréable..

// Version 1.0 : + Version initiale
//               + Cache le header & footer & edito & colonne de droite
//               + Cache les articles sponsorisés (les promos pour des produits en fin d'articles)
//               + Centre le corps de page
//               + Réduit la bannière imagée
//
// Version 1.1 : + Suppression de la bannière "Un article au hasard" a la fin de chaque article!
//               + Modification des bordures (plus adoucies et Orange en bas d'article pour marquer la séparation)
//
// Version 1.2 : + Suppression d'un pseudo-article publicitaire en footer
//
// Version 2.0 : + avec jQuery c'est mieux

(function() {
    'use strict';

        $(document).ready(function() {

            // Hide some elements
            $(".app-main div article").hide();
            $(".entry-meta").hide();
            $(".page-divider").hide();
            $(".app-footer").hide();
            $(".app-extra").hide();
            $(".edito").hide();
            $(".entry-footer").hide();
            $(".korben-sous-communaute-article").hide();
            $(".app-aside").hide();
            $(".app-header-container").hide();
            $(".edito-close").hide();

            // Edit some CSS
            $(".app-main .post").css('border','1px solid #777');
            $(".app-main .post").css('border-bottom','3px solid #fa3');
            $(".app-main").css('width','1260px');
            $(".app-main").css('flex','0 0 50%');
            $(".entry-container").css('max-width','95%');
            $(".entry-thumbnail").css('height','120px');
        });
})();
