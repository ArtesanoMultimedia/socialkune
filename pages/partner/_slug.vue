<template>
  <div>
    <Encabezado :logged-in="true" />
    <Hero :title="title" :subtitle="subtitle" :budgets="budgets" />
  </div>
</template>

<script>
export default {
  name: 'Partner',
  async asyncData ({
    params,
    $http
  }) {
    const res = await $http.get('https://socialhack-back.herokuapp.com/partner/' + params.slug)
    const partner = await res.json()
    const title = partner.name
    const subtitle = `Miembro desde ${partner.created_at}`
    const budgets = partner.budgets
    return {
      partner,
      title,
      subtitle,
      budgets
    }
  },
  data () {
    return {
      title: '',
      subtitle: 'Miembro desde 13/02/2021',
      budgets: [],
      partner: {}
    }
  }
}
</script>

<style scoped>

</style>
