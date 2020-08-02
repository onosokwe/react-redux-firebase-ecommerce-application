import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// pages
import Navbar from './app/layout/Navbar';
import Footer from './app/layout/Footer';
// components
import Home from './app/Home';
import ProductDetail from './app/ProductDetail';
import Cart from './app/Cart';
import Login from './app/Login';
import Signup from './app/Signup';
import Profile from './app/Profile';
import AddProduct from './app/AddProduct';
// style
import './App.css';

class App extends Component {
	render(){
		return (
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/product/:id" component={ProductDetail} />
					<Route path="/cart" component={Cart} />
					<Route path="/login" component={Login} />
					<Route path="/add" component={AddProduct} />
					<Route path="/signup" component={Signup} />
					<Route path="/profile" component={Profile} />
					<Redirect from="*" to="/" />
				</Switch>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
