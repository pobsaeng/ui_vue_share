<template>
  <div id="app">
    <navbar></navbar>
    
    <div class="container-fluid">
      <router-view/>
    </div>

  </div>
</template>

<script>
import navbar from "@/components/navbar/index";
export default {
  name: "App",
  components: { navbar }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container-fluid{
  margin-top: 90px !important;
}
html {
  font-size: 14px;
}
</style>
