let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

let theChoicess = document.querySelectorAll(`.theChoice`);

let img = document.querySelectorAll(`.theChoice img`);

let fromChoice = [
  { className: `paperPlay`, imgSrc: img[0].src },
  { className: `scissorsPlay`, imgSrc: img[1].src },
  { className: `rockPlay`, imgSrc: img[2].src },
];

let playerChoice = ``;
let imgChoice = ``;

let roboteChoice = ``;

let game = document.querySelector(`.game`);

theChoicess.forEach((choiceEl) => {
  choiceEl.addEventListener("click", (e) => {
    // اخفاء باقي العناصر
    theChoicess.forEach((el) => {
      el.classList.add("hide");

      if (e.currentTarget.classList[2] === `roce`) {
        return (playerChoice = `rockPlay`);
      } else if (e.currentTarget.classList[2] === `scissors`) {
        return (playerChoice = `scissorsPlay`);
      } else if (e.currentTarget.classList[2] === `paper`) {
        return (playerChoice = `paperPlay`);
      }

      if (e.currentTarget.classList[2] === `rock`) {
        return (imgChoice = fromChoice[2].imgSrc);
      } else if (e.currentTarget.classList[2] === `scissors`) {
        return (imgChoice = fromChoice[1].imgSrc);
      } else if (e.currentTarget.classList[2] === `paper`) {
        return (imgChoice = fromChoice[0].imgSrc);
      }
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

    console.log(playerChoice);
    console.log(img);
  });
});
