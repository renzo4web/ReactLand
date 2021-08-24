import React, { createRef, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { TiArrowBack } from 'react-icons/ti';
import SelectStatus from '../../ui/SelectStatus';
import Navbar from '../Navbar';
import SelectSeverity from '../../ui/SelectSeverity';
import { cleanForm } from '../../../helpers/cleanForm';
import { getInputAlertMessage } from '../../../selectors/getInputAlertMessage';

const SubmitBugScreen = () => {
  const [formVals, setFormVals] = useState({
    name: '',
    severity: 'major',
    description: '',
    status: 'all',
    assignee: '',
  });
  const [errors, setErrors] = useState({});

  const [error, setError] = useState(false);

  const elRef = useRef();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    const invalidInputs = cleanForm(formVals);
    console.log(errors);
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
    const validToSubmit = Object.entries(errors).every(
      (tupple) => tupple[1] === null
    );
    const allFieldsComplete = Object.entries(formVals).every(
      (tupple) => tupple[1].length > 0
    );

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
      console.log('objecSENDING TO SERVERt');
    }
  };

  return (
    <>
      <Navbar />

      <div className='bug__submit-screen'>
        <h4>{errors['incomplete_form'] && errors['incomplete_form']}</h4>
        <form onSubmit={handleSubmit}>
          {errors['name'] && (
            <strong className='ui__alert-input'>{errors['name']}</strong>
          )}

          <div className='ui__input-group'>
            <label htmlFor='name'>Bug Name</label>
            <input
              onChange={handleChange}
              value={formVals['name']}
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
              ref={elRef}
              onChange={handleChange}
              value={formVals['description']}
              name='description'
              id='description'
              cols='30'
              rows='10'
            />
            <p>{formVals['description'].length}/160</p>
          </div>

          <div className='ui__input-group'>
            <label htmlFor='status'>Status</label>
            <SelectStatus onChange={handleChange} value={formVals['status']} />
          </div>

          <div className='ui__input-group'>
            {errors['assignee'] && (
              <strong className='ui__alert-input'>{errors['assignee']}</strong>
            )}
            <label htmlFor='assignee'>Assignee To</label>
            <input
              ref={elRef}
              onChange={handleChange}
              name='assignee'
              id='assignee'
              type='text'
              value={formVals['assignee']}
            />
          </div>
          <button disabled={error} type='submit' className='ui__btn-submit'>
            Submit Bug
          </button>
        </form>
        <Link className='ui__button-cancel' to='/'>
          <TiArrowBack /> Go Back
        </Link>
      </div>
    </>
  );
};

export default SubmitBugScreen;
