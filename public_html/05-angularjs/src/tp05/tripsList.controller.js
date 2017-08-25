export default class TripsListCtrl{
    constructor($http){
        this.$http = $http;
        this.$http({
            method: 'GET',
            url: 'http://localhost:3000/trips-details',
            responseType: 'json'
        }).then(response => {
            this.data = response.data;
        });
    }
    
    save(form){
        let found;
        this.data.forEach(trip => {
            if(trip.id === form.id.$viewValue){
                found = trip;
                trip.name = form.name.$viewValue;
                trip.price = form.price.$viewValue;
            }
        });
        if(found){
            this.$http({
                method: 'PATCH',
                url: 'http://localhost:3000/trips-details/'+found.id,
                data: angular.toJson(found)
            });
        }
        console.log(`UPDATE ${found.name} success`);
    }
}