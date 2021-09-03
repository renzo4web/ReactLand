import React from 'react';
import Button from 'react-bootstrap/Button';
import { RiDeleteBin2Line } from 'react-icons/ri';

const RemoveEventFab = props => {
	return (
		<Button
			{...props}
			className={
				'btn btn-danger rounded p-2 position-fixed bottom-0 start-0 m-4'
			}
		>
			<RiDeleteBin2Line size={45} />
		</Button>
	);
};

export default RemoveEventFab;
