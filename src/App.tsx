import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminProductList from './pages/AdminProductList';

import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ProductDetailPage from './pages/ProductDetailPage';
import Layout from './components/elements/Layout';
import AdminLayout from './components/elements/AdminLayout';

import { configureAxios } from './config/axios'
import 'react-toastify/dist/ReactToastify.css';

configureAxios()

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin/products" element={<AdminProductList />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
