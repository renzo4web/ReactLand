import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';

const Login = ({ onFinish }) => {
	const dispatch = useDispatch();
	const [formLoginVals, handleLoginInputChange] = useForm({
		lEmail: 'test@gmail.com',
		lPassword: '123456',
	});

	const { lEmail, lPassword } = formLoginVals;

	const handleLogin = async e => {
		e.preventDefault();
		dispatch(startLogin(lEmail, lPassword));
	};

	return (
		<Form
			onSubmit={handleLogin}
			className="bg-dark p-3 rounded text-white flex-fill"
		>
			<h2>Login</h2>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="lEmail"
					value={lEmail}
					onChange={handleLoginInputChange}
					onBlur={handleLoginInputChange}
				/>
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					name="lPassword"
					value={lPassword}
					onChange={handleLoginInputChange}
					onBlur={handleLoginInputChange}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default Login;
