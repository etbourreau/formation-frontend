export default class TripsCommentsCtrl{
    constructor(TripsService, CommentsService, StepsService){
        this.tripsService = TripsService;
        this.commentsService = CommentsService;
        this.stepsService = StepsService;
        
        this.tripsService.findAll().then(data => {
            this.trips = data;
        }).then(() => {
            this.trip = this.trips[0];
            console.log(this.trip);
        });
    }
    
    onChangeTrip(trip) {
        this.stepsService.findByTripId(trip.id).then(data => this.steps = data);
        this.commentsService.findByTripId(trip.id).then(data => this.comments = data);
    }
    
    saveComment(trip, comment){
        this.commentsService.addComment(trip.id, comment).then( () => {
            this.onChangeTrip(trip);
            this.resetCommentInput();
        });
    }
    
    resetCommentInput(){
        this.commentInput = "";
    }
}