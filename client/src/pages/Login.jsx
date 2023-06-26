import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Login() {
    function userDetails() {
        return {
            email: "",
            password: ""
        }
    }

    const [user, setUser] = useState(userDetails())
    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
        } else {
            axios.post("/login", user)
        }

        setValidated(true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }




    return (
        <Container className='my-5'>
            <Row>
                <Col md={{ span: 6, offset: 3 }} >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email"
                                name="email"
                                onChange={handleChange}
                                value={user.email}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Email is required.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password"
                                name="password"
                                onChange={handleChange}
                                value={user.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                        </Form.Group>

                        <div className='d-grid'>
                            <Button variant="outline-dark" type="submit">Submit</Button>
                        </div>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
