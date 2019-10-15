import { getDetail, getLogin } from "@/api/set";

const state = {
  //商品设置数据
  detailList: {},
  //登录设置数据
  loginList: {}
};
const mutations = {
  //商品设置数据
  setDetail(state, playload) {
    state.detailList = playload.data.data;
  },
  //登录设置数据
  setLogin(state, playload) {
    state.loginList = playload.data.data;
  }
};
const actions = {
  //商品设置数据
  async getDetail({ commit }) {
    let data = await getDetail();
    commit("setDetail", { data });
  },
  //登录设置数据
  async getLogin({ commit }) {
    let data = await getLogin();
    commit("setLogin", { data });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
