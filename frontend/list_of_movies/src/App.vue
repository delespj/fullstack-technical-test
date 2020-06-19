<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0">Fullstack Technical Test</b-navbar-brand>
    </b-navbar>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="10"><TabMovies :listMovies="movies" /></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
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
