import {
  getDetail,
  getLogin,
  getMenuData,
  getMallData,
  getLimtData
} from "@/api/set";

const state = {
  //商品设置数据
  detailList: {},
  //登录设置数据
  loginList: {},
  menuList: {},
  mallList: {},
  limtList: {}
};
const mutations = {
  //商品设置数据
  setDetail(state, playload) {
    state.detailList = playload.data.data;
  },
  //登录设置数据
  setLogin(state, playload) {
    state.loginList = playload.data.data;
  },
  //店铺设置数据 菜单结构
  setMenuData(state, playload) {
    state.menuList = playload.data.data;
  },
  //店铺设置数据 基本信息
  setMallData(state, playload) {
    state.mallList = playload.data.data;
  },
  //店铺设置数据 基本信息
  setLimtData(state, playload) {
    state.limtList = playload.data.data;
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
  },
  //店铺设置数据 菜单结构
  async getMenuData({ commit }) {
    let data = await getMenuData();
    commit("setMenuData", { data });
  },
  //店铺设置数据 基本信息
  async getMallData({ commit }) {
    let data = await getMallData();
    commit("setMallData", { data });
  },
  //店铺设置数据 菜单结构
  async getLimtData({ commit }) {
    let data = await getLimtData();
    commit("setLimtData", { data });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
