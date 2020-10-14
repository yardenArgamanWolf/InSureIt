<template>
  <div style="main-container padding-top: 8em !important">
    <div class="d-flex flex-column align-items-center">
      <div class="h2-tag-contact">צור קשר</div>
      <form>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >:שם מלא</label
          >
          <input
            type="text"
            v-model="FullName"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >:אימייל</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >?איך שמעת עלינו</label
          >
          <select dir="rtl" v-model="selectedOption" class="form-control">
            <option
              class="text-right"
              v-for="option in hearAboutUs"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleFormControlTextarea1"
            >:הודעה</label
          >
          <textarea
            v-model="message"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          @click="sendContact"
          type="button"
          style="float: right; margin: 0"
          class="btn btn-dark"
        >
          שלח
        </button>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
import Success from "@/assets/svg/Success";
export default {
  components: {
    Success,
  },
  data() {
    return {
      hearAboutUs: ["רשתות חברתיות", "מנוע חיפוש", "פרסומת", "חברים", "אחר"],
      selectedOption: "רשתות חברתיות",
      message: "",
      email: "",
      FullName: "",
    };
  },
  methods: {
    sendContact() {
      this.FullName && this.email && this.message
        ? this.$swal("תודה על פנייתך", `ניצור עמך קשר בהקדם `, "success")
        : this.$swal("נא וודא כי כל הפרטים מלאים", ` `, "error");
      this.FullName = "";
      this.email = "";
      this.message = "";
      this.hearAboutUs = "רשתות חברתיות";
    },
  },
  computed: {
    _selectedOption() {
      return selectedOption;
    },
  },
};
</script>

<style lang="scss">
.h2-tag-contact {
  font-size: 50px;
  word-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
}

.h2-tag-contact:after {
  display: block;
  height: 2px;
  background-color: #1569ac;
  content: " ";
  width: 150px;
  margin: 0 auto;
  margin-top: 15px;
}

input,
textarea {
  text-align: right;
}
@media (max-width: 540px) {
  .main-container {
    // margin-top: -70px;
  }
}
</style>
