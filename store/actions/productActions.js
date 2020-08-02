const addProduct = (product) => {
  	return (dispatch, getState, {getFirebase, getFirestore}) => {
  		// make async call to database
  		const firestore = getFirestore();
  		firestore.collection('products').add({
  			...product,
  			createdAt: new Date()
  		}).then(() => {
  			dispatch({type: 'ADD_PRODUCT', product: product});
  		}).catch((err) => {
			dispatch({type: 'CREATE_PRODUCT_ERROR', err})
  		})
  	}
}

export default addProduct;