<template>
  <div style="margin-bottom: 100px">
    <div
      v-if="_table.length == 0"
      class="container margin-center d-flex flex-column align-items-center"
    >
      <div class="h2-tag-contact">
        <h2>ביטוח תכולה</h2>
      </div>
      <form>
        <div class="form-group a">
          <label style="float: right; font-size: 20px"
            >?האם קיים ברשותך ביטוח מבנה</label
          >
          <div
            class="form-check form-check-inline"
            style="margin-left: 220px; margin-top: 5px"
          >
            <input
              class="form-check-input"
              type="checkbox"
              name="inlineRadioOptions"
              v-model="insuranceFlag"
            />
          </div>
        </div>

        <div v-if="insuranceFlag" class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >באיזה חברת ביטוח</label
          >
          <select dir="rtl" v-model="insuranceFlagCompany" class="form-control">
            <option
              class="text-right"
              v-for="option in companies"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div v-if="insuranceFlag" class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >?כמה אתה משלם היום</label
          >
          <input
            v-model="currentlyPaying"
            type="number"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >סוג המבנה וקומה</label
          >
          <select dir="rtl" v-model="capacityTypeOption" class="form-control">
            <option
              class="text-right"
              v-for="option in capacityType"
              :key="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
        <div
          v-if="capacityTypeOption == 'בניין קומת ביניים'"
          class="form-group"
        >
          <label style="float: right; font-size: 20px" for="koma"
            >מספר קומה</label
          >

          <input v-model="koma" type="number" class="form-control" id="koma" />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >גיל המבנה בשנים</label
          >
          <input
            v-model="structureAge"
            type="number"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >סכום ביטוח התכולה</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="capacityValue"
          />
        </div>

        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תביעות בשנים האחרונות בביטוח תכולה</label
          >
          <select dir="rtl" v-model="suitOption" class="form-control">
            <option class="text-right" v-for="option in suit" :key="option">
              {{ option }}
            </option>
          </select>
        </div>

        <div class="text-danger" v-show="_errorMessage" style="float: right">
          {{ _errorMessage }}
        </div>
        <br />

        <button
          @click="checkPrices()"
          type="button"
          style="float: left; margin: 0"
          class="btn btn-dark"
        >
          המשך להשוואה
        </button>
        <button
          @click="resetPage()"
          type="button"
          style="float: right; margin: 0"
          class="btn btn-dark"
        >
          נקה
        </button>
      </form>
    </div>
    <div class="container" v-else>
      <Results :table="_table"></Results>
    </div>
  </div>
</template>

<script>
import Success from "@/assets/svg/Success";
import Results from "../components/Results";
export default {
  mounted() {},
  components: {
    Success,
    Results,
  },
  data() {
    return {
      capacityType: [
        "בחר/י סוג מבנה וקומה",
        "בית פרטי",
        "דו משפחתי",
        "בניין קומת קרקע",
        "בניין קומת ביניים",
        "בניין קומה אחרונה",
        "בניין קומת גג",
      ],
      capacityTypeOption: "בחר/י סוג מבנה וקומה",
      structureAge: 1,
      capacityValue: "",
      suit: [
        "בחר/י ",
        "ללא תביעות",
        "ב-12 חודשים אחרונים",
        "ב-24 חודשים אחרונים",
        "ב-36 חודשים אחרונים",
        "יותר מתביעה אחת בשלוש שנים",
      ],
      suitOption: "בחר/י",
      table: [],
      errorMessage: "",
      koma: 0,
      insuranceFlag: null,
      companies: [
        'הפניקס חברה לביטוח בע"מ',
        'איי. די. איי. חברה לביטוח בע"מ',
        'כלל חברה לביטוח בע"מ',
        'שומרה חברה לביטוח בע"מ',
        "איי אי ג'י ישראל חברה לביטוח בע\"מ",
        'שירביט חברה לביטוח בע"מ',
        'מנורה מבטחים ביטוח בע"מ',
        'הכשרה חברה לביטוח בע"מ',
        'ביטוח חקלאי - אגודה שיתופית מרכזית בע"מ',
        'ווישור חברה לביטוח בע"מ',
        'ש. שלמה חברה לביטוח בע"מ',
        'איילון חברה לביטוח בע"מ',
        'מגדל חברה לביטוח בע"מ',
        'הראל חברה לביטוח בע"מ',
      ],
      insuranceFlagCompany: null,
      currentlyPaying: 0,
      activeRowElement: "",
    };
  },
  methods: {
    setActiveRow(row) {},

    resetPage() {
      this.structureAge = 1;
      this.capacityValue = "";
      this.capacityTypeOption = "בחר/י סוג מבנה וקומה";
      this.suitOption = "בחר/י";
      this.insuranceFlag = false;
      this.errorMessage = "";
      this.insuranceFlagCompany = null;
      this.currentlyPaying = 0;
    },
    checkPrices() {
      if (!this.isLogged) {
        this.$swal("נא התחבר על מנת לקבל פרטים מלאים", ` `, "error");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);

        return;
      }
      if (
        this.capacityTypeOption == "בחר/י סוג מבנה וקומה" ||
        this.suitOption == "בחר/י" ||
        !this.capacityValue
      ) {
        this.$swal("אנא בדוק שלא שכחת למלא את הטופס כמו שצריך", ` `, "error");

        return;
      }
      this.errorMessage = "";
      let counter = 0;
      this.table = this._structureData.filter((element) => {
        if (counter >= 15) return;

        if (
          element.structure_type == this.capacityTypeOption &&
          this.suitOption == element.insurance_claim
        ) {
          try {
            if (
              Number(this.capacityValue) ==
              Number(element["capacity_value"].replace(",", ""))
            ) {
              if (this.currentlyPaying == 0) {
                counter++;
                return element;
              } else {
                if (this.currentlyPaying > Number(element.price)) {
                  counter++;
                  return element;
                }
              }
            }
          } catch {
            console.log("cant calculate insurance amount");
            console.log(element);
          }
        }
      });
      if (this.table.length == 0) {
        console.log("error found");
        this.$swal("לא נמצאו התאמות כלל, אנא נסה שנית", ` `, "error");

        return;
      }
      return this.table;
    },
  },

  computed: {
    _table() {
      if (this.table.length !== 0) {
        return this.table;
      }
      return this.table;
    },
    _structureData() {
      return this.$store.getters.get_capacity;
    },
    _errorMessage() {
      return this.errorMessage;
    },
    isLogged() {
      return this.$store.getters.get_isLoggedIn;
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
  width: 220px;
  margin: 0 auto;
  margin-top: 15px;
}
@media (max-width: 768px) {
  .container{
    h2{
      margin-top: 100px;
      font-size: 50px;
    }
  }
}
@media (max-width: 540px) {
  .container{
    h2{
      margin-top: 100px;
      font-size: 30px;
    }
  }
}
</style>
