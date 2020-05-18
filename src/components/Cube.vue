<template>
  <v-row>
    <v-col cols="12" sx="12" sm="12" md="6">
      <v-container class="text-center">
        <h4 class="display-2 font-weight-bold mb-3 t-color">{{ title }}</h4>

        <v-responsive
          cols="12"
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >{{ desc }}</v-responsive>
        <!-- 
                <v-avatar class="elevation-12 mb-12" size="128">
                  <v-img src="../../"></v-img>
        </v-avatar>-->

        <div></div>
        <!-- 
                <v-btn color="grey" href="https://vuetifyjs.com" outlined large>
                  <span class="grey--text text--darken-1 font-weight-bold">Vuetify Documentation</span>
        </v-btn>-->
      </v-container>
      <!-- 
      <v-row>
        <v-col cols="12" sm="12">
          <h3 class="text-center">{{title}}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <p class="t-color">{{desc}}</p>
        </v-col>
      </v-row>-->
    </v-col>
    <v-col class="12" sx="12" sm="12" md="6">
      <div class="scene">
        <div class="cube">
          <div class="cube__face cube__face--front" @click="display('ts')">Typescript</div>
          <div class="cube__face cube__face--back" @click="display('wasm')">Wasm</div>
          <div class="cube__face cube__face--right" @click="display('vg')">Video Games</div>
          <div class="cube__face cube__face--left" @click="display('ai')">ML/AI</div>
          <div class="cube__face cube__face--top" @click="display('vr')">Web AR/VR</div>
          <div class="cube__face cube__face--bottom" @click="display('dc')">Docker AWS</div>
        </div>
      </div>

      <p>click a side to read a project description!</p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      desc: ""
    };
  },
  methods: {
    display: function(str) {
      switch (str) {
        case "ts":
          this.title = "Typescript projects";
          this.desc =
            "These projects will use one of the major front-end frameworks Angular/React/Vue. \n These Projects will be coming in future";

          break;
        case "wasm":
          this.title = "WebAssembly projects (Wasm)";
          this.desc =
            "These projects will be wrtien in C++ or Rust and will display the power of Wasm. \n These projects will be coming in future";

          break;
        case "vr":
          this.title = "AR/VR projects";
          this.desc =
            "These projects will use WebGL and WebXR Device API to create mini deminstrations of the technology. \n These projects will be coming in future";

          break;
        case "vg":
          this.title = "Video Game Projects";
          this.desc =
            "These projects or products will use C++/C#. They will be built based on some ofthe ideas I ahve had for a while.\n These projects will be coming in future";

          break;
        case "ai":
          this.title = "ML/AI projects";
          this.desc =
            "These projects will be made using python first then displayed online using tensorflowJS and ML5JS. \n They will be coming in future";

          break;
        case "dc":
          this.title = "Docker AWS projects";
          this.desc =
            "I am planning on deploying projects using AWS ECS for docker continers. Some of the other projects might have been deployed in this system already! \n These projects will be coming in future";

          break;
      }
    }
  }
};
</script>
<style scoped>
.t-color {
  color: #1f1f70;
}
.scene {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 80px;
  perspective: 400px;
}

.cube {
  -webkit-animation: cubeRotation 8s infinite; /* Safari 4.0 - 8.0 */
  animation: cubeRotation 8s infinite;
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
}

.cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}
.cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}
.cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}
.cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}
.cube.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}
.cube.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: hsla(0, 100%, 50%, 0.7);
}
.cube__face--right {
  background: hsla(60, 78%, 46%, 0.7);
}
.cube__face--back {
  background: hsla(120, 52%, 43%, 0.7);
}
.cube__face--left {
  background: hsla(180, 59%, 46%, 0.7);
}
.cube__face--top {
  background: hsla(240, 100%, 50%, 0.7);
}
.cube__face--bottom {
  background: hsla(300, 46%, 52%, 0.7);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(100px);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(100px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(100px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(100px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(100px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

label {
  margin-right: 10px;
}
.bg {
  background: linear-gradient(
    -45deg,
    #1f1f70,
    rgba(1, 89, 157, 0.5),
    rgba(0, 131, 143, 0.5),
    rgba(0, 137, 123, 0.5)
  );
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

@-webkit-keyframes cubeRotation {
  0% {
    -webkit-transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  }
  20% {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  40% {
    transform: rotateX(90deg) translateZ(100px);
  }
  60% {
    -webkit-transform: rotateX(-22deg) rotateY(-128deg) rotateZ(0deg);
  }
  80% {
    -webkit-transform: rotateX(-22deg) rotateY(-128deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(-22deg) rotateY(-398deg) rotateZ(0deg);
  }
}
@keyframes cubeRotation {
  0% {
    transform: rotateX(-22deg) rotateY(-38deg) rotateZ(0deg);
  }
  20% {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  40% {
    transform: rotateX(90deg) translateZ(100px);
  }
  60% {
    transform: rotateX(-22deg) rotateY(-238deg) rotateZ(0deg);
  }
  80% {
    transform: rotateX(-22deg) rotateY(-128deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(-22deg) rotateY(-398deg) rotateZ(0deg);
  }
}
</style>
