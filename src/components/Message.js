import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../App'
import dateFormat from "dateformat";
import { ChatContext } from './Chat';


export default function Message(props) {

    const { loggedId } = useContext(ChatContext)

    const {
        text,
        imageUrl,
        date,
        fromUser
    } = props

    const [user, setUser] = useState([])
    const [formatedDate, setFormatedDate] = useState([])

    useEffect(() => {
        const setNewDate = () => {
            const newDate = new Date(date)
            setFormatedDate(dateFormat(newDate, 'ddd, mmm dS, h:MM TT'))
        }
        axios.get(API + 'user/' + fromUser + '/').then(response => setUser(response.data))
        setNewDate()
    }, [date, fromUser])

    
    return (
        <div className={loggedId === fromUser ? 'message my-message': 'message info'}>
        <img alt="" className="img-circle medium-image" src={user.imageUrl} />

        <div className="message-body">

                <div className="message-info">
                    <h4> {user.username} </h4>
                    <h5> 
                        {formatedDate}
                    </h5>
                </div>
                <hr />
                <div className='message-text'>
                    {imageUrl && 
                    <div className='image-container'>
                        <img alt="" className="attachment-image" src={imageUrl} />
                    </div>}
                    {text}
                </div>
        </div>
        <br />
        </div>
    )
}
