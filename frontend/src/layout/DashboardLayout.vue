<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Klien',
            icon: 'ni ni-single-02 text-blue',
            path: '/klien',
          }"
        />
         <sidebar-item
          :link="{
            name: 'Teknisi',
            icon: 'ni ni-user-run text-green',
            path: '/klien',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Ticket',
            icon: 'ni ni-single-copy-04 text-orange',
            path: '/maps',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Work Order',
            icon: 'ni ni-bag-17 text-red',
            path: '/tables',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Database',
            icon: 'ni ni-app text-yellow',
            path: '/profile',
          }"
        />
        <!-- <sidebar-item
          :link="{
            name: 'Login',
            icon: 'ni ni-key-25 text-info',
            path: '/login',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Register',
            icon: 'ni ni-circle-08 text-pink',
            path: '/register',
          }"
        /> -->
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <!-- your content here -->
        <router-view></router-view>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss"></style>
