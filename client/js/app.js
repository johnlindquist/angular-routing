angular.module('enterprise', ['enterpriseServices']).
    config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when("/", {templateUrl:"/partials/list.html", controller:"ListCtrl",
                resolve:{crew:function ($q, crewResource) {
                    var deferred = $q.defer();
                    crewResource.query(function (results) {
                        deferred.resolve(results);
                    })

                    return deferred.promise;
                }}}).
            when("/new", {templateUrl:"/partials/edit.html", controller:"NewCtrl"}).
            //broken
            when("/edit/:id", {templateUrl:"/partials/edit.html", controller:"EditCtrl",
                resolve:{person:function ($q, crewResource, $route) {
                    var deferred = $q.defer();
                    crewResource.get({id:$route.current.params.id}, function (results) {
                        deferred.resolve(results);
                    })

                    return deferred.promise;
                }}}).
            otherwise({redirectTo:"/"});
    })

function EditCtrl($scope, $location, person) {
    $scope.person = person;

    $scope.save = function () {
        $location.path("/");
    }
}

function NewCtrl($scope, $location) {

}

function ListCtrl($scope, crew) {
    $scope.crew = crew;

}

