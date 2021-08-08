// ==UserScript==
// @name         Discord Message Slide
// @namespace    http://discord.com
// @version      0.1
// @description  idk why i made this
// @author       DogePlayz
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const injectCss = (id, css) => {
    const style = document.createElement('style');
    style.id = id;
    style.innerText = css;
    document.head.appendChild(style);
    return style;
    }
    injectCss('Reziztslide', `
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
.message-2qnXI6 {
  animation: slide-up 0.4s ease;
}
`);
    console.log('Loaded msg slide')
})();
