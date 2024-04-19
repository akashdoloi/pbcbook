import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <h1>Register</h1>
            <form>
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Register</button>
            </form>
            <p>Already have an account? 
                <Link to='/login'>Login</Link></p>
        </div>
    </div>
    
  )
}

export default Register