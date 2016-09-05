var app = angular.module('feministTheoryApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider, $sceProvider) {
	
	$sceProvider.enabled(false);
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('posts', {
			url: '/posts',
			templateUrl: '/templates/posts.html',
			controller: 'postsController'
		})
		.state('pitches', {
			url: '/pitches',
			templateUrl: '/templates/pitches.html',
			controller: 'pitchesController'
		})
		.state('resources', {
			url: '/resources',
			templateUrl: '/templates/resources.html',
			controller: 'resourcesController'
		})



	$urlRouterProvider.otherwise('/');

});