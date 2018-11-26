'use strict';

// Articles controller
angular.module('records').controller('ReadingController', ['$scope', '$location','$stateParams', 'Reading',
  function ($scope, $location, $stateParams, Reading) {

    // Create new Article
    $scope.save = function () {
      // Create new Article object
      var reading = new Reading({
        examType: $scope.reading.examType,
        year: $scope.reading.year,
        month: $scope.reading.month,
        article: $scope.reading.article,
        analysis: $scope.reading.analysis
      });

      // Redirect after save
      reading.$save(function (response) {
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
      $scope.readings = Reading.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.readings = Reading.get({
        readingId: $stateParams.readingId
      });
    };
  }
]);
