<template>
  <section class="mb-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 mt-2 mb-4">
          <h1>{{ partnersTitle }}</h1>
        </div>
      </div>
      <div v-if="partners.length > 0" class="row">
        <PartnerCard v-for="partner in partners" :key="partner.partner_id" :partner="partner" />
        <div class="col-xl-12 mt-3">
          <a href="" class="link--pink"><b>Ver más partners</b></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerList',
  props: {
    partnersTitle: {
      type: String,
      default: ''
    },
    partners: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
