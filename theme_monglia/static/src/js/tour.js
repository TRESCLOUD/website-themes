odoo.define("theme_monglia.tour.monglia", function (require) {
"use strict";

const core = require("web.core");
const _t = core._t;

const wTourUtils = require("website.tour_utils");
var tour = require("web_tour.tour");

const snippets = [
    {
        id: 's_cover',
        name: 'Cover',
    },
    {
        id: 's_title',
        name: 'Title',
    },
    {
        id: 's_media_list',
        name: 'Media List',
    },
    {
        id: 's_carousel',
        name: 'Carousel',
    },
    {
        id: 's_call_to_action',
        name: 'Call to Action',
    },
    {
        id: 's_text_image',
        name: 'Text - Image',
    },
    {
        id: 's_image_text',
        name: 'Image - Text',
    },

];

tour.register("monglia_tour", {
    url: "/",
    saveAs: "homepage",
}, [
    wTourUtils.dragNDrop(snippets[0]),
    wTourUtils.clickOnSnippet(snippets[0]),
    wTourUtils.changeOption('minHeight', 'Full screen', _t('height')),
    wTourUtils.goBackToBlocks(),

    wTourUtils.dragNDrop(snippets[1]),
    wTourUtils.dragNDrop(snippets[2]),
    wTourUtils.dragNDrop(snippets[3]),

    wTourUtils.dragNDrop(snippets[4]),
    wTourUtils.clickOnSnippet(snippets[4], 'top'),
    wTourUtils.changeBackgroundColor('left'),
    wTourUtils.goBackToBlocks('left'),

    wTourUtils.dragNDrop(snippets[5]),
    wTourUtils.dragNDrop(snippets[6]),
    wTourUtils.clickOnSave(),
]);
});
