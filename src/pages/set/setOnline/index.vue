<template>
  <div class="chart-container">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="content">
      <div class="left">
        <div v-for="(item,index) in leftList" :key="index" @click="changeid(index)" v-text="item"></div>
      </div>
      <div class="right">
        <div v-if="current===0">
          <h2>菜单首页</h2>
          <div class="table">
            <div v-for="item in menuList" :key="item.id">
              <img :src="item.icon_selected_url" alt />
              <span>{{item.menu_name}}</span>
            </div>
          </div>
        </div>
        <div v-if="current===1">
          <h2>基本信息</h2>
          <div>
            <span>公司简称</span>
          </div>
          <div>
            <span v-text="mallList.name"></span>
          </div>
          <div>LOGO</div>
          <div>
            <img :src="mallList.icon" alt />
          </div>
          <div>
            <span>顶部导航LOGO</span>
          </div>
          <div>
            <img :src="mallList.logo" alt />
          </div>
          <div>
            <el-button type="text" @click="dialogVisible = true">编辑</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
        <div v-if="current===2">
          <h2>访问限制</h2>
          <div>
            <p>访问限制</p>
            <el-radio v-model="radio" label="1">开启</el-radio>
            <el-radio v-model="radio" label="2">关闭</el-radio>
          </div>
          <div>
            <p>访问限制密码</p>
            <el-input placeholder="请输入密码" :value="limtList.password"></el-input>
            <div>
              <span>页面名称</span>
            </div>
            <div>
              <el-input type="textarea" :value="limtList.page_content"></el-input>
            </div>
          </div>
          <div>
            <el-button type="text" @click="dialogVisible = true">编辑</el-button>
            <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import { mapActions, mapState } from "vuex";
import "./index.scss";
export default {
  name: "SetOnline",
  components: {
    Breadcrumb
  },
  data() {
    return {
      leftList: ["菜单结构", "基本信息", "访问限制"],
      current: 0,
      radio: "1",
      input: "",
      dialogVisible: false
    };
  },
  computed: {
    ...mapState("set", ["menuList", "mallList", "limtList"])
  },
  mounted() {
    this.getMenuData();
  },
  methods: {
    ...mapActions("set", ["getMenuData", "getMallData", "getLimtData"]),
    changeid(id) {
      this.current = id;
      switch (id) {
        case 0:
          this.getMenuData();
          break;
        case 1:
          this.getMallData();
          break;
        case 2:
          this.getLimtData();
          break;
        default:
          break;
      }
    },
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
