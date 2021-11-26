import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { LOCAL_STORAGE_KEY } from '../App'


export default function Navbar(props) {

    const {logged, setLogged} = props

    function handleLogin() {
        setLogged(false)
        localStorage.setItem(LOCAL_STORAGE_KEY, undefined)
    }

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>    

                    <div className='logo-container'>
                        <Link 
                            to='' 
                            className='app-logo'
                            onClick={() => handleLogin()}
                        >
                            <img src={logo} alt='Logo' />
                        </Link>
                        <div className='app-label'>
                            <h3>Chat</h3>
                        </div>
                    </div>

                    <div className={logged ? 'navbar-button-container' : 'navbar-buttons-container'}>

                        {!logged && 
                        <Link to='/signup'>
                            <button className='btn btn-primary'>
                                SIGN UP
                            </button>
                        </Link>}

                        <Link to='/login'>
                            <button 
                                className='btn btn-primary'
                                onClick={() => handleLogin()}
                            >
                                {logged ? 'LOG OUT' : 'LOG IN'}
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}