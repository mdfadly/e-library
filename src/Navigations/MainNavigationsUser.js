import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"

import HeaderUser from '../components/HeaderUser';
import SideBarUser from '../components/SideBarUser';
import Content from '../components/Content';
import Footer from '../components/Footer';
import ProfileUser from '../Screens/ProfileUser/ProfileUser';
import Cart from '../Screens/Cart/Cart';
import Wishlist from '../Screens/Wishlist/Wishlist';

class MainNavigationsUser extends Component {
    render() {
        return (
            <Router>
                <div className="main_container">
                    <div className="col-md-3 left_col">
                        <Route path='/'>
                            <SideBarUser />
                        </Route>
                    </div>
                    <div className="top_nav">
                        <Route path='/'>
                            <HeaderUser />
                        </Route>
                    </div>
                    <Route path='/indexUser'>
                        <Content />
                    </Route>
                    <Route path='/profileUser'>
                        <ProfileUser />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                    <Route path='/wishlist'>
                        <Wishlist />
                    </Route>
                    <Route path='/'>
                        <Footer />
                    </Route>
                </div>
            </Router>
        )
    }
}

export default MainNavigationsUser
