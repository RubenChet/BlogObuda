<template>
  <v-container>
    <v-alert border="left" close-text="Close Alext" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row>
      <v-col sm="auto" v-for="post in posts" :key="post.id">
        <v-card :to="{ name: 'post', params: { id: post._id } }">
          <v-img contain height="250" width="200" :src="`/${post.image}`"></v-img>
          <!-- <div class="contain">
            <p class="cat_btn">{{ post.category }}</p>
          </div>     -->
          <v-btn class='ml-3 mt-n5' x-small outlined color="indigo">{{ post.category }}</v-btn>
          <v-card-title class="headline justify-center">{{ post.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api"
  export default {
    data(){
      return {
        posts : [],
      }
    },
    async created(){
      this.posts = await API.getAllPost()
    }
  }
</script>
<style>
.cat_btn{
  padding: 0;
  border: 1px solid black;
  border-radius: 5px;
  color:mediumblue;
  text-align: center;
}
.contain{
  margin-top: -20%;
  margin-left: 30%;
  margin-right:30%
}
</style>
