import "./App.css";
import ItemOverview from "./components/ItemOverview";
import LitCardList from "./components/LitCardList";
import { itemOverviewContent, litItems } from "./mockData";

function App() {
  return (
    <div className="App">
      <div className="flexcol">
        <div>Header Bar</div>
        <div className="flexrow">
          <div>
            <LitCardList litItems={litItems} />
          </div>
          <div>
            <ItemOverview {...itemOverviewContent} />
          </div>
          <div>Right Column</div>
        </div>
      </div>
    </div>
  );
}

export default App;
