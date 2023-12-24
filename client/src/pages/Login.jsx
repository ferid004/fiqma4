import React from 'react'
import "./Login.scss"
import singup from '../assets/img/dl.beatsnoop 1.png'
function Login() {
  return (
    <div id='login'>
      <div className="container">
        <div className="imgbox">
          <img src={singup} alt="" />
        </div>
        <div className="singinbox">
          <div className="title">
            <h3>Log in to Exclusive</h3>
            <p>Enter your details below</p>
          </div>
          <div className="inputbox">
            <div className="enterEmail">
              <input type="text" placeholder='Email or Phone Number' />
            <div className="line"></div>
            </div>
            <div className="enterEmail">
              <input type="text" placeholder='Password' />
            <div className="line"></div>

            </div>
          </div>
          <div className="buttonbox">
            <button>
            Log In
            </button>
            <p>Forget Password?</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login