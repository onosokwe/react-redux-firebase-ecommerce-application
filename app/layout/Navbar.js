import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icon.png';
import { connect } from 'react-redux';

import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks profile={profile} />;
	return (
		<nav className="navbar navbar-expand-lg">
            <div className="container">
              <NavLink to="/" className="navbar-brand"><img src={logo} alt="logo" width="auto" height="20" /></NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav navbar-right">
                    	{auth.isLoaded && links }
                    </ul>
                </div>
            </div>
        </nav>
	)
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebaseAuth.auth,
        profile: state.firebaseAuth.profile
    }
}

export default connect(mapStateToProps)(Navbar); 