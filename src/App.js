import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import About from "./pages/About.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
