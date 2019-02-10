import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
      
    function detectmob() { 
      if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
          return true;
        }
    else {
        return false;
      }
    }
    window.isMobile = detectmob();
  }
  render() {
    return (
      <div className={styles.appContainer}>
        <Sidebar />
        <Form />
      </div>
    );
  }
}

export default App;
