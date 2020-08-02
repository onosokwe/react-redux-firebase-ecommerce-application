import React from 'react';
import img1 from '../assets/1.jpg';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
	return (
		<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6">
			<Link to={'/product/' + product.id} style={{display:'block', textDecoration:'none', width: '100%'}} >
			    <div className="product">
			        <img src={img1} className="img-fluid" alt={product.title} />
			        <div className="product_detail">
			            <h4 data-toggle="tooltip" data-placement="top" title={product.title}> {product.title}</h4>
			            <small> {product.quantity} items in stock</small>
			            <p><span> {product.price} </span></p>
			            <button className="btn btn-block btn-sm">ADD TO CART</button>
			        </div>
			    </div>
		    </Link>
		</div>
	)
}

export default Product;