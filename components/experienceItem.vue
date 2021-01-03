<template>
  <v-main class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Experience</h1>
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="(experience, index) in experiences"
        :key="index"
        color="blue darken-4"
        small
      >
        <v-row>
          <v-col>
            <strong>{{ experience.term }}</strong>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <strong>{{ experience.title }}</strong>
            <div class="">{{ experience.text_ja }}</div>
            <div class="">{{ experience.text_en }}</div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-main>
</template>

<script>
export default {
  name: "ExperienceItem",
  data: function() {
    return {
      experiences: [
        {
          title: "working at Recruit Lifestyle Co., Ltd.",
          text_ja: `BtoCのWebアプリケーションの新規機能バックエンド開発/保守・運用`,
          text_en: `Develop BtoC web services as a server-side engineer.`,
          term: "2020/5 ~ "
        },
        {
          title: "worked at Yahoo JAPAN Corporation",
          text_ja: `人事システムや社員権限管理システムのフロントエンド,バックエンド開発/保守・運用`,
          text_en: `Developed platform applications as a server-side engineer and a scrum master.`,
          term: "2017/4 ~ 2020/4"
        },
        {
          title: "finished Master's degree in Chiba University.",
          text_ja: "Webアプリケーションのセッション管理手法について研究",
          text_en: "Graduate School of Advanced Integration Science, Department Information Science.",
          term: "2015/4 ~ 2017/3"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
