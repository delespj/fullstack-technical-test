<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="movie in listMovies" v-bind:key="movie.key">
            {{ Object.keys(movie) }}
            <span class="arrow">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            test
          </td>
        </tr>
      </tbody>
    </table>
    <ul id="v-for-object" class="demo">
      <li v-for="value in listMovies" v-bind:key="value.id">
        {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TabMovies',
  props: {
    listMovies: Array,
    columns: function() {
      return Object.keys(this.listMovies[0]);
    }
  }
}
</script>
