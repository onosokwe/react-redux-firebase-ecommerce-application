import React, { Component } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Cart extends Component {
    render() {
        const { auth } = this.props;
        if(!auth.uid ) return <Redirect to="/login" />

        return (
            <React.Fragment>
                <section className="thumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container cart">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="cart_items">
                                <h1>Cart Items <small>(2 items in cart)</small></h1>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="product">
                                            <img src={img1} className="img-fluid" alt="wax ankara material" />
                                            <div className="product_detail">
                                                <h4 data-toggle="tooltip" title="Classy Shoes for Men">Classy Shoes for Men</h4>
                                                <p>NGN 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="product">
                                            <img src={img2} className="img-fluid" alt="wax ankara material" />
                                            <div className="product_detail">
                                                <h4 data-toggle="tooltip" title="Classy Shoes for Men">Classy Shoes for Men</h4>
                                                <p>NGN 10,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="cart_summary">
                                <h1>Cart Summary</h1>
                                <h3>Total: NGN 450,000</h3>         
                                <form>
                                    <div className="form-group">
                                        <label>Delivery Address</label>
                                        <textarea className="form-control" cols="33" rows="2"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-success btn-block" name="" value="PAY" />
                                    </div>
                                </form>
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
        products: state.firestoreData.ordered.products,
        auth: state.firebaseAuth.auth
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection: 'products'}
    ])
)(Cart);