<template>
  <div v-if="budgets.length > 0" id="budgets">
    <img
      v-for="budget in budgets"
      :key="budget.budget_id"
      :src="require(`~/assets/img/${budget.src}`)"
      width="40px"
      :class="clases"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Budgets',
  props: {
    budgets: {
      type: Array,
      default: () => []
    },
    clases: {
      type: String,
      default: 'ml-4 rounded'
    }
  }
}
</script>

<style scoped>
#budgets {
  display: inline-block;
  margin-top: 10px;
}
</style>
