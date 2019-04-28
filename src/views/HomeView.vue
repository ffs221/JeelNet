<template>
  <div class="home">
    <section class="home__top">
      <h1 class="home__top__title">
        Recent Topics
        <span class="home__top__title__sub" @click="navigateTo('/topics')">See More</span>
      </h1>
      <div class="home__top__card-container">
        <div class="home__top__card-container__card" @click="navigateTo('/profile')">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-cooking.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Traditional Recipes</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-recipe.jpeg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Cooking Class</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-culture.png"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Emirati Culture and History</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-fishing.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">My Fishing Stories</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-boatmaking.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">UAE Traditional Boat Making</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-dance.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">UAE Dance and Music</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-cooking.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Cooking Arabic Food</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-wedding.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">UAE Wedding Culture</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-gardening.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Gardening Tips</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-pearl.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Pearl Farm History</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-falconry.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Falconry</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
        <div class="home__top__card-container__card">
          <img
            class="home__top__card-container__card__image"
            src="../assets/uae-coffee.jpg"
            alt="img"
          >
          <h1 class="home__top__card-container__card__title">Coffee and Conversations</h1>
          <p class="home__top__card-container__card__subtitle">The Wise One</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  created() {
    this.$store.dispatch("information/getTopics");
    setTimeout(() => {
      this.$store.commit("information/setLoading", false);
    }, 2000);
  },
  methods: {
    navigateTo(param) {
      this.$router.push(param);
    }
  },
  data() {
    return {
      topics: [
        {
          title: "Emirati Cusine & Cooking",
          name: "The Wise One",
          src: "@/assets/topic-image.jpg"
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
  margin-left: 20vw;
  width: 80vw;
  height: 100%;
  background-color: $main_grain;
  &__top {
    padding: 3vh 2vw;
    text-align: left;
    &__title {
      font-size: 18px;
      margin-bottom: 18px;
      color: black;
      &__sub {
        cursor: pointer;
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
        height: 93%;
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
