let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

let theChoicess = document.querySelectorAll(`.theChoice`);

let img = document.querySelectorAll(`.theChoice img`);


theChoicess.forEach((choiceEl) => {
  choiceEl.addEventListener("click", (e) => {
    // اخفاء باقي العناصر
    theChoicess.forEach((el) => {
      if (el !== e.currentTarget) {
        el.classList.add("hide");
      }
    });

    // تكبير وتحريك العنصر المختار
    e.currentTarget.classList.add("selected");
  });
});