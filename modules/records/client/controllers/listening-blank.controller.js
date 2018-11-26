'use strict';

// Articles controller
angular.module('records').controller('ListeningBlankController', ['$scope', '$location','$stateParams', 'ListeningBlank',
  function ($scope, $location, $stateParams, ListeningBlank) {

    // Create new Article
    $scope.save = function () {
      // Create new Article object
      var listeningBlank = new ListeningBlank({
        examType: $scope.listeningBlank.examType,
        year: $scope.listeningBlank.year,
        month: $scope.listeningBlank.month,
        article: $scope.listeningBlank.article,
        analysis: $scope.listeningBlank.analysis
      });

      // Redirect after save
      listeningBlank.$save(function (response) {
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
      $scope.listeningBlanks = ListeningBlank.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.listeningBlanks = ListeningBlank.get({
        listeningBlankId: $stateParams.listeningBlankId
      });
    };
  }
]);
