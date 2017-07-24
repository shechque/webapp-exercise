import React, { Component } from 'react';
import styles from '../styles/checkbox.scss';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
    };
  }

  componentWillReceiveProps(newProps) {
    if ('checked' in newProps) {
      this.setState({
        checked: newProps.checked,
      });
    }
  }

  _onChange() {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(this.state.checked);
  }

  render() {
    return (
      <label className={[styles.label_checkbox, this.props.className].join(' ')}>
        <input
          className={styles.checkbox}
          name={this.props.name}
          onChange={() => this._onChange()}
          checked={this.props.checked}
          type="checkbox" />
        {this.props.children}
      </label>
    );
  }
}

export default Checkbox;
