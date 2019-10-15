<template>
  <div class="chart-container">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <el-form ref="form" :model="forms" label-width="80px" class="formBox">
      <div class="login-title">
        <p>用户登录设置</p>
        <p>登录类型：商场微信授权 + 会员登录</p>
      </div>
      <div>
        <div class="login-title">
          <p>微信授权场景：</p>
          <p>
            <el-radio disabled v-model="radio" label="1">首次点击时即微信授权</el-radio>
            <el-radio disabled v-model="radio" label="2">特定动作时微信授权</el-radio>
          </p>
        </div>
        <div>
          <Item :data="loginList.list.wechat" />
        </div>
        <p>会员登录场景：</p>
        <div>
          <Item :data="loginList.list.member" />
        </div>
      </div>
      <div class="login-button-title">
        <el-button
          type="text"
          @click="dialogVisible = true"
          style="background-color: #3ec6b6; color:#fff"
        >更新用户登录设置</el-button>
      </div>
      <el-dialog
        title="更新用户登录设置"
        :visible.sync="dialogVisible"
        width="70%"
        :before-close="handleClose"
      >
        <div>
          <div class="login-title">
            <p>微信授权场景：</p>
            <p>
              <el-radio v-model="radio" label="1">首次点击时即微信授权</el-radio>
              <el-radio v-model="radio" label="2">特定动作时微信授权</el-radio>
            </p>
          </div>
          <div>
            <Item :data="loginList.list.wechat" />
          </div>
          <p>会员登录场景：</p>
          <div>
            <Item :data="loginList.list.member" />
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提交</el-button>
        </span>
      </el-dialog>
    </el-form>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import { mapState, mapActions } from "vuex";
import Item from "./item";
import "./index.scss";
export default {
  name: "SetLogin",
  data() {
    return {
      forms: {},
      radio: "2",
      dialogVisible: false,
    };
  },
  components: {
    Breadcrumb,
    Item
  },
  computed: {
    ...mapState("set", ["loginList"])
  },
  mounted() {
    this.getLogin();
  },
  methods: {
    ...mapActions("set", ["getLogin"]),
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>
</style>
