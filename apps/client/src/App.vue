<script setup lang="ts">
import Shorter from './components/Shorter.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Feature from './components/Feature.vue'

</script>

<template>
  <Header />
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
      <div class="content">
        <img class="home__image" src="/images/illustration-working.svg" alt="" />
      </div>
    </section>
    <Shorter />
    <section id="features" class="features container">
      <h2 class="features__title">Advanced Statistics</h2>
      <p class="features__subtitle text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div class="articles">
        <Feature image="/images/icon-brand-recognition.svg" title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content." />
        <Feature image="/images/icon-detailed-records.svg" title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
        <Feature image="/images/icon-fully-customizable.svg" title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
      </div>
    </section>
    <section class="boost">
      <h2>Boost your links today</h2>
      <button class="btn btn--big">Get Started</button>
    </section>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@import "./styles/mixins.scss";

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
      margin-top: 100px;
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
</style>
