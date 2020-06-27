<template>
  <div>{{ movies }}</div>
</template>

<script>
//{{ hello }}
import { HelloWorld } from './graphql/HelloWorld.gql'
import { Movies } from './graphql/Movies.gql'

export default {
  apollo: {
    hello: {
      query: HelloWorld
    },
	movies:{
		query: Movies
	}
  },
}
</script>
