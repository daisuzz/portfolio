<template>
  <v-content class="mx-10 py-10"
    >>
    <h1 class="font-italic font-weight-medium">Experience</h1>
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience"
        color="blue darken-4"
        small
      >
        <v-row>
          <v-col cols="3">
            <strong>{{ experience.term }}</strong>
          </v-col>
          <v-col>
            <strong>{{ experience.title }}</strong>
            <div class="">{{ experience.text }}</div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-content>
</template>

<script>
export default {
  name: "DExperience",
  data: function() {
    return {
      experiences: [
        {
          title: "working at Recruit Lifestyle Co., Ltd.",
          text: `Develop BtoC web services as a Server-side engineer.`,
          term: "2020/5 ~ "
        },
        {
          title: "worked at Yahoo JAPAN Corporation",
          text: `Developed platform applications as a corporate engineer and a scrum master.
          I developed with Java, Spring, Kotlin, Node.js, Nuxt.js, etc.`,
          term: "2017/4 ~ 2020/4"
        },
        {
          title: "finished Master's degree in Chiba University.",
          text:
            "Graduate School of Advanced Integration Science, Department Information Science.",
          term: "2015/4 ~ 2017/3"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
