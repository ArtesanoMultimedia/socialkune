export const state = () => ({
  title: '👋 Bienvenid@ a kune'
})

export const mutations = {
  add (state, title) {
    state.list.push({
      title,
      done: false
    })
  }
}
