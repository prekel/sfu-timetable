
<template>
  <el-main
    v-if="isSelected"
    class="main-content"
  >
    <div class="subject-heading">
      <div> {{ currentDate.getDate() }} {{ month }} </div>
      <div class="week">
        {{ week.word }}
      </div>
      <div class="day">
        {{ day }}
      </div>
    </div>
    <subject
      v-for="(sub, ind) in subjects"
      :key="ind"
      :subject="sub.subject"
      :teacher="sub.teacher"
      :time="sub.time"
      :type="sub.type"
      :place="sub.place"
    />
  </el-main>
</template>

<script>
import { getTarget } from "@/api/api.js"
import { getWeekDay, getMonth, getWeekNum, getTodaySubjects } from "@/utils/dateFunctions.js"
import Subject from './Subject.vue'

export default {
  name: "MainContent",
  components: {
    "subject": Subject
  },
  data() {
    return {
      target: { target: "" },
      type: "Практика",
      subject: "Язык программирования C#",
      time: "10:15-11:50",
      teacher: "Чикизов А.А.",
      place: "УЛК 221",
      isSelected: false,
      currentDate: null,
    }
  },
  computed: {
    month() {
      return getMonth(this.currentDate.getMonth())
    },
    day() {
      return getWeekDay(this.currentDate.getDay())
    },
    week() {
      if (getWeekNum(this.currentDate.getDate(), this.currentDate.getMonth(), this.currentDate.getFullYear()) == 1 ) {
        return {"week": getWeekNum(this.currentDate.getDate(), this.currentDate.getMonth(), this.currentDate.getFullYear()),
         "word": "Нечётная"}
      } else {
        return {"week": getWeekNum(this.currentDate.getDate(), this.currentDate.getMonth(), this.currentDate.getFullYear()),
         "word": "Чётная"}
      }
    },
    subjects() {
      return getTodaySubjects(this.target.timetable, this.currentDate.getDay(), getWeekNum(this.currentDate.getDate(), this.currentDate.getMonth(), this.currentDate.getFullYear()))
    }
  },
  mounted() {
    window.eventBus.$on("selectTarget", async (target) => {
      this.target = await getTarget(target)
      this.isSelected = true} )
    this.currentDate = new Date();
  }
}
</script>

<style lang="scss">
.main-content {
  border-radius: 4px;
  border: 1px solid $base-border;
  padding: 0 20px;
  .subject-heading {
    display: flex;
    border-bottom: 1px solid $base-border;
    padding: 20px 0;
    font-size: 22px;
    font-weight: bold;
    .day {
      margin-left: auto;
    }
    .week {
      font-size: 14px;
      font-weight:lighter;
      color: $text-dark;
    }
  } 
}
</style>