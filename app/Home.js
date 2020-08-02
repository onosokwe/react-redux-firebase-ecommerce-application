import React, { Component } from 'react';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Home extends Component {
    render() {
        const { products } = this.props;
        return (
            <React.Fragment>
                <section className="thumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-md-12">
                                <h1>E-commerce App</h1>
                                <p>E-commerce Application built with React, Redux, NodeJS with Express by Devamplify Students. Payment integration supplied by Paystack and Rave Payments.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <article className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 aside">
                            <div className="sidebar">
                                <h3>Filter by Price</h3>
                                <ul>
                                    <label><input type="checkbox" /> Any</label>
                                    <label><input type="checkbox" /> 0 - 5,000</label>
                                    <label><input type="checkbox" /> 5,000 - 10,000 </label>
                                    <label><input type="checkbox" /> 10,000 - 50,000</label>
                                    <label><input type="checkbox" /> More than 50,000</label>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 products">
                            <div className="container item-lists">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <h1>All Available Products</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <ProductList products={products} />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestoreData.ordered.products
    }
}

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        {collection: 'products'}
    ])
)(Home);