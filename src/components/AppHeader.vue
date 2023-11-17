<script >
export default {
  props: {
    links: Array,
  },
  data() {
    return {
      icons: [["fas"], ["angle-down"]],
      logo: "/light-logo.png",
      heroPoster: "/home-6-hero-poster-final.jpg",
      youtubeImg: "icon-youtube-play.png",
      personLeft: "/home-6-hero-left-person-244x300.png",
      personRight: "/home-6-hero-right-person-195x300.png",
    }
  }
}
</script>

<template>
  <header class="header">
    <div class=" header-container">
      <!-- navbar  -->
      <nav class="navbar container">
        <figure class="logo-nav">
          <img class="logo" :src="logo" alt="">
        </figure>
        <ul class="nav-links">
          <li v-for="(link, index) in links" :key="index">
            <a href="#">{{ link }} <font-awesome-icon class="angle-down" icon="fas fa-angle-down" /></a>
          </li>
          <li class="shop">
            <a href="#">Shop
              <span class="cart-badge">0</span>
              <font-awesome-icon class="cart-icon" icon="fas fa-cart-shopping" /></a>
          </li>
          <li><font-awesome-icon icon="far fa-circle-user" /></li>
          <li class="search-bar">
            <input type="text" placeholder="Search..." class="input-with-icon">
            <font-awesome-icon class="input-icon" icon="fas fa-magnifying-glass" />
          </li>
        </ul>
      </nav>
    </div>
    <!-- hero  -->
    <section class="container">
      <div class="intro">
        <h1 class="title">Learn At Your Own Pace!</h1>
        <p>Get teamed up with people of the same will. </p>
        <button class="btn btn-header">Get Started for free</button>
        <div class="hero-img">
          <img class="person-img-left" :src="personLeft" alt="">
          <figure class="hero-poster">
            <img class="hero-img" :src="heroPoster" alt="">
            <img class="youtube-img" :src="youtubeImg" alt="">
          </figure>
          <img class="person-img-right" :src="personRight" alt="">
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.header {
  background-color: $header-color;
  padding-top: 15px;
  color: white;
  position: relative;

  .navbar {
    background-color: $header-color;
    display: flex;
    width: 1000px;
    justify-content: center;

    .logo-nav {
      justify-content: center;
      align-items: center;
      display: flex;
      margin-right: 100px;

      .logo {
        max-width: 120px;
        height: auto;
      }

    }

    .nav-links {
      display: flex;
      gap: 25px;
      align-items: center;
      position: relative;

      .shop {
        position: relative;
      }

      .cart-badge {
        position: absolute;
        top: -14px;
        right: -8px;
        background-color: white;
        color: black;
        border-radius: 50%;
        font-weight: bold;
        aspect-ratio: 1;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
      }

      .angle-down {
        font-size: 12px;
      }

      .search-bar {
        position: relative;

        .input-with-icon {
          padding: 10px;
          border-radius: 20px;
        }

        .input-icon {
          position: absolute;
          right: 10px;
          color: black;
          top: 10px;
          color: #20AD96;
        }
      }
    }
  }
}

.intro {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  .title {
    font-size: 40px;
    margin-top: 70px;
  }

  .btn-header {
    margin-bottom: 50px;
  }

  .hero-img {
    display: flex;
    position: relative;
    width: 100%;


    .person-img-left {
      position: relative;
      left: 40px;
      top: 50px;
    }

    .person-img-right {
      position: relative;
      top: 170px;
    }
  }

  .hero-poster {
    position: relative;
    border: 20px solid white;
    border-radius: 4%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    margin-bottom: -50px;

    .youtube-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
