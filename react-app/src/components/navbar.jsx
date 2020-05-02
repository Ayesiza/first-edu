import React, { Component } from 'react';

class Navbar extends Component {
    
    render() { 
        return ( 
            <div>
             <nav className="  navbar navbar-expand-lg navbar-light bg-secondary ">
        <a style={{color:'orange'}} className="navbar-brand " href="">Hi-Five Designers</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <button className="btn btn-secondary btn-m m-2 ">Home</button>
             
            </li>
            <li className="nav-item">
            <button className="btn btn-secondary btn-m m-2 ">Link</button>
            </li>
           
           
          </ul>
          <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
          <button className="btn btn-secondary btn-m m-2 ">Signup</button>
          {/* <a class="nav-link" href="#">Signup</a> */}
          </li>
          </ul>
        </div>
      </nav>
      </div>
         );
    }
}
 
export default Navbar;