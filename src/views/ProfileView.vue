<template>
  <div class="userProfile">
    <section class="userProfile__container">
      <section class="userProfile__container__left">
        <img class="userProfile__container__left__img" src="../assets/wiseman-2.jpg">
        <h1 class="userProfile__container__left__name">Fathur Said</h1>
        <p>The Wise One</p>
        <button class="userProfile__container__left__button">Start Conversation</button>
      </section>
      <div class="vl"/>
      <section class="userProfile__container__right">
        <h1 class="userProfile__container__right__topics">Topics</h1>
        <div class="userProfile__container__right__cards">
          <div class="userProfile__container__right__cards__card">
            <img
              class="userProfile__container__right__cards__card__image"
              src="../assets/uae-cooking.jpg"
              alt="img"
            >
            <h1 class="userProfile__container__right__cards__card__title">Traditional Recipes</h1>
          </div>
          <div class="userProfile__container__right__cards__card">
            <img
              class="userProfile__container__right__cards__card__image"
              src="../assets/uae-woodworking.jpg"
              alt="img"
            >
            <h1 class="userProfile__container__right__cards__card__title">Woodworking</h1>
          </div>
        </div>
        <h1>Expertise</h1>
        <p>Traditional Recipe Cooking, Wood Working</p>
        <h1>Location</h1>
        <p>Abu Dhabi, UAE</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.userProfile {
  font-family: $font_main;
  display: flex;
  margin-left: 20vw;
  width: 80vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: $main_grain;
  &__container {
    display: flex;
    align-items: center;
    height: 80vh;
    width: 60vw;
    border-radius: 48px;
    background-color: white;
    box-shadow: 1px 2px 4px $main_black;
    .vl {
      width: 2px;
      height: 75%;
      background-color: $main_grain;
    }
    &__left {
      border-radius: 48px;
      width: 35%;
      height: 100%;
      background-color: white;
      &__button {
        margin-top: 5%;
        font-size: 14px;
        background-color: $main_brown;
        border: none;
        width: 60%;
        padding: 5% 5%;
        color: white;
        font-weight: bold;
        border-radius: 18px;
        &:focus {
          outline: none;
          cursor: pointer;
        }
      }
      &__img {
        height: 35%;
        margin-top: 40%;
        border-radius: 100%;
      }
      &__name {
        margin-top: 2vh;
      }
    }
    &__right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      border-radius: 48px;
      width: 62%;
      background-color: white;
      text-align: left;

      margin-left: 3%;
      p {
        margin-bottom: 4vh;
      }
      &__topics {
        margin-top: 15%;
        margin-bottom: 3%;
      }
      &__cards {
        width: 100%;
        height: 30%;
        margin-bottom: 10%;
        &__card + &__card {
          margin-left: 8%;
        }
        &__card {
          display: inline-block;
          height: 100%;
          width: 40%;
          background-color: white;
          border-radius: 25px;
          transition: all 0.5s;
          cursor: pointer;
          box-shadow: 0px 1px 1px rgba(34, 35, 58, 0.5);
          &__image {
            border-radius: 25px 25px 0 0;
            height: 70%;
            width: 100%;
          }
          &__title {
            text-align: left;
            padding-left: 12px;
            font-family: $font_main;
          }
          &__title {
            padding-top: 8px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>

