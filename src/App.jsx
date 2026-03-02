import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import "./animations.css";
import NotFound from "./404";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
