<template>
  <v-main>
    <div class="ma-4 pa-4 ma-sm-12 pa-sm-12 ma-md-16 pa-md-16 ma-lg-16 pa-lg-16">
      <v-row justify="center">
        <v-col xl="3" lg="3" md="3" sm="12" xs="12" cols="12">
          <v-avatar class="profile" size="180">
            <img src="~/assets/icon.jpg" alt="daisuzz"/>
          </v-avatar>
        </v-col>
        <v-col xl="6" lg="6" md="6" sm="12" xs="12" cols="12">
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
    </div>
  </v-main>
</template>

<script>
export default {
  name: "AboutItem"
};
</script>
