import { getCardType, getRegister, getShopList } from '@/api/nested'
const state = {
  cardType: [],
  registerMessage: [],
  shopList: []
}
const mutations = {
  setCardType(state, payload) {
    state.cardType = payload
  },
  setRegisterMessage(state, payload) {
    state.registerMessage = payload
  },
  setShopList(state, payload) {
    state.shopList = payload
  }
}
const actions = {
  async getCardType({ commit }) {
    const data = await getCardType()
    commit('setCardType', data.data.list)
  },
  async getRegister({ commit }) {
    const data = await getRegister()
    commit('setRegisterMessage', data.data)
  },
  async getShopList({ commit }) {
    const data = await getShopList()
    commit('setShopList', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
