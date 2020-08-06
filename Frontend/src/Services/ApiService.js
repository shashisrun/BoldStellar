import axios from "axios";
import CookieService from './CookieService';

const cookie = new CookieService;

export default axios.create({
  baseURL: "http://localhost:8000",
  responseType: "json",
  headers: {
    post: {        // can be common or any other method
      Accept: 'application/json',
      // Authorization: cookie.get('access_token'),
      headers: {
        'X-Requested-With': XMLHttpRequest
      }
    }
  }
});
