export default function CommentsService($resource, $http, apiUrls){

    this.findByTripId = function(tripId){
        return $http.get(apiUrls.full+'/'+tripId)
            .then(response => {
                return response.data.comments;
            });
    }

    this.addComment = function(tripId, comment){
        let tripsRes = $resource(
            apiUrls.full+"/:tripId",
            {tripId: '@id'},
            {
                'update': {method: 'PUT', params: {tripId: '@id'}}
            }
        );
        return $http.get(apiUrls.full+'/'+tripId)
            .then(response => { return response.data; })
            .then(trip => {
                if(!trip.comments){
                    trip.comments = [];
                }
                trip.comments.push({"id": "anonymous", "text": comment});
            tripsRes.update({tripid: tripId}, trip);
        });
    }
    
    return this;
}