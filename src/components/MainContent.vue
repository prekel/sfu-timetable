
<template>
  <el-main
    v-if="isSelected"
    class="main-content"
  >
    <day
      v-for="i in 6"
      :key="i"
      :date="calcDate(i)"
      :subjects="weekSubjects[i - 1]"
      class="day"
    />
  </el-main>
</template>

<script>
import { getTarget } from "@/api/api.js"
import { getWeekNum, addDays, getStartWeek, getWeekSubjects, getSubjects } from "@/utils/dateFunctions.js"
import Day from './Day.vue'

export default {
  name: "MainContent",
  components: {
    "day": Day
  },
  data() {
    return {
      target: {},
      isSelected: false,
      currentDate: null,
    }
  },
  computed: {
    subjects() {
      return getWeekSubjects(this.target.timetable, getWeekNum(this.currentDate))
    },
    weekStart() {
      return getStartWeek(this.currentDate, this.currentDate.getDay())
    },
    weekSubjects() {
      return getSubjects(this.subjects)
    }
  },
  mounted() {
    window.eventBus.$on("selectTarget", async (target) => {
      this.target = await getTarget(target)
      this.isSelected = true
      })
    this.currentDate = new Date();
  },
  methods: {
    calcDate(indx) {
      return addDays(this.weekStart, indx);
    }
  }
}
</script>

<style scoped lang="scss">
.main-content {
  padding: 0;
}

.day {
  margin-bottom: 20px;
}
</style>