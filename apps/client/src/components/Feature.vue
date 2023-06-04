<template>
  <article>
    <figure class="article__image">
      <img :src="image" alt="" />
    </figure>
    <h3 class="article__title">{{title}}</h3>
    <p class="article__description">
      {{ description }}
    </p>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  image: string
  title: string
  description: string
}>()

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

article {
  padding: 25px 30px 40px;
  text-align: left;
  background-color: var(--White);
  position: relative;
  width: 350px;
  border-radius: 5px;

  &:first-child {
    top: -50px;
  }

  &:last-child {
    top: 50px;
  }

  @include tablet() {
    margin-bottom: 40px;
    text-align: center;

    &:first-child {
      top: 0px;
    }

    &:last-child {
      top: 0px;
      margin-bottom: 0;
    }
  }

  .article__title {
    color: var(--Very-dark-violet);
    margin-bottom: 15px;
    font-weight: bold;
    padding-top: 50px;

    @include mobile() {
      font-size: 2rem;
    }
  }

  .article__description {
    color: var(--Grayish-violet);
    font-size: 0.84rem;
    line-height: 1.8;

    @include mobile() {
      font-size: 1.2rem;
    }
  }

  .article__image {
    background-color: var(--Dark-violet);
    position: absolute;
    width: 85px;
    height: 85px;
    top: -35px;
    left: 30px;
    padding: 20px;
    border-radius: 50%;

    @include tablet() {
      left: 132px;
    }

    img {
      width: 100%;
    }
  }
}
</style>