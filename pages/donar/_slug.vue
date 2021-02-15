<template>
  <div>
    <Encabezado :logged-in="true" />
    <section class="presentation--user py-5">
      <div class="container">
        <div class="row mt-3 mb-5">
          <div class="col-12 col-xl">
            <!-- Hello -->
            <h1><img src="~/assets/img/coin.svg" class="img-coin1" alt="donate"> ¿Cuanto quieres donar?</h1>
            <h4>Estás donando a <b>{{ partner.name }}</b></h4>
          </div>
          <div class="col-12 col-xl-auto">
            <h6 class="pt-3">
              {{ $moment().format('dddd, DD [de] MMMM') }}
            </h6>
          </div>
        </div>
      </div>
    </section>
    <section class="config--user py-5">
      <div class="steps-progress">
        <div class="container">
          <div class="d-flex flex-wrap justify-content-center justify-content-sm-start">
            <b-button
              v-b-toggle.edit-step1
              class="btn btn-sm btn-step-progress"
            >
              1.<span>Cantidad a donar</span>
            </b-button>
            <b-button
              v-b-toggle.edit-step2
              class="btn btn-sm btn-step-progress collapsed"
            >
              2.<span>Método de pago</span>
            </b-button>
            <b-button
              v-b-toggle.edit-step3
              class="btn btn-sm btn-step-progress collapsed"
            >
              3.<span>Resumen</span>
            </b-button>
          </div>
        </div>
      </div>

      <div class="steps-fields pt-3 mb-5">
        <div class="container">
          <form>
            <div id="steps" class="accordion">
              <b-button v-b-toggle.edit-step1 class="btn btn-step btn-secondary">
                <h5>1. Elige la cantidad que quieres donar</h5>
              </b-button>
              <b-collapse
                id="edit-step1"
                visible
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#steps"
              >
                <div class="pt-0 px-3 pb-2 px-md-5 pt-md-5 bg-white">
                  <div class="radio-btn-group">
                    <div class="radio">
                      <input id="click_me5" v-model="checked" type="radio" name="radio" value="click_me5">
                      <label for="click_me5">1€</label>
                    </div>
                    <div class="radio">
                      <input id="click_me" v-model="checked" type="radio" name="radio" value="click_me">
                      <label for="click_me">5€</label>
                    </div>
                    <div class="radio">
                      <input id="click_me1" v-model="checked" type="radio" name="radio" value="click_me1">
                      <label for="click_me1">10€</label>
                    </div>
                    <div class="radio">
                      <input id="click_me2" v-model="checked" type="radio" name="radio" value="click_me2">
                      <label for="click_me2">20€</label>
                    </div>
                    <div class="radio">
                      <input id="click_me12" v-model="checked" type="radio" name="radio" value="click_me12">
                      <label for="click_me12">50€</label>
                    </div>
                  </div>
                  <br>
                  <hr>
                  <br>
                  <h5 class="mb-3">
                    👉 O si lo prefieres marca una cantidad
                  </h5>
                  <div class="input-group mb-5 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        €
                      </div>
                    </div>
                    <input
                      id="inlineFormInputGroupUsername2"
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Por ejemplo: 22€"
                    >
                  </div>
                </div>
                <div class="mt-3 mb-4 bg-light">
                  <div class="row">
                    <div class="col-sm-auto ml-auto">
                      <b-button
                        v-b-toggle.edit-step1.edit-step2
                        class="btn btn-primary btn-lg btn-block scroll-to"
                        type="button"
                      >
                        Continuar
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-collapse>

              <b-button
                v-b-toggle.edit-step2
                class="btn btn-step btn-secondary collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#edit-step2"
              >
                <h5>2. Elige el método de pago</h5>
              </b-button>
              <b-collapse id="edit-step2" class="collapse" aria-labelledby="headingTwo" data-parent="#steps">
                <div class="pt-3 px-3 pb-2 px-md-5 pt-md-5 bg-white">
                  <div class="row">
                    <div class="col-xl-12">
                      <h5 class="mb-3">
                        👉 Por ahora es el único método de pago establecido...sorry 😩
                      </h5>
                      <hr>
                      <br>
                    </div>
                    <div class="col-xl-4">
                      <div class="card shadow mb-5">
                        <div class="card-body">
                          <div align="center">
                            <img src="~/assets/img/stripe.svg" class="rounded mr-2" width="140" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-3 mb-4 bg-light">
                  <div class="row">
                    <div class="col-sm-auto ml-auto">
                      <b-button
                        v-b-toggle.edit-step2.edit-step3
                        class="btn btn-primary btn-lg btn-block scroll-to"
                      >
                        Continuar
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-collapse>

              <b-button
                v-b-toggle.edit-step3
                class="btn btn-step btn-secondary collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#edit-step3"
              >
                <h5>3. Resumen de la operación </h5>
              </b-button>
              <b-collapse id="edit-step3" class="collapse" aria-labelledby="headingThree" data-parent="#steps">
                <div class="pt-3 px-3 pb-2 px-md-5 pt-md-5 bg-white">
                  <div class="row">
                    <div class="col-xl-12">
                      <h4><b>🎊🎊 La operación se ha completado con éxito 🎊🎊</b></h4>
                      <h5>Has donado <b>XX €</b> a <b>Nombre del partner</b>. Muchas gracias de su parte 🙏</h5>
                      <br><br>
                    </div>
                  </div>
                </div>
                <div class="mt-3 mb-4 bg-light">
                  <div class="row">
                    <div class="col-sm-auto ml-auto">
                      <NuxtLink to="/" class="btn btn-primary btn-lg btn-block" type="submit" data-toggle="collapse">
                        Finalizar
                        proceso
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </b-collapse>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Donar',
  async asyncData ({
    params,
    $http
  }) {
    const res = await $http.get('https://socialhack-back.herokuapp.com/partner/' + params.slug)
    const json = await res.json()
    const partner = json.partner
    const subtitle = `Estás donando a <b>${partner.name}</b>`
    return {
      partner,
      subtitle
    }
  },
  data () {
    return {
      title: '<img src="~/assets/img/coin.svg" class="img-coin1" alt="donate"> ¿Cuanto quieres donar?',
      subtitle: 'Estás donando a...',
      partner: {},
      badges: []
    }
  }
}
</script>

<style scoped>

</style>
