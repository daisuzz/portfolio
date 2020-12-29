<template>
  <v-content class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Skill</h1>
    <div class="text-center">
      <v-row v-for="i in 2" :key="i">
        <v-col v-for="j in 3" :key="j" xl="4" lg="4" md="4" cols="12">
          <v-card max-width="500" class="mx-auto">
            <v-card-title class="justify-center"
              >{{ skills[i - 1][j - 1].item }}
            </v-card-title>
            <v-card-text>{{ skills[i - 1][j - 1].text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "SkillItem",
  data: () => {
    return {
      skills: [
        [
          {
            item: "Programing Languages",
            text:
              "Java, Kotlin, JavaScript(Node.js), HTML5, Go(hobby), Rust(hobby), Ocaml(hobby)"
          },
          {
            item: "Frameworks and Libraries",
            text:
              "Spring Boot, Spring Security, Spring Session, Spring MVC, Spring Data JPA, MyBatis, Nuxt.js, Vue.js, Gin(hobby)"
          },
          {
            item: "Infrastructures",
            text:
              "EC2, ECS, Fargate, CloudWatch Logs, CloudTrail, X-Ray, S3, CloudFoundry,  CentOS 6 and 7, Chef, Ansible"
          }
        ],
        [
          {
            item: "Middlewares",
            text: "nginx, Apache"
          },
          {
            item: "Data stores",
            text: "MySQL, Oracle, Redis, SQLite, H2"
          },
          {
            item: "Applications and Tools",
            text: "Git, IntelliJ, Maven"
          }
        ]
      ]
    };
  }
};
</script>

<style scoped></style>
