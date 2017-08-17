var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element){
    console.log(element);
});

console.log("lettreADansToutesLesVilles ==", villes.every(function(element){
    return element.indexOf("a") !== -1;
}));
console.log("auMoinsUneVilleAvecUnTiret ==", villes.some(function(element){
    return element.indexOf("-") !== -1;
}));
console.log("villesSansTiretSansEspace==", villes.filter(function(element){
    return (element.indexOf("-") === -1) && (element.indexOf(" ") === -1);
}));
console.log("villesMajusculeSeTerminantParS ==", villes.filter(function(element){
    return element.slice(-1) === "s";
}).map(function(element){
    return element.toUpperCase();
}));