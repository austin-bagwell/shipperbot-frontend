import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
