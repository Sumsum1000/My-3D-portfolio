import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Architecture } from "./Pages/Architecture";
import { Exhibitions } from "./Pages/Exhibitions";
import { Personal } from "./Pages/Personal";
import { NavBar } from "./Components/NavBar";
import { SharedComponent } from "./Components/SharedComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/Architecture" element={<Architecture />} />
          <Route path="/Exhibitions" element={<Exhibitions />} />
          <Route path="/Personal" element={<Personal />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
