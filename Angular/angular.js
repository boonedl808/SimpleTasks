// ANGULAR TASK 1:
var app = angular.module('myApp',[]);

app.controller('examplesController', ['$scope', '$sce', function($scope, $sce) {
	
	$scope.clickMe = function() {
		alert('Hi Class!');
	};

// ANGULAR TASK 2:	
  	$scope.message = '';
	
	$scope.alertInput = function() {
		alert($scope.message);
	};

// ANGULAR TASK 3:
	
	
// ANGULAR TASK 4:
	$scope.getRandomColor = function() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		$scope.randomColor = color;
	}
	$scope.getRandomColor();

// ANGULAR TASK 5:
	$scope.myContent = $sce.trustAsHtml('<span>Daniel Boone</span>');

// ANGULAR TASK 6:
	$scope.names = ['Matt', 'David', 'Haley', 'Walter', 'Taylor', 'Jay', 'Afftene'
		, 'Hillary', 'Zyler', 'John', 'Lewis', 'Michael', 'Daniel', 'Ethan', 
		'Jackson', 'Jeff', 'Steve'];
	

	}]);