<template>
  <div id="app">
    <site-header />
    <router-view class="main" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    "site-header": Header,

  }
}
</script>

<style lang="scss">
*, *::before, *::after { box-sizing: border-box; }
html { height: 100%; }
body {
  min-height: 100%;
  margin: 0;
  background: $basic-background;
  color: white;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.main {
  width: 850px;
  margin: 6px auto;
}
#app {
  min-height: 100%;
}
@media screen and (max-width: 830px)  {
  .main {
    width: calc(100% - 16px);
    margin: 16px auto;
  }
}
</style>