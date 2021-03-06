import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            condition: false,
        };
    }

    render() {
        const { condition } = this.state;
        const mystyle = {
            color: "#495464 !important",
            cursor: 'pointer',
        };
        const handleToggle = () => {
            if (condition) {
                document.body.classList.remove('nav-sm');
                document.body.classList.add('nav-md');
            } else {
                document.body.classList.remove('nav-md');
                document.body.classList.add('nav-sm');
            }
            this.setState({ condition: !condition })
        };
        return (
            <nav className="navbar navbar-expand navbar-dark nav_menu shadow">
                <ul className="navbar-nav">
                    <li className="nav-item pr-3" >
                        <a id="menu_toggle" onClick={handleToggle} style={mystyle}><i className="fa fa-bars"></i></a>
                    </li>
                    <li className="nav-item dropdown open">
                        <a href="" className="dropdown-toggle info-number" id="navbarDropdown2" data-toggle="dropdown"
                            aria-expanded="false" style={mystyle}>
                            Categories
                            </a>
                        <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown2">
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="message">
                                        Action
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="message">
                                        Novel
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="message">
                                        Fiksi
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <div className="text-center">
                                    <a className="dropdown-item">
                                        <strong>See All Categories</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li role="presentation" className="nav-item dropdown open" style={{ paddingLeft: '15px', paddingTop: '8px' }}>
                        <a href="" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown"
                            aria-expanded="false" style={mystyle}>
                            <i className="fa fa-bell fa-lg"></i>
                        </a>
                        <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="image"><img src="assets/images/user.png" alt="Profile Image" /></span>
                                    <span>
                                        <span>John Smith</span>
                                    </span>
                                    <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="image"><img src="assets/images/user.png" alt="Profile Image" /></span>
                                    <span>
                                        <span>John Smith</span>

                                    </span>
                                    <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="image"><img src="assets/images/user.png" alt="Profile Image" /></span>
                                    <span>
                                        <span>John Smith</span>

                                    </span>
                                    <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="dropdown-item">
                                    <span className="image"><img src="assets/images/user.png" alt="Profile Image" /></span>
                                    <span>
                                        <span>John Smith</span>

                                    </span>
                                    <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <div className="text-center">
                                    <a className="dropdown-item">
                                        <strong>See All Alerts</strong>
                                        <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" style={{ paddingLeft: '15px' }}>
                        <form className="form-inline pt-2">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"
                                    style={{ backgroundColor: 'white', border: 0, borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px', }} />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar m-0" type="submit"
                                        style={{ backgroundColor: 'white', border: 0, borderTopRightRadius: '25px', borderBottomRightRadius: '25px', }}>
                                        <i className="fa fa-search pr-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </li>
                </ul>
            </nav >
        )
    }
}