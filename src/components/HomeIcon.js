import React from 'react'
import { IconContext } from 'react-icons'
import * as BsIcons from 'react-icons/bs'


export default function HomeIcon() {
    return (
        <>
            <IconContext.Provider value={{color: '#cfcfcf'}}>
                <div className='home-icon'>
                    <BsIcons.BsFillChatDotsFill />
                </div>
            </IconContext.Provider>
        </> 
    )
}
