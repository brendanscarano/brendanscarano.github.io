(function() {

  function imgWrapper() {

    return {
      restrict: 'EA',
      scope: {
        img: '='
      },
      template: '<div><img ng-src="{{img}}" /></div>'
    };

  }

  angular
    .module('imgWrapperDirective', [])
    .directive('imgWrapper', imgWrapper);

})();