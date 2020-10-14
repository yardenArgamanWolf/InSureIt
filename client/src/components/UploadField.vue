<template>
  <div class="example-simple">
    <div class="upload">
      <ul>
        <li v-for="file in files" :key="file.id">
          <span>{{ file.name }}</span> -
          <span v-if="file.error">{{ file.error }}</span>
          <span v-else-if="file.success">success</span>
          <span v-else-if="file.active">active</span>
          <span v-else></span>
        </li>
      </ul>
      <div class="btns">
        <file-upload
          class="btn2 btn btn-dark"
          post-action="/upload/post"
          extensions="gif,jpg,jpeg,png,webp"
          accept="image/png,image/gif,image/jpeg,image/webp"
          :multiple="true"
          :size="1024 * 1024 * 10"
          v-model="files"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload"
        >
          <i class="fa fa-plus"></i>
          בחר\י קבצים
        </file-upload>
        <button
          type="button"
          class="btn2 btn btn-dark"
          v-if="!$refs.upload || !$refs.upload.active"
          @click.prevent="$refs.upload.active = true"
        >
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
          העלאה
        </button>
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

<style lang="scss">
.btns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .btn2 {
    margin-right: 0;
  }
}
</style>

<script>
import FileUpload from "vue-upload-component";
export default {
  name: "uploadfield",
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
    };
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        // Filter php html js file
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log("add", newFile);
      }
      if (newFile && oldFile) {
        // update
        console.log("update", newFile);
      }
      if (!newFile && oldFile) {
        // remove
        console.log("remove", oldFile);
      }
    },
  },
};
</script>