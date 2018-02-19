var inquirer = require("inquirer")

var Word = require("./word.js")

function Game(){
this.startGame = function(){
    this.guessesRemaining = 10
    this.selectWord()
}
this.selectWord = function(){
    // have an array of words and select one word. change testing to whatever random word.
    var selectedWord = "testing" 
    this.currentWord = new Word(selectedWord)
    this.currentWord.display()
    this.userGuess()
}
this.userGuess
}
var test = new Game()
test.startGame()
console.log(test.currentWord);
