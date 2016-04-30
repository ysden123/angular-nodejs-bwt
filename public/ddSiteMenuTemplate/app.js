/**
 * Application for dropdown site menu with templates 
 */
var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, send to /home
	$urlRouterProvider.otherwise("/action11")
	$stateProvider.state('#', {
	}).state('action11', {
	    url : "/action11",
	    templateUrl : "action11/action11.html"
	}).state('action12', {
	    url : "/action12",
	    templateUrl : "action12/action12.html"
	}).state('action21', {
	    url : "/action21",
	    templateUrl : "action21/action21.html"
	}).state('action22', {
	    url : "/action22",
	    templateUrl : "action22/action22.html"
	})
})