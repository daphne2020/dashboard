'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useUserService } from '_services';
export default Login;

function Login() {
    const userService = useUserService();
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const fields = {
        username: register('username', { required: 'Username is required' }),
        password: register('password', { required: 'Password is required' })
    };

    async function onSubmit({ username, password }: any) {
        await userService.login(username, password);
    }

    return (
        <div className="card">
            <h1 className="card-header bg-gradient-to-r from-cyan-500 to-purple-400 p-3 text-white md:text-2xl">Welcome back to Login!</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input {...fields.username} type="text" className={`form-control bg-gray-50 border-2 border-cyan-400 rounded-md ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message?.toString()}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input {...fields.password} type="password" className={`form-control bg-gray-50 border-2 border-cyan-400 rounded-md ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message?.toString()}</div>
                    </div>
                    <div className='float-right'>
                        <button disabled={formState.isSubmitting} className="btn btn-lg me-2 text-1xl bg-purple-400 hover:bg-purple-700 text-white
                         flex-grid py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Login
                        </button>
                        <Link href="/account/register" className="btn btn-link text-cyan-500 text-lg">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
