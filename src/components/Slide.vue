<template>
  <div class="slide l-bg">
    <div class="start-pos size">
      <div class="d-inline">
        <h2
          class="display-2"
          v-anime="{
          translateX: '-150%',
          duration: 10000,
          easing: 'easeInOutSine',
          delay: 500,
          loop: true,
        }"
        >Musican</h2>
        <h2
          class="title"
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
          class="title"
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
          class="display-2"
          v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay:2000,
          easing: 'easeInOutSine',
          loop: true,
        }"
        >Creative</h3>
      </div>
      <h2
        class="title"
        v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay: 2500,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >Avid Reader</h2>
      <h3
        class="display-1"
        v-anime="{
          translateX: '-150%',
          duration: 9000,
          delay:500,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >Fast Leaner</h3>

      <!-- 
            <div
          v-anime="{
          translateX: '-125%',
          duration: 9000,
          easing: 'easeInOutSine',
          loop: true,
        }"
        >
          <svg style="width:48px;height:48px" viewBox="0 0 24 24">
            8 note
            <path
              fill="currentColor"
              d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
            />
          </svg>
        </div>
      <div
        class="p0s-40"
        v-anime="{
          translateX: '-125%',
          duration: 9000,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          g cleff
          <path
            fill="currentColor"
            d="M13 11V7.5L15.2 5.29C16 4.5 16.15 3.24 15.59 2.26C15.14 1.47 14.32 1 13.45 1C13.24 1 13 1.03 12.81 1.09C11.73 1.38 11 2.38 11 3.5V6.74L7.86 9.91C6.2 11.6 5.7 14.13 6.61 16.34C7.38 18.24 9.06 19.55 11 19.89V20.5C11 20.76 10.77 21 10.5 21H9V23H10.5C11.85 23 13 21.89 13 20.5V20C15.03 20 17.16 18.08 17.16 15.25C17.16 12.95 15.24 11 13 11M13 3.5C13 3.27 13.11 3.09 13.32 3.03C13.54 2.97 13.77 3.06 13.88 3.26C14 3.46 13.96 3.71 13.8 3.87L13 4.73V3.5M11 11.5C10.03 12.14 9.3 13.24 9.04 14.26L11 14.78V17.83C9.87 17.53 8.9 16.71 8.43 15.57C7.84 14.11 8.16 12.45 9.26 11.33L11 9.5V11.5M13 18V12.94C14.17 12.94 15.18 14.04 15.18 15.25C15.18 17 13.91 18 13 18Z"
          />
        </svg>
      </div>
      <div
        class="p0s-40"
        v-anime="{
          translateX: '-125%',
          duration: 9000,
          easing: 'easeInOutSine',
          loop: true,
        }"
      >
        <svg style="width:48px;height:48px" viewBox="0 0 24 24">
          8 note
          <path
            fill="currentColor"
            d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z"
          />
        </svg>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {};
</script>
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
