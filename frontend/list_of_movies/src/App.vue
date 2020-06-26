<template>
  <div>
    <div>{{ movies }}</div>
  </div>
</template>

<script>
import { Movies } from "./graphql/Movies.gql";

export default {
  apollo: {
    movies: {
      query: Movies
    }
  }
};
</script>
