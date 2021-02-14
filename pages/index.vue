<template>
  <div>
    <Encabezado :logged-in="false" />
    <Hero :title="title" :subtitle="subtitle" :budgets="budgets" />
    <Search />
    <PartnerList partners-title="👉 Las entidades más destacados" :partners="partnersDestacados" />
    <PartnerList partners-title="👉 Las TOP de las 17 ODS" :partners="partnersTop17" />
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $http }) {
    const resDestacados = await $http.get('https://socialhack-back.herokuapp.com/partner/list')
    const partnersDestacados = await resDestacados.json()
    const resTop17 = await $http.get('https://socialhack-back.herokuapp.com/partner/list')
    const partnersTop17 = await resTop17.json()
    return { partnersDestacados, partnersTop17 }
  },
  data () {
    return {
      partnersDestacados: [],
      title: '👋 Bienvenid@ a kune',
      subtitle: 'Empodera, empatiza y cambiarás el mundo',
      budgets: [],
      partnersTop17: [
        {
          partner_id: 1,
          delay: 100,
          name: 'Nombre partner 1'
        },
        {
          partner_id: 2,
          delay: 200,
          name: 'Nombre partner 2'
        },
        {
          partner_id: 3,
          delay: 300,
          name: 'Nombre partner 3'
        }
      ]
    }
  }
}
/*
partnersDestacados: [
  {
    partner_id: 1,
    delay: 100,
    iniciales: 'CR',
    name: 'Cruz Roja',
    budgets: [
      { budget_id: 1, src: '1-col.png' },
      { budget_id: 2, src: '2-col.png' },
      { budget_id: 3, src: '3-col.png' },
      { budget_id: 4, src: 'S-WEB-Goal-02.png' },
      { budget_id: 5, src: 'S-WEB-Goal-03.png' }
    ]
  },
  {
    partner_id: 2,
    delay: 200,
    iniciales: 'CA',
    name: 'Cáritas',
    budgets: [
      { budget_id: 1, src: '1-col.png' },
      { budget_id: 2, src: '2-col.png' },
      { budget_id: 3, src: 'S-WEB-Goal-01.png' }
    ]
  },
  {
    partner_id: 3,
    delay: 300,
    iniciales: 'BA',
    name: 'Banco de Alimentos',
    budgets: [
      { budget_id: 1, src: '1-col.png' },
      { budget_id: 2, src: '2-col.png' },
      { budget_id: 3, src: '3-col.png' },
      { budget_id: 3, src: 'S-WEB-Goal-05.png' },
      { budget_id: 3, src: 'S-WEB-Goal-08.png' }
    ]
  }
],
*/
</script>

<style>
#hero h1 {
  font-size: 60px !important;
}
</style>
