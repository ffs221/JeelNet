<template>
  <div class="landing">
    <img class="landing__logo" src="../assets/logo_main.jpg" alt="logo">
    <section class="landing__center">
      <h1 class="landing__center__title">Hukamaa'</h1>
      <p
        class="landing__center__subtitle"
      >A platform to engage the elderly to realize their full capacity in today's society.</p>
      <button class="landing__center__btn inverse" @click="navigateTo('/home')">Login</button>
      <button class="landing__center__btn" @click="navigateTo('/home')">Sign Up</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    navigateTo(param) {
      this.$router.push(param);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.landing {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__logo {
    width: 35%;
    margin-right: 5vw;
  }
  &__center {
    width: 40%;
    color: $main_brown;
    text-align: left;
    &__title {
      text-align: left;
      font-family: $font_title;
      font-size: 90px;
      margin-bottom: 20px;
    }
    &__subtitle {
      text-align: left;
      font-family: $font_subtitle;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    &__btn {
      font-family: $font_subtitle;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      color: $main_brown;
      font-size: 22px;
      width: 9vw;
      background-color: transparent;
      transition: all 0.5s;
      border: 3px solid $main_brown;
      &:hover {
        background-color: $main_brown;
        color: white;
      }
    }
    .inverse {
      background-color: $main_brown;
      color: white;
    }
    &__btn + &__btn {
      margin-left: 32px;
    }
  }
}
</style>

