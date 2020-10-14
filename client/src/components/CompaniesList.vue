<template>
  <div>
    <select @change="selectedCompany" dir="rtl" class="form-control">
      <option
        class="text-right"
        v-for="company in companies"
        :key="company"
      >
        {{ company }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "companieslist",
  data() {
    return {
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
    };
  },
  methods: {
    selectedCompany(e) {
      const company = e.target.value
      this.$emit("selected", company);
    },
  },
};
</script>

<style>
</style>