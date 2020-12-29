<template>
  <div>
    <v-app-bar color="blue darken-4" :dark="true">
      <v-spacer></v-spacer>
      <v-app-bar-title class="headline text-uppercase">
        <span class="font-weight-regular">daisuzz.dev</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
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
