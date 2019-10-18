import { getCardType, getRegister, getShopList, getCityList } from '@/api/nested'
const state = {
  cardType: [],
  registerMessage: [],
  shopList: [],
  cityList: []
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
  },
  setCityList(state, payload) {
    state.cityList = payload
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
  },
  async getCityList({ commit }) {
    const data = await getCityList()
    console.log(data, 'citylist')
    commit('setCityList', data.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
