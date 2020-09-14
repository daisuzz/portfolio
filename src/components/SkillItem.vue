<template>
  <v-content class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Skill</h1>
    <div class="text-center">
      <v-row v-for="i in 1" :key="i">
        <v-col v-for="j in 3" :key="j" xl="4" lg="4" md="4" cols="12">
          <v-card max-width="500" class="mx-auto">
            <v-card-title class="justify-center"
              >{{ skills[i - 1][j - 1].item }}
            </v-card-title>
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
  name: "SkillItem",
  data: () => {
    return {
      skills: [
        [
          {
            item: "Java/SpringBoot, Thymeleaf",
            rating: 3,
            text:
              "権限管理システム, 社員情報連携バッチシステム 入稿システム, BtoCアプリケーションの実装"
          },
          {
            item: "Kotlin (Server-side)/SpringBoot",
            rating: 4,
            text:
              "権限管理システムの実装, 社員情報連携バッチシステムの実装, コンパイラ/アセンブラの実装"
          },
          {
            item: "Node.js/Express.js/Vue.js",
            rating: 2,
            text: "マスタ管理アプリケーションの実装"
          }
        ]
      ]
    };
  }
};
</script>

<style scoped></style>
