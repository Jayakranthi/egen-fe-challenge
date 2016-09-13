myApp.directive('sidebarDirective', function() {
  return {
    link : function(scope, element, attr) {
      scope.$watch(attr.sidebarDirective, function(newVal) {
        if(newVal)
        {
          element.addClass('sidebar');
          element.addClass('show');
          return;
        }
          element.removeClass('show');
          element.removeClass('sidebar');
          //element.removeClass('navigation-toggle');
          return;
      });
    }
  };
});
