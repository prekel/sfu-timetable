
<template>
  <el-main
    v-if="isSelected"
    class="main-content"
  >
    <el-tabs>
      <el-tab-pane
        :label="getWeekTab(currentWeek)"
      >
        <day
          v-for="i in 6"
          :key="i"
          :date="calcDate(i)"
          :subjects="setSubjects(currentWeek)[i - 1]"
          class="day-item"
        />
      </el-tab-pane>
      <el-tab-pane
        :label="getWeekTab(!currentWeek)"
      >
        <day
          v-for="i in 6"
          :key="i"
          :date="calcDate(i + 7)"
          :subjects="setSubjects(!currentWeek)[i - 1]"
          class="day-item"
        />
      </el-tab-pane>
    </el-tabs>
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
      currentWeek: null
    }
  },
  computed: {
    weekStart() {
      return getStartWeek(this.currentDate, this.currentDate.getDay())
    },
  },
  mounted() {
    window.eventBus.$on("selectTarget", async (target) => {
      this.target = await getTarget(target)
      this.isSelected = true
      })
    this.currentDate = new Date()
    this.currentWeek = this.getCurrentWeek()
  },
  methods: {
    calcDate(indx) {
      return addDays(this.weekStart, indx);
    },
    getCurrentWeek() {
      if (getWeekNum(this.currentDate) == 1) {
        return false;
      } else {
        return true;
      }
    },
    setSubjects(week) {
      if (week) {
       return getSubjects(getWeekSubjects(this.target.timetable, 2))
      } else {
       return getSubjects(getWeekSubjects(this.target.timetable, 1))
      }
    },
    getWeekTab(week) {
      if (week) {
        return "Чётная"
      } else {
        return "Нечётная"
      }
    }
  }
}
</script>

<style lang="scss">
.main-content {
  padding: 0;
}

.tab {
  width: 50%;
}

.el-tabs__nav {
  width: 100%;
}

.el-tabs__item {
  color: white;
  width: 50%;
  text-align: center;
}

.el-tabs__nav-wrap::after {
  background-color: $base-border;
}

.el-tabs__active-bar {
  background-color: $primary;
}

.el-tabs__item.is-active {
  color: $primary;
}

.day-item {
  margin-bottom: 20px;
}
</style>