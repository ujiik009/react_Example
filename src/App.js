import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header currentUser="apirat" isLoggedIn={true}/>
        <Header currentUser="ball" isLoggedIn={false}/>
        <Header/>
        <Header/>
        <div>Hello</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
