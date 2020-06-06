<template>
  <v-content class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Experience</h1>
    <v-timeline dense>
      <v-timeline-item
        v-for="experience in experiences"
        :key="experience"
        color="indigo lighten-2"
        large
      >
        <template v-slot:opposite>
          <span>{{ experience.term }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ experience.title }}</v-card-title>
          <v-card-text>
            {{ experience.text }}
          </v-card-text>
        </v-card>
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
          title: "working at RECRUIT LIFESTYLE CO., LTD.",
          text: `Java, Springを利用したBtoCサービスのバックエンドエンジニアとして働いています。`,
          term: "2020/5 ~ "
        },
        {
          title: "working at Yahoo JAPAN Corporation",
          text: `コーポレートエンジニアとして社内システムの開発を行っていました。
          主な利用言語/フレームワークはJava, Spring, Kotlin, Node.js, Nuxt.jsです。
          また、並行してスクラムマスターとして1年間チームの開発プロセスの改善などを行っていました。`,
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
