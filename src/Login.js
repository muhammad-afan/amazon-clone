import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()


        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                console.log(authUser);
                if (auth) {
                    navigate('/')
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to={'/'}>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1924px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="" id="" />

                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" />

                    <button type='submit' onClick={signIn} className='login__siginInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-based Ads Notice
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
