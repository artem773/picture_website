import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMore from "./modules/showMore";
import calculator from "./modules/calculator";
import filter from "./modules/filter";
import pictureSize from "./modules/pictuerSize";
import accordionMenu from "./modules/accordionMenu";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import drop from "./modules/drop";

window.addEventListener('DOMContentLoaded', ()=>{
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name = "phone"]');
    checkTextInputs('[name = "name"]');
    checkTextInputs('[name = "message"]');
    showMore('.button-styles', '#styles .row');
    calculator('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordionMenu('.accordion-heading'/* , '.accordion-block' */);
    burger('.burger', '.burger-menu');
    scrolling('.pageup');
    drop();
});