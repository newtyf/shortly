<template>
  <div class="shortened">
    <p class="shortned__url">{{ origUrl }}</p>
    <div class="shortened__content">
      <a class="shortned__short link-short" :href="`/${shortUrl}`">{{
        shortUrl
      }}</a>
      <button ref="btnCopy" class="btn btn--minusRadius" @click="copyShort">
        Copy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  origUrl: string,
  shortUrl: string,
  index: number
}>()

const btnCopy = ref<HTMLButtonElement>();

const copyShort = async () => {
  const btns = btnCopy.value as HTMLButtonElement;

  let short = props.shortUrl;
  let Url = location.protocol
    .concat("//")
    .concat(window.location.host)
    .concat(`/${short}`);
  navigator.clipboard.writeText(Url).then(() => {
    btns.setAttribute("class", "btn btn--minusRadius copied");
    btns.innerHTML = "Copied!"
  });

  setTimeout(() => {
    btns.setAttribute("class", "btn btn--minusRadius");
    btns.innerHTML = "Copy"
  }, 1000)
};

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.shortened {
  position: relative;
  background-color: var(--White);
  border-radius: 10px;
  padding: 30px 60px;
  top: -64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include mobile() {
    padding: 20px 20px;
    flex-direction: column;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      background-color: var(--Gray);
      top: 50px;
      left: 0px;
    }
  }

  .shortned__url {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 70%;

    @include mobile() {
      width: 100%;
      font-size: 1.3rem;
      padding-bottom: 20px;
      position: relative;
    }
  }

  .shortened__content {
    display: flex;
    align-items: center;

    @include mobile() {
      width: 100%;
      flex-direction: column;
    }

    .shortned__short {
      margin-right: 20px;

      @include mobile() {
        width: 100%;
        font-size: 1.3rem;
        margin-bottom: 15px;
        margin-right: 0px;
      }
    }

    .btn {
      width: 130px;
      height: 50px;

      @include mobile() {
        width: 100%;
        font-size: 1.8rem;
        font-weight: bold;
      }
    }
  }
}
</style>