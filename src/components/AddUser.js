import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import './AddUser.css';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';

const AddUser = (props) => {

    const [userName, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const usernameInputHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageInputHandler = (event) => {
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (userName.length === 0 || userAge.length === 0) {
            setError({
                title:'Invalid input',
                message: 'Please enter a valid name or age (non-empty values).'
            });
            return};
        if (+userAge < 1) {
            setError({
                title:'Invalid input',
                message: 'Please enter a valid age (> 0).'
            });
            return};

        props.OnSubmitData(userName, userAge);

        setUsername('');
        setUserAge('');
    };

    const errorHandler = () => {
        setError(null);
    }

    return <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className="card-size">
                    <form className='input' onSubmit={submitHandler}>
                        <label htmlFor='username'>Username</label>
                        <input id="username" value={userName} type="text" onChange={usernameInputHandler}></input>
                        <label htmlFor='age'>Age (Years)</label>
                        <input id="age" type="number" value={userAge} max="120" step="1" onChange={ageInputHandler}></input>
                        <Button type="submit">Add User</Button>
                    </form>
            </Card>
        </div> 
}

export default AddUser;