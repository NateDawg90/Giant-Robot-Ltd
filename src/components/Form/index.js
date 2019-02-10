import React, { Component } from 'react';
import styles from './Form.module.css';
import TextField from '../TextField';


class Form extends Component {

  state = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    firstNameValid: true,
    lastNameValid: true,
    addressValid: true,
    address2Valid: true
  }

  changeHandler = e => {
    let name = e.target.name;
    let val = e.target.value;
    let valid = val !== '';
    let change = {};
    change[name] = val;
    change[name + 'Valid'] = valid;
    this.setState(change); 
  }

  submitHandler = () => {
    var disableButton = !this.state.firstName
                || !this.state.lastName
                || !this.state.address;
    if (disableButton) {
      alert('Some fields are not valid!');
    } else {
      alert('All done!');

    }
  }

  render() {
    var container = window.isMobile ? styles.mobileContainer : styles.webContainer;
    var formContainer = window.isMobile ? styles.mobileFormContainer : styles.webFormContainer;
    return (
      <div className={container}>
        <div className={formContainer}>
          <TextField 
            name='firstName' 
            label='First Name' 
            onChange={this.changeHandler} 
            value={this.state.firstName} 
            valid={this.state.firstNameValid} 
          />
          <TextField 
            name='lastName' 
            label='Last Name' 
            onChange={this.changeHandler} 
            value={this.state.lastName} 
            valid={this.state.lastNameValid} 
          />
          <TextField 
            name='address' 
            label='Address' 
            onChange={this.changeHandler} 
            value={this.state.address}
            valid={this.state.addressValid}
          />
          <TextField 
            name='address2' 
            label='Address 2' 
            onChange={this.changeHandler} 
            value={this.state.address2}
            valid={true}
          />
          <div className={styles.buttonContainer}>
            <div className={styles.submitButton}
            onClick={this.submitHandler}>
              <div>Next</div>
              <i className="fas fa-arrow-right ml2"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;