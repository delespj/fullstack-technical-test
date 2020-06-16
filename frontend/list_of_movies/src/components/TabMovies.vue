<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="column in this.columns"
              v-bind:key="column"
              :class="{ active : column == isActive }"
              @click="mySort(column);">
            {{ column }}
            <span class="arrow" :class="sortAsc == true && column == isActive ? 'dsc' : 'asc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in listMovies" v-bind:key="movie.id">
          <td v-for="value in movie" v-bind:key="value.id">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TabMovies',
  props: {
    listMovies: Array,
  },
  data() {
    return {
      columns: ["rank", "title", "synopsis", "duration", "director"],
      sortAsc: false,
      isActive: ""
    }
  },
  methods: {
    mySort(column) {
      let ascDesc = this.sortAsc ? -1 : 1;

      switch (column) {
        case 'title':
          this.listMovies.sort((a, b) => ascDesc * a.title.localeCompare(b.title));
          this.isActive = 'title';
          break;
        case 'synopsis':
          this.listMovies.sort((a, b) => ascDesc * a.synopsis.localeCompare(b.synopsis));
          this.isActive = 'synopsis';
          break;
        case 'duration':
          this.listMovies.sort((a, b) => ascDesc * (a.duration === b.duration ? 0 : a.duration > b.duration ? 1 : -1));
          this.isActive = 'duration';
          break;
        case 'director':
          this.listMovies.sort((a, b) => ascDesc * a.director.localeCompare(b.director));
          this.isActive = 'director';
          break;
        case 'rank':
          this.listMovies.sort((a, b) => ascDesc * (a.rank === b.rank ? 0 : a.rank > b.rank ? 1 : -1));
          this.isActive = 'rank';
          break;
        default:
          console.log(`Sorry, we are out of column.`);
      }
    },
    invertSort(trueColumn = false) {
      if (trueColumn == false) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortAsc = false;
      }
    }
  }
}
</script>
