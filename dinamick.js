let Rules = document.querySelector(".Roules");
let body = document.querySelector(`body`)

let span = document.querySelector(`.rulesTitle span`);
let scrinRols = document.querySelector(`.scrinRols`);

Rules.addEventListener("click", () => {
  scrinRols.style.display = `block`
});

  scrinRols.addEventListener(`click`, () => {
    scrinRols.style.display = `none`;
  });
