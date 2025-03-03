import "./App.css";
import { useCallBack, useEffect, useState } from "react";
import { wordsList } from "./data/words";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gamestage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [picketWord, setPicketWord] = useState("");
  const [picketCategory, setPicketCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //pick a radom category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // console.log(category);
    //pick a radom word

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    // console.log(word);

    return { word, category };
  };

  //start
  const startGame = () => {
    //pickword and pickcategory
    const { word, category } = pickWordAndCategory();

    //create an array of letter
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // console.log(wordLetters);
    // console.log(word, category);

    //fill states
    setPicketWord(word);
    setPicketCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gamestage === "start" && <StartScreen startGame={startGame} />}
      {gamestage === "game" && <Game verifyLetter={verifyLetter} />}
      {gamestage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
