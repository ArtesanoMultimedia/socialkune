<template>
  <div>
    <Encabezado :logged-in="true" />
    <div
      class="masthead"
      style="background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://via.placeholder.com/1920x550'); background-size: cover; background-position: center; background-repeat: no-repeat;"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-xl">
            <!-- Hello -->
            <h1>{{ title }}</h1>
            <h4>{{ subtitle }}</h4>
            <Badges :badges="badges" />
          </div>
          <div class="col-12 col-xl-auto">
            <h6 class="pt-3">
              Domingo, 14 de Febrero
            </h6>
          </div>
        </div>
      </div>
    </div>
    <section class="presentation--user py-5">
      <div class="container">
        <div class="row mt-3 mb-3">
          <div class="col-12 col-xl">
            <button type="" class="btn btn-secondary btn-lg mt-2 mb-2 mr-2">
              <i
                data-feather="star"
                class="font-icon"
              /> Seguir a esta entidad
            </button>
          </div>
          <div class="col-12 col-xl-auto">
            <button type="" class="btn btn-primary btn-lg mt-2 mb-2 mr-2">
              <i data-feather="smile" class="font-icon" />
              Colaborar
            </button>
            <NuxtLink :to="`/donar/${partner.slug}`" class="btn btn-primary btn-lg mt-2 mb-2">
              <i
                data-feather="dollar-sign"
                class="font-icon"
              /> Donar
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
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
            >Biografía</a>
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
            >Colaboradores</a>
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
              <div class="col-xl-12" data-aos="fade-up" data-aos-delay="100">
                <h3><b>Un poco sobre nosotros...</b></h3>
                <br>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>
            </div>
          </div>
          <div id="pills-2" class="tab-pane mt-5 fade" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div class="row">
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="100">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/user.png"
                        class="rounded-circle mr-2"
                        width="40"
                        alt="User"
                      > Carlos Rodríguez
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Usuario desde 13/02/2021<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/don-1.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/don-2.png"
                      width="40px"
                      class="ml-2 rounded"
                    ><img src="~/assets/img/don-3.png" width="40px" class="ml-2 rounded">
                    <br>
                    <NuxtLink to="/user" class="btn btn-secondary mt-4 mb-2">
                      Ver usuario
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="200">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/user.png"
                        class="rounded-circle mr-2"
                        width="40"
                        alt="User"
                      > Nombre usuario
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Usuario desde xx/xx/xxxx<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/don-1.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/don-2.png"
                      width="40px"
                      class="ml-2 rounded"
                    ><img src="~/assets/img/don-3.png" width="40px" class="ml-2 rounded">
                    <br>
                    <NuxtLink to="/user" class="btn btn-secondary mt-4 mb-2">
                      Ver usuario
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="300">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/user.png"
                        class="rounded-circle mr-2"
                        width="40"
                        alt="User"
                      > Nombre usuario
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Usuario desde xx/xx/xxxx<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/don-1.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/don-2.png"
                      width="40px"
                      class="ml-2 rounded"
                    ><img src="~/assets/img/don-3.png" width="40px" class="ml-2 rounded">
                    <br>
                    <NuxtLink to="/user" class="btn btn-secondary mt-4 mb-2">
                      Ver usuario
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pills-3" class="tab-pane mt-5 fade" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="row">
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="100">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/partner.png"
                        class="rounded mr-2"
                        width="40"
                        alt="User"
                      > Nombre partner
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/S-WEB-Goal-01.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/S-WEB-Goal-05.png"
                      width="40px"
                      class="ml-2 rounded"
                    ><img src="~/assets/img/S-WEB-Goal-08.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/S-WEB-Goal-03.png"
                      width="40px"
                      class="ml-2 rounded"
                    >
                    <br>
                    <a href="" class="btn btn-primary mt-4 mb-2 mr-2">Match</a><a
                      href="perfil-partner.html"
                      class="btn btn-secondary mt-4 mb-2"
                    >Ver ahora</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="200">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/partner.png"
                        class="rounded mr-2"
                        width="40"
                        alt="User"
                      > Nombre partner
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/S-WEB-Goal-01.png" width="40px" class="ml-2"><img
                      src="~/assets/img/S-WEB-Goal-05.png"
                      width="40px"
                      class="ml-2"
                    ><img src="~/assets/img/S-WEB-Goal-08.png" width="40px" class="ml-2"><img
                      src="~/assets/img/S-WEB-Goal-03.png"
                      width="40px"
                      class="ml-2"
                    >
                    <br>
                    <a href="" class="btn btn-primary mt-4 mb-2 mr-2">Match</a><a
                      href="perfil-partner.html"
                      class="btn btn-secondary mt-4 mb-2"
                    >Ver ahora</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-down" data-aos-delay="300">
                <div class="card shadow mb-2">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img
                        src="~/assets/img/partner.png"
                        class="rounded mr-2"
                        width="40"
                        alt="User"
                      > Nombre partner
                    </h5>
                    <hr>
                    <p class="card-text limit-text-event mb-4">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.<br>
                    </p>
                    <!--zona badges --><img src="~/assets/img/S-WEB-Goal-01.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/S-WEB-Goal-05.png"
                      width="40px"
                      class="ml-2 rounded"
                    ><img src="~/assets/img/S-WEB-Goal-08.png" width="40px" class="ml-2 rounded"><img
                      src="~/assets/img/S-WEB-Goal-03.png"
                      width="40px"
                      class="ml-2 rounded"
                    >
                    <br>
                    <a href="" class="btn btn-primary mt-4 mb-2 mr-2">Match</a><a
                      href="perfil-partner.html"
                      class="btn btn-secondary mt-4 mb-2"
                    >Ver ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Partner',
  async asyncData ({
    params,
    $http
  }) {
    const res = await $http.get('https://socialhack-back.herokuapp.com/partner/' + params.slug)
    const json = await res.json()
    const partner = json.partner
    const title = '💼 ' + partner.name
    const subtitle = `Miembro desde ${partner.created_at}`
    const badges = partner.badges
    return {
      partner,
      title,
      subtitle,
      badges
    }
  },
  data () {
    return {
      title: '',
      subtitle: 'Miembro desde 13/02/2021',
      badges: [],
      partner: {}
    }
  }
}
</script>

<style scoped>
.masthead {
  /*background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));*/
  /*background-image: url('~/assets/~/assets/img/1920x550.png');*/
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
