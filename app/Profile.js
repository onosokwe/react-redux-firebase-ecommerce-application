import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Profile extends Component {  
    render() {
        const { auth } = this.props;
        if(!auth.uid ) return <Redirect to="/login" />

        return (
            <React.Fragment>
                <section className="thumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-md-12">
                                <h1>User Profile</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products">
                    <div className="container item-lists">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                
                                
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
)(Profile);