const container = document.getElementById('container');


for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("BuzzFizz")
        const box = `<div class="box box-bf">BuzzFizz</div>`;
        container.innerHTML += box
    } else if ((i % 3) === 0) {
        console.log("Fizz")
        const box = `<div class="box box-f">Fizz</div>`;
        container.innerHTML += box
    } else if ((i % 5) === 0) {
        console.log("Buzz")
        const box = `<div class="box box-b">Buzz</div>`;
        container.innerHTML += box
    } else {
        console.log(i)
        const box = `<div class="box box-number">${i}</div>`;
        container.innerHTML += box
    }
};