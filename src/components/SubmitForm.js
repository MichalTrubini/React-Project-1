import React, { useState } from 'react';

import Card from './Card';
import './SubmitForm.css';

const SubmitForm = () => {

    const [username, setUsername] = useState('');
    const [userage, setUserAge] = useState('');

    const usernameInputHandler = (event) => {
        setUsername(event.target.value);
    }

    const usernameAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (username.length === 0) console.log('error');

        const userData = {
            username: username,
            age: userage
        }

        console.log(userData);
    };

    return <Card className="card-size">
        <form className='input' onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" onChange={usernameInputHandler}></input>
            <label>Age (Years)</label>
            <input type="number" max="120" step="1" onChange={usernameAgeHandler}></input>
            <button type="submit" className='button'>Add User</button>
        </form>
    </Card>
}

export default SubmitForm;