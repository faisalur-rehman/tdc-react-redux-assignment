import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalData from "./components/GlobalData/GlobalData";
import CountriesData from "./components/CountriesData/CountriesData";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<GlobalData />} />
            
          <Route exact path="/countries-data" element={<CountriesData />} />
            
        </Routes>
      </Router>
      {/* <GlobalData /> */}
    </div>
  );
}

export default App;
