import Products from 'pages/Home/Products';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Product = () => {
  return (
    <div className="my-4">
      <Container>
        <h2>Latest Product</h2>
        <Row>
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </Row>
      </Container>
    </div>
  );
};

export default Product;
