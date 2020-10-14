<template>
  <div>
    <div class="container header d-flex flex-column">
      <div class="text marg align-self-end">
        <p>ללכת על בטוח</p>
      </div>
      <div class="text2 align-self-end">
        <p>לחסוך בביטוח</p>
      </div>
      <div class="buttons align-self-end">
        <button
          v-scroll-to="'#choose-policy'"
          type="button"
          class="btn2 btn-dark"
        >
          ?לא בטוחים מה אתם רוצים
        </button>
        <button
          v-scroll-to="'#how-it-work'"
          type="button"
          class="btn2 margin-button btn-dark"
        >
          להשוות ולחסוך
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media (min-width: 1750px) {
  .text {
    font-size: 80px;
    font-weight: bolder;
  }

  .text2 {
    font-size: 70px;
    margin-right: 290px;
  }

  .marg {
    margin-right: 100px;
    margin-top: 70px;
  }
}

@media (max-width: 1749px) {
  .text {
    font-size: 60px;
  }

  .text2 {
    font-size: 50px;
    margin-right: 270px;
  }

  .marg {
    margin-right: 80px;
    margin-top: 70px;
  }
}

.btn2 {
  margin-right: 30px;
  margin-top: 50px;
  height: 50px;
  width: auto;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.719);
  border-radius: 5px;
}
.btn2.margin-button {
  margin-right: 290px;
}
.btn2:hover {
  font-size: 20px;
  background-color: rgb(0, 0, 0);
}

@media (max-width: 768px) {
  .container {
    .btn {
      margin: 20px;
    }
  }
}
@media (max-width: 540px) {
  .container.header {
    p {
      font-size: 25px;
    }
    .text2.align-self-end {
      margin-right: 100px;
    }
    .text.marg.align-self-end {
      margin-right: 40px;
    }
    .buttons {
      display: flex;
      padding-top: 50px;
      .btn2.margin-button {
        margin-right: 0 !important;
      }
      button{
          font-size: 18px;
          height: unset;
      }
    }
  }
}
</style>
