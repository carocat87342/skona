class CaseStudy {
  constructor(axios) {
    this.axios = axios;
  }

  getCaseStudies({ limit, page, category, customPagination }) {
    return this.axios.get('/case-studies', { limit, page, category, customPagination });
  }

  getCategories() {
    return this.axios.get('/case-study-scopes');
  }

  getCaseStudy(id) {
    return this.axios.get(`/case-studies/${id}`);
  }
}

export default CaseStudy;