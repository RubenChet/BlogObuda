<template>
  <v-container>
    <v-row>
      <v-col sm-10 class="pa-4 mx-auto">
        <v-img contain max-height='500' :src="`/${post.image}`"></v-img>
        <v-card-actions class="pb-0">
          <v-row class="mt-1 mx-1">
            <v-col sm="2">
              <v-btn small outline color="primary" text>{{ post.category }}</v-btn>
            </v-col>
            <v-col sm=10 class='d-flex justify-end'>
                <v-btn color="success" text :to="{ name: 'edit', params: { id: post._id}}">Edit</v-btn>
                <v-btn color="red" text @click="removePost(post._id)">Delete</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-subtitle class="headline">{{ post.title }}</v-card-subtitle>
        <v-cart-text class="grey--text">
            {{ post.content }}
            {{ post.creadted }}
        </v-cart-text>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from "../api";
export default {
  data() {
    return {
      post: {},
    };
  },
  async created() {
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response;
  },
  methods:{
      async removePost(id){
        const response = await API.deletePost(id)
        this.$router.push({ name:'home', params: {message: response.message}})
      }
  }
};
</script>
