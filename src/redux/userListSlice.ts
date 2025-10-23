import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
}

interface UserState {
    users: User[];
    status: 'idle' | 'loading' | 'error' | 'succeeded';
    error: string | null;
}

const initialState: UserState = {
    users: [],
    status: 'idle',
    error: null,
}

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/')
        return res.json()
    })


const userListSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })
    },
})

export const userReducer = userListSlice.reducer;