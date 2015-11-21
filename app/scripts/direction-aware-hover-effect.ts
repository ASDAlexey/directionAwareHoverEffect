'use strict';

class DirectioAwareHoverEffect {
    constructor() {
        console.log('init');
        $('#direction-aware-hover-effect .item-direction-aware-hover-effect').each(function () {
            $(this).hoverdir();
        });
    }
}
let hoverEffect = new DirectioAwareHoverEffect();