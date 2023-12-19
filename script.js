 // step first get element
    const mode= document.getElementById("mode");
    const boxes= document.querySelectorAll(".box");
    const winnercandidate= document.getElementById("winnercandidate");
    const msg = document.querySelector(".msg-container");
    const resetbutton=document.getElementById("reset");
    const newgame= document.getElementById("newgame");
    const container = document.querySelector(".container");
    const casenodefeat= document.querySelector("#oops");
    const showdefeatmessage= document.querySelector(".equal");
 // stepsecond apply dark and light theme functionality
  let toggle = true;
 const changetheme = () => {
    
    console.log("hello");
    if (toggle) {
      document.body.classList.add("darktheme");
      for (let val of boxes) {
        val.style.color = "white";
      }
      toggle = false;
    } else {
      document.body.classList.remove("darktheme");
      document.body.classList.add("lighttheme");
      for (let val of boxes) {
        val.style.color = "black";
      }
      toggle = true;
    }
  }
  
  mode.addEventListener("click" ,changetheme)
  // store winning pattern
  const winningpattern=[
       [0,1,2],
       [0,3,6],
       [0,4,8],
       [1,4,7],
       [2,5,8],
       [2,4,6],
       [3,4,5],
       [6,7,8],
  ]
   
   //  implementation of check winner function
   const checkwinner = () => {
    let winnerFound = false;

    for (let pattern of winningpattern) {
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;

        if (value1 !== "" && value2 !== "" && value3 !== "") {
            if (value1 === value2 && value2 === value3) {
                console.log(`The winner is ${value1}`);
                showwinner(value1);
                winnerFound = true;
                break;
            }
        }
    }

    if (!winnerFound) {
        let allBoxesFilled = true;

        for (let val of boxes) {
            if (val.innerText === "") {
                allBoxesFilled = false;
              break;
            }
            
        }

        if (allBoxesFilled) {
            casenodefeat.innerText = "Oops, no winner!";
            showdefeatmessage.classList.remove("hide");
        }
    }
}

// decide turn of player
  let turnO = true;
  boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
        box.disabled=true;
        checkwinner();
     })
  })
    
     const resetgame=()=>{
       for(let val of boxes){
         val.innerText="";
         val.disabled=false;
         msg.classList.add("hide");
       }
       casenodefeat.innerText="";
     }

    const showwinner=(winner)=>{
        winnercandidate.innerText=`Congratulation-${winner} is Winner`
         msg.classList.remove("hide");
        for(let all of boxes){
            all.disabled = true;
        }
    }

    // implementation of reset and game button
    
        resetbutton.addEventListener("click", resetgame);
         newgame.addEventListener("click", resetgame);
 
