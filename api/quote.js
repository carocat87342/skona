class Quote {
  constructor(axios) {
    this.axios = axios;
  }

  getQuotes() {
    return this.axios.get('/quotes');
  }
}

export default Quote;