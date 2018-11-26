'use strict';

// ReadingDerives controller
angular.module('records').controller('ReadingDeriveController', ['$scope', '$location','$stateParams', 'ReadingDerive',
  function ($scope, $location, $stateParams, ReadingDerive) {

    // Create new ReadingDerive
    $scope.save = function () {
      // Create new ReadingDerive object
      var readingDerive = new ReadingDerive({
        examType: $scope.readingDerive.examType,
        year: $scope.readingDerive.year,
        month: $scope.readingDerive.month,
        options: $scope.readingDerive.options,
        article: $scope.readingDerive.article,
        analysis: $scope.readingDerive.analysis
      });

      // Redirect after save
      readingDerive.$save(function (response) {
        $location.path('writings/' + response._id);

        // Clear form fields
        $scope.article = '';
        $scope.analysis = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of ReadingDerives
    $scope.find = function () {
      $scope.readingDerives = ReadingDerive.query();
    };

    // Find existing ReadingDerive
    $scope.findOne = function () {
      $scope.readingDerives = ReadingDerive.get({
        readingDeriveId: $stateParams.readingDeriveId
      });
    };
  }
]);
