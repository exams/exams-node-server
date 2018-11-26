'use strict';

// Listenings controller
angular.module('records').controller('ListeningController', ['$scope', '$location','$stateParams', 'Listening',
  function ($scope, $location, $stateParams, Listening) {

    $scope.listening={};
    $scope.listening.month='12';
    console.log($scope.listening);

    // Create new Listening
    $scope.save = function () {
      // Create new Listening object
      var listening = new Listening({
        examType: $scope.listening.examType,
        year: $scope.listening.year,
        month: $scope.listening.month,
        options: $scope.listening.options,
        analysis: $scope.listening.analysis
      });

      // Redirect after save
      listening.$save(function (response) {
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
      $scope.listenings = Listening.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.listenings = Listening.get({
        listeningId: $stateParams.listeningId
      });
    };
  }
]);
