<template>
  <h1>Results</h1>
  <br />
  <div v-if="error">{{ error }}</div>
  <div v-if="matches.length" class="container">
    <div
      v-for="match in matches"
      :key="match.idGame"
      class="card text-center bg-light"
      style="margin-bottom:20px"
    >
      <div class="card-header bg-dark text-white">
        <h5>{{ match.date }}</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ match.stadium }}</h5>
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>{{ match.localTeam }}</h5>
            </div>
            <div class="col-6">
              <h2>{{ match.localTeamScore }} : {{ match.visitorTeamScore }}</h2>
            </div>
            <div class="col">
              <h5>{{ match.visitorTeam }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import ApiService from "../services/api.service";
export default {
  name: "Matches",
  data() {
    return {
      matches: [],
      error: "",
    };
  },
  mounted() {
    ApiService.getMatchesContent().then(
      (response) => {
        this.matches = response.data;
      },
      (error) => {
        this.error = error.toString();
      }
    );
  },
};
</script>
