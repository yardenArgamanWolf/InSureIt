<template>
  <div style="">
    <div class="d-flex flex-column align-items-center">
      <div class="h2-tag-contact">תשלום</div>
      <form>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >שם בעל הכרטיס</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="name"
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
            v-model="id"
          />
        </div>

        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            סוג הכרטיס</label
          >
          <select dir="rtl" v-model="TypeOption" class="form-control">
            <option class="text-right" v-for="option in Type" :key="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            מספר כרטיס אשראי</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="cardNumber"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            תוקף</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="ex"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            שלוש ספרות בגב הכרטיס
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="cvc"
          />
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            מחיר לתשלום
          </label>
          <input
            disabled
            type="text"
            class="form-control"
            id="priceId"
            v-model="price"
          />
        </div>

        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
          >
            מספר תשלומים
          </label>
          <select dir="rtl" v-model="NumOption" class="form-control">
            <option class="text-right" v-for="option in Num" :key="option">
              {{ option }}
            </option>
          </select>
        </div>

        <button
          type="button"
          style="float: right; margin: 0"
          class="btn btn-dark"
          @click="pay"
        >
          שלח
        </button>
      </form>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this._getResultsArray();
  },
  data() {
    return {
      name: "",
      id: "",
      cardNumber: "",
      Type: [
        "בחר/י",
        "ויזה",
        " מאסטכארד",
        "ישראכרט",
        "דיינרס",
        "אמריקן אקספרס",
      ],

      TypeOption: "בחר/י",
      ex: "",
      cvc: "",
      price: 0,
      Num: ["1", "2", "3", "4", "5"],
      NumOption: "1",
      errorMessage: "",
    };
  },
  methods:{
    pay(){
        this.id && this.name && this.cardNumber
        ? this.$swal(
            "התשלום הושלם",
            ``,
            "success"
          )
        : this.$swal("נא וודא כי כל הפרטים מלאים", ` `, "error");
    }

  },
  computed: {
    _getResultsArray() {
      const results = this.$store.getters.get_results;

      const newRes = results.filter(
        (item) => item.offer_ID === this.$route.params.id
      );
      this.price = newRes[0].price;
      return results;
    },
  },
};
</script>

<style>
</style>