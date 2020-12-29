<template>
  <v-app>
    <HeaderItem />
    <v-content>
      <AboutItem />
      <v-divider></v-divider>
      <ExperienceItem />
      <v-divider></v-divider>
      <SkillItem />
      <v-divider></v-divider>
      <CertificateItem></CertificateItem>
    </v-content>
    <FooterItem />
  </v-app>
</template>

<script>
import HeaderItem from "./components/HeaderItem";
import AboutItem from "./components/AboutItem";
import ExperienceItem from "./components/ExperienceItem";
import SkillItem from "./components/SkillItem";
import FooterItem from "./components/FooterItem";
import CertificateItem from "./components/CertificateItem";

export default {
  name: "App",
  components: {
    HeaderItem: HeaderItem,
    AboutItem: AboutItem,
    ExperienceItem: ExperienceItem,
    SkillItem: SkillItem,
    CertificateItem: CertificateItem,
    FooterItem: FooterItem
  },
  mounted() {
    document.title = "daisuzz.dev";
  }
};
</script>
