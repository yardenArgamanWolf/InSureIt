<template>
  <div class="container" style="padding-top: 8em !important">
    <div class="how-it-work d-flex flex-column">
      <div class="h2-tag-work">איך זה עובד</div>
      <div class="align-self-center">
        <div class="d-flex justify-content-end mt-3">
          <div style="font-size: 18px" class="align-self-center mr-3">
            <p>בוחרים בביטוח הרלוונטי עבורכם</p>
          </div>
          <div>
            <Success />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div style="font-size: 18px" class=" mr-3">
            <p>עונים על השאלות הקשורות לביטוח שבחרתם ומשווים</p>
          </div>
          <div>
            <Success />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div style="font-size: 18px" class="align-self-center mr-3">
            <p>מקימים פוליסה חדשה ואם צריך מבטלים את הישנה</p>
          </div>
          <div>
            <Success />
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button
            @click="to_structure()"
            type="button"
            class="btn2 btn btn-dark"
          >
            ביטוח מבנה
          </button>
          <button
            @click="to_capacity()"
            type="button"
            class="btn2 btn btn-dark"
          >
            ביטוח תכולה
          </button>
          <button @click="to_s_And_c()" type="button" class="btn2 btn btn-dark">
            ביטוח מבנה ותכולה
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Success from "@/assets/svg/Success";
export default {
  components: {
    Success,
  },
  methods: {
    to_s_And_c() {
      this.$router.push("/structure_and_capacity");
    },
    to_capacity() {
      this.$router.push("/capacity");
    },
    to_structure() {
      this.$router.push("/structure");
    },
  },
};
</script>

<style lang="scss">
.h2-tag-work {
  font-size: 50px;
  word-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
}

.h2-tag-work:after {
  display: block;
  height: 2px;
  background-color: #1569ac;
  content: " ";
  width: 230px;
  margin: 0 auto;
  margin-top: 15px;
}

.margin-col {
}

.btn2 {
  margin-right: 30px;
  margin-top: 50px;
  height: 50px;
  width: auto;
  font-size: 20px;
}
@media (max-width: 540px) {
  .container {
    .how-it-work{
      p{
        font-size: 14px;
            text-align: right;
      }
      svg{
        width:40px;
      }
      button{
        font-size: 15px;
        height: unset;
      }
    }
  }
}
</style>
