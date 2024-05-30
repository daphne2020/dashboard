'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Spinner } from '_components';
import { useUserService } from '_services';

export default Users;

function Users() {
    const userService = useUserService();
    const users = userService.users;

    useEffect(() => {
        userService.getAll();
    }, []);

    return (
        <>
            <h1 className='bg-gradient-to-r from-cyan-500 to-purple-400 mb-10 p-3 rounded text-white md:text-2xl'>Users</h1>
            <Link href="/users/add" className="btn btn-lg me-2 text-1xl bg-purple-400 hover:bg-purple-700 text-white
                                                flex-grid py-2 px-3 rounded focus:outline-none focus:shadow-outline">Add User</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>First Name</th>
                        <th style={{ width: '30%' }}>Last Name</th>
                        <th style={{ width: '30%' }}>Username</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    <TableBody />
                </tbody>
            </table>
        </>
    );

    function TableBody() {
        if (users?.length) {
            return (users.map(user =>
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>
                        <Link href={`/users/edit/${user.id}`} className="btn btn-lg me-2 text-1xl bg-cyan-500 hover:bg-cyan-700 text-white rounded focus:outline-none">Edit</Link>
                        <button onClick={() => userService.delete(user.id)} className="btn btn-lg me-2 text-1xl bg-red-400 hover:bg-red-700 text-white rounded focus:outline-none" disabled={user.isDeleting}>
                            {user.isDeleting
                                ? <span className="spinner-border spinner-border-sm"></span>
                                : <span>Delete</span>
                            }
                        </button>
                    </td>
                </tr>
            ));
        }

        if (!users) {
            return (
                <tr>
                    <td colSpan={4}>
                        <Spinner />
                    </td>
                </tr>
            );
        }

        if (users?.length === 0) {
            return (
                <tr>
                    <td colSpan={4} className="text-center">
                        <div className="p-2">No Users To Display</div>
                    </td>
                </tr>
            );
        }
    }
}
