<!-- https://fr.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
<!-- https://www.npmjs.com/package/vue-axios -->
<template>
  <div>
    <h1>Bitcoin Price Index</h1>

    <section v-if="this.errored">
      <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
    </section>

    <section v-else>
      <div v-if="loading">Chargement...</div>

      <div
        v-else
        v-for="(currency, index) in info"
        :key="index"
        class="currency"
      >
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>

    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosTemplate',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>
