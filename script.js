const search = document.querySelector("#Search");
const numberinput = document.querySelector("#number-input");
const message = document.querySelector(".message-container");

console.log("hello")

search.addEventListener("click", traverse);

let boxes = ["tmp","one", "two","three","four","five","six","seven", "eight"];

function traverse(){
    //Below is a possible solution for clearing timers
    let intendedColor = "green";


    let find = parseFloat(numberinput.value);
    let psuedobool = 0;

    const blocks = document.getElementsByClassName("box");
    console.log(find);
    for(let i = 1; i <= 16; i++){
        // setTimeout(blockName(boxes[i]), 1000); Old Funtion

        setTimeout(function() {
            // current(i - 1, "green");
            blocks[i - 1].style.backgroundColor = intendedColor;
            if(blocks[i-1].innerText == find){
                console.log("works!");
                message.innerText="Found!"
                psuedobool = 1;
                intendedColor = "#a8abc7";
                setTimeout(function(){
                    message.innerText ="";
                }, 100 *i);
            }
        }, 1000 * i);


        setTimeout(function() {
            // current(i - 1, "#a8abc7");
            blocks[i - 1].style.backgroundColor = "#a8abc7";
        }, 1000 * (i + 1));
        // document.getElementsByClassName(boxes[i]).style.backgroundColor = "#a8abc7";
    }
}

// function current(blockName, color){
//     .style.backgroundColor = color;
// }