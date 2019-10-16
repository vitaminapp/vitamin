<template>
  <div class="card_warper">
    <div class="navbar">
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </div>
    <div class="content">
      <div class="left">
        <span v-for="(item,index) in leftList" :key="index" @click="changeid(index)">{{ item.tit }}</span>
      </div>
      <div class="right">
        <span class="tit">{{ leftList[initid].tit }}</span>
        <div v-if="initid==0" class="showbox">
          <span class="addbtn" @click="changeDrawer">+</span>
          <el-table
            :data="cardType"
            :cell-style="iscenter"
            :header-cell-style="headiscenter"
            stripe
            style="width: 100%"
          >
            <el-table-column prop="level" label="会员等级编码" width="200" />
            <el-table-column prop="title" label="会员等级名称" width="200" />
            <el-table-column prop="img" label="卡片图案" width="480">
              <template slot-scope="scope">
                <img :src="scope.row.img" alt style="width: 138px;height: 83px">
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="small"
                  type="text"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="initid==1" class="showbox">
          <li v-for="item in registerMessage.registerForm" :key="item.id">
            <span>{{ item.value }}:</span>
            <span>{{ item.status==1?"必填":"选填" }}</span>
          </li>
          <li>
            选择默认地区:
            <span v-for="(item,index) in registerMessage.defaultArea" :key="index">{{ item }}</span>
          </li>
          <p class="alemd">修改注册信息</p>
        </div>
        <div v-if="initid==2" class="showbox">
          <p class="alemd" style="margin:0">添加提示语</p>
        </div>
        <div v-if="initid==3" class="showbox">
          <p class="alemd" style="margin:0">添加条款</p>
        </div>
        <div v-if="initid==4" class="showbox">
          <span class="addbtn" style="margin:0">+</span>
          <div class="table">
            <el-table
              :data="shopList"
              stripe
              :cell-style="iscenter"
              :header-cell-style="headiscenter"
              style="width: 100%"
            >
              <el-table-column prop="crm_store_code" label="CRM门店编码" width="170" />
              <el-table-column prop="store_name" label="门店名称" width="200" />
              <el-table-column prop="city_name" label="所属城市" width="128" />
              <el-table-column prop="address" label="门店地址" width="368" />
              <el-table-column prop label="练习方式" width="160">
                <a href>管理联系方式</a>
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    type="text"
                    @click="handleEdit(scope.$index, scope.row)"
                  >编辑</el-button>
                  <el-button
                    size="small"
                    type="text"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <Drawer
        title="我是一个抽屉组件"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="false"
      >
        1. Hello, world!
        2. Do you like it?
      </Drawer>
    </div>

  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Drawer from './component/drawer'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Card',
  components: {
    Breadcrumb,
    Drawer
  },
  data() {
    return {
      leftList: [
        {
          tit: '会员卡图案'
        },
        {
          tit: '注册信息'
        },
        {
          tit: '保存推荐提示语'
        },
        {
          tit: '使用条款'
        },
        {
          tit: '商城门店'
        }
      ],
      initid: 0,
      display: false,
      drawerWidth: '500px'
    }
  },
  computed: {
    ...mapState('nested', ['cardType', 'registerMessage', 'shopList'])
  },
  mounted() {
    this.getCardType()
  },
  methods: {
    ...mapActions('nested', ['getCardType', 'getRegister', 'getShopList']),
    changeid(id) {
      this.initid = id
      switch (id) {
        case 0:
          this.getCardType()
          break
        case 1:
          this.getRegister()
          break
        case 4:
          this.getShopList()
          break
        default:
          break
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    iscenter({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 4 || columnIndex === 5) {
        return 'color:#3ec6b6; text-align: center;font-size:14;'
      }
      return ' text-align: center'
    },
    headiscenter({ row, rowIndex }) {
      return ' text-align: center;font-size:14;font-weight: normal;background:#fafafa;color:#000'
    },
    changeDrawer() {
      this.display = true
    }
  }

}
</script>
<style lang="scss">
@import url("./css/index.css");
</style>

