let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let turn0= "true";
let newbtn= document.querySelector(".newbtn");
let msg= document.querySelector(".msg");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const showWinner = (winner) => {
    msg.classList.remove("hide");
    msg.innerHTML = `👑The Winner is: "${winner}"`;
    newbtn.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
        if (turn0 ==="true"){
            box.innerHTML = "O";
            turn0 = "false";
        }
        else{
            box.innerHTML = "X";
            turn0 = "true";
        }
        box.disabled = true;

        cheakWinner();
    }) 
});



const cheakWinner = () => {
    for (let patters of winPatterns){
        let cont1= boxes[patters[0]].innerHTML;
        let cont2= boxes[patters[1]].innerHTML; 
        let cont3= boxes[patters[2]].innerHTML;
        if( cont1 !=="" && cont2 !== "" && cont3 !== ""){
            if (cont1 === cont2 && cont2 === cont3) {
                // alert(`Winner is ${cont1}`);
                boxes.forEach((box) => {
                    box.disabled = true;
                    showWinner(cont1);
                });
            }
        }
    }
}

