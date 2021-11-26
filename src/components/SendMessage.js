import React, { useContext, useState } from 'react'
import * as IoIcons from 'react-icons/io'
import * as ImIcons from 'react-icons/im'
import { ChatContext } from './Chat'


export default function SendMessage() {

    const { handleSendMessage, handleSendImage } = useContext(ChatContext)

    const [message, setMessage] = useState([])

    function handleChange(changes) {
        setMessage({...message, ...changes})
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            clearField()
            handleSendMessage(message)
        }
    }

    function clearField(){
        const emptyMessage = {
            text: ''
        }
        setMessage(emptyMessage)
    }

    return (
        <div className="chat-footer">
            <input 
                className="send-message-text"
                type='input'
                name='text'
                id='text'
                value={message.text}
                spellCheck='false'
                onChange={e => handleChange({ text: e.target.value })}
                onKeyPress={handleKeyPress}
            > 
            </input>
            <button 
                className="send-message-button btn-info"
                onClick={() => {
                    clearField()
                    handleSendMessage(message)
                }}
            > 
                <IoIcons.IoMdSend />
            </button>
            <button 
                className="send-attachment-button btn-info"
                onClick={() => {
                    clearField() 
                    handleSendImage(message)
                }}
            > 
                <ImIcons.ImAttachment />
            </button>
        </div>
    )
}
