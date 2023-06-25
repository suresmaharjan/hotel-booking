import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import axios from "axios";
function Register() {
    function userDetails() {
        return {
            firstname: "",
            lastname: "",
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
            axios.post("/register", user).then(res => console.log(res.data))
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
                            <Form.Label>Firstname</Form.Label>
                            <Form.Control type="text" placeholder="firstname"
                                name="firstname"
                                onChange={handleChange}
                                value={user.firstname}
                                minLength={5}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Firstname is required.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text" placeholder="lastname"
                                name="lastname"
                                onChange={handleChange}
                                value={user.lastname}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Lastname is required.</Form.Control.Feedback>
                        </Form.Group>

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
                        <Form.Group className="mb-3" >
                            <Form.Label>Re Password</Form.Label>
                            <Form.Control type="password" placeholder="re password"
                                name="rePassword"
                                pattern={user.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">Password doesn't match.</Form.Control.Feedback>
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

export default Register;