
import React from "react";

const api = {
  key: "0c1fdc1979efc1a7313bfc905e40e625",
  base: "https://api.openweathermap.org/data/2.5/"

}


function App() {
  return (
    <div className="app warm">
    <main>
      <div className="search-box">
        <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        ></input>
      </div>
    </main>
    </div>
  );
}

export default App;
