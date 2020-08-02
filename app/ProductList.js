import React from 'react';
import Product from './Product';
import Loading from './Loading';

const ProductList = ({products}) => {
	if (products) {
		return (
	        <React.Fragment>
	            {products && products.map(product => {
	                return <Product product={product} key={product.id} /> 
	                })
	            }      
	        </React.Fragment>
	    )    
	} else {
		return (
			<Loading message="Fetching products..." /> 
		)
	}
}

export default ProductList;