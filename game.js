var n;

document.getElementById("myButton").addEventListener("click",function(){
    n= document.getElementById("n_value").value;
    game(n,ans);
})

let ans = Math.floor(Math.random() * 100) + 1;
let i = 0, score = 10;

function game(n,ans){
let score=10;
console.log(ans)
console.log(n)
if (n != ans) {
  if (n > ans) {
    console.log("DOWN");
  }
  else {
    console.log("UP");
  }
  i++
}
else {
	
console.log(`Congrats, you guessed the number\nYour score was ${(score - i / 2).toFixed(1)}\n`);
}
}