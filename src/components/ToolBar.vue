<template>
  <div class="toolbar">
    <section class="toolbar__top">
      <h1 class="toolbar__top__logo" @click="navigateTo('/home')">Hakumaa</h1>
      <section class="toolbar__top__container">
        <img class="toolbar__top__container__image" src="../assets/wiseman-1.jpg">
        <p class="toolbar__top__container__name">Jung Soo Lee</p>
        <p class="toolbar__top__container__type">The Seeker</p>
      </section>
      <hr class="toolbar__top__hr">
    </section>
    <section class="toolbar__bottom">
      <router-link class="toolbar__bottom__link" to="/home">Home</router-link>
      <router-link class="toolbar__bottom__link" to="/topics">Topics</router-link>
      <router-link class="toolbar__bottom__link" to="/inbox">Inbox</router-link>
      <router-link class="toolbar__bottom__link" to="/profile">Profile</router-link>
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
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid white;
  box-shadow: 0px -4px 7px $main_black;
  &__top {
    display: flex;
    flex-direction: column;
    padding-top: 8%;
    justify-content: flex-start;
    height: 35%;
    background-color: white;
    align-content: center;
    &__hr {
      margin-top: 24px;
      background-color: $main_grey;
      border: none;
      height: 2px;
      width: 40%;
      margin-left: auto;
      margin-right: auto;
    }
    &__logo {
      font-family: $font_title;
      margin-bottom: 15%;
      color: black;
    }
    &__container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: auto;
      padding-bottom: 11%;
      &__image {
        border-radius: 100%;
        height: 100px;
        width: 100px;
        background-color: black;
        margin-bottom: 2.5%;
      }
      &__name {
        font-weight: bold;
        font-size: 18px;
        color: black;
      }
      &__type {
        font-size: 12px;
        color: $main_black;
      }
    }
  }
  &__bottom {
    display: flex;
    flex-direction: column;
    height: 65%;
    background-color: white;
    align-items: center;
    padding: 16px 0px 16px 0px;
    &__link {
      font-family: $font_main;
      font-size: 15px;
      width: 100%;
      padding: 1vh 0;
      color: $main_black;
      margin-top: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: all 0.5s;
      &:hover {
        background-color: $main_black;
        color: white;
      }
    }
    &__link + &__link {
      margin-top: 2.5vh;
    }
  }
}
</style>

