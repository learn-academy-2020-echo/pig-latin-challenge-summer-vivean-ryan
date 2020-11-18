import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "echo through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })
      console.log("vowelsArray:", vowelsArray)
      let firstVowel = vowelsArray[0]
      console.log("firstVowel", firstVowel);
      let vowelLocation = currentWord.indexOf(firstVowel)
      console.log("voweLocation", vowelLocation);


      let testerWord = "Apple"
      //let pigLatinWord = () => {
        //Our first IF returns Every word that starts with a "y"
        if (currentWord.charAt(0).toLowerCase() === "y") {
          return `${currentWord.substring(1)}yay`
        // this will return all the words that start a vowel and add "yay"
      }else if(currentWord.charAt(0).toLowerCase() === "q" && currentWord.charAt(1).toLowerCase() === "u"){
          return `${currentWord.substring(2)}quay`
      }else if(currentWord.charAt(1).toLowerCase() === "q" && currentWord.charAt(2).toLowerCase() === "u"){
          return `${currentWord.substring(3)}${currentWord.charAt(0)}quay`
      }else if(vowelLocation === 0){
          return `${currentWord}way`
      }else if(vowelLocation !== 0){
        let firstHalf = currentWord.substring(0, vowelLocation)
        console.log(firstHalf);
        let secondHalf = currentWord.substring(vowelLocation)
        console.log(secondHalf);
          return `${secondHalf}${firstHalf}ay`
      }
//  console.log(pigLatinWord(testerWord));
  //console.log("tester for pigLatinWord:", pigLatinWord(testerWord))


      //three basic situations: words that begin with consonants, words that begin with vowels, words that have qu in the first syllable
      //for words that begin with consonants, move all the consonants before the first vowel to the end of the word, & add -ay
      //- For words beginning with a vowel, add "way" to the end.
      //For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
      //If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
      //"y" is treated like a vowel in appropriate circumstances.
      //if "y" is at the beginning of the word, it is usually a consonant
      //if y is in the word, but a e i o and u are not in the word, y should be treated as a vowel
      // your code here!

      // Remember: console.log is your friend :)


      // ACTION ITEM: update the value being returned to reflect the output of your code
      return currentWord
    })

    //now we need to get the words that start with one or more constants, move those beginning constants to the end of the word and add a "ay"
        //  }
          /* else{
            for(i=0, i<currentWord.length, i++)  {
              ["a", "i", "o", "u", "e"].indexOf(currentWord[i]) > -1
            var firstCons = currentWord.slice(0,i)
            var middleOfWord = currentWord.slice(i, currentWord.length)
           return `${middleOfWord}${firstCons}ay`
        */
    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
  }


  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value })
  }

  render() {
    // inside the return is all our JSX tags
    return (
      <React.Fragment>
        <h1>Pig Latin Translator</h1>
        <img
          src="https://pngimg.com/uploads/pig/pig_PNG2191.png"
          alt="pig with butcher cut names in pig latin"
          id="butcherPig"
        />
        <div id="box">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            id="inputPhrase"
            onChange={ this.handleInput }
            value={ this.state.phrase }
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={ this.setUpPreventDefault }>Submit</button>
          <button onClick={ this.restartGame }>Clear</button>
        </div>
        <p>{ this.state.phraseTranslated }</p>
        <footer> By Vivean Ryan Summer </footer>
      </React.Fragment>
    )
  }
}

export default App
