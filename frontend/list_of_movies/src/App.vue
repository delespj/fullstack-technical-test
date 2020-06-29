<template>
     <div>
        {{ movies }}
     </div>
</template>

<script>


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


</style>
