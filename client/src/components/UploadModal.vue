<template >
  <div class="main-container">
    <div class="upload-files">
      <div class="top-section">
        <h1>ביטול פוליסה</h1>
        <button @click="toggleShowHide" class="btn btn-dark">ביטול</button>
      </div>
      <CompaniesList></CompaniesList>
      <!-- <UploadField></UploadField> -->
      <UploadContent></UploadContent>
      <div class="send-btn">

            <button
          type="button"
          class="btn2 btn btn-dark"
        >
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          שליחה
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CompaniesList from "./CompaniesList";
export default {
  name: "uploadmodal",
  components: {
    UploadField,
    CompaniesList,
    UploadContent
  },
  methods:{
      toggleShowHide() {
      this.$emit("toggleVisibility");
    },
  }
};
</script>

<style lang="scss">
.main-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  z-index: 35;
  background-color: rgba(0, 0, 0, 0.431);
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    button{
      margin:0;
    }
  }
  .upload-files {
    direction: rtl;
    text-align: right;
    padding: 20px;
    width: 500px;
    max-height: 450px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .send-btn{
      width:100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
