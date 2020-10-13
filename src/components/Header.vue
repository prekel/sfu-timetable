<template>
  <el-header class="header">
    <target-input class="input" />
  </el-header>
</template>

<script>
import TargetInput from "./TargetInput.vue"

export default {
  name: "Header",
  components: {
    "target-input": TargetInput
  }
}
</script>

<style scoped>
.header {
  background: var(--basic-background);
  border-bottom: 1px solid var(--base-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 900px;
}
</style>