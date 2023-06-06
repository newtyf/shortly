<template>
  <div class="navigation__content">
    <ul>
      <li><a @click="hideNav" href="#features" class="link">Features</a></li>
      <li><a @click="hideNav" href="#pricing" class="link">Pricing</a></li>
      <li><a @click="hideNav" href="#resources" class="link">Resources</a></li>
    </ul>
    <ul>
      <li><button class="btn btn--white">Login</button></li>
      <li><button class="btn">Sign Up</button></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  hideNav: () => void
}>()

</script>

<style lang="scss" scoped>
.navigation__content {
  position: absolute;
  text-align: center;
  padding: 0 30px;
  margin: 0 25px;
  right: 0;
  left: 0;
  top: 100px;
  border-radius: 20px;
  background-color: var(--Dark-violet);
  z-index: 100;

  ul {
    list-style: none;
    margin: 30px 0;

    &:first-child {
      border-bottom: 1px solid var(--Grayish-violet);
    }

    li {
      margin-bottom: 20px;
    }

    li>a {
      margin-left: 0px;
      font-size: 1.8rem;
      color: var(--White);
    }

    li>button {
      width: 100%;
      font-size: 2rem;
      color: var(--White);
    }
  }
}
</style>