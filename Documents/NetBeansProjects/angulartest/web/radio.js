/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app=angular.module("myapp",[]);
         app.controller("myctr",function($scope){
          // $scope.firstname="imed";
          // $scope.lastname="hafsi";
           $scope.master={firstname:'imed',lastname:'hafsi'};
           $scope.reset=function(){
               $scope.user=angular.copy($scope.master);
           }
           $scope.reset();
         });