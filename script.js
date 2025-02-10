const search = document.querySelector("#Search");
const numberinput = document.querySelector("#number-input");

search.addEventListener("click", traverse);

let boxes = ["tmp","one", "two","three","four","five","six","seven", "eight"];

function traverse(){
    for(let i = 1; i <= 8; i++){
        // setTimeout(blockName(boxes[i]), 1000); Old Funtion

        setTimeout(function() {
            current(boxes[i], "green");
        }, 1000 * i);

        setTimeout(function() {
            current(boxes[i], "#a8abc7");
        }, 1000 * (i + 1));
        // document.getElementsByClassName(boxes[i]).style.backgroundColor = "#a8abc7";
    }
}

function current(blockName, color){
    document.getElementsByClassName(blockName)[0].style.backgroundColor = color;
}