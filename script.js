function getComputerChoice()
{
    choice = [`Rock`, `Paper`, `Scissors`];
    array_Index = Math.floor(Math.random() * 3);
    ai = choice[array_Index];
    console.log(ai);
    console.log(array_Index);
    return ai;
}

function RPS(playerSelect, computerSelection)
{
    if (playerSelect == "Rock")
    {
        if (computerSelection == "Scissors")
        {
            console.log("You win!");
        }
        else if (computerSelection == "Paper")
        {
            console.log("You lose!");
        }
        else
        {
            console.log("Its a Draw!");
        }
    }
    if (playerSelect == "Paper")
    {
        if (computerSelection == "Rock")
        {
            console.log("You win!");
        }
        else if (computerSelection == "Scissors")
        {
            console.log("You lose!");
        }
        else
        {
            console.log("Its a Draw!");
        }
    }
    if (playerSelect == "Scissors")
    {
        if (computerSelection == "Paper")
        {
            console.log("You win!");
        }
        else if (computerSelection == "Rock")
        {
            console.log("You lose!");
        }
        else
        {
            console.log("Its a Draw!");
        }
    }
}

computerSelection = getComputerChoice();
playerSelect = "Scissors";
RPS(playerSelect, computerSelection);