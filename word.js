var Letter = require("./letter.js")

function Word(wordToGuess){
this.letterArr = wordToGuess.split("").map(function(ltr){
    return new Letter(ltr)
})
this.display = function(){
    var stringToDisplay = "";
    for(var i = 0; i<this.letterArr.length; i++){
        if(this.letterArr[i].isVisable === true){
            stringToDisplay += this.letterArr[i].char
        }else{
            stringToDisplay += " _ "
        }
    }
    console.log(stringToDisplay);
}
}



module.exports = Word;