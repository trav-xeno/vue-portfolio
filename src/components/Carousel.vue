<template>
  <carousel-3d>
    <slide v-for="(slide , i) in imgs" :index="i" :key="i" class="bg">
      <img :data-index="i" :src="slide.src" :alt="slide.alt" />
    </slide>
  </carousel-3d>

  <!--  <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
        </template>
  </slide>-->
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data: () => ({
    imgs: [
      {
        src: "https://cdn.freebiesupply.com/logos/thumbs/2x/c-logo.png",
        alt: "C++ logo"
      },
      {
        src: "https://miro.medium.com/max/3954/1*w0u2TZpEp3WfKMrlL5jTSw.png",
        alt: "C# logo"
      },
      {
        src:
          "https://pbs.twimg.com/profile_images/1142154201444823041/O6AczwfV_400x400.png",
        alt: "go lang logo"
      },
      {
        src:
          "https://www.pngkey.com/png/detail/264-2646582_logo-transparent-background-java.png",
        alt: "java logo"
      },
      {
        src: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
        alt: "JS logo"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin-logo.svg/1200px-Kotlin-logo.svg.png",
        alt: "kotlin logo"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
        alt: "python logo"
      },
      {
        src:
          "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png",
        alt: "typescript logo"
      },
      {
        src:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png",
        alt: "rust logo"
      }
    ]
  })
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
