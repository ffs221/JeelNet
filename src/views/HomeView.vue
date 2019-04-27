<template>
  <div class="home">
    <!-- <section class="home__top">
      <h1 class="home__top__title">
        Recent Topics
        <span class="home__top__title__sub">See More</span>
      </h1>
      <div class="home__top__card-container">
        <div class="home__top__card-container__card" v-for="topic in topics" :key="topic.index">
          <section class="home__top__card-container__card__image"></section>
          <h1 class="home__top__card-container__card__title">{{ topic.title }}</h1>
          <p class="home__top__card-container__card__subtitle">{{ topic.name }}</p>
        </div>
      </div>
    </section>-->
    <section class="home__left"></section>
    <section class="home__middle"></section>
    <section class="home__right"></section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  created() {
    this.$store.dispatch("information/getTopics");
  },
  data() {
    return {
      topics: [
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One"
        },
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One"
        },
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One"
        },
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One"
        },
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One"
        }
      ]
    };
  },
  components: {
    SearchBar
  }
};
</script>

<style lang="scss">
@import "../assets/theme.scss";
.home {
  font-family: $font_main;
  padding-top: 10vh;
  height: 90vh;
  background-color: $main_brown;
  &__top {
    padding: 1vh 2vw;
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
      grid-template-columns: 20% 20% 20% 20% 20%;
      grid-template-rows: auto;
      height: 40vh;
      background-color: white;
      &__card {
        /* padding: 16px; */
        height: 80%;
        width: 18vw;
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
      &__card + &__card {
        /* margin-left: 16px; */
      }
    }
  }
}
</style>
