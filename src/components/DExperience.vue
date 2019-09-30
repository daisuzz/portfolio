<template>
  <v-content class="mx-10 py-10">
    <h1>Experience</h1>
    <v-timeline>
      <v-timeline-item
          v-for="experience in experiences"
          :key="experience"
          color="indigo lighten-2"
          large
      >
        <template v-slot:opposite>
          <span>{{experience.term}}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{experience.title}}</v-card-title>
          <v-card-text>
            {{experience.text}}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-content>
</template>

<script>
    export default {
        name: "DExperience",
        data: function () {
            return {
                experiences: [
                    {
                        title: "working Yahoo! JAPAN",
                        text: `I have developed a REST API with Java, Spring Framework.
                              And I have developed a back-office software by using Kotlin, Node.js, Vue.js.
                              Additionally, I have been a Scrum Master for a year. `,
                        term: "2017/4 ~ "
                    },
                    {
                        title: "finished Master's degree in Chiba University.",
                        text: `I graduated in Graduate School of Advanced Integration Science, Department Information Science.
                               I had studied about Internet Security and Computer Network.
                               I proposed a way to prevent session hijacking and implemented a reverse proxy server.`,
                        term: "2015/4 ~ 2017/3"
                    },
                    {
                        title: "finished Bachelor's degree in Chiba University.",
                        text: "Faculty of Engineering, Informatics and Imaging Systems.",
                        term: "2011/4 ~ 2015/3"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
