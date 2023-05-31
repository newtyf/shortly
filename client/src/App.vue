<script setup lang="ts">
class Shorten {
  short: string;
  url: string;

  constructor(short: string, url: string) {
    this.short = short,
      this.url = url
  }
}

import { ref } from 'vue';

const url = ref("")
const input = ref<HTMLInputElement>()

const shortenLinks = ref<Shorten[]>([])

const shorter = () => {
  if (url.value.length === 0) {
    input.value?.setAttribute("class", "error")
    input.value!.placeholder = "Please add link"
    throw new Error("url vacio")
  } else {
    input.value?.setAttribute("class", "")
    input.value!.placeholder = "Shorten a link here..."
  }

  console.log(url.value);
}

</script>

<template>
  <header class="container">
    <div class="logo">
      <a href="#" title="logo"><img src="/images/logo.svg" alt="" /></a>
    </div>
    <nav>
      <ul>
        <li><a href="" class="link">Features</a></li>
        <li><a href="" class="link">Pricing</a></li>
        <li><a href="" class="link">Resources</a></li>
      </ul>
      <ul>
        <li><button class="btn btn--white">Login</button></li>
        <li><button class="btn">Sign Up</button></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="home container">
      <div class="content">
        <h1 class="home__title">More than just shorter links</h1>
        <p class="home__description text">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button class="btn btn--big">Get Started</button>
      </div>
      <div class="content"><img class="home__image" src="/images/illustration-working.svg" alt="" /></div>
    </section>
    <section class="shorten container">
      <form @submit.prevent="shorter">
        <input ref="input" v-model="url" type="text" placeholder="Shorten a link here..." />
        <button class="shorten__btn btn btn--minusRadius btn--big" type="submit">Shorten It!</button>
      </form>
      <div class="shortened" v-for="item in shortenLinks" :key="item.url">
        <p class="shortned__url">{{ item.url }}</p>
        <div class="shortened__content">
          <a class="shortned__short link-short">{{ item.short }}</a>
          <button class="btn btn--minusRadius">Copy</button>
        </div>
      </div>
    </section>
    <section class="features container">
      <h2 class="features__title">Advanced Statistics</h2>
      <p class="features__subtitle text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div class="articles">
        <article>
          <figure class="article__image">
            <img src="/images/icon-brand-recognition.svg" alt="" />
          </figure>
          <h3 class="article__title">Brand Recognition</h3>
          <p class="article__description">
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </article>
        <article>
          <figure class="article__image">
            <img src="/images/icon-detailed-records.svg" alt="" />
          </figure>
          <h3 class="article__title">Detailed Records</h3>
          <p class="article__description">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article>
          <figure class="article__image">
            <img src="/images/icon-fully-customizable.svg" alt="" />
          </figure>
          <h3 class="article__title">Fully Customizable</h3>
          <p class="article__description">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
    <section class="boost">
      <h2>Boost your links today</h2>
      <button class="btn btn--big">Get Started</button>
    </section>
  </main>
  <footer class="container">
    <div class="logo">Shortly</div>
    <div class="footer__resources">
      <ul class="list">
        <li class="list__title">
          Features
          <ul class="list__links">
            <li><a href="">Link Shortening</a></li>
            <li><a href="">Branded Links</a></li>
            <li><a href="">Analytics</a></li>
          </ul>
        </li>
      </ul>
      <ul class="list">
        <li class="list__title">
          Resources
          <ul class="list__links">
            <li><a href="">Blog</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Support</a></li>
          </ul>
        </li>
      </ul>
      <ul class="list">
        <li class="list__title">
          Company
          <ul class="list__links">
            <li><a href="">About</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </li>
      </ul>
      <ul class="social">
        <li>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon-facebook.svg"
              alt="facebook" /></a>
        </li>
        <li>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon-twitter.svg"
              alt="twitter" /></a>
        </li>
        <li>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon-pinterest.svg"
              alt="pinterest" /></a>
        </li>
        <li>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="/images/icon-instagram.svg"
              alt="instagram" /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
@import "./styles/mixins.scss";

header {
  display: flex;
  padding: 52px 0;
  margin: auto;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;

    @include tablet() {
      display: none;
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
}

.home {
  display: flex;
  align-items: center;
  margin: 10px 0;
  overflow-x: clip;

  @include tablet() {
    flex-direction: column-reverse;
  }

  .content {
    width: 50%;
    min-width: 350px;

    @include tablet() {
      width: 100%;
      text-align: center;
    }

    .home__title {
      font-size: 4.2rem;
      letter-spacing: -1px;
      line-height: 1.1;
      color: var(--Very-dark-violet);
    }

    .home__description {
      color: var(--Grayish-violet);
      margin-bottom: 40px;
      font-size: 1.2rem;
    }

    img {
      width: 140%;
      position: relative;
      left: 90px;

      @include tablet() {
        margin-bottom: 40px;
        left: 20px;
        width: 140%;
      }
    }
  }
}

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
    background-image: url("images/bg-shorten-desktop.svg");
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
          color:  rgb(226, 75, 75);
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
}

.features {
  background-color: var(--Soft-Sky-blue);
  text-align: center;
  padding-top: 40px;
  padding-bottom: 120px;

  .features__title {
    font-size: 2.25rem;
    letter-spacing: -1px;
    color: var(--Very-dark-violet);
  }

  .features__subtitle {
    display: inline-block;
    max-width: 540px;
    margin-top: 13px;
  }

  .articles {
    display: flex;
    position: relative;
    gap: 30px;
    margin-top: 140px;
    justify-content: space-between;

    @include tablet() {
      flex-direction: column;
      align-items: center;
    }

    &::before {
      content: "";
      position: absolute;
      top: 110px;
      width: 100%;
      height: 10px;
      background-color: var(--Cyan);

      @include tablet() {
        width: 10px;
        height: 100%;
        top: 0px;
      }
    }

    article {
      padding: 25px 30px 40px;
      text-align: left;
      background-color: var(--White);
      position: relative;
      width: 350px;
      border-radius: 5px;

      @include tablet() {
        margin-top: 0px;
        text-align: center;
      }

      &:first-child {
        top: -50px;
      }

      &:last-child {
        top: 50px;
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
        font-size: .84rem;
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
  }
}

.boost {
  background-image: url("/images/bg-boost-desktop.svg");
  background-color: var(--Dark-violet);
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2.4rem;
    color: var(--White);
    margin-bottom: 20px;
  }
}

footer {
  background-color: var(--Very-dark-violet);
  color: var(--White);
  display: flex;
  padding: 80px 0;

  .logo {
    font-size: 2rem;
  }

  @include tablet() {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .logo {
      margin-bottom: 60px;
    }

  }

  @include mobile() {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 2rem;

    .logo {
      font-size: 4rem;
    }
  }

  .footer__resources {
    display: flex;

    @include tablet() {
      flex-direction: column;
    }

    @include mobile() {
      font-size: 2rem;
    }

    ul {
      margin-left: 30px;
    }

    .list {
      list-style: none;
      margin-left: 30px;

      @include tablet() {
        margin-bottom: 40px;
        margin-left: 0;
      }

      .list__links {
        list-style: none;
        margin-left: 0;
        margin-top: 20px;

        li {
          margin-bottom: 10px;

          a {
            text-decoration: none;
            color: var(--Grayish-violet);
          }
        }
      }
    }
  }
}
</style>
