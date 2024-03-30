import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate to get the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();

        const object = {
            name,
            password,
        };

        try {
            const response = await axios.post('http://localhost:7000/login', object);
            if (response.data.success) {
                console.log('Login successful');
                // Use 'navigate' to navigate to the specified route
                navigate('/firstPage');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log(error);
        }

        setName('');
        setPassword('');
    };

    return (
        <Container>
             <h4>Login</h4>
            <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  value={name} placeholder="Enter username" onChange={(e) => setName(e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value) }/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
            </Form>
            </Container>
    );
}

export default Login;
