var input = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

serverUrl = "https://api.funtranslations.com/translate/klingon.json"

function constructUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    alert("Please enter some text to translate!!");
}

function clickEventHandler() {
    var inputText = input.value;
    fetch(constructUrl(inputText))
    .then(request => request.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);