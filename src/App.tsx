import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";
import Product from "./pages/Product"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Root Layout wraps all pages */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;