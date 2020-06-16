<template>
  <v-app>
    <v-app-bar app class="nav" height="100">
        <svg
          class="shrink mr-2"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <defs>
            <clipPath id="clip-custom_1">
              <rect width="100" height="100" />
            </clipPath>
          </defs>
          <g id="custom_1" data-name="custom – 1" clip-path="url(#clip-custom_1)">
            <rect width="100" height="100" fill="#1f1f70" />
            <g
              id="Rectangle_1"
              data-name="Rectangle 1"
              transform="translate(49.841 6) rotate(45)"
              fill="none"
              stroke="#00e8b0"
              stroke-width="4"
            >
              <rect width="62" height="62" rx="9" stroke="none" />
              <rect x="2" y="2" width="58" height="58" rx="7" fill="none" />
            </g>
            <text
              id="T"
              transform="translate(42 62)"
              fill="#00e8b0"
              font-size="30"
              font-family="Arial, Helvetica, sans-serif"
            >
              <tspan x="0" y="0">T</tspan>
            </text>
            <g
              id="Rectangle_2"
              data-name="Rectangle 2"
              transform="translate(19 19)"
              fill="none"
              stroke="#e8b200"
              stroke-width="4"
            >
              <rect width="62" height="62" rx="7" stroke="none" />
              <rect x="2" y="2" width="58" height="58" rx="5" fill="none" />
            </g>
          </g>
        </svg>

        <v-toolbar-title class="white--text headline" color="white">
          {{
          msg
          }}
        </v-toolbar-title>
      </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
     <v-footer class="justify-center l-bg" height="100">
        <div
          class="title font-weight-light grey--text text--lighten-1 text-center"
        >&copy; {{ new Date().getFullYear() }}, Travis Nevins</div>
      </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    msg: "Travis Nevins"
  }),
};
</script>
<style scoped>
.nav {
  background-image: linear-gradient(-50deg, #01579b 50%, #1f1f70 50%);
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
</style>
