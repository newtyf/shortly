<template>
  <section class="shorten container">
    <form @submit.prevent="shorter">
      <input ref="input" v-model.trim="url" type="text" placeholder="Shorten a link here..." />
      <button class="shorten__btn btn btn--minusRadius btn--big" type="submit">
        Shorten It!
      </button>
    </form>
    <ShortUrlCard v-for="(item, index) in shortenLinks" :origUrl="item.origUrl" :shortUrl="item.shortUrl" :index="index" :key="item.shortUrl" />
  </section>
</template>

<script setup lang="ts">
class Shorten {
  shortUrl: string;
  origUrl: string;

  constructor(url: string, short: string) {
    (this.origUrl = url), (this.shortUrl = short);
  }
}

import { ref } from "vue";
import ShortUrlCard from "./ShortUrlCard.vue";

const url = ref("");
const input = ref<HTMLInputElement>();
const shortenLinks = ref<Shorten[]>([]);

const shorter = async () => {
  if (url.value.length === 0) {
    input.value?.setAttribute("class", "error");
    input.value!.placeholder = "Please add link";
    return;
  } else {
    input.value?.setAttribute("class", "");
    input.value!.placeholder = "Shorten a link here...";
    input.value!.style.color = "black";
  }

  const result: Response = await fetch("/api/short", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ url: url.value }),
  });

  const data = await result.json();

  if (Object.keys(data).length === 0) {
    input.value?.setAttribute("class", "error");
    input.value!.placeholder = "Url is not valid";
    input.value!.style.color = "red"
    url.value = ""
    return
  }

  url.value = ""
  console.log(input.value?.value);
  shortenLinks.value.push(
    new Shorten(data.shorten.origUrl, data.shorten.shortUrl)
  );
};

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.shorten {
  background-color: var(--Soft-Sky-blue);
  margin-top: 168px;

  form {
    min-height: 168px;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-image: url("/images/bg-shorten-desktop.svg");
    background-size: cover;
    background-color: var(--Dark-violet);
    border-radius: 10px;
    position: relative;
    top: -84px;

    @include mobile() {
      padding: 20px;
    }

    input {
      flex: 4;
      height: 70px;
      padding: 10px 30px;
      border-radius: 5px;
      outline: none;
      border: none;
      font-weight: bold;
      font-size: 1.3rem;

      &::placeholder {
        color: var(--Gray);
      }

      &.error {
        border: 2px solid rgb(226, 75, 75);

        &::placeholder {
          color: rgb(226, 75, 75);
        }
      }

      @include mobile() {
        font-size: 1rem;
        padding: 0 10px;
        height: 50px;
      }
    }

    .shorten__btn {
      min-width: 150px;
      flex: 1;
      height: 70px;

      @include mobile() {
        padding: 0 20px;
        height: 60px;
      }
    }
  }
}
</style>