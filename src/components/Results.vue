<template>
  <h1>Results</h1>
  <br />
  <div v-if="error">{{ error }}</div>
  <div v-if="matches.length" class="container">
    <div
      v-for="match in matches"
      :key="match.idGameMatch"
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
              <h2>{{ match.localScore }} : {{ match.visitorScore }}</h2>
            </div>
            <div class="col">
              <h5>{{ match.visitorTeam }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="collapse"
          :data-bs-target="'#detailsCollapse' + match.idGameMatch"
          aria-expanded="false"
          aria-controls="detailsCollapse"
        >
          Details
        </button>
        <div class="collapse" :id="'detailsCollapse' + match.idGameMatch">
          <div class="container">
            <br />
            <div class="row">
              <div class="col">
                <h5>Local Scorers: {{ match.localTeam }}</h5>
                <ul class="list-group list-group-flush">
                  <div
                    v-for="scorer in getScorersList(
                      match.idGameMatch,
                      match.localTeam
                    )"
                    :key="scorer.idPlayerMatch"
                  >
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {{ scorer.player }}
                      <span class="badge bg-danger rounded-pill">{{
                        scorer.goals
                      }}</span>
                    </li>
                  </div>
                </ul>
              </div>
              <div class="col-6">
                <h6>Arbiter: {{ match.arbiter }}</h6>
                <h6>League: {{ match.league }}</h6>
              </div>
              <div class="col">
                <h5>Visitor Scorers: {{ match.visitorTeam }}</h5>
                <ul class="list-group list-group-flush">
                  <div
                    v-for="scorer in getScorersList(
                      match.idGameMatch,
                      match.visitorTeam
                    )"
                    :key="scorer.idPlayerMatch"
                  >
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {{ scorer.player }}
                      <span class="badge bg-danger rounded-pill">{{
                        scorer.goals
                      }}</span>
                    </li>
                  </div>
                </ul>
              </div>
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
      matchStats: [],
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
    ApiService.getMatchStatsContent().then(
      (response) => {
        this.matchStats = response.data;
      },
      (error) => {
        this.error = error.toString();
      }
    );
  },
  methods: {
    getScorersList(idGameMatch, team) {
      return this.matchStats.filter(
        (scorer) => scorer.idGameMatch == idGameMatch && scorer.team == team
      );
    },
  },
};
</script>
