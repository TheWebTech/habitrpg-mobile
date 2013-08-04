'use strict';

/**
 * The main HabitRPG app module.
 *
 * @type {angular.Module}
 */

var habitrpg = angular.module('habitrpg', ['userServices', 'sharedServices', 'authServices', 'notificationServices', 'ngMobile'])
    .config(['$routeProvider', function ($routeProvider, User) {
        $routeProvider

            .when('/login',           {templateUrl: 'views/login.html'})
            .when('/settings',        {templateUrl: 'views/settings.html'})
            .when('/profile',         {templateUrl: 'views/profile.html'})

            .when('/tasks/:taskId',   {templateUrl: 'views/details.html'})

            .when('/habit',           {templateUrl: 'views/list.html'})
            .when('/daily',           {templateUrl: 'views/list.html'})
            .when('/todo',            {templateUrl: 'views/list.html'})
            .when('/reward',          {templateUrl: 'views/list.html'})

            .when('/todo/active',     {templateUrl: 'views/list.html'})
            .when('/todo/completed',  {templateUrl: 'views/list.html'})

            .otherwise({redirectTo: '/habit'});
    }])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    }]);

