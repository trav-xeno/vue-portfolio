<template>
  <HelloWorld msg="Travis Portfolio" />
</template>
<style scoped>
.size {
  padding-top: 5px;
  height: 80px !important;
}
</style>
<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
