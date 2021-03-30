console.log('Welcome to the famous movie line generator!');

const horrorLine1 = '"Here\'s Johnny!" -The Shining';
const horrorLine2 = '"Hello Clarice." -Silence of the Lambs';
const horrorLine3 = '"Do you like scary movies?" -Scream';
const horrorLine4 = '"I see dead people." -The 6th Sense';
const horrorLine5 = '"What an excellent day for an exorcism." -The Exorcist';

const comedyLine1 = '"You\'re my boy, Blue!" - Old School';
const comedyLine2 = '"Kill the Prime Minister of Malaysia!" - Zoolander';
const comedyLine3 = '"This one time, at band camp..." - American Pie';
const comedyLine4 = '"The dude abides." - The Big Lebowski';
const comedyLine5 = '"O\'Doyle rules!" - Billy Madison';

const dramaLine1 = '"I\'m going to make him an offer he can\'t refuse." - The Godfather';
const dramaLine2 = '"Toto, I\'ve got a feeling we\'re not in Kansas anymore." -The Wizard of Oz';
const dramaLine3 = '"May the Force be with you." - Star Wars';
const dramaLine4 = '"You talking to me?" - Taxi Driver';
const dramaLine5 = '"E.T. phone home." - E.T. The Extra-terrestrial';

const actionLine1 = '"Are you not entertained?" -Gladiator';
const actionLine2 = '"Hasta la vista,baby" -Terminator 2: Judgment Day';
const actionLine3 = '"This is Sparta!" -300';
const actionLine4 = '"I\'m tired of these motherf***ing snakes, on this motherf***ing plane!" - Snakes on a Plane';
const actionLine5 = '"Say hello to my little friend." -Scarface';



const horrorFunc = () => {

    const horrorArray = [ horrorLine1, horrorLine2, horrorLine3, horrorLine4, horrorLine5];
const randHorror = Math.floor(Math.random()*5);
/*for testing purposes
do{
    console.log('hello');
    randHorror = Math.floor(Math.random()*5);
} while(randHorror!==4); */ //for testing purposes

return horrorArray[randHorror];
}

const comedyFunc = () => {

const comedyArray = [comedyLine1,comedyLine2,comedyLine3,comedyLine4,comedyLine5];

const randComedy = Math.floor(Math.random()*5); 
return comedyArray[randComedy];
}

const dramaFunc = () => {

const dramaArray = [dramaLine1,dramaLine2,dramaLine3,dramaLine4,dramaLine5];

const randDrama = Math.floor(Math.random()*5);
return dramaArray[randDrama];
}

const actionFunc = () => {
    const actionArray = [actionLine1,actionLine2,actionLine3,actionLine4,actionLine5];

const randAction = Math.floor(Math.random()*5);
return actionArray[randAction]; 
}

const mysteryFunc = () => {
    const mysteryArray = [horrorLine1,horrorLine2,horrorLine3,horrorLine4,horrorLine5,
        comedyLine1,comedyLine2,comedyLine3,comedyLine4,comedyLine5,
        dramaLine1,dramaLine2,dramaLine3,dramaLine4,dramaLine5,
        actionLine1,actionLine2,actionLine3,actionLine4,actionLine5];

    const randMystery = Math.floor(Math.random()*20);
    return mysteryArray[randMystery];
}

const genre = 'Mystery'.toLowerCase();
console.log(genre);

switch(genre){
    case 'horror': 
        console.log(`You chose: ${genre}! Here is a random ${genre} line:`);
        console.log(horrorFunc());
        break;
    case 'comedy': 
        console.log(`You chose: ${genre}! Here is a random ${genre} line:`);
        console.log(comedyFunc());
        break;
    case 'drama': 
        console.log(`You chose: ${genre}! Here is a random ${genre} line:`);
        console.log(dramaFunc());
        break;
    case 'action': 
        console.log(`You chose: ${genre}! Here is a random ${genre} line:`);
        console.log(actionFunc());
        break;
    case 'mystery':
        console.log(`You chose: ${genre}! Here is a random ${genre} line:`);
        console.log(mysteryFunc());
        break;
    default:
        console.log('Invalid choice. Please selecy horror, comedy, drama, action, or mystery');
}

