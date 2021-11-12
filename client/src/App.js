import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Landing from "./components/Landing/Landing";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <Landing />
    </div>
  );
}

export default App;
