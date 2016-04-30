/**
 * Dropdown site menu controller
 */

app.controller("DropdownSiteMenuController", function($scope, $http) {
	$scope.menus = [{
		title  : "Home",
		action : "home"
	},{
		title  : "Communication",
		menus  : [{
			title  : "Mail",
			action : "mail"
		}
		,{
			title  : "Skype",
			action : "skype"
		}]
	},{
		title : "Photo",
		menus : [{
			title  : "Lightroom",
			action : "lr"
		},{
			title  : "Photoshop",
			action : "cs"
		}]
	},{
		title  : "Links",
		action : "links"
	}];
});