<template>
  <div>
    <Encabezado :logged-in="true" />
    <Hero :title="title" :subtitle="subtitle" :budgets="budgets" />
    <section class="config--user py-5">
      <div class="container">
        <ul id="pills-tab" class="nav nav-pills mb-3" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              id="pills-home-tab"
              class="nav-link active"
              data-toggle="pill"
              href="#pills-1"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >Donaciones</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="pills-profile-tab"
              class="nav-link"
              data-toggle="pill"
              href="#pills-2"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >Colaboraciones</a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="pills-contact-tab"
              class="nav-link"
              data-toggle="pill"
              href="#pills-3"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >Entidades a las que sigue</a>
          </li>
        </ul>
        <div id="pills-tabContent" class="tab-content">
          <div id="pills-1" class="tab-pane mt-5 fade show active" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="row">
              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img src="~/assets/img/partner.png" class="rounded mr-2" width="40" alt="User">
                      Cáritas
                    </h5>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <h5 class="donate">
                        <img src="~/assets/img/coin.svg" class="img-coin" alt="donate"> Ha donado 20€
                      </h5>
                    </div>
                  </div>
                  <div class="card-body border-top mb-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fecha--trans">Realizado el 23/2/21, 18:32PM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="card shadow mb-4">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img src="~/assets/img/partner.png" class="rounded mr-2" width="40" alt="User">
                      Cáritas
                    </h5>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                      <h5 class="donate">
                        <img src="~/assets/img/coin.svg" class="img-coin" alt="donate"> Ha donado 20€
                      </h5>
                    </div>
                  </div>
                  <div class="card-body border-top mb-2">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="fecha--trans">Realizado el 23/2/21, 18:32PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pills-2" class="tab-pane mt-5 fade" role="tabpanel" aria-labelledby="pills-profile-tab">
            2
          </div>
          <div id="pills-3" class="tab-pane mt-5 fade" role="tabpanel" aria-labelledby="pills-contact-tab">
            3
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      title: '😎 Carlos Rodríguez',
      subtitle: 'Miembro desde 13/02/2021',
      budgets: [
        {
          id: 0,
          src: 'don-1.png'
        },
        {
          id: 1,
          src: 'don-2.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
