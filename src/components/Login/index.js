import React, { useEffect, useState } from "react";
import { auth, signInWithEmailAndPassword, signInWithGoogle, logout,sendPasswordResetEmail,registerWithEmailAndPassword } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-bulma/bulma.css'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(auth);
    const [showLogin, setshowLogin] = useState(true)
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) setshowLogin(false);
      }, [user, loading]);

      const handleLogout = () =>{
          logout()
          setshowLogin(true)
      }

      const signUp = () => {
        Swal.fire({
            title: 'Create an account',
            html:
              '<input id="swal-input1" placeholder="Name" type="text" class="swal2-input">' +
              '<input id="swal-input2" placeholder="email" type="email" class="swal2-input">' +
              '<input id="swal-input3" placeholder="password" type="password" class="swal2-input">'+
              '<label>Benefits: Remember your favorites, History votes</label>',
              
            focusConfirm: false,
            preConfirm: () => {
                registerWithEmailAndPassword(
                    document.getElementById('swal-input1').value,  
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value)
              
            }
          })
        /*  
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }*/
      }
      const rememberMe = () => {
        Swal.fire({
            title: 'Reset your password?',
            html:
              '<input id="swal-input1" placeholder="email" type="email" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                sendPasswordResetEmail(document.getElementById('swal-input1').value)
            }
          })
        /*  
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }*/
      }
    return (
        <div>
            {showLogin ? <>
            <div className="row">
                   <form className="form-inline">
      <input className="mr-sm-1" type="text" placeholder="Username" onChange={e=> setUsername(e.target.value)} aria-label="Search" />
      <input className="mr-sm-1" type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} aria-label="Search" />
      <button onClick={() => signInWithEmailAndPassword(username, password)}className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
            </div>
            <div className="row justify-content-end">
              <span>  <a onClick={signUp} href="#">Sign up</a><span> / </span><a onClick={rememberMe} href="#">Remember me?</a> </span>
            </div></>
              : <button onClick={handleLogout} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Logout</button> }
        </div>
    )
}

export default Login
