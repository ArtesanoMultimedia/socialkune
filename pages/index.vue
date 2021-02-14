<template>
  <div>
    <Encabezado :logged-in="false" />
    <Hero :title="title" :subtitle="subtitle" :badges="badges" clase="home-feed" />
    <Search />
    <PartnerList partners-title="👉 Las entidades más destacadas" :partners="partnersDestacados" />
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
      badges: [],
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
    badges: [
      { badge_id: 1, src: '1-col.png' },
      { badge_id: 2, src: '2-col.png' },
      { badge_id: 3, src: '3-col.png' },
      { badge_id: 4, src: 'S-WEB-Goal-02.png' },
      { badge_id: 5, src: 'S-WEB-Goal-03.png' }
    ]
  },
  {
    partner_id: 2,
    delay: 200,
    iniciales: 'CA',
    name: 'Cáritas',
    badges: [
      { badge_id: 1, src: '1-col.png' },
      { badge_id: 2, src: '2-col.png' },
      { badge_id: 3, src: 'S-WEB-Goal-01.png' }
    ]
  },
  {
    partner_id: 3,
    delay: 300,
    iniciales: 'BA',
    name: 'Banco de Alimentos',
    badges: [
      { badge_id: 1, src: '1-col.png' },
      { badge_id: 2, src: '2-col.png' },
      { badge_id: 3, src: '3-col.png' },
      { badge_id: 3, src: 'S-WEB-Goal-05.png' },
      { badge_id: 3, src: 'S-WEB-Goal-08.png' }
    ]
  }
],
*/
</script>

<style>

</style>
