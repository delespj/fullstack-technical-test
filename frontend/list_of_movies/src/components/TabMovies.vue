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
            <span class="arrow" :class="sortAsc == true ? 'dsc' : 'asc'">
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
      sortAsc: true,
      isActive: ""
    }
  },
  methods: {
    mySort(column) {
      let ascDesc;

      if (this.isActive != column) {
        this.isActive = column;
        ascDesc = this.sortAsc = true;
      } else {
        this.invertSort();
        ascDesc = this.sortAsc ? 1 : -1;
      }

      switch (column) {
        case 'title':
          this.listMovies.sort((a, b) => ascDesc * a.title.localeCompare(b.title));
          break;
        case 'synopsis':
          this.listMovies.sort((a, b) => ascDesc * a.synopsis.localeCompare(b.synopsis));
          break;
        case 'duration':
          this.listMovies.sort((a, b) => ascDesc * (a.duration === b.duration ? 0 : a.duration > b.duration ? 1 : -1));
          break;
        case 'director':
          this.listMovies.sort((a, b) => ascDesc * a.director.localeCompare(b.director));
          break;
        case 'rank':
          this.listMovies.sort((a, b) => ascDesc * (a.rank === b.rank ? 0 : a.rank > b.rank ? 1 : -1));
          break;
        default:
          console.log(`Sorry, we are out of column.`);
      }
    },
    invertSort() {
      this.sortAsc = !this.sortAsc;
    }
  }
}
</script>
