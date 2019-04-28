<template>
  <section class="login">
    <div class="login__container">
      <h1 class="login__container__logo">Hukamaa'</h1>
      <p>Username</p>
      <input class="login__container__input" type="text">
      <p>Password</p>
      <input class="login__container__input" type="password">
      <button class="login__container__btn" @click="navigateTo('/home')">Login</button>
    </div>
  </section>
</template>

<script>
import loading from "@/components/Loading.vue";
export default {
  name: "LoginView",
  methods: {
    navigateTo(param) {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push(param);
      }, 3000);
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    loading
  }
};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.login {
  background-color: $main_grain;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    box-shadow: 0px 14px 20px rgba(34, 35, 58, 0.5);
    /* border-radius: 24px; */
    background-color: white;
    height: 60%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__logo {
      font-size: 32px;
      font-family: $font_title;
      margin-bottom: 10%;
    }
    p {
      margin-top: 5%;
      width: 60%;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
    }
    &__input {
      height: 4vh;
      width: 60%;
      border: none;
      border-bottom: 1.5px solid $main_black;
      &:focus {
        outline: none;
      }
    }
    &__btn {
      cursor: pointer;
      margin-top: 10%;
      width: 25%;
      height: 8%;
      background-color: $main_black;
      color: white;
      font-size: 14px;
      font-weight: bold;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>

