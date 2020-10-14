<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light">
    <button class="navbar-toggler"
     type="button" 
     aria-label="Toggle navigation">
      <!-- data-toggle="collapse" -->
      <!-- data-target="#navbarSupportedContent" -->
      <!-- aria-controls="navbarSupportedContent" -->
      <!-- aria-expanded="false" -->
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse container navbar-collapse" id="  ">
      <ul class="navbar-nav ml-auto flex align-center">
        <li
          v-if="getIsLoggedIn == false"
          class="nav-item"
          @click="this.register"
        >
          <div class="items">הרשמה</div>
        </li>
        <li v-if="getIsLoggedIn == false" class="nav-item" @click="this.logIn">
          <div class="items">התחברות</div>
        </li>
        <li v-if="getIsLoggedIn == true" class="nav-item" @click="this.logout">
          <div class="items">התנתקות</div>
        </li>
        <li class="nav-item" @click="setShowContact()">
          <div v-scroll-to="'#contact'" class="items">צור קשר</div>
        </li>
        <li class="nav-item" @click="to_cancel()">
          <div v-scroll-to="'#cancel'" class="items">ביטול פוליסה</div>
        </li>
        <li class="nav-item" @click="setShowHowItWork()">
          <div v-scroll-to="'#how-it-work'" class="items">הקמת פוליסה</div>
        </li>
        <li class="nav-item" @click="setShowChoosePolicy()">
          <div v-scroll-to="'#choose-policy'" class="items">השוואת ביטוח</div>
        </li>
        <li class="nav-item" @click="setShowAbout()">
          <div v-scroll-to="'#about'" class="items">אודות</div>
        </li>

        <li class="nav-item" @click="setShowUnderHeader()">
          <a
            class="navbar-brand ml-auto"
            href="javascript:void(0)"
            v-scroll-to="'#app'"
          >
            <img
              class="img-logo"
              src="@/assets/logo-ins.png"
              height="70"
              width="210"
              alt
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      loggedIn: false,
    };
  },

  mounted() {
    this.getIsLoggedIn;
  },

  methods: {
    setShowUnderHeader() {
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
    },
    setShowAbout() {
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_aboutTransition", true);
    },
    setShowChoosePolicy() {
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_choosePolicyTransition", true);
    },
    setShowHowItWork() {
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_howItWorkTransition", true);
    },
    to_cancel() {
      this.$router.push("/cancel");
    },
    setShowContact() {
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_contactTransition", true);
    },
    logout() {
      this.loginFunction;
    },
    logIn() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
      //   this.loggedIn = true;
    },
  },

  computed: {
    getIsLoggedIn: function () {
      const isLogged = this.$store.getters.get_isLoggedIn;
      return isLogged;
    },

    loginFunction: function () {
      localStorage.removeItem("jwt");
      this.$store.commit("set_isLoggedIn", false);
      const isLogged = this.$store.getters.get_isLoggedIn;
      this.loggedIn = isLogged;
    },
  },
};
</script>


<style lang="scss">
.background-image {
  margin: 0;
}

nav {
  background-color: white;
  opacity: 90%;
}

.items {
  color: #809c9d;
  cursor: pointer;
  font-size: 1.2em;
  margin-inline-end: 40px;
  @media (max-width: 1000px) {
    margin-block-end: 40px;
  }
}

.items:hover {
  color: #1569ac;
  cursor: pointer;
  transition: 0.3s;
  border-spacing: 15px;
  text-decoration: none;
}

.img-logo {
  margin-left: 40px;
}

.margin-top-image {
  margin-top: 550px;
}

a {
  text-decoration: none;
}
</style>
