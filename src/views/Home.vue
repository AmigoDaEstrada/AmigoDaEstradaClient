<template>
  <div class="home">
    
    <a class="home__danger" @click.prevent="callHelp()" href>
      Alerta emergencial
    </a>

    <div class="home__wrapper">
      <header class="home__toolbar">
        <Logo size="small" class="home__logo" />

        <div class="toolbar-right">
          <Notifications class="home__notifications" />
          <Menu />
        </div>
      </header>

      <Profile class="home__profile" />

      <div class="home__arrow"></div>

      <AmigaoReceiver 
        class="home__amigao-receiver" 
        @help="callHelp()"
        @general="toggleMenu('GENERAL')"
        @groups="toggleMenu('PRIVATE')"
        @contacts="toggleMenu('CONTACTS')"
        @suport="alert('suporte tecnico')"
      />

      <div class="home__channel-links">
        <ChannelLink 
          class="home__channel-link" 
          icon="group" 
          label="Canal Geral"
          @click="toggleMenu('GENERAL')" 
          :active="activeMenu === 'GENERAL'"
        />
        <ChannelLink 
          class="home__channel-link" 
          icon="person" 
          label="Canal Privado" 
          @click="toggleMenu('PRIVATE')" 
          :active="activeMenu === 'PRIVATE'"
        />
        <ChannelLink 
          class="home__channel-link" 
          icon="contacts" 
          label="Contatos" 
          @click="toggleMenu('CONTACTS')" 
          :active="activeMenu === 'CONTACTS'"
        />
      </div>

      <ChannelGroups class="home__groups" v-if="activeMenu === 'PRIVATE'" />

      <ActiveChannel class="home__active-channel" />

      <CurrentTalker class="home__current-talker" v-if="activeMenu !== 'CONTACT' && $store.state.activeChannel.id" />

      <MicInstructions class="home__mic-instructions" v-if="activeMenu !== 'CONTACT'" />

      <CustomButton class="home__leave-channel" variant="white-empty" v-if="$store.state.activeChannel.id" @click="activeMenu = ''; $store.commit('removeActiveChannel')">
        Sair do canal
      </CustomButton>

      <PersonalContacts class="home__contacts" v-if="activeMenu === 'CONTACTS'" />

      <div class="home__links">
        <HomeLink class="home__link" label="Saúde" icon="local_hospital" />
        <HomeLink class="home__link" label="Mapa" icon="map" />
        <HomeLink class="home__link" label="Serviços" icon="room_service" />
      </div>

      <footer class="home__footer">
        <h5 class="footer-title">Estou com dúvidas</h5>
        <CustomButton class="footer-button" variant="white">
          Quero falar com o suporte
        </CustomButton>
      </footer>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Toolbar/Profile.vue'
import CustomButton from '@/components/Forms/CustomButton.vue'
import Notifications from '@/components/Toolbar/Notifications.vue'
import Menu from '@/components/Toolbar/Menu.vue'
import Logo from '@/components/Logo/Logo.vue'
import AmigaoReceiver from '@/components/MicReceiver/AmigaoReceiver.vue'
import ChannelLink from '@/components/Home/ChannelLink.vue'
import ChannelGroups from '@/components/Home/ChannelGroups.vue'
import PersonalContacts from '@/components/Home/PersonalContacts.vue'
import HomeLink from '@/components/Home/HomeLink.vue'
import ActiveChannel from '@/components/Home/ActiveChannel.vue'
import CurrentTalker from '@/components/Home/CurrentTalker.vue'
import MicInstructions from '@/components/MicReceiver/MicInstructions.vue'
import ChannelService from '@/services/ChannelService.js'

export default {
  name: 'Home',
  components: {
    Profile,
    Logo,
    Notifications,
    CustomButton,
    ChannelLink,
    ActiveChannel,
    CurrentTalker,
    MicInstructions,
    ChannelGroups,
    PersonalContacts,
    HomeLink,
    Menu,
    AmigaoReceiver
  },
  methods: {
    callHelp() {
      alert('ALERTA EMERGENCIAL');
    },
    toggleMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = '';
        this.$store.commit('removeActiveChannel');
      }
      else {
        this.activeMenu = menu;

        if (this.activeMenu === 'GENERAL') {
          ChannelService
            .getGeneralChannel()
            .then(channel => {
              this.$store.commit('addActiveChannel', { channel });
            });
        }
      }
    },
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
      creating: false,
      activeMenu: ''
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
      background-color: $color-yellow;
      color: $color-black;
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

      .toolbar-right {
        display: flex;
        align-items: center;
      }
    }

    &__arrow {
      $border: solid 4px $color-white;

      width: 17px;
      height: 17px;
      border-bottom: $border;
      border-right: $border;
      transform: rotateZ(45deg);
    }

    &__channel-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: spacing(5);
      width: 100%;
    }

    &__channel-link {
      margin: 0 spacing(1)/2;
    }

    &__active-channel,
    &__current-talker,
    &__mic-instructions,
    &__contacts,
    &__groups,
    &__leave-channel {
      margin-top: spacing(4);
      width: 100%;
    }

    &__links {
      position: fixed;
      bottom: 0;
      left: 0;
      width: calc(100% - #{spacing(3)} * 2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $color-blue;
      border-top: solid 1px $color-white;
      padding: spacing(2) spacing(3);
      z-index: 2;
    }

    &__footer {
      margin-top: spacing(4);
      margin-bottom: spacing(15);
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .footer-title {
        font-size: 18px;
        color: $color-white;
        margin-bottom: spacing(2);
        font-weight: $font-weight-semibold;
      }

      .footer-button {
        width: 100%;
      }
    }
  }
</style>