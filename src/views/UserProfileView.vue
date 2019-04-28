<template>
  <div class="userProfile">
    <section>User Profile</section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.userProfile {
  font-family: $font_main;
  margin-left: 20vw;
  width: 80vw;
  min-height: 100vh;
  background-color: $main_brown;
  &__top {
    padding: 3vh 2vw;
    text-align: left;
    &__title {
      font-size: 18px;
      margin-bottom: 18px;
      color: white;
      &__sub {
        font-size: 12px;
        font-weight: 300;
        text-decoration: underline;
        margin-left: 12px;
      }
    }
    &__card-container {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      grid-template-rows: 33% 33% 33%;
      height: 90vh;
      &__card {
        /* padding: 16px; */
        height: 90%;
        width: 90%;
        background-color: white;
        border-radius: 25px;
        transition: all 0.5s;
        cursor: pointer;
        &:hover {
          box-shadow: 0px 14px 40px rgba(34, 35, 58, 0.5);
        }
        &__image {
          border-radius: 25px 25px 0 0;
          height: 70%;
          background-color: blue;
        }
        &__title,
        &__subtitle {
          text-align: left;
          padding-left: 12px;
          font-family: $font_main;
        }
        &__title {
          padding-top: 8px;
          font-size: 14px;
        }
        &__subtitle {
          font-size: 12px;
        }
      }
    }
  }
}
</style>

