import React, { PureComponent } from 'react';

import JobList from '../components/JobList';

import styles from '../styles/app.scss';

const mockData = [
  {
    department: '工程研发部门',
    jobs: [
      { title: 'Mac开发工程师', count: 9 },
      { title: 'iOS App测试工程师', count: 17 },
      { title: 'Android远程控制工程师', count: 61 },
      { title: 'Web前端工程师', count: 31 },
      { title: 'Android多媒体软件开发工程师', count: 2 },
    ],
  },
  {
    department: '产品设计部门',
    jobs: [
      { title: '网页设计师', count: 47 },
      { title: 'ID/工业设计师', count: 39 },
      { title: '视觉设计师/GUI界面设计师', count: 42 },
      { title: '平面设计师', count: 8 },
    ],
  },
];

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      jobList: this._initJobData(mockData),
    };
  }

  _onClearAll() {
    this.setState({
      jobList: this._initJobData(this.state.jobList),
    });
  }

  _initJobData(jobList) {
    return jobList.map(jobList => ({
      ...jobList,
      jobs: jobList.jobs.map(job => ({ ...job, isChecked: false })),
    }));
  }

  _renderJobList(jobList) {

    return jobList.map((jobListItem, index) => (
      <div key={index}>
        <JobList department={jobListItem.department} jobs={jobListItem.jobs} />
      </div>
    ));
  }

  render() {
    return (
      <div id="jobListRoot" className={styles.job_list}>
        <header className={styles.header}>
          <h1 className={styles.title}>招聘职位</h1>
          <span className={styles.clear_btn} onClick={() => this._onClearAll()}>清除</span>
        </header>

        <section>
          {this._renderJobList(this.state.jobList)}
        </section>
      </div>
    );
  }
}
