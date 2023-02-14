let monsterHealth = document.getElementsByClassName("monsterHealth");
let yourHealth = document.getElementsByClassName("yourHealth");
let BattleLog = document.getElementsByClassName("BattleLog");
let GameOver = document.getElementsByClassName("GameOver");
let message = document.getElementsByClassName("message");
let outputs = document.getElementsByClassName("outputs");
let buttons = document.getElementsByClassName("buttons");






function Attack(){
  function decreaseHealth(yourHealth, monsterHealth, minHealth, maxHealth) {
         const yourDecrease = Math.floor(Math.random() * (maxHealth - minHealth + 1) + minHealth);
        const monsterDecrease = Math.floor(Math.random() * (maxHealth - minHealth + 1) + minHealth);
      
          yourHealth -= yourHealth;
          monsterHealth -= monsterDecrease;
      
         return [yourHealth, monsterHealth];
      }
 }

 let randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  
 function SpecialAttack(){

 }

 function Heal(){

 }

 function GiveUp(){
    yourHeath = 0;
    gameOver("You Give Up!");
}