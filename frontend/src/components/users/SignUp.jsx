import React from 'react'

export default function SignUp() {
    return (
        <div>
            <h1>signup</h1>
            <div>
                <form action="/users/signup">
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>Email address</label>
                        <input type="email" id='email' className='form-control-lg' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" id='password' className='form-control-lg' />
                    </div>
                </form>
            </div>
        </div>
    )
}
