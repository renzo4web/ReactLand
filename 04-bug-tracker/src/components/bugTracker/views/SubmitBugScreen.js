import React, { useState } from 'react';

import SelectStatus from '../../ui/SelectStatus';
import SelectSeverity from '../../ui/SelectSeverity';
import { cleanForm } from '../../../helpers/cleanForm';
import { getInputAlertMessage } from '../../../selectors/getInputAlertMessage';
import { useDispatch } from 'react-redux';
import { addNewBug } from '../../../actions/bugs';

const initialForm = {
    name: '',
    severity: 'major',
    description: '',
    status: 'all',
    assignee: '',
};

const SubmitBugScreen = () => {
    const dispatch = useDispatch();

    const [formVals, setFormVals] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = ({ target }) => {
        setLoading(false);
        const { name, value } = target;

        const invalidInputs = cleanForm(formVals);

        if (invalidInputs[name]) {
            setErrors({
                ...errors,
                [name]: getInputAlertMessage(name),
            });
        } else {
            setErrors({
                ...errors,
                [name]: null,
            });
        }

        setFormVals({
            ...formVals,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const validToSubmit = Object.entries(errors).every(
            (tupple) => tupple[1] === null
        );
        const allFieldsComplete = Object.entries(formVals).every((tupple) => {
            if (tupple[0] === 'assignee') {
                return true;
            } else {
                return tupple[1].length > 0;
            }
        });

        if (!allFieldsComplete) {
            setErrors({
                ...errors,
                incomplete_form: getInputAlertMessage('incomplete_form'),
            });
        } else {
            setErrors({
                ...errors,
                incomplete_form: null,
            });
        }

        if (validToSubmit && allFieldsComplete) {
            dispatch(addNewBug(formVals)).then((temp) => setLoading(false));
            setFormVals(initialForm);
        }
    };

    return (
        <>
            <div className='bug__submit-screen'>
                <h4>
                    {errors['incomplete_form'] && errors['incomplete_form']}
                </h4>
                <form onSubmit={handleSubmit}>
                    {errors['name'] && (
                        <strong className='ui__alert-input'>
                            {errors['name']}
                        </strong>
                    )}

                    <div className='ui__input-group'>
                        <label htmlFor='name'>Bug Name</label>
                        <input
                            onChange={handleChange}
                            value={formVals['name']}
                            placeholder='Short name'
                            name='name'
                            id='name'
                            type='text'
                        />
                    </div>

                    <div className='ui__input-group'>
                        <label htmlFor='severity'>Severity</label>
                        <SelectSeverity
                            onChange={handleChange}
                            value={formVals['severity']}
                            id='severity'
                        />
                    </div>

                    <div className='ui__input-group'>
                        {errors['description'] && (
                            <strong className='ui__alert-input'>
                                {errors['description']}
                            </strong>
                        )}
                        <label htmlFor='description'>Description</label>
                        <textarea
                            onChange={handleChange}
                            value={formVals['description']}
                            name='description'
                            placeholder='What you want to fix'
                            id='description'
                            cols='30'
                            rows='10'
                        />
                        <p>{formVals['description'].length}/160</p>
                    </div>

                    <div className='ui__input-group'>
                        <label htmlFor='status'>Status</label>
                        <SelectStatus
                            onChange={handleChange}
                            value={formVals['status']}
                        />
                    </div>

                    <div className='ui__input-group'>
                        {errors['assignee'] && (
                            <strong className='ui__alert-input'>
                                {errors['assignee']}
                            </strong>
                        )}
                        <label htmlFor='assignee'>Assignee To</label>
                        <input
                            onChange={handleChange}
                            name='assignee'
                            id='assignee'
                            placeholder='leave it blank to assign it to yourself'
                            type='text'
                            value={formVals['assignee']}
                        />
                    </div>
                    <button
                        disabled={loading}
                        type='submit'
                        className='ui__btn-submit'
                    >
                        Submit Bug
                    </button>
                </form>
            </div>
        </>
    );
};

export default SubmitBugScreen;
