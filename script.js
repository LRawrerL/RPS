function getComputerChoice()
{
    choice = [`Rock`, `Paper`, `Scissors`];
    array_Index = Math.floor(Math.random() * 3);
    ai = choice[array_Index];
    return ai;
}

function RPS(playerSelect, computerSelection)
{
    if (playerSelect.toUpperCase() == "ROCK")
    {
        if (computerSelection == "Scissors")
        {
            alert("You win!");
        }
        else if (computerSelection == "Paper")
        {
            alert("You lose!");
        }
        else
        {
            alert("Its a Draw!");
        }
    }
    if (playerSelect.toUpperCase() == "PAPER")
    {
        if (computerSelection == "Rock")
        {
            alert("You win!");
        }
        else if (computerSelection == "Scissors")
        {
            alert("You lose!");
        }
        else
        {
            alert("Its a Draw!");
        }
    }
    if (playerSelect.toUpperCase() == "SCISSORS")
    {
        if (computerSelection == "Paper")
        {
            alert("You win!");
        }
        else if (computerSelection == "Rock")
        {
            alert("You lose!");
        }
        else
        {
            alert("Its a Draw!");
        }
    }
}


function Rounds(num)
{
    for (let i = 0; i < num; i++)
    {
        playerSelect = prompt("Choose between Rock, Paper, or Scissors. ")
        computerSelection = getComputerChoice();
        RPS(playerSelect, computerSelection);   
    }
}

number = Number(prompt(`How many Rounds do you want?`));

Rounds(number)

