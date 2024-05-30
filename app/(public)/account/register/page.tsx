'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useUserService } from '_services';
export default Register;

function Register() {
    const userService = useUserService();

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;
    const fields = {
        firstName: register('firstName', { required: 'First Name is required' }),
        lastName: register('lastName', { required: 'Last Name is required' }),
        username: register('username', { required: 'Username is required' }),
        password: register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' }
        })
    }

    async function onSubmit(user: any) {
        await userService.register(user);
    }

    return (
        <div className="card">
            <h1 className='card-header bg-gradient-to-r from-cyan-500 to-purple-400 mb-10 p-3 text-white md:text-2xl'>Register</h1>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input {...fields.firstName} type="text" className={`form-control bg-gray-50 border-2 border-cyan-400 rounded-md ${errors.firstName ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.firstName?.message?.toString()}</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input data-cy="error-last-name" {...fields.lastName} type="text" className={`form-control bg-gray-50 border-2 border-cyan-400 rounded-md ${errors.lastName ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.lastName?.message?.toString()}</div>
                    </div>
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
                        <button data-cy="submit-register" disabled={formState.isSubmitting} className="btn btn-lg me-2 text-1xl bg-cyan-500 hover:bg-cyan-700
                        text-white rounded">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Register
                        </button>
                        <Link href="/account/login" className="btn btn-link text-cyan-500 text-lg">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
