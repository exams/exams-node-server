'use strict';

// Articles controller
angular.module('records').controller('WritingController', ['$scope', '$location','$stateParams', 'Writing',
  function ($scope, $location, $stateParams, Writing) {

    // Create new Article
    $scope.save = function () {
      // Create new Article object
      var writing = new Writing({
        examType: $scope.writing.examType,
        year: $scope.writing.year,
        month: $scope.writing.month,
        article: $scope.writing.article,
        analysis: $scope.writing.analysis,
        referAnswer: $scope.writing.referAnswer
      });

      // Redirect after save
      writing.$save(function (response) {
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
      $scope.writings = Writing.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.writings = Writing.get({
        writingId: $stateParams.writingId
      });
    };
  }
]);
