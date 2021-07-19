import axios from "axios";

const API_URL = "http://localhost:3000/";

class ApiService {
  getClubsContent() {
    return axios.get(API_URL + "clubs");
  }
  getMatchesContent() {
    return axios.get(API_URL + "matches");
  }
}

export default new ApiService();
