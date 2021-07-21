<template>
  <h1>Clubs</h1>
  <br />
  <div v-if="error">{{ error }}</div>
  <div v-if="clubs.length" class="clubs-table">
    <div class="row row-cols-2">
      <div v-for="club in clubs" :key="club.idTeam" class="container">
        <div class="col">
          <div class="card text-center">
            <div
              class="card-header text-white bg-dark rounded-3"
              data-bs-toggle="collapse"
              :data-bs-target="'#Card' + club.idTeam"
              aria-expanded="false"
              aria-controls="collapseExample"
              style="cursor:pointer;"
            >
              {{ club.name }}
            </div>
            <div :id="'Card' + club.idTeam" class="collapse">
              <div class="card-body">
                <h5 class="card-title">Trainer</h5>
                <p>{{ club.trainer }}</p>
                <img
                  v-if="club.image"
                  :src="'http://localhost:8080/players/upload/' + club.image"
                  width="150"
                  style="border-radius: 25px;"
                />
                <h5 class="card-title">Players</h5>
                <ul class="list-group">
                  <div
                    v-for="player in getPlayers(club.idTeam)"
                    :key="player.idPlayer"
                  >
                    <li class="list-group-item">
                      <p>Name: {{ player.firstName }} {{ player.lastName }}</p>
                      <p>Age: {{ player.age }}</p>
                      <p>Position: {{ player.position }}</p>
                      <img
                        v-if="player.image"
                        :src="
                          'http://localhost:8080/players/upload/' + player.image
                        "
                        width="150"
                        style="border-radius: 25px;"
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import ApiService from "../services/api.service";
export default {
  name: "Clubs",
  data() {
    return {
      clubs: [],
      players: [],
      error: "",
    };
  },
  mounted() {
    ApiService.getClubsContent().then(
      (response) => {
        this.clubs = response.data;
      },
      (error) => {
        this.error = error.toString();
      }
    );
    ApiService.getPlayersContent().then(
      (response) => {
        this.players = response.data;
      },
      (error) => {
        this.error = error.toString();
      }
    );
  },
  methods: {
    getPlayers(idTeam) {
      return this.players.filter((player) => player.idTeam == idTeam);
    },
  },
};
</script>

<style scoped>
.clubs-table {
  width: 90%;
  margin: 0 auto;
}
</style>
