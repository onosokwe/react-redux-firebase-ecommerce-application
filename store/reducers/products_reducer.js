const initialState = {
	products: []
}

const ProductsReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PRODUCT':
			console.log('product added', action.product)
			return state;
		case 'CREATE_PRODUCT_ERROR':
			console.log('create_product_error', action.err)
			return state;
		default:
			return state;
	}
}

export default ProductsReducer;