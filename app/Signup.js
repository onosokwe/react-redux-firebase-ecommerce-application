import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../store/actions/authActions';

class Signup extends Component {
	state = {
		name: '', email: '', password: '', phone: '', address: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state)
	}
	render() {
		const { signUpAuthError, auth } = this.props;
        if(auth.uid ) return <Redirect to="/" />
	    return (
	        <React.Fragment>
	            <section className="products">
	                <div className="container">
	                    <div className="row">
	                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
								<div className="account_box">
									<h1>Sign Up To Add Product or View Cart</h1>
									<form onSubmit={this.handleSubmit}>
										<div className="text-center text-danger">{signUpAuthError ? <p>{signUpAuthError}</p> : null}</div>
										<div className="row">
											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-group">
												<label>Name</label>
												<input type="text" required id="name" onChange={this.handleChange} placeholder="Enter Your Name" className="form-control" />
											</div>
											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-group">
												<label>Email</label>
												<input type="email" required id="email" onChange={this.handleChange} placeholder="Enter Your Email" className="form-control" />
											</div>
											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-group">
												<label>Phone Number</label>
												<input type="tel" required id="phone" maxLength="11" onChange={this.handleChange} placeholder="Enter Your Phone Number" className="form-control" />
											</div>
											<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-group">
												<label>Password</label>
												<input type="password" required id="password" onChange={this.handleChange} placeholder="Enter Your Password" className="form-control" />
											</div>
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
												<label>Shipping Address</label>
												<textarea id="address" onChange={this.handleChange} required placeholder="Enter Your Shipping Address" cols="33" row="2" className="form-control"></textarea>
											</div>
											<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
												<input type="submit" value="SUBMIT" className="btn btn-lg btn-success btn-block" />
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
    	signUpAuthError: state.auth_reducer.signUpAuthError,
		auth: state.firebaseAuth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
		signUp: (newGuy) => dispatch(signUp(newGuy))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);