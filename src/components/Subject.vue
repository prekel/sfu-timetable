/* eslint-disable vue/require-prop-types */
<template>
  <div class="subject-container">
    <div class="heading container">
      <h4 class="subject">
        {{ subject }}
      </h4>
      <span class="type"> {{ type }} </span>
    </div>
    <div class="footer">
      <span class="place container">{{ place }}</span>
      <span
        v-if="teacher"
        class="teacher container"
      > {{ teacher }} </span>
      <span class="time container">{{ time }}</span>
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
    margin-bottom: 20px;
    .subject {
      margin: 0;
      color: $primary;
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
    .teacher {
      width: 30%;
    }
    .teacher,
    .time {
      margin-left: auto;
    }
  }
  .container {
    display: flex;
    align-items: center;
  }
}

.subject-container:nth-last-child(1) {
  border: none;
}
</style>