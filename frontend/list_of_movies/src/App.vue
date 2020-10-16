<template>
  <div width="100%">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Layout/NavBar.vue";
import { AllMovies } from "@/graphql/queries/AllMovies.gql";
import { TodoItemsQuery } from "@/graphql/queries/TodoItems.gql"

export default {
  components: {
    NavBar
  },
  apollo: {
    movies: {
      query: AllMovies,
      result ({ data }) {
        console.log("AllMoviesQuery", data);
      }
    },
    todoItems: {
      query: TodoItemsQuery
    }
  },
  data() {
    return {
      movies: [],
      fields: [
        {
          key: "rank",
          sortable: true
        },
        {
          key: "title",
          sortable: true
        },
        {
          key: "synopsis",
          sortable: true
        },
        {
          key: "duration",
          sortable: true
        },
        {
          key: "director",
          sortable: true
        }
      ]
    }
  }
}
</script>

<style>
@import "./assets/css/styles.css";
</style>
