'use strict';

// Articles controller
angular.module('departmentLevel').controller('DepartmentLevelController', ['$scope', '$http', 'DepartmentLevel',
  function ($scope, $http, DepartmentLevel) {

    $scope.queryByDeptNo = function(){
      var config = { 'deptNo': $scope.departmentName };

      $http.post('/api/departmentLevel', config).success(function (response) {
        var len = response.length;
        var great = 0;
        var good = 0;
        var normal = 0;
        var lower = 0;
        var bad = 0;

        for(var i = 0; i < len; i++){
          if (response[i].DA_0000000024 === '01'){
            great = great + 1;
          }else if(response[i].DA_0000000024 === '02'){
            good = good + 1;
          } else if(response[i].DA_0000000024 === '03'){
            normal = normal + 1;
          } else if(response[i].DA_0000000024 === '04'){
            lower = lower + 1;
          } else if(response[i].DA_0000000024 === '05'){
            bad = bad + 1;
          }
        }

        $scope.chartConfig = {
          options: {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
            }
          },
          series: [{
            data: [{ name: '非常满意', y: great },
              { name: '比较满意', y: good },
              { name: '一般', y: normal },
              { name: '不太满意', y: lower },
              { name: '很不满意', y: bad }]
          }],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer'
            }
          },
          title: {
            text: '学生整体满意度'
          }
        };
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.getDepartments = function () {
      $http.get('/api/departmentLevel').success(function(response){
        $scope.departments = response;
        $scope.departmentName = response[0];
      });
    };

    $scope.find = function () {
      $scope.getDepartments();
      $scope.queryByDeptNo();
    };
  }
]);
