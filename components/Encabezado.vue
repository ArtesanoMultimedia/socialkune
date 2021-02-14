<template>
  <div>
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-white nav-kune">
          <div class="container">
            <NuxtLink to="/" class="navbar-brand">
              <img
                src="~/assets/img/kune-logo.svg"
                class="brand-logo"
                alt="Kune"
              >
            </NuxtLink>
            <!--zona login -->
            <!-- Google Login -->
            <div class="navbar-nav ml-auto mt-2 mb-2">
              <NuxtLink v-if="loggedIn" class="nav-link" to="/user/edit">
                <span class="name--mobile">Carlos Rodríguez</span><img src="~/assets/img/user.png" class="rounded-circle ml-4 img-user" width="40" alt="User">
              </NuxtLink>
              <NuxtLink v-else class="nav-link" to="/user">
                <i data-feather="lock" class="font-icon" /> <span>Entrar</span>
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Encabezado',
  props: {
    loggedIn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    signIn () {
      // console.log('signIn')
    }
  }
}
</script>

<style scoped>

</style>
