import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext, API, LOCAL_STORAGE_KEY  } from '../App'
import { validateLogin } from '../validators/LoginValidator'
import axios from 'axios'


export default function Login(props) {

    const { handleNotification } = useContext(AppContext)

    const { setLogged } = props

    const [user, setUser] = useState([])
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(API + 'user/').then(response => setUsers(response.data))
    }, [])

    function handleLogin() {

        const message = validateLogin(user, users)
        if(message !== 'valid') {
            handleNotification('Danger', message)
            return
        }

        const data = users.filter(u => u.username === user.username)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data[0].id))

        navigate('/chat')
        setLogged(true)
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') handleLogin()
    }

    function handleChange(changes) {
        setUser({...user, ...changes})
    }

    return (
        <div className='login'>
            <div className='login-grid'>
                
                <label className='login_label' htmlFor='username'>Username</label>
                <input
                    className='login_input'
                    type='input'
                    name='username'
                    id='username'
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
                    spellCheck='false'
                    onChange={e => handleChange({ password: e.target.value })}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className='login_button-container'>
                <button 
                    className='btn btn-primary'
                    onClick={() => handleLogin()}
                >
                    LOG IN  
                </button>
            </div>
        </div>
    )
}
