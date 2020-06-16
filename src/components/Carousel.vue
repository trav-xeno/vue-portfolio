<template>
  <carousel-3d>
    <slide :index="0" class="bg">
      <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/c-logo.png" alt="C++ logo" /> 
    </slide>
    <slide :index="1" class="bg">
      <img src="https://miro.medium.com/max/3954/1*w0u2TZpEp3WfKMrlL5jTSw.png" alt="C# logo" />
    </slide>
    <slide :index="2" class="bg">
      <img src="https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png" alt="go lang logo" />
    </slide>
    <slide :index="3" class="bg">
      <img
        src="https://rlv.zcache.com/f_software_foundation_stickers-r8a45deba20314cc2bd8486937a824c69_0ugra_8byvr_540.jpg"
        alt="f sharp logo"
      />
    </slide>
    <slide :index="4" class="bg">
      <img
        src="https://www.pngkey.com/png/detail/264-2646582_logo-transparent-background-java.png" 
        alt="java logo"
      />
    </slide>
    <slide :index="5" class="bg">
      <img src="https://cdn.worldvectorlogo.com/logos/javascript.svg" alt="JS logo" />
    </slide>
    <slide :index="6" class="bg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png"
        alt="kotlin logo"
      />
    </slide>

    <slide :index="7" class="bg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"
        alt="python logo"
      />
    </slide>

    <slide :index="8" class="bg">
      <img
        src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
        alt="typescript logo"
      />
    </slide>
    <slide :index="9" class="bg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png"
        alt="rust logo"
      />
    </slide>
  </carousel-3d>

  <!--  <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
        </template>
  </slide>-->
</template>
<script>
import { mdiLanguagePython } from '@mdi/js';
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
   data: () => ({
    python: mdiLanguagePython
  }),
};
</script>
<style scoped>
.bg {
  background: none;
  border: none;
}
.bg-title {
  padding: 5px 5px;
  background-color: #fff;
  color: #1f1f70;
  font-size: 30px;
}
.title {
  background-color: #1f1f70;
  width: 100%;
  font-size: 35;
  font-weight: 500;
  color: #ffffff;
}
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
