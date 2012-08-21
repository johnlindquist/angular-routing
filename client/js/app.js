angular.module('enterprise', []).
    config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when("/", {templateUrl:"/partials/list.html"}).
            when("/new", {templateUrl:"/partials/edit.html", controller:"NewCtrl"}).
            when("/edit/:id", {templateUrl:"/partials/edit.html", controller:"EditCtrl"}).
            otherwise({redirectTo:"/"});
    })

function EditCtrl($scope, $location, $routeParams) {
    $scope.person = $scope.crew[$routeParams.id];

    $scope.save = function () {
        $location.path("/");
    }
}

function NewCtrl($scope, $location) {
    $scope.person = {name:"", description:""}

    $scope.save = function () {
        $scope.crew.push($scope.person);
        $location.path("/")
    }
}

function AppCtrl($scope) {
    $scope.crew = [
        {name:"Picard", description:"Captain"},
        {name:"Riker", description:"Number One"},
        {name:"Worf", description:"Security"},
    ]
}