class Common {
  constructor(axios) {
    this.axios = axios;
  }

  getGeneralData() {
    return this.axios.get('/general-data');
  }

  getSocialLinks() {
    return this.axios.get('/social-links');
  }
}

export default Common;