import React from 'react';
import Login from './Login';
import Register from './Register';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginScreen = () => {
	const onFinish = values => {
		console.log('Received values of form: ', values);
	};
	return (
		<Container className="my-auto">
			<Row
				className="my-auto bg-primary text-white p-5 rounded"
				as="main"
			>
				<Col sm>
					<Login onFinish={onFinish} />
				</Col>
				<Col sm>
					<Register onFinish={onFinish} />
				</Col>
			</Row>
		</Container>
	);
};

export default LoginScreen;
