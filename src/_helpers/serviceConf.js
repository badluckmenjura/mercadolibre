import axios from "axios";

const instance = axios.create({
  baseURL: window['runConfig'].apiUrl
});

export {
  instance
}