import axios from "axios";

const API_URL = "http://localhost:8080/";

class ApiService {
  getClubsContent() {
    return axios.get(API_URL + "clubs");
  }
  getMatchesContent() {
    return axios.get(API_URL + "matches");
  }
  getPlayersContent() {
    return axios.get(API_URL + "players");
  }
  getMatchStatsContent() {
    return axios.get(API_URL + "statisticsByMatch");
  }
  postNewMatch(form) {
    return axios.post(API_URL + "matches", form);
  }
  postNewClub(form) {
    return axios.post(API_URL + "clubs", form);
  }
  postNewPlayer(form, clubId) {
    return axios.post(API_URL + "clubs/" + clubId + "/players", form);
  }
  putClubScore(clubJSON, clubId) {
    return axios.put(API_URL + "clubs/" + clubId, clubJSON);
  }
}

export default new ApiService();
