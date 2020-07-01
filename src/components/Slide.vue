<template>
  <div class="slide l-bg">
    <div class="start-pos size">
      <div class="d-inline">
        <h2
          v-anime="{
          translateX: '-150%',
          duration: 10000,
          easing: 'easeInOutSine',
          delay: 500,
          loop: true,
        }"
        >Musican</h2>
        <h2
          v-anime="{
          translateX: '-150%',
          duration: 9000,
          easing: 'easeInOutSine',
          loop: true,
        }"
        >Soccer Player</h2>
      </div>
      <div class="d-inline">
        <h3
          v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay: 1500,
          easing: 'easeInOutSine',
          loop: true,
        }"
        >Problem Solver</h3>
      </div>
      <div class="d-inline">
        <h3
          v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay:2000,
          easing: 'easeInOutSine',
          loop: true,
        }"
        >Imaginative</h3>
      </div>
      <h2
        v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay: 2500,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >Avid Reader</h2>
      <h3
        v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay:500,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >Fast Leaner</h3>
      <h3
        v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay:2000,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >Inventive</h3>
    </div>
  </div>
</template>

<style scoped>
.slide {
  height: 250px;
  color: #ffffff;
  position: relative;
}
.depth-1 {
  z-index: -1;
}
.depth-4 {
  z-index: -4;
}
.pos-86 {
  position: relative;
  top: 86%;
}
.pos-25 {
  position: relative;
  top: 25%;
}
.pos-20 {
  position: relative;
  top: 20%;
}
.pos-0 {
  position: relative;
  top: 0;
}
.pos-10 {
  position: relative;
  top: 10%;
}
.pos-30 {
  position: relative;
  top: 30%;
}
.pos-60 {
  position: relative;
  top: 60%;
}
.pos-40 {
  position: relative;
  top: 40%;
}
.pos-50 {
  position: relative;
  top: 50%;
}
.pos-75 {
  position: relative;
  top: 75%;
}
.start-pos {
  height: 100%;
  width: 100%;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.l-bg {
  background: linear-gradient(-45deg, #1f1f70, #01599d, #00838f, #00897b);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.depth {
  z-index: -1;
}
</style>