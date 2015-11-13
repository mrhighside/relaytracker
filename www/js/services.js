angular.module('relaytracker.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

  .factory('Runners', ['$http', function($http) {
    var urlBase = 'http://relaytracker.azurewebsites.net/api/Runners';
    var runners = {};

    var runnerResults =  [
      {
        id: 1,
        firstName: "Jen",
        lastName: "Beudreu",
        estimatedPace: "8:40",
        paceUnits: "min/mile",
        runnerNumber: 1,
        picUrl: "img/Female.jpg"
      },
      {
        id: 2,
        firstName: "Jill",
        lastName: "Rybarczyk",
        estimatedPace: "9:40",
        paceUnits: "min/mile",
        runnerNumber: 2,
        picUrl: "img/Female.jpg"
      },
      {
        id: 3,
        firstName: "Andy",
        lastName: "Malinowski",
        estimatedPace: "9:30",
        paceUnits: "min/mile",
        runnerNumber: 3,
        picUrl: "img/male.png"
      },
      {
        id: 4,
        firstName: "Eric",
        lastName: "Malinowski",
        estimatedPace: "9:20",
        paceUnits: "min/mile",
        runnerNumber: 4,
        picUrl: "img/male.png"
      },
      {
        id: 5,
        firstName: "Danielle",
        lastName: "Sterling",
        estimatedPace: "8:15",
        paceUnits: "min/mile",
        runnerNumber: 5,
        picUrl: "img/Female.jpg"
      }
    ];

    runners.getRunners = function () {
      console.log("Getting Runners: ");
      //console.log($http.get(urlBase));


      var promise = new Promise(function(resolve, reject) {
        // do a thing, possibly async, then…

        if (true) {
          resolve(runnerResults);
        }
        else {
          reject(Error("It broke"));
        }
      });
      console.log("Faked Promise:");

      return promise;
      //comment out until Eric gets off his ass
      //return $http.get(urlBase);
    };

    runners.getRunner = function(runnerID){
      for (var i = 0; i < runnerResults.length; i++) {
        if (runnerResults[i].id === parseInt(runnerID)) {
          return runnerResults[i];
        }
      }
    };

    return runners;
  }])

.factory('Incidents', ['$http', function($http) {
  var urlBase = 'http://relaytracker.azurewebsites.net/api/Event';
  var incidents = {};

  incidents.getIncidents = function () {
    console.log("Getting Incidents: ");
    console.log($http.get(urlBase));

    return $http.get(urlBase);
  };

  return incidents;
}]);
