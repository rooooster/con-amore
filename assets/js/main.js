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


/**
* angular
* firebase
*/
function participantCtrl($scope) {
    $scope.participantName = "";
    $scope.participantAge = "";
    $scope.participants = {};

    $scope.myData = new Firebase("https://sizzling-torch-6523.firebaseio.com/Participants");

    $scope.saveParticipant = function() {
        $scope.myData.push({
            participantName:$scope.participantName,
            participantAge:$scope.participantAge,
        });
    };

    $scope.myData.on('value', function(snapshot) {
        $scope.participants = snapshot.val();
        $scope.$apply();
    });
};

