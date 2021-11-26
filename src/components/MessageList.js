import React from 'react'
import Message from './Message'


export default function MessageList({ messages }) {

    return (
        <div className='chat-body'>
            <div>
                {messages.map(message => {
                    return (
                        <Message key={message.id} {...message} />
                    )
                })}
            </div>
        </div>
    )
}
