import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API, LOCAL_STORAGE_KEY  } from '../App'
import MessageList from './MessageList'
import SendMessage from './SendMessage'


export const ChatContext = React.createContext()

export default function Chat() {

    const [user, setUser] = useState([])
    const [messages, setMessages] = useState([])

    const loggedId = user.id

    const chatContextValue = {
        loggedId,
        handleSendMessage,
        handleSendImage
    }

    function handleSendMessage(message) {
        message.fromUser = user.id
        axios.post(API + 'message/', message)
    }

    function handleSendImage(message) {
        message.fromUser = user.id
        message.imageUrl = message.text
        message.text = null
        axios.post(API + 'message/', message)
    }

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        axios.get(API + 'user/' + userId + '/').then(response => setUser(response.data))
        axios.get(API + 'message/').then(response => setMessages(response.data))
    }, [messages])

    return (
        <ChatContext.Provider value={chatContextValue}>
            <div className='chat'>
                <div className='message-chat'>
                        <MessageList 
                            messages={messages}
                        />
                </div>
                <SendMessage />
            </div>
        </ChatContext.Provider>
    )
}
