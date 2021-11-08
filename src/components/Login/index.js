import React, {useState} from 'react'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
                <form className="form-inline">
      <input className="mr-sm-1" type="text" placeholder="Username" onChange={e=> setUsername(e.target.value)} aria-label="Search" />
      <input className="mr-sm-1" type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
        </div>
    )
}

export default Login
