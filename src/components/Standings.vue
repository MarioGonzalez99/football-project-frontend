<template>
  <h1>Standings</h1>
  <br />
  <div v-if="error">{{ error }}</div>
  <div v-if="clubs.length" class="clubs-table">
    <table class="table table-hover table-borderless">
      <thead>
        <tr class="table-dark">
          <th>Club</th>
          <th>Total Games</th>
          <th>Points</th>
          <th>Games Won</th>
          <th>Games Lost</th>
          <th>Games Tied</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="club in sortedClubs" :key="club.id">
          <td>{{ club.name }}</td>
          <td>{{ club.gamesTied + club.gamesLost + club.gamesWon }}</td>
          <td>{{ club.points }}</td>
          <td>{{ club.gamesWon }}</td>
          <td>{{ club.gamesLost }}</td>
          <td>{{ club.gamesTied }}</td>
        </tr>
      </tbody>
    </table>
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
  },
  computed: {
    sortedClubs() {
      let sortedClubs = this.clubs;
      return sortedClubs.sort((t1, t2) => (t1.points > t2.points ? -1 : 1));
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
