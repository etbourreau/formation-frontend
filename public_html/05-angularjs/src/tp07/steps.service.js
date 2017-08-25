export default function StepsService($http, apiUrls){
    this.findByTripId = function(tripId){
        return $http.get(apiUrls.full+'/'+tripId)
            .then(response => {
                return response.data.steps;
            });
    }
}