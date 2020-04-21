<template>
  <div id="app">
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
        <!--
          <v-img
            contain
            max-height="70%"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>-->

        <v-toolbar-title class="white--text headline" color="white">{{msg}}</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="../assets/bg.png"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="mx-auto" justify="start">
                    <v-col cols="12" sm="12" tag="h1">
                      <span
                        class="font-weight-light t-color"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      >WELCOME To</span>

                      <br />

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="t-color"
                      >My portfolio!</span>
                    </v-col>
                    <v-col cols="12" sm="12">
                      <v-avatar class="elevation-12 mb-12" size="80">
                        <v-img src="../assets/GitHub.png"></v-img>
                      </v-avatar>
                      <v-avatar class="elevation-12 mb-12" size="80">
                        <v-img src="../assets/linkedin.png"></v-img>
                      </v-avatar>
                    </v-col>

                    <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
          <!-- 
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 800"
            src="../../public/lake.jpg"
          >
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                  <div class="text-center">
                    <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                    <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>-->
        </section>

        <section id="about-me" class="mb-4">
          <div class="py-12"></div>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

                <v-responsive class="mx-auto mb-8" width="56">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                  cols="12"
                  class="mx-auto title font-weight-light mb-8"
                  max-width="720"
                >Some of my hobbies are playing trumpet, hiking, and skating. I am an avid follower of technology and science advancements (yes it's super nerdy but I find thinking of all the possibilities technology fascinating). I am a full-stack developer with a passion for learning and applying new technologies. Designing user interfaces and tweaking designs for user experience are somethings I enjoy doing. I am quick to adapt and solve problems to a variety of situations.</v-responsive>

                <v-avatar class="elevation-12 mb-12" size="128">
                  <v-img src="../../public/profile.jpg"></v-img>
                </v-avatar>

                <div></div>
              </v-container>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-row>
                <v-col col="12" sm="12">
                  <h2 class="text-center display-2 font-weight-bold mb-3">Programming Languages</h2>
                  <v-responsive class="mx-auto mb-8" width="56">
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                  </v-responsive>
                </v-col>
                <v-col col="12" sm="12">
                  <Carousel />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <div class="py-12"></div>
        </section>

        <section class="mt-8 grey lighten-3">
          <div class="py-12"></div>
          <v-row>
            <v-col cols="12" sm="12">
              <h2 class="text-center display-2 font-weight-bold mb-3">Deployed Proejcts</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <Project
                src="password.png"
                title="Password Generator"
                desc="A simple password generator built using VueJS."
                git="https://github.com/trav-xeno/Password-Generator.git"
                url="https://trav-xeno.github.io/Password-Generator/"
              />
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <Project
                src="calender.png"
                title="Scheduler App"
                desc="A day Scheduler built with Jquery and momentJS!"
                git="https://github.com/trav-xeno/Calendar-App.git"
                url="https://trav-xeno.github.io/Calendar-App/"
              />
            </v-col>
          </v-row>
          <div class="py-12"></div>
        </section>
        <section class="mt-8">
          <div class="py-12"></div>

          <h2 class="text-center display-2 font-weight-bold mb-3">Future Projects</h2>

          <cube />
          <div class="py-12"></div>
        </section>
        <!--
        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 800"
            src="../../public/marching.jpg"
          >
            
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                  <div class="text-center">
                    <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                    <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>-->

        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field flat label="Name*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Email*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat label="Subject*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea flat label="Message*" solo></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn color="accent" x-large>Submit</v-btn>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-content>

      <v-footer class="justify-center" color="#292929" height="100">
        <div
          class="title font-weight-light grey--text text--lighten-1 text-center"
        >&copy; {{ (new Date()).getFullYear() }}, Travis Nevins</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Cube from "./Cube.vue";
import Carousel from "./Carousel.vue";
import Project from "./Projects.vue";
export default {
  components: {
    Carousel,
    Cube,
    Project
  },
  props: {
    msg: String
  },
  data() {
    return {
      articles: [
        {
          src: "../assets/password.png",
          title: "Password Generator",
          text: "A simple password Generator writen in Vuejs."
        },
        {
          src: "../assets/calender.png",
          title: "Simple Day Scheduler App",
          text: "This project was built with Jquery and momentJs"
        },
        {
          src: " ",
          title: "Open Weather App",
          text: "This projet was built with VueJS and Open Weather API"
        }
      ]
      /*features: [
        {
          icon: "mdi-account-group-outline",
          title: "Vibrant Community",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-update",
          title: "Frequent Updates",
          text:
            "Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."
        },
        {
          icon: "mdi-shield-outline",
          title: "Long-term Support",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ],
      stats: [
        ["24k", "Github Stars"],
        ["330+", "Releases"],
        ["1m", "Downloads/mo"],
        ["5m", "Total Downloads"]
      ] */
    };
  }
};
</script>
<style scoped>
.nav {
  background-image: linear-gradient(-50deg, #01579b 50%, #1f1f70 50%);
}
.nav-font {
  color: #01579b;
}
.v-parallax__image {
  transform: none !important;
  width: 100% !important;
}
.t-color {
  color: #1f1f70;
}
.th {
  height: 400px;
}
</style>