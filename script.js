function getComputerChoice()
{
    choice = [`Rock`, `Paper`, `Scissors`];
    array_Index = Math.floor(Math.random() * 3);
    ai = choice[array_Index];
    console.log(ai);
    console.log(array_Index);
}

getComputerChoice();