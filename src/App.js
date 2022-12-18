import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ProductsSection from "./components/ProductsSection";

import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className='container'>
          <Slider className='content:cover' />
          <ProductsSection />
        </div>
      </div>
    </>
  );
}

export default App;
