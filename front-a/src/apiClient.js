import axios from 'axios';

const BASE_URI = 'api-test-matheus.herokuapp.com';

const client = axios.create({
 baseURL: BASE_URI,
 json: true
});

class APIClient {
  getValues = (meses) =>{
      console.log(meses);
      console.log(this.perform('get', (`/b?meses=${meses}`)));
    return this.perform('get', (`/b?meses=${meses}`));
  }

  async perform (method, resource, data) {
    return client({
      method,
      url: resource,
      data,
      headers: {
      }
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }
}

export default APIClient;