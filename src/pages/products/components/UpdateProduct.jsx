import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { ProductContext } from '../../../context/ProductContext';

export const UpdateProduct = () => {
  const path = useNavigate();
  const { editProduct, onEdit } = useContext(ProductContext);
  const [
    id,
    title,
    discription,
    price,
    discount,
    brand,
    category,
    stock,
    thumbnail,
    images,
  ] = editProduct;
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(e.currentTarget);
    if (
      form.checkValidity() === false &&
      data.get('price') &&
      data.get('stock') &&
      data.get('discount') !== Number
    ) {
      e.stopPropagation();
    } else {
      const formData = {
        title: data.get('title'),
        discription: data.get('discription'),
        price: data.get('price'),
        discount: data.get('discount'),
        brand: data.get('brand'),
        category: data.get('category'),
        stock: data.get('stock'),
        thumbnail: data.get('thumbnail'),
        images: data.get('images'),
      };
      onEdit(id, formData);
    }
    setValidated(true);
    path('/products');
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Edit Product</h1>
      <h5>Product ID: {id}</h5>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom01'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            className='border border-dark'
            name='title'
            required
            type='text'
            defaultValue={title}
            placeholder='Enter Product Title'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='6' controlId='validationCustom01'>
          <Form.Label>Discription</Form.Label>
          <Form.Control
            className='border border-dark'
            name='discription'
            required
            type='text'
            defaultValue={discription}
            placeholder='Enter Product Discription'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='3' controlId='validationCustom01'>
          <Form.Label>Brand</Form.Label>
          <Form.Control
            className='border border-dark'
            name='brand'
            required
            type='text'
            defaultValue={brand}
            placeholder='Brand'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='validationCustom01'>
          <Form.Label>Category</Form.Label>
          <Form.Control
            className='border border-dark'
            name='category'
            required
            type='text'
            defaultValue={category}
            placeholder='Enter Product Category'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='validationCustom01'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            className='border border-dark'
            name='price'
            required
            type='number'
            defaultValue={price}
            placeholder='Enter Product Price'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='3' controlId='validationCustom01'>
          <Form.Label>Discount in Percente</Form.Label>
          <Form.Control
            className='border border-dark'
            name='discount'
            type='number'
            defaultValue={discount}
            placeholder='Discount in Percentage %'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className='border border-dark'
            name='stock'
            required
            type='number'
            defaultValue={stock}
            placeholder='Enter The Quantity'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>Product Image</Form.Label>
          <Form.Control
            className='border border-dark'
            name='thumbnail'
            required
            type='url'
            defaultValue={thumbnail}
            placeholder='Enter Product Image'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='validationCustom01'>
          <Form.Label>Gallary Image</Form.Label>
          <Form.Control
            className='border border-dark'
            name='images'
            required
            type='url'
            defaultValue={images}
            placeholder='Enter Product Galary Images'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mb-3 justify-content-center d-flex align-items-center'>
        <Form.Group as={Col} md='6'>
          <div className='d-grid gap-2'>
            <Button
              onClick={(e) => {
                e.preventDefault();
                path('/products');
              }}
              variant='danger'
              size='md'
            >
              Discard
            </Button>{' '}
          </div>
        </Form.Group>
        <Form.Group as={Col} md='6'>
          <div className='d-grid gap-2'>
            <Button variant='primary' size='md' type='submit'>
              Update Product
            </Button>
          </div>
        </Form.Group>
      </Row>
    </Form>
  );
};
