<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="card shadow search" data-aos="fade-down">
            <div class="card-body">
              <form class="mt-3 mb-2">
                <div class="input-group mb-2 mr-sm-2">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      🔎
                    </div>
                  </div>
                  <input id="inlineFormInputGroupUsername2" type="text" class="form-control form-control-lg" placeholder="Búsqueda">
                </div>
                <button type="submit" class="btn btn-secondary btn-lg mt-2 mb-2">
                  Buscar partners
                </button>
                <a
                  class="link--pink ml-3"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  + Avanzada
                </a>
                <div id="collapseExample" class="collapse">
                  <form>
                    <div class="form-row mt-3">
                      <div class="form-group col-md-6">
                        <label for="inputState" />
                        <select id="inputState" class="form-control">
                          <option selected>
                            Elige
                          </option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input id="gridCheck" class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="gridCheck">
                          Filtro 1
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
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
  name: 'Search'
}
</script>

<style scoped>

</style>
