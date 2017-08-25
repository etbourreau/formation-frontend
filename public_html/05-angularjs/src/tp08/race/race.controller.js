export default class RaceCtrl{
        constructor(RaceService, SimulatorService, $rootScope){
            this.race = RaceService;
            this.simulator = SimulatorService;
            $rootScope.$on('raceFinished', (event, winner) => {
                this.endRace(winner);
            })
            this.stats = { victoires: 0, defaites: 0};
            this.Math = window.Math;
        }
        
        getWalkers(){
            return this.race.list();
        }
        
        bet(walker){
            this.betWalker = walker;
            this.betString = "Vous pariez sur "+walker.name+".";
        }
        
        startRace(){
            this.endString = null;
            this.started = true;
            this.simulator.start();
        }
        
        endRace(winner){
            this.started = false;
            this.endString = "Vous avez ";
            if(winner === this.betWalker){
                this.endString += "gagné ";
                this.stats.victoires++;
            }else{
                this.endString += "perdu ";
                this.stats.defaites++;
            }
            this.endString += "! "+winner.name+" a gagné la course !";
            this.betWalker = null;
            this.betString = null;
            setTimeout(() => this.race.reset(), 2000);
        }
}