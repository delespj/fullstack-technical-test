<template>
  <div>
    <MoviesTable :movies="movies"></MoviesTable>
  </div>
</template>

<script>
import MoviesTable from "@/components/MoviesTable.vue";
import { Movies } from "@/graphql/Movies.gql";

export default {
  components: {
    MoviesTable
  },
  apollo: {
    movies: {
      query: Movies
    }
  }
};
</script>