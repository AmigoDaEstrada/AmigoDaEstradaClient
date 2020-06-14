<template>
  <div id="app">
    <MobileOnlyWarning />
    <router-view/>
  </div>
</template>

<script>
import MobileOnlyWarning from '@/components/MobileOnlyWarning.vue';

export default {
  components: {
    MobileOnlyWarning
  },
  mounted() {
    let token = localStorage.getItem('USER_TOKEN');
    let basePath = '/';
    let currentPath = this.$router.currentRoute.path;

    if (!token && currentPath !== basePath) {
      this.$router.push(basePath);
    }
    else if (token) {
      this.$store.dispatch('loadUserInfo', { token }).then(() => {
        if (['/home', '/boarding'].indexOf(currentPath) === -1) {
          this.$router.push('/home');
        }
      });
    }
  }
}
</script>

<style lang="scss">
body { }
</style>
