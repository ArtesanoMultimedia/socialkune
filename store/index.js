export const state = () => ({
  loggedIn: false,
  loggerUserId: 0
})

export const mutations = {
  loggin (state, id) {
    state.loggedIn = true
    state.loggerUserId = id
  },
  logout (state) {
    state.loggedIn = false
    state.loggerUserId = 0
  }
}
