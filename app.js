var btnTranslate = document.querySelector("#btn");
var txtArea= document.querySelector("#txt");
var divTranslated = document.querySelector("#div-box");

var url="https://api.funtranslations.com/translate/numbers.json";

function constructUrl(text){
    return url+"?"+"text="+text;
}

function errorHandler(error){
    alert("Something is wrong with the server. Please try after some time");
}
function clickHandler(){

    var text=txtArea.value;

    fetch(constructUrl(text))
    .then(response=>response.json())
    .then(json=> {
        var translated=json.contents.translated;
        divTranslated.innerText=translated;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click",clickHandler);