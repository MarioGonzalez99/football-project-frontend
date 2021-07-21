<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Home</h1>
    </header>
  </div>
  <main>
    <div
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">Welcome to MyLeague!</h1>
        <p class="lead fw-normal">
          Start managing your favorite football leagues and clubs with an
          intuitive and flexible application!
        </p>
        <router-link to="/register" class="nav-link"
          ><a class="btn btn-outline-secondary">Start Now</a></router-link
        >
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div
        class="product-device product-device-2 shadow-sm d-none d-md-block"
      ></div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div
        class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
      >
        <div class="my-3 py-3">
          <h2 class="display-5">Matches</h2>
          <p class="lead">Add new matches to your league</p>
        </div>
        <div
          class="bg-light shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        ></div>
      </div>
      <div
        class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">Standings</h2>
          <p class="lead">
            Ranking updated dynamically with the insertion of new matches
          </p>
        </div>
        <div
          class="bg-dark shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        ></div>
      </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div
        class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">Clubs</h2>
          <p class="lead">
            Add all the clubs you need for your league and more
          </p>
        </div>
        <div
          class="bg-dark shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        ></div>
      </div>
      <div
        class="bg-danger me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"
      >
        <div class="my-3 py-3">
          <h2 class="display-5">Statistics</h2>
          <p class="lead">
            Analyze the statistics of your league generated dynamically
          </p>
        </div>
        <div
          class="bg-light shadow-sm mx-auto"
          style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
// import UserService from "../services/user.service";

export default {
  name: "Home",
};
</script>

<style scoped>
/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, 0.85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #8e8e8e;
  transition: color 0.15s ease-in-out;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}

/*
 * Extra utilities
 */

.flex-equal > * {
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    flex: 1;
  }
}
</style>
