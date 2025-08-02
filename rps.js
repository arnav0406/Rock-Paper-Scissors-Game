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
function getHumanChoice(){
    let ch=prompt("Choose Rock/Paper/Scissor");
    return ch.toLowerCase();
}
function playRound(humanChoice,computerChoice){
        if(computerChoice==humanChoice)
    {
        return "You both choose "+ humanChoice +" its a draw";
    }
    else if(computerChoice=="rock"&& humanChoice=="paper")
    {
        humanScore++;
        return "You win, Paper beats Rock";
    }
    else if(computerChoice=="paper"&&humanChoice=="scissor")
    {
        humanScore++;
        return "You win, Scissor beats Paper";
    }
    else if(computerChoice=="scissor"&&humanChoice=="rock")
    {
        humanScore++;
        return "You win, Rock beats Scissor";
    }
    else if(computerChoice=="rock"&& humanChoice=="scissor")
    {
        computerScore++;
        return "You lose, Rock beats Scissor";
    }
    else if(computerChoice=="paper"&& humanChoice=="rock")
    {
        computerScore++;
        return "You lose, Paper beats Rock";
    }
    else if(computerChoice=="scissor"&&humanChoice=="paper")
    {
        computerScore++;
        return "You lose, Scissor beats Paper";
    }
}
function playGame(){
    for(let i=1;i<=5;i++)
    {
        console.log("Enter your choice "+i);
        console.log((playRound(getHumanChoice(),getComputerChoice())));
    }
    console.log("Final score of the game after 5 rounds\n Computer's score = "+computerScore+"\n Your score = "+humanScore);
    if(computerScore>humanScore){
        console.log("You lost by "+computerScore+"-"+humanScore+" Don't give up, keep trying one day you'll succeed");
    }
    else if(humanScore>computerScore){
        console.log("You win by "+humanScore+"-"+computerScore+" Nice game, keep it up ");
    }
    else{
        console.log("Its a draw "+computerScore+"-"+humanScore+" That was close !, try again you can do it !");
    }
}
playGame();