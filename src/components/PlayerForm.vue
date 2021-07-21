<template>
  <form
    @submit.prevent="submit"
    class="form-floating"
    style="margin-bottom:30px"
  >
    <div v-if="successSubmit" class="alert alert-success" role="alert">
      Player added succesfully!
    </div>
    <div v-if="failedSubmit" class="alert alert-danger" role="alert">
      There was a problem when adding the player!
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            class="form-control"
            id="firstName"
            placeholder="First Name"
            v-model="form.firstName"
          />
          <label for="firstName">First Name</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            class="form-control"
            id="lastName"
            placeholder="Last Name"
            v-model="form.lastName"
          />
          <label for="lastName">Last Name</label>
        </div>
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            type="number"
            class="form-control"
            id="age"
            placeholder="0"
            v-model="form.age"
          />
          <label for="age">Age</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating input-group mb-3">
          <select
            required
            class="form-select"
            id="position"
            aria-label="Position"
            v-model="form.idPosition"
          >
            <option
              v-for="position in positions"
              :key="position.id"
              :value="position.id"
              >{{ position.name }}</option
            >
          </select>
          <label for="position">Position</label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="form-floating input-group mb-3">
          <select
            required
            class="form-select"
            id="clubName"
            aria-label="Club Name"
            v-model="form.idTeam"
          >
            <option v-for="club in clubs" :key="club.id" :value="club.id">{{
              club.name
            }}</option>
          </select>
          <label for="clubName">Club Name</label>
          <button @click="fetchClubs" class="btn btn-danger" type="button">
            Update
          </button>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-danger">
      Submit New Player
    </button>
  </form>
</template>

<script>
import ApiService from "../services/api.service";

export default {
  name: "PlayerForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        age: "",
        idPosition: "",
        idTeam: "",
        image: "noImg.jpg",
      },
      clubs: [],
      positions: [],
      apiMessage: "",
      successSubmit: false,
      failedSubmit: false,
    };
  },
  mounted() {
    this.fetchClubs();
    this.fetchPositions();
  },
  methods: {
    submit() {
      this.successSubmit = false;
      this.failedSubmit = false;

      ApiService.postNewPlayer(this.form)
        .then((res) => {
          //Perform Success Action
          this.apiMessage = res.data;
          this.form = {
            firstName: "",
            lastName: "",
            age: "",
            idPosition: "",
            idTeam: "",
          };
          this.successSubmit = true;
        })
        .catch((error) => {
          // error.response.status Check status code
          this.apiMessage = error.toString();
          this.failedSubmit = true;
        })
        .finally(() => {
          //Perform action in always
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
    fetchPositions() {
      ApiService.getPositionsContent().then(
        (response) => {
          this.positions = response.data;
        },
        (error) => {
          this.error = error.toString();
        }
      );
    },
  },
};
</script>
