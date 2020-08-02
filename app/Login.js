import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class Login extends Component {
	state = {email: '', password: ''}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state)
	}
	render() {
		const { signInAuthError, auth } = this.props;
        if(auth.uid ) return <Redirect to="/" />
	    return (
	        <React.Fragment>
	            <section className="products">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
								<div className="account_box">
									<h1>Login To Add Product or View Cart</h1>
									<form onSubmit={this.handleSubmit}>
										<div className="text-center text-danger">{signInAuthError ? <p>{signInAuthError}</p> : null}</div>
										<div className="row">
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
												<label>Email</label>
												<input type="email" id="email" required placeholder="Enter Your Email" className="form-control" onChange={this.handleChange} />
											</div>
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
												<label>Password</label>
												<input type="password" id="password" required placeholder="Enter Your Password" className="form-control" onChange={this.handleChange} />
											</div>
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
												<input type="submit" value="SUBMIT" className="btn btn-lg btn-default btn-block" />
											</div>
										</div>
									</form>
								</div>
	                        </div>
	                    </div>
	                </div>
	            </section>
	        </React.Fragment>
	    )
	}
}

const mapStateToProps = (state) => {
    return {
		signInAuthError: state.auth_reducer.signInAuthError,
		auth: state.firebaseAuth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);