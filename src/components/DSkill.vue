<template>
  <v-content class="mx-10 py-10">
    <h1 class="font-italic font-weight-medium">Skill</h1>
    <div class="text-center">
      <v-row
          v-for="i in 2"
          :key="i"
      >
        <v-col
            v-for="j in 3"
            :key="j"
        >
          <v-card
              max-width="500"
              class="mx-auto"
          >
            <v-card-title class="justify-center">{{skills[i-1][j-1].item}}</v-card-title>
            <v-rating
                background-color="indigo lighten-3"
                color="indigo"
                :value="skills[i-1][j-1].rating"
                readonly
                large
            ></v-rating>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-content>
</template>

<script>
    export default {
        name: "DSkill",
        data: () => {
            return {
                skills: [
                    [
                        {
                            item: "Java",
                            rating: 3
                        },
                        {
                            item: "Kotlin (Server-side)",
                            rating: 4
                        },
                        {
                            item: "Node.js",
                            rating: 2
                        }
                    ],
                    [
                        {
                            item: "Spring Framework",
                            rating: 4
                        },
                        {
                            item: "Express.js",
                            rating: 2
                        },
                        {
                            item: "Vue.js",
                            rating: 2
                        }
                    ]
                ]
            }
        }
    }
</script>

<style scoped>

</style>
