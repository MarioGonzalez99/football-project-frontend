<template>
  <div class="container">
    <h3 class="jumbotron">Add Match</h3>
    <button
      class="btn btn-outline-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseMatch"
      aria-expanded="false"
      aria-controls="collapseMatch"
    >
      Add new match
    </button>
    <div class="collapse" id="collapseMatch">
      <br />
      <MatchForm />
    </div>
    <br />
    <br />
    <h3 class="jumbotron">Add Club</h3>
    <button
      class="btn btn-outline-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseClub"
      aria-expanded="false"
      aria-controls="collapseClub"
    >
      Add new club
    </button>
    <div class="collapse" id="collapseClub">
      <br />
      <ClubForm />
    </div>
    <br />
    <br />
    <h3 class="jumbotron">Add Player</h3>
    <button
      class="btn btn-outline-dark"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsePlayer"
      aria-expanded="false"
      aria-controls="collapsePlayer"
    >
      Add new player
    </button>
    <div class="collapse" id="collapsePlayer">
      <br />
      <PlayerForm />
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import MatchForm from "./MatchForm.vue";
import ClubForm from "./ClubForm.vue";
import PlayerForm from "./PlayerForm.vue";
export default {
  name: "Admin",
  components: {
    MatchForm,
    ClubForm,
    PlayerForm,
  },
};
</script>
