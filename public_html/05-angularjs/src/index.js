import angular from 'angular';
import ngResource from 'angular-resource';
import RaceModule from './tp08/race/race.module';
import SimulatorModule from './tp08/simulator/simulator.module';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

import tplTp01 from './tp01/expressions.html';
import tplTp02 from './tp02/vues.html';
import tplTp03 from './tp03/carrousel.html';
import tplTp04 from './tp04/forms.html';
import tplTp05 from './tp05/tripsList.html';
import tplTp06 from './tp06/tripsListDetails.html';
import tplTp07 from './tp07/tripsComments.html';
import tplTp08 from './tp08/race/race.html';

import apiUrls from './tp07/apiUrls.service';
import TripsService from './tp07/trips.service';
import CommentsService from './tp07/comments.service';
import StepsService from './tp07/steps.service';

import CarrouselCtrl from './tp03/carrousel.controller';
import FormsCtrl from './tp04/forms.controller';
import TripsListCtrl from './tp05/tripsList.controller';
import TripsListDetailsCtrl from './tp06/tripsListDetails.controller';
import TripsCommentsCtrl from './tp07/tripsComments.controller';

document.querySelector('body').innerHTML = [tplTp08].join('<hr>');

angular.module('tripApp', [ngResource])
    .constant('ApiUrls', apiUrls)
    .service('TripsService', ['$resource', 'ApiUrls', TripsService])
    .factory('CommentsService', ['$resource', '$http', 'ApiUrls', CommentsService])
    .service('StepsService', ['$http', 'ApiUrls', StepsService])
    .controller(CarrouselCtrl.name, CarrouselCtrl)
    .controller(FormsCtrl.name, FormsCtrl)
    .controller(TripsListCtrl.name, TripsListCtrl)
    .controller(TripsListDetailsCtrl.name, TripsListDetailsCtrl)
    .controller(TripsCommentsCtrl.name, ['TripsService', 'CommentsService', 'StepsService', TripsCommentsCtrl]);

angular.module('raceApp', [RaceModule.name, SimulatorModule.name]);