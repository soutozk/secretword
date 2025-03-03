import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="Start">
      <h1>Adivinhe a Palavra</h1>
      <p>Clique no btn para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

export default StartScreen;
