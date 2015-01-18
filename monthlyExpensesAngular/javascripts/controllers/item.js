angular.module('monthlyExpenses')
  .controller('ItemController', ['$scope', '$http', function ($scope, $http) {

    var path = 'http://localhost:3000/';
    var create = 'items';
    var index = create + '.json';
    $http.get(path + index).success(function(data){
      $scope.total = data[data.length - 1];
      var items = [];
      for(var i = 0; i < data.length - 1; i++) {
        items.push(data[i]);
      }
      $scope.items = items;
    });

    this.item = {};
    this.addItem = function(item) {
      $http.post(path + create, item).
        success(function(data, status, headers, config){
          var newNode = $('<tr>').append($('<td>').html(data.name)).append($('<td>').html(data.price));
          $('body > div > div.ng-scope > table > tbody').append(newNode);
        }).
        error(function(data, status, headers, config){
          console.log(data);
        });
      item = {};
    };
  }]);
