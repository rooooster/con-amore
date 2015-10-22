/**
* single-page-nav
* https://github.com/ChrisWojcik/single-page-nav
*/
$('#anhors').singlePageNav({
    easing: 'easeInOutExpo',
    speed: 1250,
    currentClass: 'active',
    offset: 10,
});


function participantCtrl($scope) {
    $scope.participantLastName = "";
    $scope.participantFirstName = "";
    $scope.participantFatherName = "";
    $scope.participantPhoto = "";

    $scope.myData = new Firebase("https://sizzling-torch-6523.firebaseio.com/");
    $scope.saveParticipant = function() {
        $scope.myData.push({participantLastName:$scope.participantLastName});
        $scope.myData.push({participantFirstName:$scope.participantFirstName});
        $scope.myData.push({participantFatherName:$scope.participantFatherName});
        $scope.myData.push({participantPhoto:$scope.participantPhoto});
    };
};

