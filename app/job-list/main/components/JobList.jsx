import React, { Component } from 'react';
import CheckBox from './Checkbox';
import JobListItem from './JobListItem';

import styles from '../styles/job_list.scss';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: this.props.jobs,
      isCollapse: false,
    };
  }

  componentWillReceiveProps(newProps) {
    // 组件重新渲染了，属性可能有改变，同步属性到状态
    if ('jobs' in newProps) {
      this.setState({
        jobs: newProps.jobs,
      });
    }
  }

  // computed state
  isCheckedAll() {
    return this.state.jobs.every(job => job.isChecked);
  }

  totalJob() {
    return this.state.jobs.reduce((total, curJob) => total + curJob.count, 0);
  }

  _onSelectAll() {
    const jobs = this.state.jobs.map(job => {
      return {
        ...job,
        isChecked: !this.isCheckedAll(),
      };
    });

    this.setState({
      jobs,
    });
  }

  _onCheckItem(index, isChecked) {
    const jobs = this.state.jobs.slice();
    jobs[index].isChecked = isChecked;
    this.setState({
      jobs,
    });
  }

  _renderJobListItem(jobs) {
    return jobs.map((job, index) => {
      return (
        <li key={index}>
          <JobListItem
            checked={job.isChecked}
            title={job.title}
            count={job.count}
            onChange={() => this._onCheckItem(index, !job.isChecked)} />
        </li>
      );
    });
  }

  _onCollapse() {
    this.setState({
      isCollapse: !this.state.isCollapse,
    });
  }

  render() {
    return (
      <div className={styles.job_list}>
        <header>
          <CheckBox
            onChange={() => this._onSelectAll()}
            checked={this.isCheckedAll()}>
            <span className={styles.department}>
              {this.props.department}
            </span>
          </CheckBox>
          <span className={this.state.isCollapse ? styles.arrow_up : styles.arrow_down} onClick={() => this._onCollapse()}></span>
          <span className={styles.count}>{this.totalJob()}</span>
        </header>
        {this.state.isCollapse
          ? null
          : <ul>
            {this._renderJobListItem(this.state.jobs)}
          </ul>}
      </div>
    );
  }
}

export default JobList;
