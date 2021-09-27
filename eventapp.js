  
!function(){
    "use strict";
        angular.module('eventApp', [])
        .controller('eventController', eventController);
        
        function eventController($scope) {
          $scope.kp2=175;
          $scope.key=function(){
            if($scope.kp2>0){
              $scope.kp2=$scope.kp2-1;
            }
            if ($scope.kp2<=0)
            {
              $scope.msg="maximum";
            }
          }
        }
}();