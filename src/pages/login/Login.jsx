import { useState } from "react";
import "./login.css";
import axios from 'axios';

export default function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailhandler = (e)=>{
    setEmail(e.target.value)
  }
  const passwordhandler = (e)=>{
    setPassword(e.target.value)
  }
  const login = ()=>{
    axios({
      method: 'post',
      url: '/login',
      data: {
        email: email,
        password: password,
      }
    });

  }
  return (
    
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">RITS Homecare</h3>
          <span className="loginDesc">
          Empowering health and well-being with personalized, compassionate homecare services tailored to meet individual needs.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox ">
            <input vlaue={email} onChange={emailhandler} placeholder="Email" className="loginInput my-1" />
            <input value={password} placeholder="Password" onChange={passwordhandler} className="loginInput" />
            {/* <div className="userselection my-5">
              <p className="text-center text-blue-600 my-2">Please select your user type:</p>
              <div className="flex justify-around">
                <div className="flex flex-col">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Patient</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Doctor</label>
                </div>
                <div className="flex flex-col">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">Caregiver</label>
                </div>
              </div>  
            </div> */}
            <button className="loginButton" onClick={login}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <span className="loginForgot">Dont have an account?</span>
            <button className="loginRegisterButton">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>
    
    )

}
