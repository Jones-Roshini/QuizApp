import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const value = {
        name,
        email,
        password,
      };
      
      await axios.post('http://localhost:7000/register', value);
      console.log('User information saved successfully');
    } catch (error) {
      console.log(error);
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
 
    <Container>
      <h4>Registration</h4>
      <Form onSubmit={handleChange} className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"  value={name} placeholder="Enter username" onChange={(e) => setName(e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text"  value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value) }/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <div className='mt-3'>Already a user?  
      <Link to="/login">Login</Link></div>
      
    </Container>

  );
}

export default Register;
