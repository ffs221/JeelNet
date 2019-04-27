<template>
  <div class="landing">
    <section class="landing__center">
      <h1 class="landing__center__title">Hukamaa'</h1>
      <p
        class="landing__center__subtitle"
      >A platform to engage the elderly to realize their full capacity in today's society</p>
      <button class="landing__center__btn" @click="navigateTo('/home')">Enter</button>
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
.landing {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__center {
    width: 40%;
    text-align: left;
    &__title {
      font-size: 64px;
    }
    &__subtitle {
      font-size: 28px;
    }
    &__btn {
      width: 8vw;
      height: 2vh;
    }
  }
}
</style>

