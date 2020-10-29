<template>
  <div class="day-content">
    <div class="subject-heading">
      <div> {{ date.getDate() }} {{ month }} </div>
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
    <div
      v-if="subjects.length == 0"
      class="no-lessons"
    >
      Сегодня занятий нет
    </div>
  </div>
</template>

<script>
import Subject from './Subject.vue'
import { getWeekDay, getMonth } from "@/utils/dateFunctions.js"
export default {
   components: {
    "subject": Subject
  },
  props: ["date", "subjects"],
  computed: {
    month() {
      return getMonth(this.date.getMonth())
    },
    day() {
      return getWeekDay(this.date.getDay())
    }
  }
}
</script>

<style scoped lang="scss">
.day-content {
  border-radius: 4px;
  padding: 0 20px;
  padding-bottom: 1px;
  background: $input-dark;
  .subject-heading {
    display: flex;
    border-bottom: 1px solid $base-border;
    padding: 20px 0;
    font-size: 22px;
    font-weight: bold;
    .day {
      margin-left: auto;
    }
  }
  .no-lessons {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 20px 0;
  }
}
</style>