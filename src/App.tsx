import "./App.css";
import MainContentPane from "./components/MainContentPane";

function App() {
  return (
    <div className="App">
      <div className="flexcol">
        <div>Header Bar</div>
        <MainContentPane />
      </div>
    </div>
  );
}

export default App;
