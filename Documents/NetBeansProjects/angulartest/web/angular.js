/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app=angular.module("myapp",[]);
app.controller("myctr",function($scope,$http,$location,$timeout){
    $scope.nom="";
    $scope.nbclick=0;
    $scope.mousel=0;
    $scope.mousee=0;
    $scope.mousem=0;
    nbchek=false;
    $scope.sexe=['Homme','Femme'];
    $http.get("welcome.txt").then(function(response){
        $scope.content=response.data;
        $scope.status=response.statusText;
        
    });
    $scope.addr=$location.absUrl();
    $timeout(function(){
        $scope.message=("hello yes you can do it")
    },8000);
    $scope.cars = [
        {model : "Ford Mustang", color : "red"},
        {model : "Fiat 500", color : "white"},
        {model : "Volvo XC90", color : "black"}
    ];
    $scope.btcount=function($event){
        $scope.nbclick+=1;
    }
    $scope.touche=function($event){
        $scope.nbchek=true;
    }
    // definition des evenements produisent par le souris
    mouseenter=function($event){
        $scope.mousee+=1;
    }
    mousemouve=function($event){
        $scope.mousem+=1;
    }
    mouseleave=function($event){
        $scope.mousel+=1;
    }
});

