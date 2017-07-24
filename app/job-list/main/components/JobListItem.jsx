import React, { Component } from 'react';
import CheckBox from './Checkbox';
import styles from '../styles/job_list_item.scss';

class JobListItem extends Component {

  render() {

    const { checked, title, count, onChange } = this.props;

    return (
      <CheckBox
        className={styles.job_list_item}
        checked={checked}
        onChange={onChange}>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.count}>
          {count}
        </span>
      </CheckBox>
    );
  }
}

export default JobListItem;
