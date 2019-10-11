angular.module("smartfarm", ['firebase'])
    .controller("FirstCtrl", FirstCtrl)

function FirstCtrl($firebaseArray, $firebaseObject) {
    var first = this;
    var usersRef = firebase.database().ref("users");
    first.users = $firebaseArray(usersRef);
    var cropsRef = firebase.database().ref("crop");
    first.crops = $firebaseObject(cropsRef);
    first.usr = function () {
        var elmnt = document.getElementById("user");
        elmnt.scrollIntoView();
    }
    first.crp = function () {
        var elmnt = document.getElementById("crop");
        elmnt.scrollIntoView();
    }
    first.prd = function () {
        var elmnt = document.getElementById("prediction");
        elmnt.scrollIntoView();
    }
}