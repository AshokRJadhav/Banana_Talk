var translator= document.querySelector("#btn-translator");
var input=document.querySelector("textarea");
var output=document.querySelector("#output");

function clickHandler()
{
    output.innerText="ashok jadhav " +input.value;

}

translator.addEventListener("click", clickHandler);