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
        <!-- 会员 -->
        <div v-if="initid==1" class="showbox">
          <li v-for="item in registerMessage.registerForm" :key="item.id">
            <span>{{ item.value }}:</span>
            <span>{{ item.status==1?"必填":"选填" }}</span>
          </li>
          <li>
            选择默认地区:
            <span v-for="(item,index) in registerMessage.defaultArea" :key="index">{{ item }}</span>
          </li>
          <p class="alemd" @click="changeDrawer">修改注册信息</p>
        </div>
        <!-- 注册 -->
        <div v-if="initid==2" class="showbox">
          <p class="alemd" style="margin:0" @click="changeDrawer">添加提示语</p>
        </div>
        <!-- 推荐 -->
        <div v-if="initid==3" class="showbox">
          <p class="alemd" style="margin:0" @click="changeDrawer">添加条款</p>
        </div>
        <!-- 条款 -->
        <div v-if="initid==4" class="showbox">
          <span class="addbtn" style="margin:0" @click="changeDrawer">+</span>
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
        <!-- 门店-->
      </div>
      <Drawer
        v-if="initid==0"
        :title="title"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="mask"
        @changedisplay="changedisplay"
        @changemask="changemask"
      >
        <div class="drawer_centent">
          <el-form
            ref="numberValidateForm"
            :model="cardFrom"
            label-width="100%"
            label-position="top"
            class="demo-ruleForm"
          >
            <el-form-item
              label="会员等级编码"
              :rules="[
                { required: true, message: '输入内容不能为空'},
              ]"
            >
              <el-input v-model.number="cardFrom.name" type="age" autocomplete="off" />
            </el-form-item>
            <el-form-item
              label="会员等级名称"
              :rules="[
                { required: true, message: '输入内容不能为空'},
              ]"
            >
              <el-input v-model.number="cardFrom.name" type="age" autocomplete="off" />
            </el-form-item>
            <el-form-item
              label="卡片图案"
              :rules="[
                { required: true, message: '输入内容不能为空'},
              ]"
            >
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </Drawer>
      <!-- 会员 -->
      <Drawer
        v-else-if="initid==1"
        :title="title"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="mask"
        @changedisplay="changedisplay"
        @changemask="changemask"
      >
        <li v-for="(item,index) in registerList" :key="item.id">
          <el-checkbox />
          <span>{{ item.value }}</span>
          <el-radio
            v-model="item.status"
            :label="2"
            @change="(value)=>{changeRadio(value,index)
            }"
          >选填</el-radio>
          <el-radio
            v-model="item.status"
            :label="1"
            @change="(value)=>{changeRadio(value,index)}"
          >必填</el-radio>
        </li>
      </Drawer>
      <!-- 注册 -->

      <Drawer
        v-else-if="initid==2"
        :title="title"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="mask"
        @changedisplay="changedisplay"
        @changemask="changemask"
      >
        <el-input v-model="input" placeholder="请输入内容" style="marginBottom:30px" />
        <span style="color:#ccc">用户保存推荐码图片时，在二维码图片下方显示的提示语，最多输入22个汉字</span>
      </Drawer>
      <!-- 推荐 -->
      <Drawer
        v-else-if="initid==3"
        :title="title"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="mask"
        @changedisplay="changedisplay"
        @changemask="changemask"
      >
        <el-input v-model="input" placeholder="请输入内容" />
      </Drawer>
      <!-- 条款 -->
      <Drawer
        v-else-if="initid==4"
        :title="title"
        :display.sync="display"
        :inner="true"
        :width="drawerWidth"
        :mask="mask"
        @changedisplay="changedisplay"
        @changemask="changemask"
      >
        <el-form
          v-for="(item,index) in changeshop"
          ref="numberValidateForm"
          :key="index"
          :model="changeshop"
          label-width="100px"
          label-position="top"
          class="demo-ruleForm"
        >
          <el-form-item
            :label="item.title"
            prop="item.prop"
            :rules="[
              { required: true, message: `${item.title}不能为空`}
            ]"
          >
            <el-input
              v-if="item.isipt"
              v-model.number="item.value"
              type="age"
              placeholder
              autocomplete="off"
            />
            <el-select v-else v-model="value" placeholder="请选择">
              <el-option
                v-for="item in ocityList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </Drawer>
      <!-- 门店-->
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
      changeshop: [
        {
          title: 'CRM门店编码',
          prop: 'crm_store_code',
          value: '',
          isipt: true
        },
        {
          title: '门店名称',
          prop: 'store_name',
          value: '',
          isipt: true
        },
        {
          title: '所属城市',
          prop: 'city_name',
          value: '',
          isipt: false
        },
        {
          title: '门店地址',
          prop: 'address',
          value: '',
          isipt: true
        }
      ],
      initid: 0,
      display: false,
      mask: false,
      drawerWidth: '500px',
      cardFrom: {
        grade: '',
        name: ''
      },
      title: '添加卡片',
      imageUrl: '',
      registerList: [],
      input: '',
      textarea: '',
      ocityList: []
    }
  },
  computed: {
    ...mapState('nested', [
      'cardType',
      'registerMessage',
      'shopList',
      'cityList'
    ])
  },
  mounted() {
    this.getCardType()
  },
  methods: {
    ...mapActions('nested', [
      'getCardType',
      'getRegister',
      'getShopList',
      'getCityList'
    ]),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    changeRadio(value, index) {
      this.registerList[index].status = value
    },
    changeid(id) {
      this.initid = id
      switch (id) {
        case 0:
          this.getCardType()
          this.title = '添加卡片'
          break
        case 1:
          this.getRegister()
          this.title = '注册信息'
          break
        case 2:
          this.title = '保存推荐提示语'
          break
        case 3:
          this.title = '使用条款'
          break
        case 4:
          this.getShopList()
          this.getCityList()
          this.title = '新增商场门店'
          break
        default:
          break
      }
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
      console.log('kkkk')
      this.display = true
      this.mask = true
    },
    changedisplay(boolean) {
      this.display = boolean
    },
    changemask(boolean) {
      this.mask = boolean
    }
  },
  watch: {
    registerMessage() {
      this.registerList = this.registerMessage.registerForm
    },
    cityList() {
      this.ocityList = this.cityList
      this.ocityList.map(item => {
        item.lable = item.id
        item.value = item.name
      })
      console.log(this.ocityList, '1114444')
    }
  }
}
</script>
<style lang="scss">
@import url("./css/index.css");
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 264px;
  height: 164px;
  line-height: 164px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

