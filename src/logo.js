import React from 'react';
import './style.css';
import ogo from './newlogo.PNG';
/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
    <div className="logo">
    	<img src={ogo} alt="xpress"/>
        <a href="#">MyBlog- A Blogging Application</a>
    </div>
   )

 }

export default Logo