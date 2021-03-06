angular.module('app', ['ngAnimate', 'cfp.hotkeys', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'projects.html',
			controller: 'MainController'
		})
		.state('info', {
			url: '/info',
			templateUrl: 'resume.html',
			controller: 'MainController'
		})
		.state('stats', {
			url: '/stats',
			templateUrl: 'about.html',
			controller: 'MainController'
		})
		.state('projects.detail', {
			url: ':id',
			templateUrl: function(attrs){
				return "projects." + attrs.id + ".html";
			},
			controller: function($scope, $stateParams) {
				$scope.project = $scope.projects[$stateParams.id];
			}
		})

})

.controller('MainController', function($scope, $rootScope, $window){

	var pane = document.getElementById('projects');

	$rootScope.view = {};

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		$rootScope.view.mode = toParams.id ? 'project' : 'primary';
		$rootScope.view.id = toParams.id ? parseInt(toParams.id) : '';
		pane.scrollTop = 0;
	})

	$scope.view.mode = 'primary';

	$scope.tabs = [
		{
			'name'	: 'Projects',
			'href'	: 'projects',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Info',
			'href'	: 'info',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Stats',
			'href'	: 'stats',
			'mode'	: 'primary'
		},
		{
			'name'	: 'Close',
			'href'	: 'projects',
			'mode'	: 'project'
		},
		{
			'name'	: 'Previous',
			'href'	: 'projects.detail({id: view.id - 1})',
			'mode'	: 'project'
		},
		{
			'name'	: 'Next',
			'href'	: 'projects.detail({id: view.id + 1})',
			'mode'	: 'project'
		}
	];

	$scope.projects = [
		{
			'id'	: 0,
			'name' : 'Sleepy Monkey',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'October 2014',
			'img'  : 'img/sleepymonkey-thumb.png'
		},
		{
			'id'	: 1,
			'name' : 'HmgCSC Portfolio Site',
			'desc' : 'A multi-functional website for showcasing digital products and sharing resources across designers and sales departments.',
			'date' : 'January 2014',
			'img'  : 'img/hmgcsc.jpg'
		},
		{
			'id'	: 2,
			'name' : 'HmgGo',
			'desc' : 'A simple splash page with the purpose of linking together different assets of the company.',
			'date' : 'March 2014',
			'img'  : 'img/hmggo.jpg'
		},
		{
			'id'	: 3,
			'name' : 'Nobody Delivers Like We Do',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'January 2015',
			'img'  : 'img/nobodydelivers.png'
		},
		{
			'id'	: 4,
			'name' : 'Ghost Grid',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'April 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-8-1000x662.jpg'
		},
		{
			'id'	: 5,
			'name' : 'Angular-Resizable',
			'desc' : 'Angular application to optimize creation & hosting of landing pages and other content.',
			'date' : 'March 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		},
		{
			'id'	: 6,
			'name' : 'Strings',
			'desc' : 'A simple linear icon font I built to grow and understand the pros and cons of svg vs fonts.',
			'date' : 'February 2015',
			'img'  : 'http://publicdomainarchive.com/wp-content/uploads/2014/12/public-domain-images-free-stock-photos-high-quality-resolution-downloads-public-domain-archive-4-1000x667.jpg'
		}
	];

})