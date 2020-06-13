<template>
  <div>{{ hello }}</div>
</template>

<script>

import { HelloWorld } from './graphql/HelloWorld.gql'

export default {
  apollo: {
    hello: {
      query: HelloWorld
    }
  },
}
</script>
