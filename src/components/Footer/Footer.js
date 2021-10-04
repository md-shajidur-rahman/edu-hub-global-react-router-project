import React from 'react';
import { ButtonGroup, Button, Card, Col, Image, Row } from 'react-bootstrap';

const Footer = () => {
    return (
            <div className="bg-secondary">
            <Card className="text-center bg-secondary text-white">
            <Card.Header> <h3>Contact Us</h3> </Card.Header>
            <Card.Body>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6}>
                    <Image src="https://i.ibb.co/cTfx5w7/logo.png" rounded />
                    </Col>
                    <Col xs={12} md={6} className="text-center align-center">
                    <Card.Title>Head Office</Card.Title>
                    <Card.Text>
                    London, UK
                    </Card.Text>
                    <Card.Text>
                    E-mail: info@eduhubglobal.com, Mobile: 07780676857
                    </Card.Text>
                    
                    </Col>
                </Row>
                
            </Card.Body>
            <Card.Footer className="text-white"><small>All rights reserved</small></Card.Footer>
            </Card>
        </div>
        
    );
};

export default Footer;