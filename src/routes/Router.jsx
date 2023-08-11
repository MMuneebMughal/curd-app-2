import { Routes, Route } from 'react-router-dom';
//Layout
import { FrontEndLayout } from '../layout/FrontEndLayout';
//Pages
import { Dashboard } from '../pages/Dashboard';
import { Products } from '../pages/products/Products';
import { AddProduct } from '../pages/products/components/AddProduct';
import { Users } from '../pages/Users';
import { Settings } from '../pages/Settings';
import { UpdateProduct } from '../pages/products/components/UpdateProduct';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontEndLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='products' element={<Products />} />
        <Route path='products/add-new-product' element={<AddProduct />} />
        <Route path='products/edit-product' element={<UpdateProduct />} />
        <Route path='user' element={<Users />} />
        <Route path='setting' element={<Settings />} />
      </Route>
    </Routes>
  );
};
