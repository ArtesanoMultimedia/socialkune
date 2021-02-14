<template>
  <div>
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-white nav-kune">
          <div class="container">
            <a href="/" class="navbar-brand"><img
              src="~/assets/img/kune-logo.svg"
              class="brand-logo"
              alt="Kune"
            ></a>
            <!--zona login -->
            <!-- Google Login -->
            <div class="navbar-nav ml-auto mt-2 mb-2">
              <a v-if="loggedIn" class="nav-link" href="/user/edit"><span class="name--mobile">Carlos Rodríguez</span><img src="~/assets/img/user.png" class="rounded-circle ml-4 img-user" width="40" alt="User"></a>
              <a v-else class="nav-link" href="/user"><i data-feather="lock" class="font-icon" /> <span>Entrar</span></a>
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
