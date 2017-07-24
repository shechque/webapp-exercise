import React, { Component } from 'react';
import CheckBox from './Checkbox';
import styles from '../styles/job_list_item.scss';

class JobListItem extends Component {

  render() {
    return (
      <CheckBox
        className={styles.job_list_item}
        checked={this.props.checked}
        onChange={this.props.onChange}>
            <span className={styles.title}>
                {this.props.title}
            </span>
            <span className={styles.count}>
                {this.props.count}
            </span>
      </CheckBox>
    );
  }
}

export default JobListItem;
