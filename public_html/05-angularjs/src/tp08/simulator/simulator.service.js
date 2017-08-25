export default class SimulatorService {
    constructor(RaceService, $interval, $rootScope) {
        this.race = RaceService;
        this.$interval = $interval;
        this.$rootScope = $rootScope;
    }

    start() {
        this.process = this.$interval(() => this.update(), this.getDelay()/10);
    }

    update() {
        this.race.list().forEach(walker => {
            let rand = this.getDistance();
            this.race.update(walker.name, rand);
            if (walker.progress >= 100) {
                walker.progress = 100;
                this.$interval.cancel(this.process);
                this.$rootScope.$emit('raceFinished', walker);
            }
        });
    }

    getDistance() {
        return Math.ceil(Math.random() * 10);
    }
    
    getDelay(){
        return 1000;
    }
}