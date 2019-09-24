<template>
  <div>
    <h1> Skills </h1>
    <v-container class="grey lighten-5">
      <h3> Languages </h3>
      <v-row no-gutters>
        <v-col
            v-for="l in languages"
            :key="l"
            cols="12"
            sm="4"
        >
          <v-card
              max-width="344"
              class="mx-auto"
          >
            <v-card-title>{{l.item}}</v-card-title>
            <v-card-text>
              <v-rating
                  v-model="l.rating"
                  background-color="indigo lighten-3"
                  color="indigo"
                  x-large
                  readonly
              ></v-rating>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <h3> Frameworks </h3>
      <v-row no-gutters>
        <v-col
            v-for="f in frameworks"
            :key="f"
            cols="12"
            sm="4"
        >
          <v-card
              max-width="344"
              class="mx-auto"
          >
            <v-card-title>{{f.item}}</v-card-title>
            <v-card-text>
              <v-rating
                  v-model="f.rating"
                  background-color="indigo lighten-3"
                  color="indigo"
                  x-large
                  readonly
              ></v-rating>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Ratings",
        data: () => {
            return {
                languages: [
                    {
                        item: "Java",
                        rating: 4
                    },
                    {
                        item: "Kotlin",
                        rating: 4
                    },
                    {
                        item: "Node.js",
                        rating: 3
                    }
                ],
                frameworks: [
                    {
                        item: "Spring Framework",
                        rating: 4
                    },
                    {
                        item: "Express.js",
                        rating: 3
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
