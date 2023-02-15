import React, {useState} from 'react';
import userRepository from "../repository/UserRepository";
import {useNavigate} from "react-router-dom";

const CreateAccount = (props) => {

    const [username, setUsername] = useState(null);
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);

    const [test, setTest] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async () => {

        await userRepository.register(username, name, surname)
            .then(resp => {
                setTest(resp);
                props.setUsername(username);
                navigate('/account_details');
            })
            .catch(() => {
                alert("Invalid input!");
            });
    }

    return (
        <div className='d-flex align-items-start justify-content-start'>
            <div className="row">

                <div className='col'>
                    <label className='font-italic'>Create account</label>
                </div>

                <div className='col'>
                    <input type='text'
                           className='form-control'
                           onChange={(change) => setUsername(change.target.value)}
                           placeholder='Username'
                    />
                </div>

                <div className='col'>
                    <input type='text'
                           className='form-control'
                           onChange={(change) => setName(change.target.value)}
                           placeholder='Name'
                    />
                </div>

                <div className='col'>
                    <input type='text'
                           className='form-control'
                           onChange={(change) => setSurname(change.target.value)}
                           placeholder='Surname'
                    />
                </div>
                <div className='col'>
                    {test}
                </div>

                <div className='col'>
                    <button onClick={handleSubmit} type='submit' >Done</button>
                </div>

                <div className='col'>
                    <button>This is a dummy button.</button>
                </div>

            </div>
        </div>
    );
}

export default CreateAccount;