import React, { useContext, useEffect, useState } from 'react'
import { AppContext, API } from '../App'
import { validateSignup } from '../validators/SignupValidator'
import axios from 'axios'


export default function Signup() {

    const { handleNotification } = useContext(AppContext)

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(API + 'user/').then(response => setUsers(response.data))
    }, [])

    function handleSignup() {

        const message = validateSignup(user, users)
        if (message !== 'valid') {
            handleNotification('Danger', message)
            return
        }

        axios.post(API + 'user/', user).then(() => {
            clearFields()
            handleNotification('Success', 'New account has been created.')
        })
    }

    function clearFields(){
        const emptyUser = {
            username: '',
            password: '',
            confirmPassword: '',
            imageUrl: ''
        }
        setUser(emptyUser)
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') handleSignup()
    }

    function handleChange(changes) {
        setUser({...user, ...changes})
    }
    
    return (
        <>
            <div className='signup'>
                <div className='login-grid'>
                    <label className='login_label' htmlFor='username'>Username</label>
                    <input
                        className='login_input'
                        type='input'
                        name='username'
                        id='username'
                        value={user.username}
                        spellCheck='false'
                        onChange={e => handleChange({ username: e.target.value })}
                        onKeyPress={handleKeyPress}
                    />
                    <label className='login_label' htmlFor='password'>Password</label>
                    <input
                        className='login_input'
                        type='password'
                        name='password'
                        id='password'
                        value={user.password}
                        spellCheck='false'
                        onChange={e => handleChange({ password: e.target.value })}
                        onKeyPress={handleKeyPress}
                    />
                    <label className='login_label' htmlFor='confirm_password'>Confirm Password</label>
                    <input
                        className='login_input'
                        type='password'
                        name='confirm_password'
                        id='confirm_password'
                        value={user.confirmPassword}
                        spellCheck='false'
                        onChange={e => handleChange({ confirmPassword: e.target.value })}
                        onKeyPress={handleKeyPress}
                    />             
                    <label className='login_label' htmlFor='image_url'>Profile Picture</label>
                    <input
                        className='login_input'
                        type='text'
                        name='image_url'
                        id='image_url'
                        value={user.imageUrl}
                        spellCheck='false'
                        onChange={e => handleChange({ imageUrl: e.target.value })}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className='login_button-container'>
                    <button 
                        className='btn btn-primary'
                        onClick={() => handleSignup()}
                    >
                        SIGN UP
                    </button>
                </div>
            </div>
        </>
    )
}
