angular.module("shows")
.component("shows",{
    templateUrl:'shows/shows.html',
    controller: ('ShowsController',ShowsController)

});
function ShowsController(tvshowsService){    
    this.orderProp='-rating.average'
    this.tvshows= tvshowsService.query();
}
