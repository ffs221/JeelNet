<template>
  <div class="toolbar">
    <section class="toolbar__left">
      <img src alt="logo">
    </section>
    <section class="toolbar__right">
      <router-link class="toolbar__right__link" to="/home">Home</router-link>
      <router-link class="toolbar__right__link" to="/topics">Topics</router-link>
      <router-link class="toolbar__right__link" to="/inbox">Inbox</router-link>
      <router-link class="toolbar__right__link" to="/profile">Profile</router-link>
    </section>
  </div>
</template>

<style lang="scss">
.toolbar {
  position: fixed;
  width: 100vw;
  height: 7.5vh;
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  &__left {
    display: flex;
    align-items: center;
    padding-left: 2vw;
  }
  &__right {
    display: flex;
    align-items: center;
    padding: 0 2vw;
    &__link {
      color: black;
      text-decoration: none;
    }
    &__link + &__link {
      margin-left: 3vw;
    }
  }
}
</style>

