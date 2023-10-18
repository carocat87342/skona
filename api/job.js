class Job {
  constructor(axios) {
    this.axios = axios;
  }

  getJobs() {
    return this.axios.get('/jobs');
  }

  getJob(name) {
    return this.axios.get(`/jobs/${name}`);
  }
}

export default Job;