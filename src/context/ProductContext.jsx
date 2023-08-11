import PropTypes from 'prop-types';
import { useState, useEffect, createContext } from 'react';
import {
  addProduct,
  deleteProduct,
  getProductData,
  updateProduct,
} from '../api';

export const ProductContext = createContext({
  allProducts: [],
  editProduct: [],
  handleUpdate: () => {},
  onDelete: () => {},
  onAdd: () => {},
  onEdit: () => {},
});

export const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [editProduct, setEditProduct] = useState([]);

  //All Product
  useEffect(() => {
    async function fetchProducts() {
      //API Call
      const res = await getProductData();
      setAllProducts(res);
    }
    fetchProducts();
  }, []);

  //Add New Product
  const onAdd = async (data) => {
    try {
      //API Call
      await addProduct(data);
      setAllProducts(allProducts.concat(data));
      alert('Product Has Been Added Successfully');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };
  // Get Data For Edit Product
  const handleUpdate = (...data) => {
    setEditProduct(data);
  };

  // Update Product
  const onEdit = async (id, newData) => {
    const productIndex = allProducts.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      try {
        // API Call
        await updateProduct(id, newData);

        // Create a new array with the updated product
        const updatedProducts = [...allProducts];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          ...newData,
        };
        setAllProducts(updatedProducts);
        alert('Product Has Been Updated');
      } catch (error) {
        console.error('Error updating product:', error);
      }
    } else {
      alert('Product not found');
    }
  };

  //Delete Product
  const onDelete = async (id) => {
    try {
      const newData = allProducts.filter((item) => item.id !== id);
      setAllProducts(newData);
      //API Call
      await deleteProduct(id);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        editProduct,
        handleUpdate,
        onDelete,
        onAdd,
        onEdit,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
