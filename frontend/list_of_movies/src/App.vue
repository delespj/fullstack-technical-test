<template>
  <div>{{ hello }}</div>
</template>

<script>

import { HelloWorld } from './graphql/HelloWorld.gql'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: {
      query: HelloWorld
    }
  },
}
</script>
