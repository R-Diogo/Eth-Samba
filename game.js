let texto = document.querySelector("#insert_n")
let guess = document.querySelector("#guess")


guess.onclick=game()

texto.addEventListener("keypress", function(event) {
    if (event.key==="Enter"){
        game()
    }
})

function game(){

let ans = Math.floor(Math.random() * 100) + 1;
let n;
let i = 0, score = 10;
n = parseInt(prompt());
console.log("vlw dano")
if (n !== ans) {
  if (n > ans) {
    console.log("DOWN");
  }
  else {
    console.log("UP");
  }
  n = parseInt(prompt());
  i++;
}
else {
	
console.log(`Congrats, you guessed the number\nYour score was ${(score - i / 2).toFixed(1)}\n`);
}
}