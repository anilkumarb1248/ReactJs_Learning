import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get("filter") === "active"
    return (
        <div>
            <h2>List of Users </h2>
            <h4>User 1 Details</h4>
            <h4>User 2 Details</h4>
            <h4>User 3 Details</h4>
            <Outlet />

            <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
            <button onClick={() => setSearchParams()}>Reset Filter</button>

            {
                showActiveUsers ? (
                    <h2>Showing acive users</h2>
                ) : (
                    <h2> Showing all users </h2>
                )
            }
        </div>
    )
}
export default Users;
