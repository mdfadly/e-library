import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Footer from './components/Footer';
import MainNavigations from './Navigations/MainNavigations'
class App extends Component {

  render() {
    return (
      <MainNavigations />
    );
  }
}

export default App;