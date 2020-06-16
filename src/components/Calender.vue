<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1', "pink darken-2" ],
      names: ['Go', 'Python', 'JS/TS', 'C++', 'Rust', 'Kotlin', 'Flutter', 'Java'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
       viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
     
      updateRange( ) {
        // names: ['Go', 'Python', 'JS/TS', 'C++', 'Rust', 'Kotlin', 'Flutter', 'Java'],
        
        const events = [
            {
              name: "Python",
              start: new Date("2020-06-16"),
              end: new Date("2020-07-31"),
              color: this.getColor("Python"),
              details:"Dive back into python and add projects to github. Projects will include: ML/AI, PyGame, ScraPy, Flask/Django ",
              timed: 0,
            },
             {
              name: "Go",
              start: new Date("2020-07-01") ,
              end: new Date("2020-08-30"),
              color: this.getColor("Go"),
              details:"Dive back into Go and add more projects to github. Projects will include: web development, multi threading practice, GRPC",
              timed: 0,
            },
            {
              name: "kotlin",
              start: new Date("2020-08-01"),
              end: new Date("2020-09-01"),
              color: this.getColor("Kotlin"),
              details: "The plah is to do some practice Android apps wrtien in kotlin and add them to github.",
              timed: 0,
            },
            {       
              name: "C++",
              start: new Date("2020-09-01"),
              end: new Date("2020-10-31"),
              color: this.getColor("C++"),
              details: "This is part low level practice! I plan to practice C++. Some projects will be algorithms practice and games in the Unreal engine.",
              timed: 0,
            }, {
              name: "Rust",
              start: new Date( "2020-09-01"),
              end: new Date("2020-10-31"),
              color: this.getColor("Rust"),
              details: "This is part of low level practice! I will return to Rust and make basic apps and then go create some WASM projects.",
              timed: 0,
            }, {
              name: "JS/TS",
              start: new Date("2020-07-01") ,
              end: new Date("2020-12-20"),
              color: this.getColor("JS/TS"),
              details: "Javascript and Typescript will pop up throughout these differnt proejcts but it means I will be updating older projects or updating this portfolio.",
              timed: 0,
            },
            {
              name: "Flutter",
              start: new Date("2020-10-01"),
              end: new Date("2020-12-30"),
              color: this.getColor("Flutter"),
              details: "The plah is to do some practice Android/Web apps wrtien in Dart and add them to github. I have messed around with flutter in the past, but plan to do a deeper dive into this technolgoy.",
              timed: 0,
            },
             {
              name: "Python/C++",
              start: new Date("2020-10-01") ,
              end: new Date("2020-12-30"),
              color: this.getColor("Python/C++"),
              details: "Python/C++ will pop back up to make some additions to older projects and add some new ones that are TBD.",
              timed: 0,
            },
            {       
               name: "Java",//python
              start: new Date( "2020-12-01"),
              end: new Date("2021-02-30"),
              color: this.getColor("Java"),
              details: "I plan to keep java updated so I will pick it up once in a while. I may in this time create projects with: Spring Boot and Vert.x.",
              timed: 0,
            }
        ]

        this.events = events
      },
      getColor(name){
            //colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
          switch(name){
              case "Go":
                  return this.colors[3];
              case "Python":
                  return this.colors[1] ;
              case "Java":
                  return this.colors[4];
              case "C++":
                  return this.colors[2];
              case "Rust":
                  return this.colors[6]
              case "Kotlin":
                  return this.colors[5];
              case "JS/TS":
                  return this.colors[1];
              case "Flutter":
                  return this.colors[1];
              case "Python/C++":
                  return this.colors[7];

          }
      },
    },
  }
</script>
<style scoped>

</style>