import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserContext from '../context/UserContext'

const Login = () => {
  let arr  =JSON.parse(localStorage.getItem('ecomSigunup')) || []
  let passwordref = useRef()
  let emailref = useRef()
  let navigate = useNavigate()

  let userCtx = useContext(UserContext)
  console.log(userCtx) //

  const handleSubmit = (e)=>{
    e.preventDefault();
    let obj ={
     
      email:emailref.current.value,
      password:passwordref.current.value,
    }
    console.log(obj)

  
    if(!obj.email){
     return toast.error("email is required",{position:"top-center"})
    }
    if(!obj.password){
     return toast.error("password is required",{position:"top-center"})
    }
    let checkUser = arr.find((item)=>item.email===obj.email);
    if(checkUser){
      if(checkUser.password === obj.password){
        userCtx.setuserData({login:true,email:checkUser.email});

        localStorage.setItem('userDetails',JSON.stringify({login:true,email:checkUser.email}))
        
        navigate('/')
        toast.success('login successfull',{
          position:'top-center' 
         })
      }else{
        toast.error('wrong password',{position:'top-center'})
      }
     
    }else{
   
      
      toast.error("user not found please register",{position:'top-center'})
    }
  }
  return (
    <div className='signupForm'>
      <form className='col-6 m-auto mt-5'>
        <h3 className='text-center my-2'>Login Form</h3>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailref}  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordref} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button onClick={handleSubmit}  type="submit" className="btn btn-primary">Submit</button>
  <p className='text-center my-2'>Don't have an account? <Link to={'/signup'}>Register</Link></p>
</form>
    </div>
  )
}

export default Login
