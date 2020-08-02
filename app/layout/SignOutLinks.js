import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
	return (
    	<React.Fragment>
    		<li><NavLink to="/">Products</NavLink></li>
	        <li><NavLink to="/login">Login</NavLink></li>
	        <li><NavLink to="/signup">Sign Up</NavLink></li>
        </React.Fragment>
	)
}

export default SignOutLinks; 