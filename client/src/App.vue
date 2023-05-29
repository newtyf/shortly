<script setup lang="ts"></script>

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
      <div class="content-image">
        <img class="home__image" src="/images/illustration-working.svg" alt="" />
      </div>
    </section>
    <section class="url-shorter container">
      <form>
        <input type="text" placeholder="Shorten a link here..." />
        <button class="url-shorter__btn btn btn--minusRadius btn--big" type="submit">Shorten It!</button>
      </form>
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
    <section>
      <h2>Boost your links today</h2>
      <button>Get Started</button>
    </section>
  </main>
  <footer>
    <div class="logo">Shortly</div>
    <ul>
      <li>
        Features
        <ul>
          <li><a href="">Link Shortening</a></li>
          <li><a href="">Branded Links</a></li>
          <li><a href="">Analytics</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        Resources
        <ul>
          <li><a href="">Blog</a></li>
          <li><a href="">Developers</a></li>
          <li><a href="">Support</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        Company
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Our Team</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </li>
    </ul>
    <ul>
      <li>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="" alt="facebook" /></a>
      </li>
      <li>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="" alt="twitter" /></a>
      </li>
      <li>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="" alt="pinterest" /></a>
      </li>
      <li>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer"><img src="" alt="instagram" /></a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss">
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
  justify-content: center;
  flex-wrap: wrap-reverse;
  overflow-x: hidden;
  margin: 10px 0;

  .content {
    flex: 2;

    .home__title {
      font-size: 4.3rem;
      letter-spacing: -1px;
      line-height: 1.1;
      color: var(--Very-dark-violet);
    }

    .home__description {
      color: var(--Grayish-violet);
      margin-bottom: 40px;
      font-size: 1.2rem;
    }
  }

  .content-image {
    flex: 1;
    flex-basis: 250px;

    img {
      width: 140%;
      position: relative;
      left: 70px;
    }
  }
}

.url-shorter {

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
    background-color: var(--Dark-violet);
    border-radius: 15px;
    position: relative;
    top: -84px;

    input {
      flex: 4;
      height: 70px;
      padding: 10px 30px;
      border-radius: 10px;
      outline: none;
      border: none;
      font-weight: bold;
      font-size: 1.3rem;

      &::placeholder {
        color: var(--Gray);
      }
    }

    .url-shorter__btn {
      min-width: 150px;
      flex: 1;
      height: 70px;
    }
  }
}

.features {
  background-color: var(--Soft-Sky-blue);
  text-align: center;
  padding-top: 40px;

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
    gap: 30px;
    flex-wrap: wrap;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 190px;
      width: 100%;
      height: 10px;
      background-color: var(--Cyan);
    }

    article {
      flex-grow: 1;
      padding: 20px 33px;
      text-align: left;
      background-color: var(--White);
      position: relative;
      margin-top: 80px;
      flex-basis: 300px;

      &:first-child {
        top: -40px;
      }

      &:last-child {
        bottom: -40px;
      }

      .article__title {
        color: var(--Very-dark-violet);
        margin-bottom: 20px;
        font-weight: bold;
        padding-top: 50px;
      }

      .article__description {
        color: var(--Grayish-violet);
        font-size: .9rem;
      }

      .article__image {
        background-color: var(--Dark-violet);
        position: absolute;
        width: 80px;
        height: 80px;
        top: -35px;
        left: 20px;
        padding: 20px;
        border-radius: 50%;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
