import React from 'react'
import "./message.css";

export default function Message({own}) {
  return (
    <div className={own?"Message own":"Message"}>
      <div className="message-top">
        <img src="https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
         alt="" 
         className="message-img" />
         <p className="message-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="message-bottom">1min ago</div>
    </div>
  )
}
