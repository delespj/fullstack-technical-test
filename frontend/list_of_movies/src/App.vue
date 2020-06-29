<template>
  <Loader v-if="$apollo.loading"></Loader>
  <MoviesTable v-else :movies="movies"></MoviesTable>
</template>

<script>
import Loader from "@/components/Loader.vue";
import MoviesTable from "@/components/MoviesTable.vue";
import { ListOfMovies } from "@/graphql/ListOfMovies.gql";

export default {
  components: {
    Loader,
    MoviesTable
  },
  apollo: {
    movies: {
      query: ListOfMovies
    }
  }
};
</script>