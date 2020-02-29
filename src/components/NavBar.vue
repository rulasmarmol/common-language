<template>
  <div v-on:mouseenter="isHidden=true" v-on:mouseleave="isHidden=false">
    <b-navbar :sticky=true toggleable="lg" type="light" variant="light" >
      <router-link to="/"><b-navbar-brand align="center">Common Language</b-navbar-brand></router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse :visible=true :appear=true id="nav-collapse" :is-nav=true >
        <b-navbar-nav>
          <b-nav-item-dropdown text="Blog">
            <b-dropdown-item href="#">Programming</b-dropdown-item>
            <b-dropdown-item href="#">Agile</b-dropdown-item>
            <b-dropdown-item href="#">Films</b-dropdown-item>
            <b-dropdown-item href="#">Music</b-dropdown-item>
            <b-dropdown-item href="#">Tech</b-dropdown-item>
            <b-dropdown-item href="#">Fitness</b-dropdown-item>
            <b-dropdown-item href="#">Travel</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="#">About Me</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <transition name="fade">
          <b-navbar-nav class="ml-auto" v-show=isHidden>
            <b-nav-form id="searchForm" >
              <b-form-input size="sm" class="mr-sm-2" type="search" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="button"><b-icon-search></b-icon-search></b-button>
            </b-nav-form>

            <b-nav-item-dropdown :text="language" right >
              <b-dropdown-item href="#" @click="language = 'EN'">EN</b-dropdown-item>
              <b-dropdown-item href="#" @click="language = 'ES'">ES</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right >
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </transition>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      language: 'ES',
      isHidden: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px){
  .navbar-brand
  {
    position:absolute;
    left:50%;
    top:8px;
    transform: translateX(-50%);
  }
  .navbar-nav{
    transition: color .15s ease-in-out,opacity .15s ease-in-out;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
