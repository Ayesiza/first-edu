import React, { Component } from 'react';

class Navbar extends Component {
    
    render() { 
        return ( 
            <div>
             <nav class="  navbar navbar-expand-lg navbar-light bg-secondary ">
        <a style={{color:'orange'}} class="navbar-brand " href="">Hi-Five Designers</a>
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <button className="btn btn-secondary btn-m m-2 ">Home</button>
             
            </li>
            <li class="nav-item">
            <button className="btn btn-secondary btn-m m-2 ">Link</button>
            </li>
           
           
          </ul>
          <ul class="navbar-nav ml-auto">
          <li class="nav-item ">
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