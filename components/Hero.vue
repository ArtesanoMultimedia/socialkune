<template>
  <section id="hero" class="presentation--user py-5">
    <div class="container">
      <div class="row mt-3 mb-5">
        <div class="col-12 col-xl">
          <!-- Hello -->
          <h1 :class="clase">
            {{ title }}
          </h1>
          <h3>{{ subtitle }}</h3>
          <Badges :badges="badges" />
        </div>
        <div class="col-12 col-xl-auto">
          <h6 class="pt-5">
            Domingo, 14 de Febrero
          </h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    clase: {
      type: String,
      default: ''
    },
    badges: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    style () {
      return ''
    }
  }
}
</script>

<style scoped>

</style>
