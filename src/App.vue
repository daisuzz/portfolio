<template>
  <v-app>
    <Bar/>
    <v-content class="mx-auto">
      <v-divider></v-divider>
      <Timeline></Timeline>
      <v-divider></v-divider>
      <Ratings/>
      <v-divider></v-divider>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
    import Bar from "./components/Bar"
    import Timeline from "./components/Timeline"
    import Ratings from "./components/Ratings";
    import Footer from "./components/Footer";

    export default {
        name: "App",
        components: {
            Bar,
            Timeline,
            Ratings,
            Footer
        },
        data: () => ({
            //
        })
    };
</script>
