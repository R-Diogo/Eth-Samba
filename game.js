var n;

document.getElementById("myButton").addEventListener("click",function(){
    n= document.getElementById("n_value").value;
    game(n,ans);
})

document.getElementById("n_value").addEventListener("keypress",function(event){
    if(event.key===("Enter")){
        n= document.getElementById("n_value").value;
        game(n,ans);
    }
})

let ans = Math.floor(Math.random() * 100) + 1;
let i = 0, score = 10;


function game(n,ans){
    console.log(ans)
    console.log(n)
    var output = document.getElementById("output");
    if (n != ans) {
      if (n > ans) {
        output.textContent = "DOWN";
      }
      else {
        output.textContent = "UP";
      }
      i++;
    }
    else {
    output.textContent = (`Congrats, you guessed the number! Your score was ${(score - i/2).toFixed(1)}\n`);
    }
    }