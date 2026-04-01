import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";


function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;