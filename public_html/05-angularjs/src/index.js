import angular from 'angular';
import tplTp01 from './tp01/expressions.html';
import tplTp02 from './tp02/vues.html';
import tplTp03 from './tp03/carrousel.html';
import tplTp04 from './tp04/forms.html';

import CarrouselCtrl from './tp03/carrousel.controller';
import FormsCtrl from './tp04/forms.controller';

import './tp04/forms.css';

// insertion du code HTML dans le corps de la page principale
document.querySelector('body').innerHTML = 
        /*[tplTp01].join('<hr>')+[tplTp02].join('<hr>')+[tplTp03].join('<hr>')+*/[tplTp04].join('<hr>');

angular.module('tripApp', [])
        .controller(CarrouselCtrl.name, CarrouselCtrl);

angular.module('tripApp', [])
        .controller(FormsCtrl.name, FormsCtrl);