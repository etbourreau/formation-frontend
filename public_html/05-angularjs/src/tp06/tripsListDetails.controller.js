export default class TripsListDetailsCtrl{
    constructor($resource){
        this.tripsRes = $resource(
            "http://localhost:3000/trips-details/:tripId",
            {tripId: '@id'},
            {
                'get': {method: 'GET'},
                'update': {method: 'PUT', params: {tripId: '@id'}}
            }
        );
        this.trips = this.tripsRes.query();
    }
    
    update(trip){
        this.clicked=false;
        console.log(this.clicked);
        this.tripsRes.update({id: trip.id}, trip);
    }
}