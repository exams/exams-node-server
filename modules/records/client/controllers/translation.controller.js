'use strict';

// Articles controller
angular.module('records').controller('TranslationController', ['$scope', '$location','$stateParams', 'Translation',
  function ($scope, $location, $stateParams, Translation) {

    // Create new Article
    $scope.save = function () {
      // Create new Article object
      var translation = new Translation({
        examType: $scope.translation.examType,
        year: $scope.translation.year,
        month: $scope.translation.month,
        article: $scope.translation.article,
        analysis: $scope.translation.analysis,
        referAnswer: $scope.translation.referAnswer
      });

      // Redirect after save
      translation.$save(function (response) {
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
      $scope.translations = Translation.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.translations = Translation.get({
        translationId: $stateParams.translationId
      });
    };
  }
]);
