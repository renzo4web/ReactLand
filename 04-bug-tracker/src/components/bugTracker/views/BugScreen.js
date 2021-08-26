import React, { useState, useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner';
import { GrAlert } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import SelectStatus from '../../ui/SelectStatus';
import SelectSeverity from '../../ui/SelectSeverity';
import { startEditBug } from '../../../actions/bugs';

const initialForm = {
    title: '',
    description: '',
    status: '',
    severity: '',
};

const BugScreen = () => {
    let { bugId } = useParams();
    const history = useHistory();
    const { bugs } = useSelector((state) => state.bugs);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [activeBug, setActiveBug] = useState({});
    const [input, setInput] = useState(initialForm);
    const inputRef = useRef();

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(activeBug.bugId);
        dispatch(startEditBug({ ...activeBug, ...input }));
    };

    useEffect(() => {
        let timer;
        // wait for load the bugs
        if (bugs.length > 0) {
            setActiveBug(bugs.find((bug) => bug.bugId === bugId));
            setInput({ ...activeBug });
            setLoading(false);
        }

        if (!loading) {
            inputRef.current.focus();
        }

        // Bug not found
        if (!loading && activeBug === undefined) {
            timer = setTimeout(() => {
                history.push('/');
            }, 3000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [bugs, setActiveBug, bugId, history, loading, activeBug]);

    // Bug not found in db
    if (!loading && activeBug === undefined) {
        return (
            <div className='center-container'>
                <main className='bug__not-found'>
                    <GrAlert />
                    <h1>Bug Not found </h1>
                    <h2>Redirecting to dashboard</h2>
                </main>
            </div>
        );
    }

    if (loading) {
        return (
            <div className='loader__container'>
                <Loader type='Grid' color='#151E3F' height={100} width={100} />
            </div>
        );
    }

    console.log({ activeBug }, { input });

    return (
        <div className='center-container'>
            <main className='bug__single-bug'>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <input
                        onChange={handleInputChange}
                        value={input['title']}
                        ref={inputRef}
                        type='text'
                        name='title'
                    />
                    <textarea
                        name='description'
                        onChange={handleInputChange}
                        value={input['description']}
                    />

                    <SelectStatus
                        onChange={handleInputChange}
                        value={input['status']}
                    />

                    <SelectSeverity
                        onChange={handleInputChange}
                        value={input['severity']}
                    />
                    <button type='submit'>Edit</button>
                </form>
                <button onClick={() => setInput(activeBug)}>Reset</button>
                <p>
                    Created at:{' '}
                    {new Date(activeBug.createdAt).toLocaleDateString('es-AR')}
                </p>
                <p>Reporter: {activeBug.reporter}</p>
            </main>
        </div>
    );
};

export default BugScreen;
