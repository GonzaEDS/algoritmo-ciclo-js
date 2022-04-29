const text = prompt(
  "Enter a text to get the number of words, letters, consonants and vowels:"
)

console.log(text)
const cleanText = text.replace(/[.,\/#¡!$%\^&\*;:{}=\-_`~()¿?]/g, "")
const wordsList = cleanText.toLowerCase().split(" ")

console.log(wordsList)

alert(`Your text has ${wordsList.length} words.`)

let totalLetters = 0
let totalVowels = 0
let totalConsonants = 0

for (i = 0; i < wordsList.length; i++) {
  let charList = wordsList[i].split("")
  console.log(charList)
  let vowelsList = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]
  let vowelsCounter = 0
  let consonantsCounter = 0

  for (n = 0; n < charList.length; n++) {
    if (vowelsList.includes(charList[n])) {
      vowelsCounter++
    } else {
      consonantsCounter++
    }
  }
  let consonantsWord = ""
  let vowelsWord = ""

  if (consonantsCounter === 1) {
    consonantsWord = "consonant"
  } else {
    consonantsWord = "consonants"
  }

  if (vowelsCounter === 1) {
    vowelsWord = "vowel"
  } else {
    vowelsWord = "vowels"
  }

  totalLetters += charList.length
  totalVowels += vowelsCounter
  totalConsonants += consonantsCounter

  alert(
    `The word N° ${i + 1} is "${
      wordsList[i][0].toUpperCase() + wordsList[i].slice(1)
    }", it has ${
      charList.length
    } letters. ${vowelsCounter} ${vowelsWord}, and ${consonantsCounter} ${consonantsWord}.`
  )
}

alert(`Total number of letters: ${totalLetters} 
Total number vowels: ${totalVowels}
Total number of consonants: ${totalConsonants}`)
