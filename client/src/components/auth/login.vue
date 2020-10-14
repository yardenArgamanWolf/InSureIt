<template>
  <div class="container ">
    <div class="row margin-center">
      <form
        class="text-center border border-primary p-5 margin-center"
        style=" height: auto; padding-top: 100px !important"
        @submit.prevent="loginUser"
      >
        <input
          type="text"
          id="email"
          class="form-control mb-5"
          placeholder="אימייל"
          v-model="login.email"
        />
        <!-- Password -->
        <input
          type="password"
          id="password"
          class="form-control mb-5"
          placeholder="סיסמא"
          v-model="login.password"
        />
        <p>
          כבר יש לך חשבון? <router-link to="/register"> לחץ כאן </router-link>
        </p>
        <!-- Sign in button -->
        <center>
          <button class="btn btn-dark btn-block w-75 my-4" type="submit">
            התחבר
          </button>
        </center>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      axios
        .post("http://localhost:3000/user/login", this.login)
        .then((response) => {
          let token = response.data.token;
          localStorage.setItem("jwt", token);
          if (token) {
            this.$swal("", "ההתחברות בוצעה בהצלחה", "success");
            this.$router.push("/");
          }
          this.loginFunction();
        })

        .catch((err) => {
          this.$swal("התחברות נכשלה", "הפרטים שהוזנו שגויים", "error");
          console.log("ERR user is", err.response);
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
  .row {
    form {
      margin-top: 50px !important;
      max-width: 500px;
    }
  }
}
</style>

