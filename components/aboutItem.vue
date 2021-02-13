<template>
  <v-main>
    <div class="ma-4 pa-4 ma-sm-12 pa-sm-12 ma-md-16 pa-md-16 ma-lg-16 pa-lg-16">
      <v-spacer></v-spacer>
      <v-row justify="center">
        <v-col xl="12" lg="12" md="12" sm="12" xs="12" cols="12">
          <v-avatar class="profile" size="180">
            <img src="~/assets/icon.jpg" alt="daisuzz"/>
          </v-avatar>
        </v-col>
        <v-col xl="12" lg="12" md="12" sm="12" xs="12" cols="12">
          <h1 class="font-italic font-weight-medium">Suzuki Daisaku</h1>
          <p>
            東京でソフトウェアエンジニアとして働いています。<br/>
            アプリケーションの品質を改善したり、開発生産性を向上させるための取り組みや技術が好きです。
          </p>
        </v-col>
        <v-col xl="12" lg="12" md="12" sm="12" xs="12" cols="12">
          <v-btn icon href="https://github.com/daisuzz" target="_blank" left>
            <v-icon x-large>{{ gitHubSvgPath }}</v-icon>
          </v-btn>
          <v-btn icon href="https://twitter.com/daisuzz" target="_blank">
            <v-icon x-large>{{ twitterSvgPath }}</v-icon>
          </v-btn>
          <v-btn icon href="https://www.linkedin.com/in/daisuzz" target="_blank">
            <v-icon x-large>{{ linkedinSvgPath }}</v-icon>
          </v-btn>
          <v-btn icon href="https://iikanji.hatenablog.jp" target="_blank" left>
            <v-icon x-large>{{ textSvgPath }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </div>
  </v-main>
</template>

<script>
import {mdiGithub, mdiLinkedin, mdiTextBoxMultipleOutline, mdiTwitter} from "@mdi/js";

export default {
  name: "AboutItem",
  data: () => ({
    twitterSvgPath: mdiTwitter,
    gitHubSvgPath: mdiGithub,
    linkedinSvgPath: mdiLinkedin,
    textSvgPath: mdiTextBoxMultipleOutline
  })
};
</script>
