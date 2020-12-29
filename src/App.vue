<template>
  <v-app>
    <HeaderItem />
    <SubHeaderItem />
    <v-content>
      <AboutItem />
      <v-divider></v-divider>
      <ExperienceItem />
      <v-divider></v-divider>
      <SkillItem />
      <v-divider></v-divider>
    </v-content>
    <FooterItem />
  </v-app>
</template>

<script>
import HeaderItem from "./components/HeaderItem";
import SubHeaderItem from "@/components/SubHeaderItem";
import AboutItem from "./components/AboutItem";
import ExperienceItem from "./components/ExperienceItem";
import SkillItem from "./components/SkillItem";
import FooterItem from "./components/FooterItem";

export default {
  name: "App",
  components: {
    HeaderItem: HeaderItem,
    SubHeaderItem: SubHeaderItem,
    AboutItem: AboutItem,
    ExperienceItem: ExperienceItem,
    SkillItem: SkillItem,
    FooterItem: FooterItem
  },
  mounted() {
    document.title = "daisuzz.dev";
  }
};
</script>
