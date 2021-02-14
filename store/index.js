export const state = () => ({
  loggedIn: false
})

export const mutations = {
  loggin (state) {
    state.loggedIn = true
  },
  logout (state) {
    state.loggedIn = false
  }
}
