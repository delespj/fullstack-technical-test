<template>
     <div>
        <h1 class='mt-1'>Fanprime : Test technique</h1>
        <div class='container mt-5'>
            <md-table v-model="movies" md-sort="rank" md-sort-order="asc" md-card>
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                    <md-table-cell md-label="Rank" md-sort-by="rank" md-numeric>{{ item.rank }}</md-table-cell>
                    <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
                    <md-table-cell md-label="Synopsis" md-sort-by="synopsis">{{ item.synopsis }}</md-table-cell>
                    <md-table-cell md-label="Director" md-sort-by="director">{{ item.director }}</md-table-cell>
                    <md-table-cell md-label="Duration" md-sort-by="duration">{{ item.duration }}</md-table-cell>
                </md-table-row>
            </md-table>
            <p class='text-right mt-3'>Par Malaury Lemaître-Salmon</p>
        </div>
     </div>
</template>

<script>

import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import { Movies } from './graphql/movies.gql'

export default {
	apollo: {
		movies: {
			query: Movies
		}
	},
}
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; /*Importing Bootstrap*/

    h1 {
        text-align: center;
        color: #af0505;
    }

</style>
