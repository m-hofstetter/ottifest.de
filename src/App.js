import PollComponent from "./components/PollComponent";
import ExplainerComponent from "./components/ExplainerComponent";
import CountdownComponent from "./components/CountdownComponent";

function App() {
  return (
    <div className="App align-middle">
        <div className={'d-flex justify-content-center'}>
            <CountdownComponent targetDate={new Date('2023-07-22')}/>
        </div>
        <ExplainerComponent/>
        <PollComponent name={"asdf"}></PollComponent>
    </div>
  );
}

export default App;
