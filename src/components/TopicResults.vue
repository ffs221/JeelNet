<template>
  <div class="topicResult">
    <h1 class="topicResult__header">
      Search Result:
      <span>{{ propsData }}</span>
    </h1>
    <section v-if="propsData != ''" class="topicResult__container">
      <div @click="navigateTo('/profile')" class="topicResult__container__user">
        <section class="topicResult__container__user__left">
          <img src="../assets/wiseman-2.jpg">
        </section>
        <section class="topicResult__container__user__right">
          <h1>Fathur Said</h1>
          <p>The Wise One</p>
          <h2>Expertise:</h2>
          <span>Woodworking, Culture</span>
        </section>
      </div>
      <div class="topicResult__container__user">
        <section class="topicResult__container__user__left">
          <img src="../assets/wiseman-1.jpg">
        </section>
        <section class="topicResult__container__user__right">
          <h1>Jung Soo Ha</h1>
          <p>The Wise One</p>
          <h2>Expertise:</h2>
          <span>Woodworking, History</span>
        </section>
      </div>
      <div class="topicResult__container__user">
        <section class="topicResult__container__user__left">
          <img src="../assets/wiseman-3.jpg">
        </section>
        <section class="topicResult__container__user__right">
          <h1>Diana Kris Navarro</h1>
          <p>The Wise One</p>
          <h2>Expertise:</h2>
          <span>Woodworking, Culture, Cooking</span>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TopicResults",
  props: ["propsData"],
  methods: {
    navigateTo(param) {
      this.$router.push(param);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.topicResult {
  height: 50%;
  &__header {
    margin-bottom: 3%;
    color: $main_black;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  &__container {
    &__user {
      cursor: pointer;
      box-shadow: 0px 2px 5px $main_black;
      border-radius: 24px;
      display: flex;
      width: 100%;
      height: 20vh;
      background-color: white;
      &__left {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 20%;
        img {
          border-radius: 100%;
          height: 70%;
        }
      }
      &__right {
        padding-top: 3%;
        text-align: left;
        width: 80%;
        height: 100%;
        h2 {
          font-size: 13px;
          margin-top: 3%;
        }
        span {
          font-size: 12px;
        }
      }
    }
    &__user + &__user {
      margin-top: 2vh;
    }
  }
}
</style>

