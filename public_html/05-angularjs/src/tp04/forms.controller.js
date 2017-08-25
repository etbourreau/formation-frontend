import './forms.css';

export default class FormsCtrl{
    constructor(){
        this.master = {};
        this.user = {};
    }
    
    update(user){
        console.log(user);
        this.master = angular.copy(user);
    }
    
    reset(){
        this.user = {};
    }
}