<script >
import AppHeader from "./components/AppHeader.vue"
export default{
  components: {
    AppHeader
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
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables.scss" as *;

</style>
