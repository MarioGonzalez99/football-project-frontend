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
  getClasificationContent() {
    return axios.get(API_URL + "statistics/team/matchesByLeague/1");
  }
  getPositionsContent() {
    return axios.get(API_URL + "positions");
  }
  postNewMatch(form) {
    return axios.post(API_URL + "matches", form);
  }
  postNewClub(form) {
    return axios.post(API_URL + "clubs", form);
  }
  postNewPlayer(form) {
    return axios.post(API_URL + "players", form);
  }
  putClubScore(clubJSON, clubId) {
    return axios.put(API_URL + "clubs/" + clubId, clubJSON);
  }
}

export default new ApiService();
