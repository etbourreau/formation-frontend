export default function TripsService($resource, apiUrls){
    
    this.findAll = function(){
        return new Promise((resolve, reject) => {
            let tripsRes = $resource(
                apiUrls.light,
                { 'get': {method: 'GET'} }
            );
            let villes = tripsRes.query();
            if(villes){
                resolve(villes);
            }else{
                reject('Could not get cities list !');
            }
        })
    };
    
    this.findById = function(tripId){
        let tripsRes = $resource(
            apiUrls.light+"/:tripId",
            {tripId: '@id'},
            {
                'get': {method: 'GET'},
                params: {tripId: '@id'}
            }
        );
        return tripsRes.get({tripId: tripId});
    }
}