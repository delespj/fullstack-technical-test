<template>
  <div>
    <md-table v-model="movies" md-sort="rank" md-sort-order="asc" md-card>
		<md-table-row slot="md-table-row" slot-scope="{ item }">
			<md-table-cell md-label="Rank" md-sort-by="rank" md-numeric>{{ item.rank }}</md-table-cell>
			<md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
			<md-table-cell md-label="Synopsis" md-sort-by="synopsis">{{ item.synopsis }}</md-table-cell>
			<md-table-cell md-label="Director" md-sort-by="director">{{ item.director }}</md-table-cell>
			<md-table-cell md-label="Duration" md-sort-by="duration">{{ item.duration }}</md-table-cell>
		</md-table-row>
    </md-table>
  </div>
</template>

 <script>

import {
	Movies
}
from './graphql/Movies.gql'

export default {
	apollo: {
		movies: {
			query: Movies
		}
	},
}
//movies[0].id  for the id only
</script>
