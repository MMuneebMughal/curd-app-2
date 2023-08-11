import axios from 'axios';
import { API_PRODUCTS, API_AUTH } from '../config/env';

//--------------------Products-----------------//
/*
 Get All Products
*/
export const getProductData = async () => {
  const res = await axios.get(API_PRODUCTS);
  return res.data;
};

/*
Add Products
*/
export const addProduct = async (formData) => {
  await axios.post(`${API_PRODUCTS}`, formData).then((res) => {
    return res;
  });
};

/*
Single Products
*/
export const singleProduct = async (id) => {
  await axios.get(`${API_PRODUCTS}/${id}`);
};
/*
Delete Products
*/
export const deleteProduct = async (id) => {
  await axios.delete(`${API_PRODUCTS}/${id}`);
};

/*
Update Products
*/
export const updateProduct = async (id, data) => {
  await axios.put(`${API_PRODUCTS}/${id}`, data);
};

//--------------------USERS-----------------//
/*
 Get All User Data
*/
export const getAllUser = async () => {
  const res = await axios.get(API_AUTH);
  return res.data;
};

/*
add user
*/
export const addUser = async (formData) => {
  await axios.post(`${API_AUTH}`, formData);
};
