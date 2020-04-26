<template>
  <div>
    <ul class="text-center">
      <li v-for="(item, i) in webtech" :key="i">{{ item.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      webtech: [
        { name: "AWS" },
        { name: "Docker" },
        { name: "Spring Boot" },
        { name: "NodeJS" },
        { name: "Github" },
        { name: "Oauth" },
        { name: "GraphQL" },
        { name: "SQL/NoSQL" },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
