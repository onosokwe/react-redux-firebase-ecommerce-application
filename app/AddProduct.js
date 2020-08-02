import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import addProduct from '../store/actions/productActions';

class AddProduct extends Component { 
    state = {
        title:'', price: null, description: '', category: '', quantity: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state)
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid ) return <Redirect to="/login" />
        return (
            <React.Fragment>
                <section className="thumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-md-12">
                                <h1>Add Product</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="account_box" style={{marginTop: 30, paddingTop: 20}}>
                                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="title">Product Title</label>
                                            <input type="text" required id="title" placeholder="Enter Product Title" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="category">Product Category</label>
                                            <input type="text" required id="category" placeholder="Enter Product Category" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="category">Product Price</label>
                                            <input type="number" required id="price" placeholder="Enter Product Price" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="quantity">Product Quantity</label>
                                            <input type="number" required id="quantity" placeholder="Enter Product Quantity" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="image">Product Image</label>
                                            <input type="file" id="image" placeholder="Enter Product Image" className="form-control" onChange={this.handleChange} />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
                                            <label htmlFor="description">Product Description</label>
                                            <textarea id="description" required className="form-control" cols="33" row="2" placeholder="Describe the Product" onChange={this.handleChange} ></textarea>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="submit" value="SUBMIT" className="btn btn-lg btn-success btn-block" />
                                        </div>
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
        auth: state.firebaseAuth.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);