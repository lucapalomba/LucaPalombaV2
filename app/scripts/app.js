'use strict';

/**
 * @ngdoc overview
 * @name lucapalombaApp
 * @description
 * # lucapalombaApp
 *
 * Main module of the application.
 */
angular
    .module('lucapalombaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
    .config(function ($routeProvider, $translateProvider) {

        //config of router provider
        $routeProvider.when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            }).when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            }).when('/timeline', {
               redirectTo:'/coming-soon'
            }).when('/coming-soon', {
                templateUrl: 'views/coming-soon.html',
                controller: 'ComingSoonCtrl'
            }).otherwise({
                redirectTo: '/coming-soon'
            });

        //config of tranlsate provider
        $translateProvider.translations('en', {
            'TITLE': 'Hello, welcome. ',
            'COMING-SOON': 'This part is not implemented yet. Coming soon',
            'GOTO-MOBILE': 'This site is not optimized for mobile navigation yet<br><a href="http://lucapalomba.herokuapp.com/">Take a look at the old site</a>',
        });

        $translateProvider.translations('it', {
            'TITLE': 'Ciao, Benvenuto.',
            'COMING-SOON': 'Questa parte è mancante, arriverà presto',
            'GOTO-MOBILE': 'Questo sito non è ancora stato ottimizzato per la navigazione mobile<br><a href="http://lucapalomba.herokuapp.com/">Visualizza il vecchio sito</a>',
        });

        $translateProvider.preferredLanguage('en');

    }).run(function ($rootScope, $translate) {

        //changer languages
        $rootScope.changelang = function (lang) {

            if (lang) {
                $translate.use(lang);
            } else if ($translate.use() === 'it') {
                $translate.use('en');
            } else {
                $translate.use('it');
            }


        };

    });