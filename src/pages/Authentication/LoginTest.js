import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout } from '../../slices/userSlice';

const LoginTest = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const response = await axios.post('YOUR_LOGIN_API_URL', { email, password });
            dispatch(loginSuccess(response.data.data));
        } catch (err) {
            dispatch(loginFailure(err.response.data.message));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {user.status === 'loading' && <p>Loading...</p>}
            {user.status === 'failed' && <p>{user.error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginTest;
