import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/UserListSlice.jsx";


export const UserList = () => {
    const dispatch = useDispatch();
    const {users, status, error} = useSelector((state) => state.users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status])

    if (status.error) {
        return <div>Error: {error}</div>
    }
    if (status.ok) {
        return <div>Success: {users}</div>;
    }
    return (
        <div>{users.map(user => (
            <div key={user.id}>User: {user.name}</div>
        ))}</div>
    )
}

