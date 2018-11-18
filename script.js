var xmlhttp
//loadXMLDoc('https://raw.githubusercontent.com/ManiacDC/TypingAid/master/Wordlists/WordList_French%20rommmcek.txt')
loadXMLDoc('https://www.cjoint.com/doc/18_11/HKtjhrZ8cPO_liste-francais.txt-new.txt')
var dictionnaire = xmlhttp.responseText.split("\n")

console.log("Dictionnaire chargé, avec un total de " + dictionnaire.length + " mots")


/*
var Exp = '/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i'
    for(var i in dictionnaire)
    {
        var e = dictionnaire[i]
        if(e.length < 4 || !e.match(Exp))
            dictionnaire.splice(i, 1);
    }
*/
console.log("Dictionnaire mis a jour, avec un total de " + dictionnaire.length + " mots")



window.setInterval(onTick, 250)

var wic = document.getElementById("WordInputContainer")
var wib = document.getElementById("WordInputBox")
function onTick(){
    var wordRoot = channel.data.wordRoot;
    if(wordRoot != "" && wic.className != "Hidden"){
        submitWord(getWordByRoot(wordRoot))
    }
}

function submitWord(w){
    console.log("Mot soumis: " + w);
    channel.socket.emit("setWord", {
        word: w,
        validate: !0
    })
}

function getWordByRoot(r){
    for(var i in dictionnaire)
    {
        var e = dictionnaire[i]
        if(e.includes(r)){
            return e
        }
    }
    return r;
}

function loadXMLDoc(theURL)
   {
       if (window.XMLHttpRequest)
       {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
           xmlhttp=new XMLHttpRequest();
       }
       else
       {// code for IE6, IE5
           xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
       }
       xmlhttp.onreadystatechange=function()
       {
           /*if (xmlhttp.readyState==4 && xmlhttp.status==200)
           {
            alert(xmlhttp.responseText);
           }
           */
       }
       xmlhttp.open("GET", theURL, false);
       xmlhttp.send();
   }
