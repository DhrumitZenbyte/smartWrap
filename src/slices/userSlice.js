// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     user: null,
//     token: null,
//     email: null,
//     name: null,
//     status: 'idle', // idle | loading | succeeded | failed
//     error: null
// };

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         loginStart(state) {
//             state.status = 'loading';
//         },
//         loginSuccess(state, action) {
//             state.status = 'succeeded';
//             state.user = action.payload.user;
//             state.token = action.payload.token;
//             localStorage.setItem('token', action.payload.token); // Save token in local storage

//         },
//         loginFailure(state, action) {
//             state.status = 'failed';
//             state.error = action.payload;
//         },
//         logout(state) {
//             state.status = 'idle';
//             state.user = null;
//             state.token = null;
//             state.error = null;
//             localStorage.removeItem('token'); // Remove token from local storage

//         }
//     }
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

// export default userSlice.reducer;


// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null , // Initialize token from localStorage
    email: null,
    name: null,
    status: 'idle', // idle | loading | succeeded | failed
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart(state) {
            state.status = 'loading';
        },
        loginSuccess(state, action) {
            state.status = 'succeeded';
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token); // Save token in local storage
        },
        loginFailure(state, action) {
            state.status = 'failed';
            state.error = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload; // Update token in the state
            console.log("payloaddd", value.payload);
        },
        logout(state) {
            state.status = 'idle';
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('token'); // Remove token from local storage
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, setToken } = userSlice.actions;

export default userSlice.reducer;
