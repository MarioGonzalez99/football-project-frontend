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
          <td>{{ club.wonMatches + club.lostMatches + club.tiedMatches }}</td>
          <td>{{ club.wonMatches * 3 + club.tiedMatches }}</td>
          <td>{{ club.wonMatches }}</td>
          <td>{{ club.lostMatches }}</td>
          <td>{{ club.tiedMatches }}</td>
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
    ApiService.getClasificationContent().then(
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
      return sortedClubs.sort((t1, t2) =>
        t1.wonMatches * 3 + t1.tiedMatches > t2.wonMatches * 3 + t2.tiedMatches
          ? -1
          : 1
      );
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
