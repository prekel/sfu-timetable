<template>
  <div id="app">
    <site-header />
    <main-content class="main" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'


export default {
  name: "App",
  components: {
    "site-header": Header,
    "main-content": MainContent
  }
}
</script>

<style lang="scss">
:root {
  // $basic-background: #15202b;
  // $base-border: #38444d;
  // $primary: #17bf63;
  // $text-dark: #8899a6;
}

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
  width: 600px;
  margin: 16px auto;
}

#app {
  min-height: 100%;
}
</style>
