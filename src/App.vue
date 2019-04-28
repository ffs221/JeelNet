<template>
  <div id="app">
    <ToolBar v-if="isLanding"/>
    <transition name="fade" mode="out-in">
      <Loading v-if="isLoading"/>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import ToolBar from "@/components/ToolBar";
export default {
  name: "App",
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    console.log(this.$store);
  },
  computed: {
    isLoading() {
      return this.$store.state.information.loading;
    },
    isLanding() {
      return this.$route.name == "LandingView" ? false : true;
    }
  },
  components: {
    ToolBar,
    Loading
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
