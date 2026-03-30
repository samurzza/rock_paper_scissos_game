let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

let theChoicess = document.querySelectorAll(`.theChoice`);

let img = document.querySelectorAll(`.theChoice img`);

let num = Math.floor(Math.random() * 3);

let fromChoice = [
  { className: `paperPlay`, imgSrc: img[0].src },
  { className: `scissorsPlay`, imgSrc: img[1].src },
  { className: `rockPlay`, imgSrc: img[2].src }
];

let game = document.querySelector(`.game`);
let texe = document.querySelector(`.texe`);

theChoicess.forEach((choiceEl) => {
  choiceEl.addEventListener("click", (e) => {
    // اخفاء باقي العناصر
    theChoicess.forEach((el) => {
      el.classList.add("hide");

    });
    // تكبير وتحريك العنصر المختار
    game.style.opacity = 1;

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

    game.appendChild(player);

    let robot = document.createElement(`div`);
    robot.setAttribute(`class`, `robott`);

    let p = document.createElement(`p`);
    p.setAttribute(`class`, `numberDown`);
    p.append(document.createTextNode(`3`));

    robot.appendChild(p);

    let robotChoiceImg = document.createElement(`img`);

  let x =   setInterval( ()=>{
    p.textContent = p.textContent - 1;
    if(+p.textContent === 0){
      p.textContent = ``;
      clearInterval(x);
    }
  },1000)
  
  setTimeout(()=>{
    robot.setAttribute(`class`, `robot ${fromChoice[num].className}`);
    robotChoiceImg.setAttribute("src", fromChoice[num].imgSrc);
  },3000)

  let divtextOne = document.createElement(`div`);
  divtextOne.appendChild(document.createTextNode(`You Picked`))
  divtextOne.style.marginLeft = `30px`
  let divtextTwo = document.createElement(`div`);
  divtextTwo.appendChild(document.createTextNode(`The House Picked`));

  texe.appendChild(divtextOne);
  texe.appendChild(divtextTwo);

  robot.appendChild(robotChoiceImg);

  game.appendChild(robot);

  });
});
