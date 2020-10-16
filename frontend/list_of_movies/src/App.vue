<template>
  <div width="100%">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand tag="h1" class="mb-0">Fullstack Technical Test</b-navbar-brand>
    </b-navbar>
    <b-container class="bv-example-row">
      <b-row>
        <b-col xs="0" sm="0" lg="2"></b-col>
        <b-col cols="12"><TabMovies :listMovies="movies" :fields="fields" /></b-col>
        <b-col xs="0" sm="0" lg="2"></b-col>
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
      query: AllMovies,
      result ({data}) {
        console.log(data)
      }
    }
  },
  components: {
    TabMovies
  },
  data() {
    return {
      fields: [
        {
          key: 'rank',
          sortable: true
        },
        {
          key: 'title',
          sortable: true
        },
        {
          key: 'synopsis',
          sortable: true
        },
        {
          key: 'duration',
          sortable: true
        },
        {
          key: 'director',
          sortable: true
        }
      ]
    }
  }
}
</script>
