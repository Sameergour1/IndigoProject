import { useState } from 'react';
import { Container, Form, FormGroup, Button, Input } from 'reactstrap';
import './login.css'; // Ensure this path is correct

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', { email, password });
    };

    return (
        <Container className="login-container">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="email">Email Address</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </FormGroup>
                <Button type="submit" color="primary">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;
