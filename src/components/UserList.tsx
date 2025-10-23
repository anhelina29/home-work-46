import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/UserListSlice";
import type { RootState, AppDispatch } from "../redux/store";



export const UserList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {users, status, error} = useSelector((state: RootState) => state.users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'error') {
        return <div>Error: {error}</div>
    }
    if (status === 'succeeded') {
        return <div>{users.map(user => (
            <div key={user.id}>
                User {user.id}: {user.name}</div>
        ))}</div>
    }

    return null
}

