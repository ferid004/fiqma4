import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Singup.scss"
import singup from '../assets/img/dl.beatsnoop 1.png'

function Sing__u() {
    return (
        <div id='sing__'>
            <div className="container">
                <div className="imgbox">
                    <img src={singup} alt="" />
                </div>
                <div className="singinbox">
                    <div className="title">
                        <h3>Create an account</h3>
                        <p>Enter your details below</p>
                    </div>
                    <div className="inputbox">
                        <div className="enterEmail">
                            <input type="text" placeholder='name' />
                            <div className="line"></div>
                        </div>

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
                        Create Account
                        </button>
                        <div id='google'>
                        Sign up with Google
                        </div>
                        <div className="text">
                            <p>Already have account?</p>
                            <NavLink className='navlink' activeClassName='active'  to={'/login'}>login</NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sing__u