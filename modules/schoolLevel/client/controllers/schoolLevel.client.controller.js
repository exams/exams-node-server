'use strict';

// Articles controller
angular.module('schoolLevel').controller('SchoolLevelController', ['$scope', '$stateParams', '$location', 'SchoolLevel',
  function ($scope, $stateParams, $location, SchoolLevel) {

    $scope.find = function () {
      SchoolLevel.query(function(response){
        var len = response.length;
        var genderMaleNum = 0;
        var genderFemaleNum = 0;

        for(var i = 0; i < len; i++){
          if (response[i].XB === '男'){
            genderMaleNum = genderMaleNum + 1;
          }else if(response[i].XB === '女'){
            genderFemaleNum = genderFemaleNum + 1;
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
            data: [{ name: '男', y: genderMaleNum }, { name: '女', y: genderFemaleNum }]
          }],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer'
            }
          },
          title: {
            text: '男女比例图'
          }
        };
      });
    };
  }
]);
