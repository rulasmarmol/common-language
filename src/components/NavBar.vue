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
          <b-nav-item href="#">{{ $t('nav.about_me') }}</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <transition name="fade">
          <b-navbar-nav class="ml-auto" v-show=isHidden>
            <b-nav-form id="searchForm" >
              <b-form-input size="sm" class="mr-sm-2" type="search" :placeholder="$t('nav.search')"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="button"><b-icon-search></b-icon-search></b-button>
            </b-nav-form>

            <b-nav-item-dropdown :text="$i18n.locale" right >
              <b-dropdown-group id="dropdown-group-1" :header="$t('nav.language')">
                <b-dropdown-item href="#" @click="$i18n.locale = 'en'">English</b-dropdown-item>
                <b-dropdown-item href="#" @click="$i18n.locale = 'es'">Español</b-dropdown-item>
              </b-dropdown-group>
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
