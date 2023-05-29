<script setup lang="ts"></script>

<template>
  <header>
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
    <section class="home">
      <div class="content">
        <h1 class="home__title">More than just shorter links</h1>
        <p class="home__description">
          Build your brand&apos;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <button class="btn btn--big">Get Started</button>
      </div>
      <img class="home__image" src="/images/illustration-working.svg" alt="">
    </section>
    <section>
      <form>
        <input type="text" placeholder="Shorten a link here..." />
        <button type="submit">Shorten It!</button>
      </form>
    </section>
    <section>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div>
        <article>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links
            don&apos;t mean a thing. Branded links help instil confidence in
            your content.
          </p>
        </article>
        <article>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article>
          <h3>Fully Customizable</h3>
          <p>
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
  padding: 30px 0;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      list-style: none;

      li>a {
        margin-left: 40px;
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
  margin: 80px 0;

  .content {
    .home__title {
      font-size: 4rem;
      line-height: 1.2;
      color: var(--Very-dark-violet);
    }

    .home__description {
      color: var(--Grayish-violet);
      margin-bottom: 40px;
    }
  }

  img {
    position: relative;
    width: 50%;
    left: 80px;
    bottom: 50px;
  }
}
</style>
