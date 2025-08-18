import "./App.css";
import GameArea from "./components/GameArea";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <GameArea />
      </div>
    </>
  );
}

export default App;
