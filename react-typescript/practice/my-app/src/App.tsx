import "./App.css";
import TypingProps from "./components/TypingProps";
import Hobbies from "./components/ObjectProps";
import ArrayProps from "./components/ArrayProps";

function App() {
  return (
    <div className="App">
      <TypingProps name="hossein" age={21} job={true} />
      <Hobbies myHobbies={{ film: "friends", videoGame: "lifeAfter" }} />
      <ArrayProps favoriteFood={["pizza", "kebab", "pasta"]} />
    </div>
  );
}

export default App;
