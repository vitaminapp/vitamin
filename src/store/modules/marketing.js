import { fetchList } from '@/api/marketing'
const state = {
  cardTypelist: []
}
const mutations = {
  setfetchList(state, payload) {
    state.cardTypelist = payload
    console.log(state.cardTypelist, '2222')
  }
}
const actions = {
  async FetchList({ commit }, item) {
    const data = await fetchList(item)
    commit('setfetchList', data.data.list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
