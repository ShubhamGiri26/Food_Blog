import React from 'react'

const Navbar = () => {
  return (
    <>

  <div className="container-navbar">
    <a className="nav-brand" href="#"> Navbar</a>
    <button className="toggler" type="button" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
      <span className="toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Cart</a>
        </li>

        </ul>
        
      <form className="d-flex">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

<footer>
  <div className='container fluid'>
    <p>All Rights are Reserved and have CopyRight</p>
    <a className="footer-brand" href='#'> footer</a>

    <ul className='footer-foot auto'>
    <li className='foot-items'>
      <a className='foot-link active' href='#'> Privacy </a>            
          <a className="foot-link" href="#"> CopyRight</a>
        </li>
    </ul>
  </div>
</footer>
  </div>
    </>
  )
}

export default Navbar
