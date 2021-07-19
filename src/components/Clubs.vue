<template>
  <h1>Clubs</h1>
  <br />
  <div v-if="error">{{ error }}</div>
  <div v-if="clubs.length" class="clubs-table">
    <table class="table table-hover table-borderless">
      <thead>
        <tr class="table-dark">
          <th>Club</th>
          <th>Trainer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="club in clubs" :key="club.idTeam">
          <td>{{ club.name }}</td>
          <td>{{ club.trainer }}</td>
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
};
</script>

<style scoped>
.clubs-table {
  width: 90%;
  margin: 0 auto;
}
</style>
