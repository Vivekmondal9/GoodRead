import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


function Navbar() {

  const [loggedin, setLoggedin] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem("Token");
    if (!token) {
      setLoggedin(false)
    }
    else {
      setLoggedin(true)
    }
  }, [loggedin]);


  const onLogoutHandler = () => {
    localStorage.removeItem("Token");
    setLoggedin(false);
  };

  const {numberCart}=useSelector((state)=>state)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GoodRead</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">About</Link>
            </li>
            <li className="nav-item">

              <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
            </li>


          </ul>
          <form className="d-flex">
            <Link className="btn btn-primary" to="/cart">
              Cart <span className="badge badge-light">{numberCart}</span>
            </Link>
            {loggedin ?
              (<Link to="/login" className="nav-link active" aria-current="page"><button className="btn btn-outline-success" type="submit" onClick={onLogoutHandler}>LogOut</button></Link>)
              : (<Link to="/login" className="nav-link active" aria-current="page"><button className="btn btn-outline-success" type="submit">LogIn</button></Link>)}
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;