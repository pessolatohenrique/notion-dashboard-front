import axios from "axios";

export function initializeAxios() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  // Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
  // See below for an example using Custom instance defaults instead.
  //   axios.defaults.headers.common["Authorization"] = "123456";

  axios.defaults.headers.post["Content-Type"] = "application/json";
}
