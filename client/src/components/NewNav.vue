<template>
  <div class="main-content">
    <div class="nav-btn">
      <div class="container">
        <div class="toggle-btn" @click="toggleNavBar">
          <img
            style="width: 30px"
            src="@/assets/hamburger.png"
            alt="hamburger menu"
          />
        </div>
      </div>
    </div>

    <div class="main-nav">
      <div class="container">
        <div class="nav-links" :class="className">
          <ul class="flex space-between align-center">
            <li
              v-if="getIsLoggedIn == false"
              class="nav-item"
              @click="this.register"
            >
              <div class="items">הרשמה</div>
            </li>
            <li
              v-if="getIsLoggedIn == false"
              class="nav-item"
              @click="this.logIn"
            >
              <div class="items">התחברות</div>
            </li>
            <li
              v-if="getIsLoggedIn == true"
              class="nav-item"
              @click="this.logout"
            >
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
              <div v-scroll-to="'#choose-policy'" class="items">
                השוואת ביטוח
              </div>
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
      </div>
    </div>
  </div>
</template>

<script>
import hamburger from "../assets/hamburger.png";
export default {
  name: "newnav",

  mounted() {
    this.getIsLoggedIn;
  },
  data() {
    return {
      isNavOpen: false,
      className: "visible",
      hamburger: hamburger,
      loggedIn: false,
    };
  },
  methods: {
    toggleNavBar() {
      this.isNavOpen = !this.isNavOpen;
      this.isNavOpen
        ? (this.className = "visible")
        : (this.className = "hidden");
    },
    setShowUnderHeader() {
      this.toggleNavBar()
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
    },
    setShowAbout() {
      this.toggleNavBar()
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_aboutTransition", true);
    },
    setShowChoosePolicy() {
      this.toggleNavBar()
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_choosePolicyTransition", true);
    },
    setShowHowItWork() {
      this.toggleNavBar()
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_howItWorkTransition", true);
    },
    to_cancel() {
      this.toggleNavBar()
      this.$router.push("/cancel");
    },
    setShowContact() {
      this.toggleNavBar()
      if (this.$router.history.current.fullPath !== "/") this.$router.push("/");
      this.$store.commit("set_contactTransition", true);
    },
    logout() {
      this.loginFunction;
    },
    logIn() {
      this.toggleNavBar()
      this.$router.push("/login");
    },
    register() {
      this.toggleNavBar()
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
.main-content {
  z-index: 200;

  margin-bottom: 100px;
  .toggle-btn {
    display: inline-block;
    padding: 5px 12px;
    border: 1px solid rgba(211, 211, 211, 0.801);
    border-radius: 5px;
    text-align: center;
    align-content: center;
    cursor: pointer;
  }
  .main-nav {
    position: fixed;
    background-color: #fff;
    top: 0;
    width: 100%;
    .nav-links {
      transform: translateX(0%) !important;
    }
    ul {
      list-style: none;
    }
  }
  .nav-links.visible {
    transition: 0.5s ease-in-out;
    transform: translateX(0%) !important;
  }
  .nav-links.hidden {
    transition: 0.5s ease-in-out;
    transform: translateX(100%) !important;
  }
}

@media (max-width: 768px) {
  .main-content {
    margin-bottom: 0;
    z-index: 200;
    .nav-btn {
      background-color: green;
      .toggle-btn {
        margin-top: 20px;
        position: fixed;
        top:20px;
        background-color: #fff;
        &:hover{
          
          background-color: rgb(231, 231, 231);
        }
      }
    }
    .main-nav {
      .nav-links {
        z-index: 20;
        position: fixed;
        display: flex;
        padding-top: 50px;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.897);
        ul {
          display: flex;
          flex-direction: column;
          padding: 0;
          li {
            width: 100%;
            text-align: center;
            cursor: pointer;
            &:hover {
              border-bottom: 5px solid lightgray;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 769px) {
  .main-content {
    .toggle-btn {
      display: none;
      margin-top: 20px;
    }
    .main-nav {
      .nav-links {
        transform: translateX(0%) !important;
      }
    }
  }
}
</style>