<template>
  <div id="app">
    <ToolBar v-if="isLanding"/>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
export default {
  name: "App",
  computed: {
    isLanding() {
      return this.$route.name == "LandingView" ? false : true;
    }
  },
  components: {
    ToolBar
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
</style>
