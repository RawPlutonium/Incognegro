import React from 'react';

function ChatDisplay(props){
    const chat = props.chat;
    return(
        <div>
            <div className="container">
                <div className="row">
                <p ><code className="user">{chat.user} :</code>  <code className="chat">{chat.chat}</code></p>
                </div>
            </div>
        </div>
        )
}

export default ChatDisplay;