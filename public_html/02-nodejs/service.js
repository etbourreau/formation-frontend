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
        return moduleDevfest.sessions.find(
            function(element){
                return element.id===idSession;
            }
        );
    }else{
        return "Merci de renseigner un identifiant de session séparé par un espace";
    }
};

var listerTopPresentateurs = function(){
    return moduleDevfest.speakers.filter(
        function(element, index, array){
            return element.topspeaker;
        }
    );
};

var text = '*** Application Conférence ***\n\
1. Liste de tous les présentateurs\n\
2. Top présentateurs\n\
3. Liste des sessions\n\
4. Détail d\'une session\n\
99. Quitter\n\
';
var functions = {
    1 : listerTousLesPresentateurs,
    2 : listerTopPresentateurs,
    3 : listerToutesLesSessions,
    4 : trouverUneSession
};
rl.on('line', function(answerTemp){
    answer = answerTemp;
    var command = answer.split(" ")[0];
    var param = answer.split(" ")[1];
    if(command==='99'){
        rl.close();
    }else if(functions[command]){
        console.log(functions[command](param));
    }
    rl.prompt();
}).on('close', function(){
    process.exit(0);
});
rl.setPrompt(text, text.length);
rl.prompt();