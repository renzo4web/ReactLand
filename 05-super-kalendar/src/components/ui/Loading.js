import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Loading = () => {
	return (
		<Container className="d-flex justify-content-center align-items-center">
			<Image
				fluid
				src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/calendar_1f4c5.png"
			/>
		</Container>
	);
};

export default Loading;
