<template>
  <form
    @submit.prevent="submit"
    class="form-floating"
    style="margin-bottom:30px"
  >
    <div v-if="successSubmit" class="alert alert-success" role="alert">
      Match added succesfully!
    </div>
    <div v-if="failedSubmit" class="alert alert-danger" role="alert">
      There was a problem when adding the match!
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating input-group mb-3">
          <select
            required
            class="form-select"
            id="localTeam"
            aria-label="Local Team"
            v-model="form.localTeam"
          >
            <option v-for="club in clubs" :key="club.id" :value="club.name">{{
              club.name
            }}</option>
          </select>
          <label for="localTeam">Local Team</label>
          <button @click="fetchClubs" class="btn btn-danger" type="button">
            Update
          </button>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            type="number"
            class="form-control"
            id="localScore"
            placeholder="0"
            v-model="form.localTeamScore"
          />
          <label for="localScore">Local Team Score</label>
        </div>
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating input-group mb-3">
          <select
            required
            class="form-select"
            id="visitorTeam"
            aria-label="Visitor Team"
            v-model="form.visitorTeam"
          >
            <option v-for="club in clubs" :key="club.id" :value="club.name">{{
              club.name
            }}</option>
          </select>
          <label for="visitorTeam">Visitor Team</label>
          <button @click="fetchClubs" class="btn btn-danger" type="button">
            Update
          </button>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            type="number"
            class="form-control"
            id="visitorScore"
            placeholder="0"
            v-model="form.visitorTeamScore"
          />
          <label for="visitorScore">Visitor Team Score</label>
        </div>
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            type="date"
            class="form-control"
            id="date"
            placeholder="01/01/2000"
            v-model="form.date"
          />
          <label for="date">Date</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            class="form-control"
            id="stadium"
            placeholder="stadium"
            v-model="form.stadium"
          />
          <label for="stadium">Stadium</label>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-danger">
      Submit New Match
    </button>
  </form>
</template>

<script>
import ApiService from "../services/api.service";

export default {
  name: "MatchForm",
  data() {
    return {
      form: {
        date: "",
        stadium: "",
        localTeam: "",
        visitorTeam: "",
        localTeamScore: "",
        visitorTeamScore: "",
      },
      clubs: [],
      apiMessage: "",
      successSubmit: false,
      failedSubmit: false,
    };
  },
  mounted() {
    this.fetchClubs();
  },
  methods: {
    submit() {
      this.successSubmit = false;
      this.failedSubmit = false;

      ApiService.postNewMatch(this.form)
        .then((res) => {
          //Perform Success Action
          this.updateClubsScore(
            this.form.localTeam,
            this.form.visitorTeam,
            this.form.localTeamScore,
            this.form.visitorTeamScore
          );
          this.apiMessage = res.data;
          this.form = {
            date: "",
            stadium: "",
            localTeam: "",
            visitorTeam: "",
            localTeamScore: "",
            visitorTeamScore: "",
          };
          this.successSubmit = true;
        })
        .catch((error) => {
          // error.response.status Check status code
          this.apiMessage = error.toString();
          this.failedSubmit = true;
        })
        .finally(() => {
          console.log(this.apiMessage);
        });
    },
    fetchClubs() {
      ApiService.getClubsContent().then(
        (response) => {
          this.clubs = response.data;
        },
        (error) => {
          this.error = error.toString();
        }
      );
    },
    getClubJSON(clubName) {
      return this.clubs.filter((club) => club.name === clubName)[0];
    },
    updateClubsScore(localTeam, visitorTeam, localTeamScore, visitorTeamScore) {
      let localTeamJSON = this.getClubJSON(localTeam);
      let visitorTeamJSON = this.getClubJSON(visitorTeam);
      if (localTeamScore > visitorTeamScore) {
        localTeamJSON.gamesWon += 1;
        localTeamJSON.points += 3;
        visitorTeamJSON.gamesLost += 1;
      } else if (localTeamScore < visitorTeamScore) {
        visitorTeamJSON.gamesWon += 1;
        visitorTeamJSON.points += 3;
        localTeamJSON.gamesLost += 1;
      } else {
        localTeamJSON.gamesTied += 1;
        localTeamJSON.points += 1;
        visitorTeamJSON.gamesTied += 1;
        visitorTeamJSON.points += 1;
      }
      ApiService.putClubScore(localTeamJSON, localTeamJSON.id)
        .then((response) => {
          this.apiMessage = response.data;
        })
        .catch((error) => {
          this.apiMessage = error.toString();
          this.failedSubmit = true;
        })
        .finally(() => {
          console.log(this.apiMessage);
        });

      ApiService.putClubScore(visitorTeamJSON, visitorTeamJSON.id)
        .then((response) => {
          this.apiMessage = response.data;
        })
        .catch((error) => {
          this.apiMessage = error.toString();
          this.failedSubmit = true;
        })
        .finally(() => {
          console.log(this.apiMessage);
        });
    },
  },
};
</script>
