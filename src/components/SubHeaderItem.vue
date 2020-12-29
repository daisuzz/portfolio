<template>
  <div>
    <v-toolbar color="blue-grey lighten-3" :dark="true">
      <v-spacer></v-spacer>
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
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>
<script>
import {
  mdiGithubCircle,
  mdiLinkedinBox,
  mdiTagTextOutline,
  mdiTwitterCircle
} from "@mdi/js";

export default {
  name: "HeaderItem",
  data: () => ({
    twitterSvgPath: mdiTwitterCircle,
    gitHubSvgPath: mdiGithubCircle,
    linkedinSvgPath: mdiLinkedinBox,
    textSvgPath: mdiTagTextOutline
  })
};
</script>

<style scoped></style>
