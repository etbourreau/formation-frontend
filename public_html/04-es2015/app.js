let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = []; //TypeError: Assignment to constant variable.
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}
const weather = getWeather(favoriteCityId);
console.log("Object", weather);

const {city, temperature} = weather;
console.log(city);
console.log(temperature);

const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip{
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}]`;
};
console.log(parisTrip.toString());
Object.defineProperty(Trip, "price", {
    get: function(){
        return this._price;
    },
    set: function(price){
        this._price = price;
    }
});
Trip.prototype.toString = function(){
    return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
};
parisTrip.price = 100;
console.log(parisTrip.toString());
Trip.getDefaultTrip = function(){
    return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
};
const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());
FreeTrip.prototype.toString = function(){
    return "Free"+Trip.prototype.toString.call(this);
};
console.log(freeTrip.toString());

class TripService {
    constructor() {
        // TODO Set of 3 trips
        //
        this.tripsSet = new Set([
            new Trip('paris', 'Paris', 'img/paris.jpg'),
            new Trip('nantes', 'Nantes', 'img/nanges.jpg'),
            new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        ]);
    }
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let found;
                let trip = this.tripsSet.forEach((t) => {
                    if(t.name === tripName){
                        found = t;
                    }
                });
                if(found){
                    resolve(found);
                }else{
                    reject("No trip with name "+tripName);
                }
            }, 2000);
        });
    }
}
class PriceService {
    constructor() {
        this.pricesMap = new Map([
            ['paris', 100],
            ['rio-de-janeiro', 800]
        ]);
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let found = this.pricesMap.get(tripId);
                if(found){
                    resolve(found);
                }else{
                    reject("No price for trip id "+tripId);
                }
            }, 2000);
        });
    }
}
let tripService = new TripService();
let priceService = new PriceService();
tripService.findByName("Paris")
        .then(trip => console.log("Trip found :", trip))
        .catch(error => console.log(error));
tripService.findByName("Toulouse")
        .then(trip => console.log("Trip found :", trip))
        .catch(error => console.log(error));
tripService.findByName("Rio de Janeiro")
        .then(trip => priceService.findPriceByTripId(trip.id))
        .then(price => console.log("Price found :", price))
        .catch(error => console.log(error));
tripService.findByName("Nantes")
        .then(trip => priceService.findPriceByTripId(trip.id))
        .then(price => console.log("Price found :", price))
        .catch(error => console.log(error));
