import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from './UserListSlice.jsx'

const store = configureStore({
    reducer: {
        users: userReducer,
    },
})

export default store