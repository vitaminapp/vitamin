import { fetchList, partPower, store, storeList, getpartPower, getsave, getsearch, getrestrict, getpromotion } from '@/api/marketing'
const state = {
  cardTypelist: [],
  toreList: [],
  active_range: [],
  active_status: [],
  discount_threshold_type: [],
  floor: [],
  store_category: [],
  vm_store: []
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
  },
  setstoreList(state, payload) {
    state.toreList = payload
  },
  setpartPower(state, payload) {},
  setsearch(state, payload) {
    state.active_range = payload.active_range
    state.active_status = payload.active_status
    state.discount_threshold_type = payload.discount_threshold_type
    state.floor = payload.floor
    state.store_category = payload.store_category
    state.vm_store = payload.vm_store
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
    await partPower(item).then((res) => {})
  },
  async store({ commit }, item) {
    await store(item).then((res) => {})
  },
  async storeList({ commit }) {
    await storeList().then((res) => {
      const data = res.data.store
      commit('setstoreList', data)
    })
  },
  async getpartPower({ commit }) {
    await getpartPower().then((res) => {
      const data = res.data.use_range_status
      commit('setpartPower', data)
    })
  },
  async getsave({ commit }, item) {
    await getsave(item).then((res) => {
      // const data = res.data
      console.log(res)
      // commit('setgetsave', data)
    })
  },
  async getsearch({ commit }, item) {
    await getsearch(item).then((res) => {
      const data = res.data
      commit('setsearch', data)
    })
  },
  async getrestrict({ commit }, item) {
    await getrestrict(item).then((res) => {
      const data = res.data.list
      commit('setfetchList', data)
    })
  },
  async getpromotion({ commit }, item) {
    await getpromotion(item).then((res) => {
      const data = res.data.list
      commit('setfetchList', data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
