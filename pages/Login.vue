<template>
  <section>
    <div class="container">
      <div class="row">
        <div align="center" class="col-xl-12">
          <div class="card shadow mt-5" data-aos="fade-down" style="width: 20rem;">
            <div class="card-body">
              <div align="center" class="mt-3 mb-2">
                <img src="~/assets/img/kune-logo.svg" width="140" alt="Kune">
              </div>
              <br>
              <form>
                <div align="left" class="form-group">
                  <label for="username">Usuario</label>
                  <input id="username" type="text" class="form-control">
                </div>
                <div align="left" class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input id="exampleInputPassword1" type="password" class="form-control">
                </div>
                <div align="left" class="form-group form-check">
                  <input id="exampleCheck1" type="checkbox" class="form-check-input">
                  <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                </div>
                <b-button router to="/user" class="btn btn-primary btn-block">Entrar con Kune</b-button>
                <hr>
                <button class="btn btn-google btn-block mb-2" @click="googleSignIn">
                  <img src="~/assets/img/google.png" class="google">Entrar con Google
                </button>
                <br>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async googleSignIn (e) {
      e.preventDefault()
      const res = await this.$auth.loginWith('google')
      // eslint-disable-next-line no-console
      console.log(res)
    },
    kuneSignIn (e) {
      e.preventDefault()
      this.$router.push({
        path: '/login'
      })
    },
    onSignIn (googleUser) {
      // const idToken = googleUser.getAuthResponse().id_token
    },
    onSuccess (googleUser) {
      // eslint-disable-next-line no-console
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName())
    }
  }
}
</script>

<style scoped>

</style>
