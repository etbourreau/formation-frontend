import RaceService from './race.service';
import RaceCtrl from './race.controller';

const raceModule = angular.module('RaceModule', [])
    .service('RaceService', [RaceService])
    .controller(RaceCtrl.name, ['RaceService', 'SimulatorService', '$rootScope', RaceCtrl]);
    
export default raceModule;