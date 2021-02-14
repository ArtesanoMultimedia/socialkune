<template>
  <section id="hero">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-xl">
          <!-- Hello -->
          <h1>{{ title }}</h1>
          <h3>{{ subtitle }}</h3>
          <Budgets :budgets="budgets" />
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
    budgets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
