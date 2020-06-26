<template>
  <div>
    <div>{{ hello }}</div>
    <div>{{ movies }}</div>
  </div>
</template>

<script>
import { HelloWorld } from "./graphql/HelloWorld.gql";
import { Movies } from "./graphql/Movies.gql";

export default {
  apollo: {
    hello: {
      query: HelloWorld
    },
    movies: {
      query: Movies
    }
  }
};
</script>
