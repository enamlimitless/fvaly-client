import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Products = () => {
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1627062598433-016841c1f1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        />
        <Card.Body>
          <Card.Title>
            {' '}
            Kovix SS Acid Proof Bike Disk Lock for Motorbike - Lime -{' '}
          </Card.Title>
          <p>$ 200</p>
          <p>$ 150</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
