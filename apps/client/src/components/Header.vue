<template>
  <header class="container">
    <div class="logo">
      <a href="#" title="logo"><img src="/images/logo.svg" alt="" /></a>
    </div>
    <nav class="navigation navigation--desktop">
      <ul>
        <li><a href="#features" class="link">Features</a></li>
        <li><a href="#pricing" class="link">Pricing</a></li>
        <li><a href="#resources" class="link">Resources</a></li>
      </ul>
      <ul>
        <li><button class="btn btn--white">Login</button></li>
        <li><button class="btn">Sign Up</button></li>
      </ul>
    </nav>

    <nav class="navigation navigation--mobile">
      <button ref="btnToogle"
        :class="isActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'"
        @click="showHideNav" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <Navigation v-if="isActive" :hideNav="showHideNav" />
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Navigation from "./Navigation.vue"
import { ref } from "vue"

const btnToogle = ref<HTMLButtonElement>()
const isActive = ref<boolean>(false)

const showHideNav = () => {
  console.log(btnToogle.value?.className);
  isActive.value = !isActive.value
}
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

header {
  display: flex;
  padding-top: 52px;
  padding-bottom: 52px;
  margin: auto;

  @include tablet() {
    padding-top: 32px;
  }

  .navigation {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;

    .navigation__hamburger {
      justify-self: self-end;
    }

    &.navigation--desktop {

      @include tablet() {
        &.navigation--desktop {
          display: none;
        }
      }

      ul {
        display: flex;
        list-style: none;

        li>a {
          margin-left: 30px;
        }

        li>button {
          margin-left: 10px;
        }
      }
    }

    &.navigation--mobile {
      display: none;
      justify-content: flex-end;

      @include tablet() {
        display: flex;
      }
    }
  }
}
</style>