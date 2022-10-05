import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Car from "./views/Car";
import Finished from "./views/Finished";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/finished" element={<Finished />} />
      </Routes>
    </Router>
  );
}

export default App;
