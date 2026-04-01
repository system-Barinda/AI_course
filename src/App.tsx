import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Root Layout wraps all pages */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;