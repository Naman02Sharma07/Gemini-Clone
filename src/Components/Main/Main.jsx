import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=" "></img>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Naman</span></p>
                <o>How can I help you today?</o>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest me some good books that have been a trilogy or a duology with a good rating </p>
                    <img src={assets.compass_icon} alt=" "></img>
                </div>
                <div className="card">
                    <p>summarise this concept: good books</p>
                    <img src={assets.bulb_icon} alt=" "></img>
                </div>
                <div className="card">
                    <p>brainstrom team bonding activities related to book reading </p>
                    <img src={assets.message_icon} alt=" "></img>
                </div>
                <div className="card">
                    <p>improve the readability of the folloeing code  </p>
                    <img src={assets.code_icon} alt=" "></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main