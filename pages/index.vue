<template>
  <v-app>
    <AboutItem/>
  </v-app>
</template>

<script>
import AboutItem from "../components/aboutItem";

export default {
  name: "App",
  components: {
    AboutItem: AboutItem,
  },
  mounted() {
    document.title = "daisuzz.dev";
  }
};
</script>
