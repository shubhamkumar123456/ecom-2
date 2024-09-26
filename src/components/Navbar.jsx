import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import UserContext from '../context/UserContext'

const Navbar = () => {
  let ctx = useContext(CartContext)
  let userStore = useContext(UserContext)

  let login = userStore.userData.login
  
  const [searchValue, setsearchValue] = useState("");
  
  const handleLogout = ()=>{
      setsearchValue('')
      userStore.setsearch('')
    localStorage.removeItem('userDetails')
    userStore.setuserData({login:false,email:''})

  }

  const handleSearchChanger=(e)=>{
    // console.log(e.target.value)
    setsearchValue(e.target.value)
    userStore.setsearch(e.target.value.toLowerCase())
  }

  return (
    <div> 
      <nav className="fixed-top navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex ms-auto mt-4 mt-md-auto" role="search">
        <input value={searchValue} onChange={handleSearchChanger} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {login===true && <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>}
       {login===true && <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>}
       {login===true && <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart <sup>{ctx.cartArr.length}</sup></Link>
        </li>}
       {login ===false && <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>}
       {login===false && <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>}
       {login===true && <li onClick={handleLogout} className="nav-item">
          <Link className="nav-link" to="#">Logout</Link>
        </li>
       }
       
      </ul>
   
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
