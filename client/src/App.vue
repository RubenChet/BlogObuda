<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content class="item-center">
          <v-img contain max-height="100"  max-width="100" src="./assets/home_logo.png" @click="returnHome"></v-img>
          <v-list-item-title>Docker Blog</v-list-item-title>
          <v-list-item-subtitle>MEVN Full Stack</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
        { title: 'Home', icon: 'mdi-home', link: "/" },
        { title: 'Add Post', icon: 'mdi-note-plus', link: "/add-post" },
      ],
    }),
    methods:{
      returnHome(){
        return this.$router.push({name : "home"})
      }
    }
};
</script>
<style>
.item-center{
  justify-content: center;
  text-align: center;
}
</style>