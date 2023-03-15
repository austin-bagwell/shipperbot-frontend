import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
