let choice = document.querySelector(`.choice`);

let paper = document.querySelector(`.paper`);

let scissors = document.querySelector(`.scissors`);

let rock = document.querySelector(`.rock`);

function game(){
    choice.innerHTML = `
    <div>hello</ div>
    `
}

paper.addEventListener(`click`,()=>{
    game();
})