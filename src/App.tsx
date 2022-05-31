import "./App.css";
import LitCardList from "./components/LitCardList";

function App() {
  return (
    <div className="App">
      <div className="flexcol">
        <div>Header Bar</div>
        <div className="flexrow">
          <div>
            <LitCardList
              litItems={[
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "1",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "2",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "3",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "4",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "5",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "6",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "7",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "8",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "9",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "10",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein Buch schreibt",
                  year: 2000,
                  type: "Monographie",
                  itemId: "11",
                },
                {
                  contributors: ["Adam Riese", "Max Mustermann"],
                  title: "Wie man ein zweites Buch schreibt",
                  year: 2001,
                  type: "Monographie",
                  itemId: "12",
                },
              ]}
            />
          </div>
          <div>Center Column</div>
          <div>Right Column</div>
        </div>
      </div>
    </div>
  );
}

export default App;
