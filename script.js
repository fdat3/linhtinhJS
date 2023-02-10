//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

//2. RAW TEXT STRINGS

var storyText = "It was 94 fahrenheit outside, so : insertx: went for a walk.When they got to: inserty:, they stared in horror for a few moments, then : insertz:.Bob saw the whole thing, but was not surprised — : insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin",
    "Big Daddy",
    "Father Christmas"]

const insertY = ["the soup kitchen",
    "Disneyland",
    "the White House"]

const insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"]

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(": insertx:", xItem);
    newStory = newStory.replaceAll(": inserty:", yItem);
    newStory = newStory.replaceAll(": insertz:", zItem);


    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
        console.log(name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(21);
        const temperature = Math.round(34);
        const addString = temperature.toString().concat(" centigrade")
        const addStone = weight.toString().concat(" stone");
        newStory = newStory.replace("weighs 300 pounds", addStone)
        newStory = newStory.replaceAll("94 fahrenheit", addString)

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
