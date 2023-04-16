import PollComponent from "./components/PollComponent";
import ExplainerComponent from "./components/ExplainerComponent";

function App() {
  return (
    <div className="App align-middle">
        <ExplainerComponent className={'mb-3'}></ExplainerComponent>
        <PollComponent name={"asdf"}></PollComponent>
    </div>
  );
}

export default App;
