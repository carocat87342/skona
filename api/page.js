class Page {
  constructor(axios) {
    this.axios = axios;
  }

  getHome() {
    return this.axios.get('/home-page');
  }

  getContact() {
    return this.axios.get('/contact-page');
  }

  getWorkData() {
    return this.axios.get('/work-page');
  }

  getBlogData() {
    return this.axios.get('/blog-page');
  }

  getCareersData() {
    return this.axios.get('/careers-page');
  }

  getServicesData() {
    return this.axios.get('/services-page');
  }

  getAboutData() {
    return this.axios.get('/about-page');
  }
}

export default Page;