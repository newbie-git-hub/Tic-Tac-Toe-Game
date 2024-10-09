let btns = document.querySelectorAll(".btn");
let win_msg = document.querySelector(".win-msg");
let reset_btn = document.querySelector("#reset-btn");
let new_game_btn = document.querySelector(".new-game-btn");
let draw_msg = document.querySelector(".draw-msg");
const winConditions = [[0,1,2],[0,3,6],[0,4,8,],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnX = true;
let btn_clicked = 0;

let disableBtns = ()=>{
    for(btn of btns){
        btn.disabled = true;
    }
};

const new_game = ()=>{
    new_game_btn.innerText = "New Game";
    new_game_btn.classList.remove("hide");
    reset_btn.classList.add("hide");
    new_game_btn.addEventListener("click",()=>{
        location.reload();
    })
}
let showWinner = (Winner)=>{
    win_msg.innerText = "Congratulations! The winner is "+Winner;
    disableBtns();
    new_game();
};

let draw = () =>{
    draw_msg.classList.remove("hide");
    new_game();
}
const checkWinner = (btn_clicked)=> {
    let isWinner = false;
    for(let pattern of winConditions){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
                isWinner = true;
                break;
            }
        }
    }
    if(btn_clicked === 9 && !isWinner){
        draw();
    }
}

btns.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        if(turnX){
            btn.innerText = "X";
            turnX = false;
        }
        else{
            btn.innerText = "O";
            turnX = true;
        }
        btn.disabled = true;
        btn_clicked++;
        checkWinner(btn_clicked);
    });
});

reset_btn.addEventListener("click",()=>{
    window.location.reload();
});
