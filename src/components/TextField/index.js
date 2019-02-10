import React, { Component } from 'react';
import styles from './TextField.module.css';

class TextField extends Component {
  state = {
    idle: true
  }

  changeHandler = e => {
    this.setState({idle: false})
    this.props.onChange(e);
  }
  
  render() {
    var fieldStyle;
    if (this.state.idle) {
      fieldStyle = styles.idleField;
    } else if (this.props.valid) {
      fieldStyle = styles.validField;
    } else {
      fieldStyle = styles.invalidField;
    }

    return (
      <div className={styles.container}>
        <div className={styles.label}>
          {this.props.label.toUpperCase()}
        </div>
        <input className={fieldStyle} name={this.props.name} onChange={this.changeHandler} value={this.props.value}/>
      </div>
    )
  }
}

export default TextField;