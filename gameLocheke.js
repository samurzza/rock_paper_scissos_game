let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

let theChoicess = document.querySelectorAll(`.theChoice`);

let img = document.querySelectorAll(`.theChoice img`);

let fromRobotChoice = [
  { className: `paperPlay`, imgSrc: img[0].src },
  { className: `scissorsPlay`, imgSrc: img[1].src },
  { className: `rockPlay`, imgSrc: img[2].src },
];

let playerChoice = ``;
let roboteChoice = ``;

let game = document.querySelector(`.game`);



theChoicess.forEach((choiceEl) => {
  choiceEl.addEventListener("click", (e) => {
    // اخفاء باقي العناصر
    theChoicess.forEach((el) => {
      if (el !== e.currentTarget) {
        el.classList.add("hide");
      }
    });

    // تكبير وتحريك العنصر المختار
    e.currentTarget.classList.add("hide");

    game.style.opacity = 1;

    console.log(img)
  });
});