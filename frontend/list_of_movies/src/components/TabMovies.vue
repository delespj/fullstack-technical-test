<template>
  <div>
    <b-table hover :items="listMovies" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'TabMovies',
  props: {
    listMovies: Array,
    fields: Array
  }
}
</script>
