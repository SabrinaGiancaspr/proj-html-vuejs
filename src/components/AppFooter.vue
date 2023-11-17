<script>
export default {
  data() {
    return {
      addressIcon: [['fab', 'square-facebook'], ['fab', 'twitter'], ['fab', 'instagram'], ['fab', 'linkedin']],
      footerLists: [
        {
          class: 'explore',
          title: 'explore',
          items: ['start here', 'Blog', 'About us']
        },
        {
          class: 'contact-us',
          title: '',
          items: ['success story', 'Courses', 'Contact us']
        },
        {
          class: 'info',
          title: 'info',
          items: ['Membership', 'Purchase guide', 'Privacy policy', 'Terms of services']
        }
      ]
    };
  },
  methods:{
    pageUp(){
        this.$emit('scrollUp')
    }
  }
};
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="address">
                <p>Address</p>
                <p>382 NE 191st St # 87394 Miami, FL 22179-3899</p>
                <p>+1(305)547-9909 (9am - 5pm EST, Monday - Friday)</p>
                <p>support@maxcoach.com</p>
                <div class="social-icons">
                    <font-awesome-icon v-for="(icon, index) in addressIcon" :key="index" :icon="icon" class="flag" />
                </div>
            </div>
            <div class="footer-list">
                <div v-for="(list, index) in footerLists" :key="index" :class="list.class">
                    <h3>{{ list.title }}</h3>
                    <ul class="list-item">
                        <li v-for="(item, itemIndex) in list.items" :key="itemIndex">{{ item }}</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="maxcoach">
            <p>2020 Mazcoach. All Rights Reser</p>
        </div>
        <div class="arrow">
            <font-awesome-icon @click="pageUp()" class="arrow-up-icon" icon="fa-solid fa-arrow-up" />
        </div>
    </footer>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;


.footer {
    padding: 100px;
    position: relative;
}

.address {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .social-icons {
        margin-top: 20px;
        display: flex;
        gap: 30px;
    }
}

.footer-list {
    display: flex;
    gap: 50px;
    margin-left: 200px;
    margin-top: 70px;

    .explore,
    .contact-us,
    .info,
    .list-item {

        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .contact-us {
        margin-top: 20px;
    }
}

.maxcoach {
    margin-top: 60px;
    text-align: center;
}


.arrow-up-icon{
    position: absolute;
    right: 100px;
    bottom: 100px;
    background-color: #20AD96;
    padding: 20px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
}
</style>
