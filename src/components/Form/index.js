import React, { Component } from 'react';
import styles from './Form.module.css';
import TextField from '../TextField';


class Form extends Component {

  state = {
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    phone: '',
    firstNameValid: true,
    lastNameValid: true,
    addressValid: true,
    address2Valid: true,
    phoneValid: ''
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

  phoneChangeHandler = e => {    
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    let val = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');    

    let valid = val !== '';
    let change = {};
    change["phone"] = val;
    change['phoneValid'] = valid;
    this.setState(change); 
  }

  submitHandler = () => {
    var inValid = !this.state.firstName
                || !this.state.lastName
                || !this.state.address;
    if (inValid) {
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
          <TextField 
            name='phone' 
            label='phone' 
            onChange={this.phoneChangeHandler} 
            value={this.state.phone}
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