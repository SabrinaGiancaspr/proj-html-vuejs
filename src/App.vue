<script >
import { store } from "./store"; 
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data(){
    return{
      links: ["Home", "Pages", "Courses", "Features", "Blog"],
      store: store,
    }
    
  },

  methods:{
    pageTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      })
    }
  }
}
 
</script>

<template>
    <AppHeader :links="links" />
    <AppMain />
    <AppFooter @scrollUp="pageTop()" />
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables.scss" as *;

</style>
