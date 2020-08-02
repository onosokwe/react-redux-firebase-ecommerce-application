import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
	return (
        <React.Fragment>
            <li><NavLink to="/">Products</NavLink></li>
            <li><NavLink to="/cart">Cart </NavLink></li>
            <li><NavLink to="/add">Add </NavLink></li>
            <li><NavLink to="/profile" className="btn btn-circle"><i className="fa fa-user">{props.profile.name}</i></NavLink></li>
            <li><button onClick={props.signOut}>Logout</button></li>
        </React.Fragment>
	)
}

const mapDispatchToProps = (dispatch) => {
    return {
		signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks); 