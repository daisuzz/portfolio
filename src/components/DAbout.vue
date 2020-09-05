<template>
  <v-layout row wrap>
    <v-content class="mx-10 py-10">
      <v-row justify="space-around">
        <v-col>
          <v-avatar class="profile" size="180">
            <img src="../assets/icon.jpg" alt="daisuzz">
          </v-avatar>
        </v-col>
        <v-col>
          <h1 class="font-italic font-weight-medium">Suzuki Daisaku</h1>
          <p>
            東京でソフトウェアエンジニアとして働いています。<br/>
            アプリケーションの品質を改善したり、開発生産性を向上させるための取り組みや技術が好きです。<br/>
            Software engineer working at Tokyo, Japan. <br/>
            I'm interested in design pattern, software architecture, and agile
            development.<br/>
          </p>
        </v-col>
      </v-row>
    </v-content>
  </v-layout>
</template>

<script>
export default {
  name: "DAbout"
};
</script>
