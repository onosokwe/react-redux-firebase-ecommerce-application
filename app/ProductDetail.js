import React from 'react';
import img1 from '../assets/1.jpg';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Loading from './Loading';

const ProductDetail = (ownProps) => {
    const { product } = ownProps;
    if(product){
        return (
            <React.Fragment>
                <section className="thumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-md-12">
                                <h1> {product.title} </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container cart">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="cart_items">
                                <div className="product">
                                    <img src={img1} className="img-fluid" alt={product.title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="cart_summary">
                                <h1>{product.title} </h1>
                                <h3>Price: ₦ {product.price}</h3> 
                                <p>{product.description}</p>
                                <button className="btn btn-block btn-success">ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
    else {
	   return (
            <Loading message="Loading product..." /> 
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const products = state.firestoreData.data.products;
    const product = products ? products[id] : null;
    return {
        product: product
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection: 'products'}
    ])
)(ProductDetail);