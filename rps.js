let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let i=Math.random();
    let num=parseFloat(i.toFixed(1));
    if(num==0.1 || num==0.4 || num==0.7)
    {
        return "rock";
    }
    else if(num==0.2 || num==0.5 || num==0.8)
    {
        return "paper";
    }
    else 
    {
        return "scissor";
    }
}
function playRound(humanChoice,computerChoice){
        if(computerChoice==humanChoice)
    {
        return res.textContent="You both choose "+ humanChoice +" its a draw"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="rock"&& humanChoice=="paper")
    {
        humanScore++;
        return res.textContent="You win, Paper beats Rock"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="paper"&&humanChoice=="scissor")
    {
        humanScore++;
        return res.textContent="You win, Scissor beats Paper"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="scissor"&&humanChoice=="rock")
    {
        humanScore++;
        return res.textContent="You win, Rock beats Scissor"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="rock"&& humanChoice=="scissor")
    {
        computerScore++;
        return res.textContent="You lose, Rock beats Scissor"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="paper"&& humanChoice=="rock")
    {
        computerScore++;
        return res.textContent="You lose, Paper beats Rock"+"You "+humanScore+"-"+computerScore+" Bot";
    }
    else if(computerChoice=="scissor"&&humanChoice=="paper")
    {
        computerScore++;
        return res.textContent="You lose, Scissor beats Paper"+"You "+humanScore+"-"+computerScore+" Bot";
    }
}
let pap= document.querySelector('.paper');
let roc=document.querySelector('.rock');
let sci=document.querySelector('.scissor');
let res=document.querySelector('.result');

pap.addEventListener('click',function(){
    playRound("paper",getComputerChoice());
    checkWinner();
})
roc.addEventListener('click',function(){
    playRound("rock",getComputerChoice());
    checkWinner();
})
sci.addEventListener('click',function(){
    playRound("scissor",getComputerChoice());
    checkWinner();
})
function checkWinner(){
    if(computerScore===5){
        res.textContent="You lose "+computerScore+"-"+humanScore+" You can try again, who knows if u can win";
        disableButtons();
    }
    else if(humanScore===5){
        res.textContent="You win by "+humanScore+"-"+computerScore+" Nice game, keep it up ";
        disableButtons();
    }
}
function disableButtons() {
    pap.disabled = true;
    roc.disabled = true;
    sci.disabled = true;
}