<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="require(`@/assets/${src}`)">
      <v-card-title>
        <div class="t-bg">{{ title }}</div>
      </v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div class="bg">{{ desc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn :href="git" color="#1f1f70" text>Git Repo</v-btn>

      <v-btn :href="url" color="#1f1f70" text>Live Demo</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    src: String,
    title: String,
    desc: String,
    git: String,
    url: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.t-bg {
  background-color: #1f1f70;
  padding: 5px 5px 5px 5px;
}
</style>