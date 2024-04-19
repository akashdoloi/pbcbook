import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
            <p>Don't have an account? 
                <Link to='/register'> Register</Link>
                </p>
        </div>
    </div>
  )
}

export default Login