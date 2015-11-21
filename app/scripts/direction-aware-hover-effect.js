'use strict';
var DirectioAwareHoverEffect = (function () {
    function DirectioAwareHoverEffect() {
        console.log('init');
        $('#direction-aware-hover-effect .item-direction-aware-hover-effect').each(function () {
            $(this).hoverdir();
        });
    }
    return DirectioAwareHoverEffect;
})();
var hoverEffect = new DirectioAwareHoverEffect();
//# sourceMappingURL=direction-aware-hover-effect.js.map