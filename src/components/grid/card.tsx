import React, { useState } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
const ICard = () => {

    return (
        <Row xs={1} md={4} className="col-12">
            {Array.from({ length: 8 }).map((_, idx) => (
                <Col key={idx} className='mb-3'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="src/assets/img/bean.jpeg" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                            <Card.Link>
                                <a target="_blank" href='https://smartstore.naver.com/faabscoffee/products/7725439293'>
                                    구매 방문하기
                                </a>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default ICard;
