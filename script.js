const boxs = document.querySelectorAll(".box");
const display = document.querySelector(".result");
const btnRestart = document.querySelector("#restart");

const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let options=["","","","","","","","",""];
let currentPlayer="X";
let player="X";
let running=false;
myFunction();

function myFunction(){
  boxs.forEach((box)=>{
  box.addEventListener('click',boxClick)})
  running=true;
}
function boxClick(){
    console.log(this.dataset.index)
  const index=this.dataset.index;
    if(options[index]!==""){
       return;
  }
  console.log(options)
  updateBox(this,index);
  checkWinner();
}
function updateBox(box,index){
    options[index]=player;
    box.innerHTML=currentPlayer;
    console.log(currentPlayer)
    }
    
function changePlayer(){
    player=(player=='X') ? "O" :"X";
    currentPlayer=(currentPlayer=="X") ? "O" :"X";
    display.textContent=`${player} Your Turn`;
  }
  function checkWinner(){
    let isWon=false;
    for(let i=0;i<win.length;i++){
      const condition=win[i]; 
      const box1=options[condition[0]]; 
      const box2=options[condition[1]]; 
      const box3=options[condition[2]]; 
      if(box1=="" || box2=="" || box3==""){
        continue;
      }
      if(box1==box2 && box2==box3){
        isWon=true;
      }
    }
    
    if(isWon){
      document.querySelector("#container").style.pointerEvents = "none";
      display.textContent=`${player} Won..Click to Restart`;
      running=false;
    }else if(!options.includes("")){
      document.querySelector("#container").style.pointerEvents = "none";
      display.textContent=`Game Draw`;
      running=false;
      return;
    }else{
      document.querySelector("#container").style.pointerEvents = "all";
      changePlayer();
    }
    
    }
    function myButton(){
       options=["","","","","","","","",""];
       currentPlayer="X";
       player="X";
       running=true;
        display.textContent=`${player} Your Turn`;
       boxs.forEach(box=>{
        box.innerHTML = "";
        document.querySelector("#container").style.pointerEvents = "all";

       })

    }