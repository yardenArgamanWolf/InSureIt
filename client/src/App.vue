<template>
  <div id="app">
    <div>
      <!-- <NavBar></NavBar> -->
      <NewNav></NewNav>
      <!-- <Login></Login> -->

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import NewNav from "./components/NewNav";
import Login from "./components/auth/login";

export default {
  data() {
    return {
      isLoginClicked: false,
    };
  },
  components: {
    NavBar,
    Login,
    NewNav,
  },
  mounted() {
    this.$store.dispatch("getCapacity");
    this.$store.dispatch("getStructure");
    this.$store.dispatch("getCapacityAndStructure");
  },
  created() {},
};
</script>

<style lang="scss">
</style>
