<template>
  <form
    @submit.prevent="submit"
    class="form-floating"
    style="margin-bottom:30px"
  >
    <div v-if="successSubmit" class="alert alert-success" role="alert">
      Club added succesfully!
    </div>
    <div v-if="failedSubmit" class="alert alert-danger" role="alert">
      There was a problem when adding the Club!
    </div>
    <div class="row g-2">
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            class="form-control"
            id="name"
            placeholder="Club Name"
            v-model="form.name"
          />
          <label for="name">Club Name</label>
        </div>
      </div>
      <div class="col-md">
        <div class="form-floating mb-3">
          <input
            required
            class="form-control"
            id="trainer"
            placeholder="0"
            v-model="form.trainer"
          />
          <label for="trainer">Trainer</label>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-danger">
      Submit New Club
    </button>
  </form>
</template>

<script>
import ApiService from "../services/api.service";
export default {
  name: "ClubForm",
  data() {
    return {
      form: {
        name: "",
        trainer: "",
        gamesWon: 0,
        gamesLost: 0,
        gamesTied: 0,
        points: 0,
      },
      apiMessage: "",
      successSubmit: false,
      failedSubmit: false,
    };
  },
  methods: {
    submit() {
      this.successSubmit = false;
      this.failedSubmit = false;

      ApiService.postNewClub(this.form)
        .then((res) => {
          //Perform Success Action
          this.apiMessage = res.data;
          this.form = {
            name: "",
            trainer: "",
            gamesWon: 0,
            gamesLost: 0,
            gamesTied: 0,
            points: 0,
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
  },
};
</script>
