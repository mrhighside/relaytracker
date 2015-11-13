angular.module('starter.controllers', [])

  .controller('RunnersCtrl', function($scope, $state, Runners) {
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true
    getRunners();

    function getRunners() {
      Runners.getRunners()
        .then(function (runners) {
          $scope.runners = runners;
        }, function (error) {
          $scope.status = 'Unable to load customer data: ' + error.message;
        });
    };

    $scope.edit = function(runner) {
      console.log("Edit runner: " + runner.id);
      //Do nothing for now...
      var params = {};
      params.runnerId = runner.id;

      $state.go('tab.runner-detail', params);
    };

    $scope.reorderItem = function(runner, $fromIndex, $toIndex) {
      console.log("Reorder runner: " + runner.id + " from " + $fromIndex + " to " + $toIndex);
      var temp = $scope.runners[$toIndex];

      $scope.runners[$toIndex] = $scope.runners[$fromIndex];
      $scope.runners[$toIndex].runnerNumber = $toIndex + 1;
      temp.runnerNumber = $fromIndex + 1;
      $scope.runners[$fromIndex] = temp;
    }

  })

.controller('DashCtrl', function($scope, Incidents) {

  getIncidents();

  function getIncidents() {
    Incidents.getIncidents()
      .success(function (incids) {
        $scope.incidents = incids;
      })
      .error(function (error) {
        $scope.status = 'Unable to load customer data: ' + error.message;
      });
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  .controller('RunnerDetailCtrl', function($scope, $stateParams, Runners){
    console.log("Getting runner: " + $stateParams.runnerId + " for editing...");
    console.log($stateParams);
    $scope.runner = Runners.getRunner($stateParams.runnerId);
  })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
