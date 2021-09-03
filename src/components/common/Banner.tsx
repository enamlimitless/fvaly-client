import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
import banner3 from 'assets/images/banner3.jpg';
import banner4 from 'assets/images/banner4.jpg';
import banner5 from 'assets/images/banner5.jpg';
import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { MdKeyboardArrowRight } from 'react-icons/md';

const banner = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item>
                Desktop
                <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Laptop
                <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Mens Watch <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Microwave Oven
                <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Motor Bike
                <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Refrigerator <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Smart Tv & Android Tv <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Speaker <MdKeyboardArrowRight />
              </ListGroup.Item>
              <ListGroup.Item>
                Air Conditioner <MdKeyboardArrowRight />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className="mt-3" lg={9}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner4}
                  alt="Fourth slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner5}
                  alt="Fifth slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default banner;
