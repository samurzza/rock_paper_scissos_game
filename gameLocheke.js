let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

let theChoicess = document.querySelectorAll(`.theChoice`);

let img = document.querySelectorAll(`.theChoice img`);


let triangle = document.querySelector(`.triangle`);

let resetGameH4 = document.querySelector(`.resetGame h4`);

let resetGameResety = document.querySelector(`.resetGame .resety`);

let scoreSpane = document.querySelector(`.score span`);



let fromChoice = [
  { className: `paperPlay`, imgSrc: img[0].src },
  { className: `scissorsPlay`, imgSrc: img[1].src },
  { className: `rockPlay`, imgSrc: img[2].src }
];

let game = document.querySelector(`.game`);
let texe = document.querySelector(`.texe`);

theChoicess.forEach((choiceEl) => {
  choiceEl.addEventListener("click", (e) => {

    let num = Math.floor(Math.random() * 3);
 
    // اخفاء باقي العناصر
    theChoicess.forEach((el) => {
      el.classList.add("hide");
      
    });
    
    
    // تكبير وتحريك العنصر المختار
    game.style.opacity = 1;
    triangle.style.zIndex = `-1`;
    triangle.style.opacity = 0;

    
    let player = document.createElement(`div`);
    player.setAttribute(
      `class`,
      `playert ${
        e.currentTarget.classList.contains("rock")
          ? "rockPlay"
          : e.currentTarget.classList.contains("paper")
            ? "paperPlay"
            : e.currentTarget.classList.contains("scissors")
              ? "scissorsPlay"
              : ""
      }`,
    );

    let playerChoiceImg = document.createElement(`img`);
    playerChoiceImg.setAttribute(
      "src",
      e.currentTarget.classList.contains("rock")
        ? "/images/icon-rock.svg"
        : e.currentTarget.classList.contains("paper")
          ? "/images/icon-paper.svg"
          : e.currentTarget.classList.contains("scissors")
            ? "/images/icon-scissors.svg"
            : "",
    );

    player.appendChild(playerChoiceImg);

    game.prepend(player);

    let robot = document.createElement(`div`);
    robot.setAttribute(`class`, `robott`);

    let p = document.createElement(`p`);
    p.setAttribute(`class`, `numberDown`);
    p.append(document.createTextNode(`3`));

    robot.appendChild(p);

    let robotChoiceImg = document.createElement(`img`);

let count = 3;

let x = setInterval(() => {
  count--;
  p.textContent = count;

  if (count === 0) {
    p.textContent = "";
    clearInterval(x);
  }
}, 1000);
  
  setTimeout(()=>{
    robot.setAttribute(`class`, `robot ${fromChoice[num].className}`);
    robotChoiceImg.setAttribute("src", fromChoice[num].imgSrc);
  },3000)


  let result = ``



function GameResult(){
  if(result === `noWiner`){
    resetGameH4.textContent = "NO WINER";
    resetGameResety.classList.remove(`hide`);
  } else if(result === `winer`){
    player.classList.add(`winer`);
    resetGameH4.textContent = "YOU WINER";
    scoreSpane.textContent = +scoreSpane.textContent + 1 
    resetGameResety.classList.remove(`hide`);
  } else if (result === `lose`){
    robotChoiceImg.classList.add(`winerRed`);
    console.log(scoreSpane); 
    resetGameH4.textContent = "YOU LOSE";
    resetGameResety.classList.remove(`hide`);
  }
}



  setTimeout(()=>{
    if (
      (player.classList.contains(`paperPlay`) &&
        robot.classList.contains(`paperPlay`)) ||
      (player.classList.contains(`scissorsPlay`) &&
        robot.classList.contains(`scissorsPlay`)) ||
      (player.classList.contains(`rockPlay`) &&
        robot.classList.contains(`rockPlay`))
    ) {
      result = `noWiner`;
      return GameResult();
    } else if (
      (player.classList.contains(`paperPlay`) &&
        robot.classList.contains(`scissorsPlay`)) ||
      (player.classList.contains(`scissorsPlay`) &&
        robot.classList.contains(`rockPlay`)) ||
      (player.classList.contains(`rockPlay`) &&
        robot.classList.contains(`paperPlay`))
    ) {
      result = `lose`;
      return GameResult();
    } else if (
      (player.classList.contains(`paperPlay`) &&
        robot.classList.contains(`rockPlay`)) ||
      (player.classList.contains(`scissorsPlay`) &&
        robot.classList.contains(`paperPlay`)) ||
      (player.classList.contains(`rockPlay`) &&
        robot.classList.contains(`scissorsPlay`))
    ) {
      result = `winer`;
      return GameResult();
    }
  },3300)



  let divtextOne = document.createElement(`div`);
  divtextOne.appendChild(document.createTextNode(`You Picked`))
  divtextOne.style.marginLeft = `30px`
  let divtextTwo = document.createElement(`div`);
  divtextTwo.appendChild(document.createTextNode(`The House Picked`));

  texe.textContent = "";

  texe.appendChild(divtextOne);
  texe.appendChild(divtextTwo);

  robot.appendChild(robotChoiceImg);

  game.appendChild(robot);

  
});
});


resetGameResety.addEventListener(`click`, ()=>{
  document.querySelectorAll(".playert, .robot").forEach((el) => el.remove());
  texe.textContent = "";
  resetGameH4.textContent = ``;
  resetGameResety.classList.add(`hide`)

  game.style.opacity = 0;
  triangle.style.zIndex = `0`;
  triangle.style.opacity = 1;

  theChoicess.forEach((el) => {
    el.classList.remove("hide");
  });
});

