<template>
  <div class="background-image">
    <SlideYDownTransition :duration="2000" v-show="showUnderHeader">
      <UnderHeader />
    </SlideYDownTransition>
    <ZoomCenterTransition :duration="1000" v-show="showAbout">
      <About id="about" />
    </ZoomCenterTransition>
    <ZoomCenterTransition :duration="1000" v-show="showChoosePolicy">
      <ChoosePolicy id="choose-policy" />
    </ZoomCenterTransition>
    
    <ZoomCenterTransition :duration="1000" v-show="showHowItWork">
      <HowItWork id="how-it-work" />
    </ZoomCenterTransition>
    <!-- <ZoomCenterTransition :duration="1000" v-show="showCancel">
      <Cancel @toggleVisibility="this.toggleCancelShow" id="cancel" />
    </ZoomCenterTransition> -->
    <div v-if="this.isCancelShown == true" class="cancel-section">
      <UploadModal @toggleVisibility="this.toggleCancelShow"></UploadModal>
    </div>
    <ZoomCenterTransition :duration="1000" v-show="showContact">
      <Contact id="contact" />
    </ZoomCenterTransition>
  </div>
</template>

<script>
import UnderHeader from "@/components/UnderHeader";
import About from "@/components/About.vue";
import ChoosePolicy from "@/components/ChoosePolicy";
import HowItWork from "@/components/HowItWork";
import Cancel from "@/components/Cancel";
import Contact from "@/components/Contact";
import UploadModal from "@/components/UploadModal";
import NewNav from "@/components/NewNav";
import { SlideYDownTransition } from "vue2-transitions";
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  name: "Home",
  data() {
    return {
      isCancelShown: false,
    };
  },
  components: {
    About,
    UnderHeader,
    ChoosePolicy,
    HowItWork,
    Cancel,
    Contact,
    SlideYDownTransition,
    ZoomCenterTransition,
    UploadModal,
    NewNav
  },

  computed: {
    showUnderHeader() {
      return this.$store.getters.get_underHeaderTransition;
    },
    showAbout() {
      return this.$store.getters.get_aboutTransition;
    },
    showChoosePolicy() {
      return this.$store.getters.get_choosePolicyTransition;
    },
    showHowItWork() {
      return this.$store.getters.get_howItWorkTransition;
    },
    showCancel() {
      return this.$store.getters.get_cancelTransition;
    },
    showContact() {
      return this.$store.getters.get_contactTransition;
    },
  },
  async mounted() {
    await this.$store.commit("set_underHeaderTransition", true);
  },

  methods: {
    toggleCancelShow() {
      this.isCancelShown = !this.isCancelShown;
    },
  },
};
</script>
<style lang="scss">
.background-image {
  background: url("../assets/slide001.jpg") no-repeat;
  @media (max-width: 540px) {
    background-size: contain;
  }
}
</style>
