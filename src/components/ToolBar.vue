<template>
  <div class="toolbar">
    <section class="toolbar__left">
      <h1 class="toolbar__logo" @click="navigateTo('/home')">Hakumaa</h1>
    </section>
    <section class="toolbar__right">
      <router-link class="toolbar__right__link" to="/home">Home</router-link>
      <router-link class="toolbar__right__link" to="/topics">Topics</router-link>
      <router-link class="toolbar__right__link" to="/inbox">Inbox</router-link>
      <router-link class="toolbar__right__link" to="/profile">Profile</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  methods: {
    navigateTo(param) {
      this.$router.push(param);
    }
  }
};
</script>


<style lang="scss">
@import "../assets/theme.scss";
.toolbar {
  font-family: $font_main;
  position: fixed;
  width: 100vw;
  height: 7.5vh;
  display: flex;
  justify-content: space-between;
  background-color: $main_brown;
  border-bottom: 2px solid white;
  &__logo {
    font-family: $font_title;
    color: white;
    cursor: pointer;
  }
  &__left {
    display: flex;
    align-items: center;
    padding-left: 2vw;
  }
  &__right {
    display: flex;
    align-items: center;
    margin-right: 3.5vw;
    &__link {
      font-family: $font_main;
      font-size: 15px;
      width: 5vw;
      color: white;
      margin-top: 6px;
      text-decoration: none;
      font-weight: bold;
    }
    &__link + &__link {
      margin-left: 3vw;
    }
  }
}
</style>

