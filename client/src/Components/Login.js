import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
        <center>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Username:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label><br></br><br></br><br></br>
                <label>
                    Enter password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label><br></br><br></br><br></br>
                <Button as="input" type="submit" value="Submit" />
            </form>
            </center>
    );
}

export default Login;
