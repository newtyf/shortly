<template>
  <footer id="resources" class="container">
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

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

footer {
  background-color: var(--Very-dark-violet);
  color: var(--White);
  display: flex;
  padding: 80px 0;

  .logo {
    font-size: 2rem;
    flex: 1;
    width: auto;
    font-weight: bold;
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