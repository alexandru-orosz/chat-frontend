import React from 'react'
import Home from './components/Home'
import { store } from 'react-notifications-component'
import './css/app.css';
import 'react-notifications-component/dist/theme.css'
import 'animate.css'


export const AppContext = React.createContext()
export const API = 'http://localhost:8000/'
export const LOCAL_STORAGE_KEY = 'chat.logged_user'


const handleNotification = (title, message) => {
  store.addNotification({
      title,
      message,
      type : title.toLowerCase(),
      insert: 'bottom',
      container: 'bottom-right',
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2500,
        showIcon: true,
        pauseOnHover: true
      },
      width: 250
  })
}

const appContextValue = {
  handleNotification
}

function App() {
  return (
    <>  
        <AppContext.Provider value={appContextValue}>
          <Home />
        </AppContext.Provider>
        
    </>
  );
}

export default App;
