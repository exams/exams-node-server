'use strict';

// Articles controller
angular.module('records').controller('ClozeController', ['$scope', '$location','$stateParams', 'Cloze',
  function ($scope, $location, $stateParams, Cloze) {

    // Create new Cloze
    $scope.save = function () {
      // Create new Cloze object
      var cloze = new Cloze({
        examType: $scope.writing.examType,
        year: $scope.writing.year,
        month: $scope.writing.month,
        article: $scope.writing.article,
        options: $scope.writing.options,
        analysis: $scope.writing.analysis
      });

      // Redirect after save
      cloze.$save(function (response) {
        $location.path('writings/' + response._id);

        // Clear form fields
        $scope.article = '';
        $scope.analysis = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.clozes = Cloze.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.clozes = Cloze.get({
        clozeId: $stateParams.clozeId
      });
    };
  }
]);
