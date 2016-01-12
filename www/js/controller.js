starter.controller('toDoController',  function($scope, $ionicListDelegate){

	$scope.tasks = [];

	$scope.addTask = function(){

		if($scope.task != '' && typeof $scope.task !== "undefined"){

			$scope.tasks.push({'taskMessage': $scope.task, 'completada': 'false'});
			//console.log($scope.tasks);
			$scope.task = '';

		}
	};

	$scope.editTask = function() {
		//event.target.contentEditable = event.target.contentEditable == 'true' ? 'false': 'true';
		$ionicListDelegate.$getByHandle('listaToDo').closeOptionButtons();

	};

	$scope.deleteTask = function(oneTask){
		//console.log("llamando delete Task... para -> ", oneTask);
		 $ionicListDelegate.$getByHandle('listaToDo').closeOptionButtons();
		 $scope.tasks.splice(oneTask,1);
		 
	};


});