<template>
  <el-main class="main-content">
    <h1>{{ target.target }}</h1>
    <h2>{{ target.type }}</h2>
  </el-main>
</template>

<script>
import { getTarget } from "@/api/api.js"

export default {
  name: "MainContent",
  data() {
    return {
      target: { target: "" }
    }
  },
  async mounted() {
    window.eventBus.$on("selectTarget", async (target) => {this.target = await getTarget(target)} )
  }
}
</script>

<style>
.main-content {
  background: red;
}
</style>