import "./App.css";
import TypingProps from "./components/BasicTypes/TypingProps";
import Hobbies from "./components/BasicTypes/ObjectProps";
import ArrayProps from "./components/BasicTypes/ArrayTypes";
import Status from "./components/AdvanceTypes/UnionTypes";
import Heading from "./components/AdvanceTypes/ChildrenProp";
import Oscacr from "./components/AdvanceTypes/ReactNodeType";
import MyNumber from "./components/AdvanceTypes/OptionalProps";
import Button from "./components/EventProps/Button";
import Input from "./components/EventProps/Input";
import Container from "./components/StyleProps/Container";
import LoggedIn from "./components/state/LoggedIn";

function App() {
  return (
    <div className="App">
      <TypingProps name="hossein" age={21} job={true} />
      <Hobbies myHobbies={{ film: "friends", videoGame: "lifeAfter" }} />
      <ArrayProps favoriteFood={["pizza", "kebab", "pasta"]} />
      <Status status="error" />
      <Heading>hello im an children props</Heading>
      <Oscacr>
        <Heading>hello im an children props</Heading>
      </Oscacr>
      <MyNumber myNumber={9} />
      <Button
        handleClick={(event, id) => console.log("hiiii" + event.target + id)}
      />
      <Input
        handleChange={(event) => {
          console.log(event.target.value);
        }}
        value=""
      />
      <Container
        styles={{
          border: "1px solid black",
          margin: "1rem",
          fontSize: "1.5rem",
        }}
      />
      <LoggedIn />
    </div>
  );
}

export default App;
