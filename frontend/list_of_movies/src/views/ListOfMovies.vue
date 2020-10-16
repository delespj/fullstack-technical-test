<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col xs="0" sm="0" lg="2"></b-col>
            <b-col cols="12">
                <TabMovies :listMovies="movies" :fields="fields" />
            </b-col>
            <b-col xs="0" sm="0" lg="2"></b-col>
        </b-row>
    </b-container>
</template>

<script>
import TabMovies from "@/components/TabMovies"
import { AllMovies } from "@/graphql/AllMovies.gql"

export default {
    name: "ListOfMoviesView",
    components: {
        TabMovies
    },
    apollo: {
        movies: {
            query: AllMovies,
            result ({data}) {
                console.log(data)
            }
        }
    },
    data() {
        return {
            fields: [
                {
                    key: "rank",
                    sortable: true
                },
                {
                    key: "title",
                    sortable: true
                },
                {
                    key: "synopsis",
                    sortable: true
                },
                {
                    key: "duration",
                    sortable: true
                },
                {
                    key: "director",
                    sortable: true
                }
            ]
        }
    }
}
</script>
