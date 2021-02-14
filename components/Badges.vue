<template>
  <div v-if="badges.length > 0" id="badges">
    <img
      v-for="badge in badges"
      :key="badge.badge_id"
      :src="require(`~/assets/img/${badge.src}`)"
      width="40px"
      :class="clases"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Badges',
  props: {
    badges: {
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
#badges {
  display: inline-block;
  margin-top: 10px;
}
</style>
