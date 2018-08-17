<template>
  <div class="hello">
    <img src="../assets/images/logo.png">
    <h2>Welcome to Vue.JS</h2>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return { }
  },
  created() { },
  methods: {
    redirect(){

        // this.$router.push("/customer");
        // console.log(this.$route.path);
        // this.$router.replace(this.$route.query.redirect || '/home');
        // console.log(this.$route.path);
        // console.log(this.$route);
        // console.log(this.$route.fullPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
