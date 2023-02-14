import { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { DataProvider } from '../context/Data';
import './Login.css' 

function Login() {

  const context = useContext(DataProvider)

  const { email, setEmail, password, setPassword, tempValue, setLogged } = context


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === tempValue.email){
      if(password === tempValue.password){
        return toast.success('Test success', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }) , setTimeout(() => {
          navigate('/')
        }, 1000) , setLogged(true)
      }
    }
    if(email !== tempValue.email || password !== tempValue.password) {
      return toast.error(`failed`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div id="loginDiv">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
      <form id='formLog'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input placeholder={email} type="email" class="form-control , logEmail" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input placeholder={password} type="password" class="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div id='logReg'>
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login