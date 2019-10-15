import { fetchList } from '@/api/marketing'
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
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}