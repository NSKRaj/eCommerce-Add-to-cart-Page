import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Card1() {
    return (
        <>
            <Container fluid style={{marginTop:'10px'}}>
                <Row>
                    <Col className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <Card>
                            <Card className="p-5 m-1 bg-success"></Card>
                            <Card.Body>
                                <Card.Title>Green</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <Card>
                        <Card className="p-5 m-1 bg-warning"></Card>
                            <Card.Body>
                                <Card.Title>Yellow</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <Card>
                        <Card className="p-5 m-1 bg-danger"></Card>
                            <Card.Body>
                                <Card.Title>Red</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}