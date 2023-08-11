import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Table } from 'react-bootstrap';
import { productTableHeadings } from '../components';
import { ProductContext } from '../../context/ProductContext';

export const Products = () => {
  const { allProducts, onDelete, handleUpdate } = useContext(ProductContext);

  const navigate = useNavigate();
  const style = { fontSize: '14px', fontWeight: '500' };
  const styleHead = { fontSize: '14px', fontWeight: '700' };
  return (
    <div className='container-fluid overflow-hidden'>
      <h1 className='my-5'>All Products</h1>
      <Table>
        <thead>
          <tr>
            {productTableHeadings.map((item, index) => (
              <th style={styleHead} key={index}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allProducts.map((data, index) => {
            if (allProducts.includes(data.id)) {
              return null;
            }
            return (
              <tr key={index}>
                <td style={style}>{data.id}</td>
                <td style={style}>{data.title.slice(0, 20)}...</td>
                <td style={style}>{data.discription.slice(0, 35)}...</td>
                <td style={style}>{data.price} $</td>
                <td style={style}>{data.discount} %</td>
                <td style={style}>{data.brand}</td>
                <td style={style}>{data.category}</td>
                <td style={style}>{data.stock}</td>
                <td style={style}>{data.thumbnail ? 'Yes' : 'no image'}</td>
                <td>{data.images ? 'Yes' : 'no image'}</td>
                <td>
                  <i className='bi bi-x'></i>
                </td>
                <td>
                  <Button
                    variant='primary'
                    size='sm'
                    style={{ marginRight: '0.5rem' }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleUpdate(
                        data.id,
                        data.title,
                        data.discription,
                        data.price,
                        data.discount,
                        data.brand,
                        data.category,
                        data.stock,
                        data.thumbnail,
                        data.images
                      );
                      navigate('/products/edit-product');
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => onDelete(data.id)}
                    size='sm'
                    variant='danger'
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Row>
        <Button
          variant='light'
          size='sm'
          style={{ marginRight: '1rem' }}
          onClick={(e) => {
            e.preventDefault;
            navigate('/products/add-new-product');
          }}
        >
          Add Product
        </Button>
      </Row>
    </div>
  );
};
