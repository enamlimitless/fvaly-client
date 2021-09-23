import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1628191081698-44f573462a03?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        />
        <Card.Body>
          <Card.Title>
            <Link to="">
              {' '}
              Kovix SS Acid Proof Bike Disk Lock for Motorbike - Lime -{' '}
            </Link>
          </Card.Title>
          <p>$ 200</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
