<template>
  <div class="home">
    <Toolbar />
    <div class="home__wrapper">

    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar/Toolbar.vue'
export default {
  name: 'Home',
  components: {
    Toolbar
  },
  methods: {
    selectProject(project) {
      this.creating = false;
      this.selectedProject = project;
    },
    deselectProject() {
      this.selectedProject = {};
    },
    createProject() {
      this.creating = true;
      this.deselectProject();
    },
    stopCreation() {
      this.creating = false;
      this.deselectProject();
    }
  },
  data() {
    return {
      selectedProject: {},
      creating: false
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    
    &__wrapper {
      display: flex;
      max-width: 1080px;
      width: 90%;
      margin: spacing(4) auto;
      height: calc(100vh - 70px - #{spacing(4)} * 2);
    }
  }
</style>