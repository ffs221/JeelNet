<template>
  <div class="topic">
    <section class="topic__top">
      <input class="topic__top__input" placeholder="Search your topic" type="text" v-model="search">
      <img class="topic__top__search" src="../assets/search-icon.png" alt="search">
    </section>
    <section class="topic__bottom">
      <div class="topic__bottom__card-container">
        <div class="topic__bottom__card-container__card">
          <section class="topic__bottom__card-container__card__image"></section>
          <h1 class="topic__bottom__card-container__card__title">TITLE</h1>
          <p class="topic__bottom__card-container__card__subtitle">NAME</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  }
};
</script>


<style lang="scss">
@import "../assets/theme.scss";
.topic {
  font-family: $font_main;
  margin-left: 20vw;
  width: 80vw;
  min-height: 100vh;
  background-color: $main_brown;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0;
  &__top {
    margin-bottom: 5vh;
    width: 80%;
    height: 5vh;
    border: 20px solid white;
    border-radius: 24px;
    background-color: white;
    text-align: left;
    box-shadow: 0px 2px 5px $main_black;
    display: flex;
    align-items: center;
    &__input {
      margin: 0;
      height: 100%;
      width: 96%;
      border: none;
      font-size: 18px;
      font-family: $font_main;
      font-weight: bold;
      &::placeholder {
        color: #6c6c6c;
      }
      &:focus {
        outline: none;
      }
    }
    &__search {
      display: inline-block;
      height: 100%;
      width: 4%;
      cursor: pointer;
    }
  }
  &__bottom {
    width: 85%;
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
          width: 100%;
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
