<template>
  <div>
    <v-app-bar color="blue darken-4" :dark="true">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-italic font-weight-regular">daisuzz </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/daisuzz" target="_blank">
        <v-icon x-large>{{ gitHubSvgPath }}</v-icon>
      </v-btn>
      <v-btn icon href="https://twitter.com/daisuzz" target="_blank">
        <v-icon x-large>{{ twitterSvgPath }}</v-icon>
      </v-btn>
      <v-btn icon href="https://www.linkedin.com/in/daisaku-suzuki-1a37aa161/" target="_blank">
        <v-icon x-large>{{ linkedinSvgPath }}</v-icon>
      </v-btn>
      <v-btn icon href="https://iikanji.hatenablog.jp" target="_blank">
        <v-icon x-large>{{ textSvgPath }}</v-icon>
      </v-btn>
    </v-app-bar>

  </div>
</template>
<script>
    import {mdiGithubCircle, mdiLinkedinBox, mdiTagTextOutline, mdiTwitterCircle} from '@mdi/js';

    export default {
        name: "DHeader",
        data: () => ({
            twitterSvgPath: mdiTwitterCircle,
            gitHubSvgPath: mdiGithubCircle,
            linkedinSvgPath: mdiLinkedinBox,
            textSvgPath: mdiTagTextOutline
        }),
    };
</script>

<style scoped></style>
