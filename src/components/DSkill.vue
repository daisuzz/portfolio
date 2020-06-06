<template>
  <v-content class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Skill</h1>
    <div class="text-center">
      <v-row v-for="i in 1" :key="i">
        <v-col v-for="j in 3" :key="j">
          <v-card max-width="500" class="mx-auto">
            <v-card-title class="justify-center">{{
              skills[i - 1][j - 1].item
            }}</v-card-title>
            <v-rating
              background-color="indigo lighten-3"
              color="indigo"
              :value="skills[i - 1][j - 1].rating"
              readonly
              large
            ></v-rating>
            <v-card-text>{{ skills[i - 1][j - 1].text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "DSkill",
  data: () => {
    return {
      skills: [
        [
          {
            item: "Java/SpringBoot",
            rating: 3,
            text: "REST APIの実装, Thymeleafを利用したWebアプリケーションの実装"
          },
          {
            item: "Kotlin (Server-side)/SpringBoot",
            rating: 4,
            text: "REST APIの実装, バッチの実装, コンパイラ/アセンブラの実装"
          },
          {
            item: "Node.js/Express.js/Vue.js",
            rating: 2,
            text: "Nuxt.js, Express.jsを利用した業務アプリケーションの実装"
          }
        ]
      ]
    };
  }
};
</script>

<style scoped></style>
