import "./App.css";
import DATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const query = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };
  const queryResult = DATA.filter((val) => {
    if (search == "") {
      return val;
    } else {
      return val.first_name.toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <div className="App">
      <input className="input" placeholder="Search..." onChange={query}></input>
      <div className="output">
        {queryResult.map((val, key) => {
          return (
            <div key={val.id}>
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
