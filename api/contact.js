import axios from 'axios';

class Contact {
  constructor(axios) {
    this.axios = axios;
  }

  detectLocation() {
    return axios.get('/detect-location').catch((error) => {
      console.warn(error);
    });
  }
}

export default Contact;