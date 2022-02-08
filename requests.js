var myapp = angular.module('Mechanic', []);
      /*Dependency Injection*/
      myapp.controller('Mechanicctrl',function($scope,$http)
{
   $http.get('https://athiratp2000.github.io/myjson/new.json')
   .success(function(response)
{
  $scope.names=response.mechanic;
  $scope.rowlimit=6;
}
);


});

myapp.filter("myfilter",function()
{
    return function(input)
    {
       return input.substring(0,1).toUpperCase()+input.substring(1,undefined).toLowerCase();
    }
});


myapp.filter("filtercity",function(){

    return function(input)
    {    
    input = input.split(',');
    for (var i = 0; i < input.length; i++) {
    input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1);
    }
   input = input.join(" ");
   return(input);
}

});