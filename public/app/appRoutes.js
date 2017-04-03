app.config(function($routeProvider, $locationProvider, $httpProvider) {

    var viewDir = 'app/views/';

    $routeProvider

    .when('/', {
        templateUrl : viewDir+'home/home-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/double-glazing', {
        templateUrl : viewDir+'services/window-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/doors', {
        templateUrl : viewDir+'services/door-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/conservatories', {
        templateUrl : viewDir+'services/conservatories-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/contact', {
        templateUrl : viewDir+'home/contact-view.html',
        controller  : 'ConCtrl'
    })

    .when('/about', {
        templateUrl : viewDir+'home/about-view.html',
        controller  : 'HomeCtrl'
    })


    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
