import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import ProductDetail from './Containers/ProductDetail';
import ProductListing from './Containers/ProductListing';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<ProductListing />} />
      <Route path='/product/:productId' element={<ProductDetail/>} />
      <Route>404 Not Found</Route>
    </Routes>
    </div>
  );
}

export default App;
