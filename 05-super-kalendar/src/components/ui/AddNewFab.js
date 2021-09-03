import React from 'react';
import Button from "react-bootstrap/Button";
import {BsPlusCircleFill} from "react-icons/bs";

const AddNewFab = (props) => {
    return (
        <Button  {...props} className={'rounded-circle p-2 position-fixed bottom-0 end-0 m-xl-4'}>
            <BsPlusCircleFill size={50}/>
        </Button>
    )
}

export default AddNewFab;
