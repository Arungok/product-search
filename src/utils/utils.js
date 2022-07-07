import axios from "axios";
// https://www.blibli.com/backend/search/products?searchTerm=samsung&start=0&itemPerPage=24

export function productSearch(json) {
  return axios.get("http://192.168.0.103:8080/backend/search/products", {
    params: json
  });
}