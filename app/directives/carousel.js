;(function () {

    angular
        .module ('app')
        .directive ('carousel' , function () {
            return {

                restrict : 'A',
                controller : function ($element) {
                    this.startCarousel = function () {
                        $($element).owlCarousel({items:3 , nav:true, loop:true})
                    }
                }
            }
        })

        .directive ('carouselItem' , function () {
        return{
            restrict : 'A',
            require :'^carousel',
            link : function (sc , el, attr , owlCarouselCtrl) {

                if (sc.$last){
                    owlCarouselCtrl.startCarousel();
                }
            }
        }
    })

})();