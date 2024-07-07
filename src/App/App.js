import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavLayout } from '../Components/Nav/NavLayout';
import { Home } from '../Pages/Home';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<NavLayout />}>
          <Route index element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='products' element={<Products />} /> */}
          {/* <Route path='product/:id' element={<Product />} /> */}
          {/* <Route path='*' element={<ErrorPage />} /> */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
