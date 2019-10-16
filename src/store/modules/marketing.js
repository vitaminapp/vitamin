import { fetchList, partPower, store, storeList } from '@/api/marketing'
const state = {
  cardTypelist: []
}
const mutations = {
  setfetchList(state, payload) {
    if (payload) {
      state.cardTypelist = payload
    } else {
      state.cardTypelist = []
    }
    // state.tempList = payload.splice(0, 10)
    console.log(state.cardTypelist, '333')
  }
}
const actions = {
  async FetchList({ commit }, item) {
    await fetchList(item).then((res) => {
      const data = res.data.list

      commit('setfetchList', data)
    })
  },
  async partPower({ commit }, item) {
    await partPower(item).then((res) => {
      console.log(res)
    })
  },
  async store({ commit }, item) {
    await store(item).then((res) => {
      console.log(res)
    })
  },
  async storeList({ commit }, item) {
    await storeList(item).then((res) => {
      // const data = res.data.list
      console.log(res)
      // commit('setstoreList', data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
