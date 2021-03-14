import React from 'react'
import "./Home.css";
import {Form, Button, Container, Row, Col} from 'react-bootstrap';


const Home = () => {
    return (
        <div>
            <h1 id="title">GatorCom App</h1>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>First User</Form.Label>
                                <Form.Control placeholder="First User"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Choose Language</Form.Label>
                                <Form.Control as="select">
                                    <option>English</option>
                                    <option>French</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Starting Point</Form.Label>
                            <Form.Control placeholder="Starting Point"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Second User</Form.Label>
                                <Form.Control placeholder="Second User"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Choose Language</Form.Label>
                                <Form.Control as="select">
                                    <option>English</option>
                                    <option>French</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>Destination</Form.Label>
                            <Form.Control placeholder="Destination"/>
                        </Col>
                    </Row>
                    <Button type="submit" href="/Chatroom" block>Start Chatroom</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Home;
