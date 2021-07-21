<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img alt="Vue logo" src="./assets/logo.png" width="60" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">
                <font-awesome-icon icon="home" /> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/results" class="nav-link">
                <font-awesome-icon icon="volleyball-ball" /> Results
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/standings" class="nav-link">
                <font-awesome-icon icon="medal" /> Standings
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/stats" class="nav-link">
                <font-awesome-icon icon="poll" /> Stats
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/clubs" class="nav-link">
                <font-awesome-icon icon="flag" /> Clubs
              </router-link>
            </li>
            <li v-if="currentUser" class="nav-item">
              <router-link to="/admin" class="nav-link"
                ><font-awesome-icon icon="user-cog" /> Admin</router-link
              >
            </li>
          </ul>

          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/register" class="nav-link">
                <font-awesome-icon icon="user-plus" /> Sign Up
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" /> Login
              </router-link>
            </li>
          </div>

          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon icon="user" />
                Profile
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" /> LogOut
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 50px;
}
</style>
