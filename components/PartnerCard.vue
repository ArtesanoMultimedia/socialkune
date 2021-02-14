<template>
  <div class="col-xl-4" data-aos="fade-down" :data-aos-delay="partner.delay">
    <div class="card shadow mb-2">
      <!--      <img src="https://via.placeholder.com/850x550" class="card-img-top" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">
          <img src="~/assets/img/partner.png" class="rounded mr-2" width="40" alt="User"> {{ partner.name }}
        </h5>
        <hr>
        <p class="card-text limit-text-event mb-4">
          {{ partner.description }}<br>
        </p>
        <!--zona badges -->
        <Badges :badges="partner.badges" clases="ml-2 rounded" />
        <br>
        <div id="botones">
          <NuxtLink :to="`partner/${partner.slug}`" class="btn btn-secondary mt-4 mb-2">
            Ver más
          </NuxtLink>
          <a href="perfil-partner.html" class="btn btn-primary mt-4 mb-2">Match ahora</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerCard',
  props: {
    partner: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
#botones {
  display: flex;
  justify-content: space-between;
}
</style>
