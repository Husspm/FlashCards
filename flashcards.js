var inquirer = require("inquirer");
inquirer.prompt([{
    type: "list",
    message: "Would you like a Flashcard or a Cloze Statement?",
    choices: ["BasicCard", "ClozeCard"],
    name: "choice"
}]).then(function(answer) {
    if (answer.choice === "BasicCard") {
        basicCard();
    } else {
        clozeCard();
    }
});

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}
var firstPresident = new BasicCard("Who was the first president of the United States", "George Washington");
var basicCard = function() {
    console.log("Question: " + firstPresident.front);
    inquirer.prompt([{
        type: "input",
        message: "Type in answer",
        name: "reply"
    }]).then(function(answer) {
        if (answer.reply === firstPresident.back) {
            console.log("Correct!");
        } else {
            console.log("Study Harder!");
        }
        console.log(firstPresident.back + firstPresident.front.replace("Who", ""));
    });
};

function ClozeCard(text, cloze, answer) {
    this.text = text;
    this.cloze = cloze;
    this.answer = answer;
}
var firstPresidentCloze = new ClozeCard(" was the First President of the United States.", "...", "George Washington");
var clozeCard = function() {
    console.log(firstPresidentCloze.cloze + firstPresidentCloze.text);
    inquirer.prompt([{
        type: "input",
        message: "Type in answer",
        name: "reply"
    }]).then(function(answer) {
        if (answer.reply === firstPresidentCloze.answer) {
            console.log("Good Job");
        } else {
            console.log("Study Harder!");
        }
        console.log(firstPresidentCloze.cloze.replace(firstPresidentCloze.cloze, firstPresidentCloze.answer) + firstPresidentCloze.text);
    });
};