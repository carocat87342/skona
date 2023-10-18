import Common from './common';
import Job from './job';
import CaseStudy from './caseStudy';
import Page from './page';
import Contact from './contact';
import Post from './post';
import Quote from './quote';

class AxiosManager {
  constructor(instance, hostname) {
    this.instance = instance;
    this.baseUrl = `${hostname}/skona/v1`;
  }

  getHeaders() {
    return {
      headers: {
        // headers
      }
    };
  }

  async createRequest(method, url, params) {
    const headers = this.getHeaders();
    try {
      const response = await this.instance[method](this.baseUrl + url, params, headers);
      if (response.data) { return response.data; }

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  get(url, params) {
    return this.createRequest('get', url, { params });
  }

  post(url, data) {
    return this.createRequest('post', url, data);
  }

  put(url, data) {
    return this.createRequest('put', url, data);
  }
}

class Api {
  constructor(hostname, axios) {
    this.axios = new AxiosManager(axios, hostname);
    this.common = new Common(this.axios);
    this.page = new Page(this.axios);
    this.post = new Post(this.axios);
    this.contact = new Contact(this.axios);
    this.job = new Job(this.axios);
    this.caseStudy = new CaseStudy(this.axios);
    this.quote = new Quote(this.axios);
  }
}

export default Api;