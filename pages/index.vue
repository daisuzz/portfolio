<template>
  <v-app>
    <HeaderItem />
    <SubHeaderItem />
    <v-main>
      <AboutItem />
      <v-divider></v-divider>
      <ExperienceItem />
      <v-divider></v-divider>
      <SkillItem />
      <v-divider></v-divider>
    </v-main>
    <FooterItem />
  </v-app>
</template>

<script>
import HeaderItem from "../components/headerItem";
import SubHeaderItem from "../components/subHeaderItem";
import AboutItem from "../components/aboutItem";
import ExperienceItem from "../components/experienceItem";
import SkillItem from "../components/skillItem";
import FooterItem from "../components/footerItem";

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
