<script >
export default {
  data() {
    return {
      links: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
      logo: "/dark-logo.png",
      heroPoster: "/home-6-hero-poster-final.jpg",
      youtubeImg: "icon-youtube-play.png",
      personLeft: "/home-6-hero-left-person-244x300.png",
      personRight: "/home-6-hero-right-person-195x300.png"
    }
  }
}
</script>

<template>
  <header class="header">
    <div class=" header-container">
      <!-- navbar  -->
      <nav class="navbar container">
        <figure class="logo debug">
          <img :src="logo" alt="">
        </figure>
        <ul class="nav-links debug">
          <li v-for="link in links"> <a href="#">{{ link }}</a></li>
          <li><a href="#">icon</a></li>
          <li><a href="#">icon</a></li>
          <li><a href="#">barra ricerca</a>
          </li>
          <!-- ciclo-for  -->

        </ul>
      </nav>
    </div>
    <!-- title  -->
    <section class="container">
      <div class="intro">
        <h1>Learn At Your Own Pace</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>Get Started</button>
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
  // display: flex;
  justify-content: center;
  color: white;
}

.navbar {
  background-color: red;
  display: flex;
  width: 1000px;

  .logo {
    max-width: 150px;
    display: flex;
    margin-right: 100px;
  }

  .nav-links {
    display: flex;
    gap: 15px;
  }
}

.intro {
  display: flex;
  align-items: center;
  flex-direction: column;

.hero-img{
  display: flex;
  position: relative;
  width: 100%;
  .person-img-left {
    position: relative;
    left: 40px;
    top: 50px;
  }
  .person-img-right{
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
