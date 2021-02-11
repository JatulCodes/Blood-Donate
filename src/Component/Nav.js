import React from 'react';
import {Link} from 'react-router-dom';

const Navbar =() => {
    return(
        <React.Fragment>
           <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> 
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span> 
                    <span className="icon-bar"></span>                        
                </button> 
                <Link to="/" className="navbar-brand">Blood Donate</Link>
                </div> 
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                   <li> <Link to="/">HOME</Link></li> 
                    <li> <Link to="/ELIGIBILITY">ELIGIBILITY</Link></li> 
                    <li> <Link to="/Compability"> COMPABILITY</Link></li>
                    <li><Link to="/Bloodfacts"> BLOODFACTS</Link></li>
                    <li><Link to="/Donarregister"> DONARREGISTER</Link></li>
                    <li><Link to="/Searchdonar"> SEARCHDONAR</Link></li>
                    <li><Link to="/bookinglist"> DONARLIST </Link></li>
                </ul>
              
                </div> 
            </div>
            </nav>
        </React.Fragment>
    )
} 

export default Navbar;