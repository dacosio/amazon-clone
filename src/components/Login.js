import React, {useState} from 'react'
import '../styles/Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))

        //some fancy firebase login thingy...
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password) //this is the email and password from useState
            .then((auth)=> {
                //it successfully created a user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
            setEmail('');
            setPassword('');
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' alt='amazon logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="text" onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input value={password} type="password" onChange={e => setPassword(e.target.value)}/>
                    
                    <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
