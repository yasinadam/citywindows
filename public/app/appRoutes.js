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
        .when('/upvc-windows', {
            templateUrl : viewDir+'materials/upvc-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/timber-windows', {
            templateUrl : viewDir+'materials/timber-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/aluminium-windows', {
            templateUrl : viewDir+'materials/aluminium-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/sash-windows', {
            templateUrl : viewDir+'styles/sash-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/tilt-turn-windows', {
            templateUrl : viewDir+'styles/tilt-turn-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/dual-turn-windows', {
            templateUrl : viewDir+'styles/dual-turn-windows.html',
            controller  : 'HomeCtrl'
        })
        .when('/secondary-glazing', {
            templateUrl : viewDir+'styles/secondary-glazing.html',
            controller  : 'HomeCtrl'
        })



    .when('/doors', {
        templateUrl : viewDir+'services/door-view.html',
        controller  : 'HomeCtrl'
    })
        .when('/upvc-doors', {
            templateUrl : viewDir+'materials/upvc-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/timber-doors', {
            templateUrl : viewDir+'materials/timber-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/aluminium-doors', {
            templateUrl : viewDir+'materials/aluminium-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/composite-doors', {
            templateUrl : viewDir+'materials/composite-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/entrance-doors', {
            templateUrl : viewDir+'styles/entrance-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/bi-fold-doors', {
            templateUrl : viewDir+'styles/bi-fold-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/patio-doors', {
            templateUrl : viewDir+'styles/patio-doors.html',
            controller  : 'HomeCtrl'
        })
        .when('/french-doors', {
            templateUrl : viewDir+'styles/french-doors.html',
            controller  : 'HomeCtrl'
        })






    .when('/conservatories', {
        templateUrl : viewDir+'services/conservatories-view.html',
        controller  : 'HomeCtrl'
    })
        .when('/upvc-conservatories', {
            templateUrl : viewDir+'materials/upvc-conservatories.html',
            controller  : 'HomeCtrl'
        })
        .when('/timber-conservatories', {
            templateUrl : viewDir+'materials/timber-conservatories.html',
            controller  : 'HomeCtrl'
        })
        .when('/aluminium-conservatories', {
            templateUrl : viewDir+'materials/aluminium-conservatories.html',
            controller  : 'HomeCtrl'
        })
        .when('/orangeries', {
            templateUrl : viewDir+'styles/orangeries.html',
            controller  : 'HomeCtrl'
        })
        .when('/glass-extensions', {
            templateUrl : viewDir+'styles/glass-extensions.html',
            controller  : 'HomeCtrl'
        })
        .when('/tiled-roof-extensions', {
            templateUrl : viewDir+'styles/tiled-roof-extensions.html',
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

    .when('/gallery', {
        templateUrl : viewDir+'home/gallery-view.html',
        controller  : 'HomeCtrl'
    })


    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
