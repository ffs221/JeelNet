<template>
  <div class="topic">
    <section class="topic__top">
      <input
        class="topic__top__input"
        placeholder="Search your topic"
        type="text"
        v-model.lazy="search"
      >
      <img class="topic__top__search" src="../assets/search-icon.png" alt="search">
    </section>
    <section class="topic__bottom">
      <TopicResults :propsData="search"/>
    </section>
  </div>
</template>

<script>
import TopicResults from "@/components/TopicResults";
export default {
  data() {
    return {
      search: ""
    };
  },
  components: {
    TopicResults
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
  background-color: $main_grain;
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
    width: 80%;
  }
}
</style>
