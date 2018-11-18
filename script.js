var xmlhttp
    //loadXMLDoc('https://raw.githubusercontent.com/ManiacDC/TypingAid/master/Wordlists/WordList_French%20rommmcek.txt')
    loadXMLDoc('https://raw.githubusercontent.com/Aylox/BombPartyHack/master/dico.txt')
    var dictionnaire = xmlhttp.responseText.split("\n")

    console.log("Dictionnaire chargé, avec un total de " + dictionnaire.length + " mots")

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
    for(var i in dictionnaire){
        var e = dictionnaire[i].toUpperCase()
        if(e.includes(r)){
            dictionnaire.splice(i, 1);
            return e;
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
