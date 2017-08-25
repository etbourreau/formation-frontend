import SimulatorService from './simulator.service';

const simulatorModule = angular.module('SimulatorModule', [])
    .service('SimulatorService', ['RaceService', '$interval', '$rootScope', SimulatorService]);

export default simulatorModule;