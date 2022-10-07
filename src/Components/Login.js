import React from 'react'

function Login() {
    
  return (
    <div className='container my-5 '>
        <h1>Login</h1>
        <form action="">
            <div className="mb-3">
                <label htmlFor="e-add">Email address</label>
                <input type="email" className='form-control' id="e-add" style={{width: "40% !important"}} />
            </div>
            <div className="mb-3">
                <label htmlFor="pass">Password</label>
                <input type="password" className='form-control' id="pass" style={{width: "40% !important"}} />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default Login