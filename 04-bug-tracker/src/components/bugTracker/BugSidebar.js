import React from 'react';
import { AiFillBug, AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteBug } from '../../actions/bugs';

const BugSidebar = ({ title, status, severity, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteBug(id)).then((none) =>
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                );
            }
        });
    };

    return (
        <div key={id} className='sidebar__bug-card'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to={`/bug/${id}`}>
                    <h4>
                        <AiFillBug /> {title}
                    </h4>
                </Link>
                <button
                    style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                    }}
                    onClick={handleDelete}
                >
                    <AiFillDelete color='red' size={20} />
                </button>
            </div>
            <p>Status: {status}</p>
            <p>Severity: {severity}</p>
        </div>
    );
};

export default BugSidebar;
