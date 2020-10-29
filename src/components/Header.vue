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

<style scoped lang="scss">
.header {
  background: $basic-background;
  display: flex;
  padding-top: 16px;
  justify-content: center;
  align-items: center;
}

.input {
  width: 850px;
}

@media screen and (max-width: 830px) {
  .input {
    width: 100%;
  }
  .header {
    padding: 8px;
  }
}
</style>