var btntranslate = document.querySelector("#btntranslate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/yoda.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! please try again after sometime")
}
function clickHandler() {
    var inputtext = txtinput.value; 
    fetch(getTranslationURL(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler)