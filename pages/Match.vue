<template>
  <div>
    <Encabezado :logged-in="true" />
    <Hero title="🤔 Ahora vamos a “Matchear”" subtitle="Es muy fácil y muy divertido" :budgets="[]" />
    <section class="config--user py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card shadow mb-2" data-aos="fade-left">
              <div class="card-body">
                <h5 class="card-title">
                  <img src="~/assets/img/partner.png" class="rounded mr-2" width="40" alt="User"> {{
                    currentPartner.name
                  }}
                </h5>
                <hr>
                <p class="card-text limit-text-event mb-4">
                  {{ currentPartner.description }}<br>
                </p>
                <Budgets :budgets="currentPartner.budgets" clases="ml-2 rounded" />
                <br><br>
              </div>
            </div>
            <div class="mt-5" align="center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <button class="button-fail mr-2" @click="deshazMatch(currentPartner.slug)">
                <i data-feather="x" class="font-icon2" />
              </button>
              <button class="button-ok" @click="hazMatch(currentPartner.slug)">
                <i data-feather="check" class="font-icon2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Match',
  async asyncData ({
    params,
    $http
  }) {
    const resDestacados = await $http.get('https://socialhack-back.herokuapp.com/partner/list')
    const partners = await resDestacados.json()
    const currentPartner = partners[0]
    const nextPartner = partners[1]
    return {
      currentPartner,
      nextPartner
    }
  },
  data () {
    return {
      currentPartner: []
    }
  },
  methods: {
    async hazMatch (message) {
      const data = await this.$http.$post('https://socialhack-back.herokuapp.com/match/create', {
        user_id: 1,
        partner_id: 1
      })
      console.log(data)
      alert(data.json)
    },
    deshazMatch (message) {
      alert(message)
    }
  }
}
</script>

<style scoped>

</style>
