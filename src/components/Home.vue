<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Home</h1>
    </header>
    <h3>{{ content }}</h3>
  </div>
</template>

<script>
// import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "Home",
    };
  },
  // mounted() {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       this.content = response.data;
  //     },
  //     (error) => {
  //       this.content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // },
};
</script>
