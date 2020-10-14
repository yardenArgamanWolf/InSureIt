<template>
  <div>
    <table dir="rtl" class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">חברת ביטוח</th>
          <th scope="col">מחיר חודשי</th>
          <th scope="col">כיסוי רעידות אדמה</th>
          <th scope="col">כיסוי גניבות</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="selected-tr" v-for="(element, index) in table" :key="index">
          <td>{{ element.company }}</td>
          <td>{{ element.price }}</td>
          <td>{{ element.earthquake_cover }}</td>
          <td>{{ element.robbery_cover }}</td>
          <td>
            <button
              @click="to_joining(element)"
              type="button"
              style="float: left; margin: 0"
              class="btn btn-dark"
            >
              המשך להצטרפות
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
var numeral = require("numeral");
export default {
  name: "results",
  mounted() {},
  created() {
    this.setResults();
  },
  data() {
    return {
      sortedTable: null,
    };
  },
  props: {
    table: {
      type: null,
      required: true,
    },
  },

  methods: {
    to_joining(element) {
      this.$router.push(`/joining/${element.offer_ID}`);
    },
    compare(a, b) {
      const A = a.price.toString().replace(',','');
      const B = b.price.toString().replace(',','');
      const priceA = Number(A);
      const priceB = Number(B);
      let comparison = 0;
      if (+priceA < +priceB) {
        comparison = 1;
      } else if (+priceA > +priceB) {
        comparison = -1;
      }
      return comparison;
    },
    setResults() {
      const sortedTable = this.table.sort(this.compare);
      this.table = sortedTable;
      this.$store.commit("set_results", sortedTable);
    },
  },
};
</script>

<style lang="scss">
input,
textarea {
  text-align: right;
}
.selected-tr:hover {
  background-color: #1569ac;
  color: white;
  cursor: pointer;
}
.table-active {
  background-color: #1569ac;
  color: white;
  cursor: pointer;
}
</style>



