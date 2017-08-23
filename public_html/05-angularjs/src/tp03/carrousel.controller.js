export default class CarrouselCtrl{
    constructor($interval){
        this.images = [
            {'name': 'New York', 'url': 'img/nyc.jpg'},
            {'name': 'Paris', 'url': 'img/paris.jpg'},
            {'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg'},
            {'name': 'Rome', 'url': 'img/rome.jpg'},
            {'name': 'Tokyo', 'url': 'img/tokyo.jpg'}
        ];
        this.currentImgId = 0;
        //$interval(() => this.next(), 1000*2);
    }
    
    next(){
        if(this.currentImgId+1 > this.images.length-1){ this.currentImgId=0;
        }else{ this.currentImgId++; }
    }
    
    previous(){
        if(this.currentImgId-1 < 0){ this.currentImgId=this.images.length-1;
        }else{ this.currentImgId--; }
    }
    
}