var moduleDevfest = require("./data/devfest-2015.js");
var readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var listerTousLesPresentateurs = function(){
    return moduleDevfest.speakers;
};

var listerToutesLesSessions = function(){
    return moduleDevfest.sessions;
};

var trouverUneSession = function(idSession){
    if(idSession){
        console.log(moduleDevfest.sessions.find(
            function(element){
                return element.id===idSession;
            }
        ));
    }else{
        console.log("Merci de renseigner un identifiant de session séparé par un espace");
    }
};

var listerTopPresentateurs = function(){
    return moduleDevfest.speakers.filter(
        function(element){
            return element.topspeaker;
        }
    );
};

const afficherPresentateurs = function(pres){
    console.log(pres);
    pres.forEach(function(element, index){
        let topSpeaker = "";
        if(element.topspeaker){
            topSpeaker = "[TOP] ";
        }
        let ribon = "";
        if(element.ribon){
            ribon = "("+element.category.title+" -> "+element.ribon.title+")";
        }
       console.log(index+".",topSpeaker+element.firstname, element.lastname, ribon);
    });
};

var functions=[{
        libelle : "Liste de tous les présentateurs",
        call : afficherPresentateurs(listerTousLesPresentateurs())
    },{
        libelle : "Top des présentateurs",
        call : afficherPresentateurs(listerTopPresentateurs)
    },{
        libelle : "Liste des sessions",
        call : listerToutesLesSessions
    },{
        param : true,
        libelle : "Détail d'une session",
        call : trouverUneSession
    }
];

var text = '*** Application Conférence ***\n';
functions.forEach(function(element, index){
    text += index+". "+element.libelle+"\n";
});
text += "99. Quitter\n";

rl.setPrompt(text, text.length);
rl.prompt();
rl.on('line', function(answerTemp){
    answer = answerTemp;
    var command = answer.split(" ")[0];
    var param = answer.split(" ")[1];
    if(command==='99'){
        rl.close();
    }else if(functions[command]){
        if(functions[command].param){
            functions[command].call(param);
        }else{
            functions[command].call;
        }
    }
    rl.prompt();
}).on('close', function(){
    process.exit(0);
});