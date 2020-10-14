<template>
  <div id="app">
    <div class="container">
      <!--UPLOAD-->
      <form
        enctype="multipart/form-data"
        novalidate
        v-if="isInitial || isSaving"
      >
        <!-- <h1>Upload images</h1> -->
        <div class="dropbox">
          <input
            type="file"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="
              filesChange($event.target.name, $event.target.files);
              fileCount = $event.target.files.length;
            "
            accept="image/*"
            class="input-file"
          />
          <p v-if="isInitial">
            גרור קבצים <br />
            או לחץ לעיון
          </p>
          <p v-if="isSaving">מעלה {{ fileCount }} קבצים...</p>
        </div>
      </form>
      <div v-if="isSuccess">
        <h2>העלאה הושלמה.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">העלה עוד קובץ</a>
        </p>
        <ul class="list-unstyled">
          <li :key="item" v-for="item in uploadedFiles">
            <img
              :src="item.url"
              class="img-responsive img-thumbnail"
              :alt="item.originalName"
            />
          </li>
        </ul>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>העלאה נדחתה</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">נסה שוב</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { upload } from "../service/file-upload.service";

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "uploadcontent",
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "photos",
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      //   console.log("saving");
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      //   console.log("faild");
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      upload(formData)
        .then((res) => {
          this.uploadedFiles = [].concat(res);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },

    filesChange(fieldName, fileList) {
      // handle file changes
      if (!fileList.length) return;
      const formData = new FormData();
      // formData.append("image", fileList[0]);
      formData[fieldName] = fileList[0];
      this.save(formData);
    },
  },
  mounted() {
    this.reset();
  },
};
</script>

<style lang="scss">
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>