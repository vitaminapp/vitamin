import { getCardType } from '@/api/nested'
const state = {
  cardType: []
}
const mutations = {
  setCardType(state, payload) {
    state.cardType = payload
    console.log(payload)
  }
}
const actions = {
  async getCardType({ commit }) {
    const data = await getCardType()
    console.log(data.data, 'this is data')
    commit('setCardType', data.data.list)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
