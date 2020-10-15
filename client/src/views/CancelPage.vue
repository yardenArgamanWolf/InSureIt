<template>
  <div style="">
    <div class="container d-flex flex-column align-items-center">
      <div class="h2-tag-contact">
        <h2>ביטול פוליסה קיימת</h2>
      </div>
      <form @submit="collectDetails">
        <div class="h3-tag-contact">פרטי המובטח</div>
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
            maxlength="9"
            v-model.number="id"
            @input="checkLength"
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
            maxlength="10"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="PhoneNum"
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
        <div class="form-group">
          <label style="float: right; font-size: 20px" for="exampleInputEmail1"
            >מיקוד</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="PostalCode"
          />
        </div>
        <div class="h3-tag-contact">
          אני מבקש/ת לבטל את פוליסות הביטוח הבאות
        </div>

        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >פרטי הפוליסה לביטול</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="cancelId"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >פרטי הנספחים לביטול</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            v-model="attache"
          />
        </div>
        <div class="form-group">
          <label
            style="float: right; font-size: 20px"
            for="exampleInputPassword1"
            >תאריך כניסת הביטול לתוקף</label
          >
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            v-model="cancelDate"
            @change="getDate"
          />
        </div>
        <div class="form-group">
          <label style="float: right; font-size: 20px" for=""
            >בחר חברת ביטוח</label
          >
          <CompaniesList @selected="setInsuranceCompany"></CompaniesList>
        </div>
        <button
          @click="collectDetails()"
          type="button"
          style="float: left; margin: 0"
          class="btn btn-dark"
        >
          שלח
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
  </div>
</template>

<script>
import CompaniesList from "../components/CompaniesList";
import { sendEmail } from "../service/mail.service";
export default {
  components: {
    CompaniesList,
  },
  data() {
    return {
      fullName: "",
      id: "",
      date: "",
      PhoneNum: "",
      email: "",
      city: "",
      street: "",
      houseNum: "",
      Mailbox: "",
      PostalCode: "",
      cancelId: "",
      attache: "",
      cancelDate: "",
      insuranceCompany: "",
      limitNum: 9,
      alert: false,
    };
  },
  methods: {
    checkLength({ target }) {
      const length = target.value.length;
      if (length >= 9) return;

      this.id = target.value;

      console.log(length);
    },
    setInsuranceCompany(chosenCompany) {
      this.insuranceCompany = chosenCompany;
    },
    collectDetails() {
      const details = {
        name: this.fullName,
        id: this.id,
        date: this.date,
        phone: this.PhoneNum,
        email: this.email,
        city: this.city,
        street: this.street,
        houseNum: this.houseNum,
        mailBox: this.Mailbox,
        postalCode: this.PostalCode,
        cancelId: this.cancelId,
        attache: this.attache,
        cancelDate: this.cancelDate,
        company: this.insuranceCompany,
      };

      // houseNum attache postalCode  mailBox

      // this.selectCurrEmail(details);
      details.company &&
      details.cancelDate &&
      details.cancelId &&
      details.street &&
      details.city &&
      details.email &&
      details.phone &&
      details.date &&
      details.id &&
      details.name
        ? this.$swal(
            "פנייתך הועברה לחברת הביטוח",
            `${this.email} מייל עם תשובה יישלח ל `,
            "success"
          )
        : this.$swal("נא וודא כי כל הפרטים מלאים", ` `, "error");
    },

    selectCurrEmail(content) {
      switch (this.insuranceCompany) {
        case 'הפניקס חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'איי. די. איי. חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'כלל חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'שומרה חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case "איי אי ג'י ישראל חברה לביטוח בע\"מ":
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'שירביט חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'מנורה מבטחים ביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'הכשרה חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'ביטוח חקלאי - אגודה שיתופית מרכזית בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'ווישור חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'ש. שלמה חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'איילון חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'מגדל חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;
        case 'הראל חברה לביטוח בע"מ':
          sendEmail("yardenargawolf@gmail.com", content);
          break;

        default:
          break;
      }
    },
    getDate(e) {
      const selectedDate = e.target.value;
      this.cancelDate = selectedDate;
    },
  },
};
</script>

<style lang="scss">
body {
  background-image: none !important;
}
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
@media (max-width: 768px) {
  .container {
    h2 {
      margin-top: 100px;
      font-size: 50px;
    }
  }
}
@media (max-width: 540px) {
  .container {
    h2 {
      margin-top: 100px;
      font-size: 30px;
    }
  }
}
</style>