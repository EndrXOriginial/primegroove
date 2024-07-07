import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLayout } from '../Components/Nav/NavLayout';
import { Home } from '../Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavLayout />
      <Routes>
          <Route path='/home' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='products' element={<Products />} /> */}
          {/* <Route path='product/:id' element={<Product />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
