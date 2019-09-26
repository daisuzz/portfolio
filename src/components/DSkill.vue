<template>
  <v-content class="mx-10 py-10">
    <h1>Skill</h1>
  </v-content>
</template>

<script>
    export default {
        name: "DSkill",
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
