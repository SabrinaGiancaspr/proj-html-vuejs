<script >
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default{
  components: {
    AppHeader,
    AppMain
  },
  data(){
    return{
      links: ["Home", "Pages", "Courses", "Features", "Blog"],

    }
    
  }
}
 
</script>

<template>
    <AppHeader :links="links" />
    <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables.scss" as *;

</style>
