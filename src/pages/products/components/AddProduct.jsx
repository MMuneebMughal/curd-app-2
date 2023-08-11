import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { ProductContext } from '../../../context/ProductContext';

export const AddProduct = () => {
  const path = useNavigate();
  const { onAdd } = useContext(ProductContext);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    if (
      form.checkValidity() === false &&
      data.get('price') &&
      data.get('stock') &&
      data.get('discount') !== Number
    ) {
      event.stopPropagation();
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
      onAdd(formData);
    }
    setValidated(true);
    path('/products');
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <Row className='mb-3'>
        <Form.Group as={Col} md='6' controlId='validationCustom01'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            className='border border-dark'
            name='title'
            required
            type='text'
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
            </Button>
          </div>
        </Form.Group>
        <Form.Group as={Col} md='6'>
          <div className='d-grid gap-2'>
            <Button variant='primary' size='md' type='submit'>
              Add Product
            </Button>
          </div>
        </Form.Group>
      </Row>
    </Form>
  );
};
