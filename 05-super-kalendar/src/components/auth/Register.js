import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import toast from 'react-hot-toast';
import { startRegister } from '../../actions/auth';

const Register = ({ onFinish }) => {
	const dispatch = useDispatch();

	const [formRegisterVals, handleRegisterInputChange] = useForm({
		rName: '',
		rEmail: '',
		rPassword1: '',
		rPassword2: '',
	});

	const { rName, rEmail, rPassword1, rPassword2 } = formRegisterVals;

	const handleRegister = async e => {
		e.preventDefault();

		if (rPassword1 !== rPassword2) {
			toast.error('password confirmation does not match');
			return;
		}

		dispatch(startRegister(rName, rEmail, rPassword1));
	};

	return (
		<Form
			onSubmit={handleRegister}
			className="bg-white p-3 rounded text-dark"
		>
			<h2>Register</h2>
			<Form.Group className="mb-3" controlId="formBasicText">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter your name"
					name="rName"
					value={rName}
					onChange={handleRegisterInputChange}
					onBlur={handleRegisterInputChange}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					name="rEmail"
					value={rEmail}
					onChange={handleRegisterInputChange}
					onBlur={handleRegisterInputChange}
				/>
				<Form.Text className="text-muted">
					Use a temporary email if necessary
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					name="rPassword1"
					value={rPassword1}
					onChange={handleRegisterInputChange}
					onBlur={handleRegisterInputChange}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control
					type="password"
					placeholder="Password"
					name="rPassword2"
					value={rPassword2}
					onChange={handleRegisterInputChange}
					onBlur={handleRegisterInputChange}
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default Register;
