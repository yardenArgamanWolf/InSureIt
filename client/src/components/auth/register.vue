<template>
  <div class="container">
    <div class="row">
      <form
        class="text-center border border-primary p-5 margin-center"
        style="height: auto; padding-top: 100px !important"
        @submit.prevent="registerUser"
      >
        <input
          type="text"
          id="name"
          class="form-control mb-5"
          placeholder="שם"
          v-model="register.name"
          required
        />
        <input
          type="email"
          id="email"
          class="form-control mb-5"
          placeholder="אימייל"
          v-model="register.email"
          required
        />
        <!-- Password -->
        <input
          type="password"
          id="password"
          class="form-control mb-5"
          placeholder="סיסמא"
          v-model="register.password"
        />
        <p>
          כבר יש לך חשבון? <router-link to="/">לחץ כאן </router-link>
          <!-- Sign in button -->
          <center>
            <button class="btn btn-dark btn-block w-75 my-4" type="submit">
              הרשמה
            </button>
          </center>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async registerUser() {
      axios
        .post("http://localhost:3000/user/register", this.register)
        .then((response) => {
          console.log(response);
          let token = response.data.token;
          if (token) {
            localStorage.setItem("jwt", token);
            this.$router.push("/");
            this.$swal("", "ההרשמה עברה בהצלחה", "success");
            this.loginFunction();
          } else {
            this.$swal("", "משהו השתבש", "error");
          }
        })
        .catch((err) => {
          let error = err.response;
          if (error.status == 409) {
            this.$swal("Error", error, "error");
          } else {
            this.$swal("Error", error, "error");
          }
        });
    },
    loginFunction() {
      this.$store.commit("set_isLoggedIn", true);
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.container {
  form {
    margin-top: 50px !important;
    max-width: 500px;
  }
}
@media (max-width: 768px) {
  .container {
    form {
      margin-top: 100px !important;
    }
  }
}
</style>