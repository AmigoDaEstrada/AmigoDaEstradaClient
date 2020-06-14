<template>
  <div class="home">
    
    <a class="home__danger" href>
      Alerta emergencial
    </a>

    <div class="home__wrapper">
      <header class="home__toolbar">
        <Logo size="small" class="home__logo" />
        <Notifications class="home__notifications" />
      </header>

      <Profile class="home__profile" />

      <div class="home__arrow"></div>

      <AmigaoReceiver class="home__amigao-receiver" />

      <div class="home__links">
        <HomeLink class="home__link" label="Canal Geral" destiny="" :active="true" />
        <HomeLink class="home__link" label="Canal Privado" destiny="" />
        <HomeLink class="home__link" label="Contatos" destiny="" />
      </div>

      <ActiveChannel class="home__active-channel" />

      <CurrentTalker class="home__current-talker" />

      <MicInstructions class="home__mic-instructions" />
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Toolbar/Profile.vue'
import CustomButton from '@/components/Forms/CustomButton.vue'
import Notifications from '@/components/Toolbar/Notifications.vue'
import Logo from '@/components/Logo/Logo.vue'
import AmigaoReceiver from '@/components/MicReceiver/AmigaoReceiver.vue'
import HomeLink from '@/components/Home/HomeLink.vue'
import ActiveChannel from '@/components/Home/ActiveChannel.vue'
import CurrentTalker from '@/components/Home/CurrentTalker.vue'
import MicInstructions from '@/components/MicReceiver/MicInstructions.vue'

export default {
  name: 'Home',
  components: {
    Profile,
    Logo,
    Notifications,
    CustomButton,
    HomeLink,
    ActiveChannel,
    CurrentTalker,
    MicInstructions,
    AmigaoReceiver
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

    background-color: $color-blue;
    min-height: 100vh;
    
    &__wrapper {
      position: relative;
      display: flex;
      max-width: 1080px;
      width: 90%;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
      padding: spacing(2) 0;
    }

    &__profile {
      margin-bottom: spacing(1);
    }

    &__danger {
      display: block;
      height: 48px;
      background-color: $color-red;
      color: $color-white;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: $font-weight-semibold;
    }

    &__toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    &__arrow {
      $border: solid 4px $color-white;

      width: 17px;
      height: 17px;
      border-bottom: $border;
      border-right: $border;
      transform: rotateZ(45deg);
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: spacing(5);
      width: 100%;
    }

    &__link {
      margin: 0 spacing(1)/2;
    }

    &__active-channel,
    &__current-talker,
    &__mic-instructions {
      margin-top: spacing(4);
      width: 100%;
    }
  }
</style>