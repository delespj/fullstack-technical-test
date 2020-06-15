<template>
  <div>
    <TabMovies :listMovies="movies" />
  </div>
</template>

<style>
  @import './assets/css/styles.css';
</style>

<script>
import TabMovies from './components/TabMovies'
import { AllMovies } from './graphql/AllMovies.gql'

export default {
  apollo: {
    movies: {
      query: AllMovies
    }
  },
  components: {
    TabMovies
  }
}
</script>
