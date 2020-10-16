/* eslint-disable vue/require-prop-types */
<template>
  <div class="subject-container">
    <div class="heading">
      <h4 class="subject">
        {{ subject }}
      </h4>
      <span class="type"> {{ type }} </span>
    </div>
    <div class="footer">
      <span
        v-if="teacher"
        class="teacher"
      > {{ teacher }} </span>
      <span class="place">{{ place }}</span>
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subject",
  props: ["time", "subject", "type", "teacher", "place"]
}
</script>

<style scoped lang="scss">
.subject-container {
  border-bottom: 1px solid $base-border;
  margin-top: 20px;
  
  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .subject {
      margin: 0;
    }
    .type {
      margin-left: auto;
      color: $text-dark
    }
  }
  .footer {
    margin: 20px 0;
    color: $text-dark;
    display: flex;
    .time, .place {
      margin-left: auto;
    }
  }
}

.subject-container:nth-last-child(1) {
  border: none;
}
</style>