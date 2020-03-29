<template>
  <v-app>
    <DHeader/>
    <v-content>
      <DAvatar/>
      <DAbout/>
      <v-divider></v-divider>
      <DExperience/>
      <v-divider></v-divider>
      <DSkill/>
      <v-divider></v-divider>
      <DCertificate></DCertificate>
    </v-content>
    <DFooter/>
  </v-app>
</template>

<script>
    import DHeader from "./components/DHeader";
    import DAvatar from "./components/DAvatar";
    import DAbout from "./components/DAbout";
    import DExperience from "./components/DExperience";
    import DSkill from "./components/DSkill";
    import DFooter from "./components/DFooter";
    import DCertificate from "./components/DCertificate";

    export default {
        name: "App",
        components: {
            DAvatar: DAvatar,
            DHeader: DHeader,
            DAbout: DAbout,
            DExperience: DExperience,
            DSkill: DSkill,
            DCertificate: DCertificate,
            DFooter: DFooter
        }
    };
</script>
