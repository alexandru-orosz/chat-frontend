import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeIcon from './HomeIcon'
import Login from './Login'
import Navbar from './Navbar'
import Signup from './Signup'
import Chat from './Chat'
import ReactNotification from 'react-notifications-component'


export default function Home() {

    const [logged, setLogged] = useState(false)

    return (
        <>  
            <Router>
                <Navbar 
                    logged={logged}
                    setLogged={setLogged}
                />
                <div className={logged ? 'home-logged' : 'home'}> 
                <ReactNotification />
                    <Routes>
                        <Route path='' exact element={<HomeIcon/>} />
                        <Route path='/login'  element={<Login setLogged={setLogged}/>} />
                        <Route path='/signup' element={<Signup/>} />
                        <Route path='/chat' element={<Chat/>} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}
