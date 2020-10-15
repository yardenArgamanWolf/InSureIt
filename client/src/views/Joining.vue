<template>
  <div style="">
    <div class="d-flex flex-column align-items-center">
      <div class="h2-tag-contact">הצטרפות</div>
      <form>
        <div class="h3-tag-contact">פרטים אישיים</div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >שם מלא</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="fullName"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תעודת זהות</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model.number="id"
            maxlength="9"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תאריך לידה</label
          >
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            v-model="date"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >מספר טלפון
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="PhoneNum"
            maxlength="10"
          />
        </div>

        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >דואר אלקטרוני</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
        </div>

        <div class="h3-tag-contact">פרטים אישיים של בן הזוג</div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >שם מלא</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pfullName"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תעודת זהות</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pID"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תאריך לידה</label
          >
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pdate"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >מספר טלפון
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="pPhoneNum"
          />
        </div>
        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >דואר אלקטרוני</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="pemail"
          />
        </div>

        <div class="h3-tag-contact">מגורים</div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >ישוב
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="city"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >רחוב</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="street"
          />
        </div>

        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >מספר בית
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="houseNum"
          />
        </div>
        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >ת.ד</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="Mailbox"
          />
        </div>

        <button
          @click="to_pay()"
          type="button"
          style="float: left; margin: 0"
          class="btn btn-dark"
        >
          המשך לתשלום
        </button>
        <button
          type="button"
          style="float: right; margin: 0"
          class="btn btn-dark"
        >
          נקה
        </button>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      fullName: "",
      id: "",
      date: "",
      PhoneNum: "",
      email: "",
      pfullName: "",
      pID: "",
      pdate: "",
      pPhoneNum: "",
      pemail: "",
      city: "",
      street: "",
      houseNum: "",
      Mailbox: "",
    };
  },
  methods: {
    to_pay() {
      this.fullName && this.id && this.email && this.PhoneNum && this.street
        ? this.$router.push(`/pay/${this.$route.params.id}`)
        : this.$swal("נא וודא כי כל הפרטים מלאים", ` `, "error");
    },
  },
};
</script>

<style>
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

.h3-tag-contact {
  font-size: 25px;
  word-spacing: 1px;
  text-align: right;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 300;
}

.h3-tag-contact:after {
  display: block;
  height: 2px;
  content: " ";
  width: 150px;
  margin: 0 auto;
  margin-top: 15px;
}

input,
textarea {
  text-align: right;
}
</style>