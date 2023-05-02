import axios from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4475a5a850ce40e696c63e92363b0a84",
  },
});
