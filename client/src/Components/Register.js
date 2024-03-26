import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom';

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
    <center>
    <div>
      <form onSubmit={handleChange}>
        <label>
          Enter Username:
          <input
            type="text"
            value={name}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </label><br></br><br></br><br></br>
        <label>
          Enter Email:
          <input
            type="text"
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label><br></br><br></br><br></br>
        <label>
          Enter password:
          <input
            type="password"
            value={password}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label><br></br><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
      <label>Already a user?</label>
      <Link to="/login">Login</Link>
    </div>
    </center>
  );
}

export default Register;
