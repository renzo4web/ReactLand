import React from 'react';
import Login from './Login';
import Register from './Register';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginScreen = () => {
	return (
		<Container className="my-auto">
			<Row
				className="my-auto bg-primary text-white p-5 rounded"
				as="main"
			>
				<Col sm>
					<Login />
				</Col>
				<Col sm>
					<Register />
				</Col>
			</Row>
		</Container>
	);
};

export default LoginScreen;
