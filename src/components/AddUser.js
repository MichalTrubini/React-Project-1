import React, { useState } from 'react';

import './AddUser.css';
import Button from './Button';
import Card from './Card';

const AddUser = (props) => {

    const [userName, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');

    const usernameInputHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageInputHandler = (event) => {
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (userName.length === 0 || userAge.length === 0) {return;};
        if (+userAge < 1) {return};

        props.OnSubmitData(userName, userAge);

        setUsername('');
        setUserAge('');
    };

    return <Card className="card-size">
                <form className='input' onSubmit={submitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" value={userName} type="text" onChange={usernameInputHandler}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" type="number" value={userAge} max="120" step="1" onChange={ageInputHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
        </Card>
}

export default AddUser;