<template>
  <div class="chart-container">
    <div class="content-action">
      <div class="card-group">
        <h3>满减/赠活动</h3>
      </div>
      <div class="bg-white padding-24-top margin-24-top">
        <el-tabs v-model="activeName" @tab-click="handleClicks">
          <el-tab-pane label="活动管理" name="first">
            <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
          </el-tab-pane>
          <el-tab-pane label="待审核" name="second">
            <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
          </el-tab-pane>
          <el-tab-pane label="审核不通过" name="third">
            <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="nav-selected" />
      <div class="padding-24 margin-24-top bg-white overflow">
        <div class="btn-add" @click="btnAdd">+</div>
        <div class="ant-table-wrapper index-table margin-24-top margin-24-btm">
          <el-table :data="tempList" style="width: 100%;background: #595959;">
            <el-table-column prop="active_name" label="活动名称" width="256" />
            <el-table-column prop="active_range_str" label="活动范围" width="93" />
            <el-table-column prop="created_at_strstart-date" label="开始时间" width="168" />
            <el-table-column prop="end_time_str" label="结束时间" width="168" />
            <el-table-column prop="join_store_nums" label="参加店铺/数" width="114" />
            <el-table-column prop="join_prod_nums" label="商品数" width="78" />
            <el-table-column prop="active_status_str" label="活动状态" width="93" />
            <el-table-column prop="created_at_str" label="创建时间" width="168" />
            <el-table-column prop="created_by_str" label="创建者" width="102" />
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
                <el-button type="text" size="small">失效</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              :current-page="currentPage1"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="cardTypelist.length"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
            <span>第{{ currentPage1 }}-{{ currentPage1*pageSize }}条</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import Form from '../../../component/from'
export default {
  components: {

  },
  props: {},
  data() {
    return {
      activeName: 'first',
      total1: 0,
      flag: true,
      pageSize: 10,
      currentPage1: 1,
      page: 1,
      tempList: [],
      ruleForm: {
        name: '',
        region: ''
      },
      formInline: {},

      filterParams: []
    }
  },

  computed: {
    ...mapState('marketing', {
      cardTypelist: 'cardTypelist',
      active_range: 'active_range',
      active_status: 'active_status',
      discount_threshold_type: 'discount_threshold_type',
      floor: 'floor',
      store_category: 'store_category',
      vm_store: 'vm_store'
    })
  },

  async created() {
    await this.FetchList({ page: 1, pageSize: 1000, tag_status: 3, type: 1 })
    await this.getsearch({ tag_status: 2, type: 2 })
    this.tempList = this.cardTypelist
  },

  mounted() {
    this.$nextTick(() => {
      console.log(this.active_range, this.active_status)
      this.updata()
      this.submit(this.formInline)
    })
  },
  methods: {
    ...mapActions('marketing', ['FetchList', 'getsearch']),

    gettabData() {
      const { pageSize, currentPage1, cardTypelist } = this

      this.tempList = cardTypelist.slice(
        (currentPage1 - 1) * pageSize,
        currentPage1 * pageSize
      )
    },
    handleSizeChange(val) {
      this.gettabData()
      this.pageSize = val
      this.tempList = this.cardTypelist.slice(0, val)
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage1 = val
      // console.log(`当前页: ${val}`)
      this.gettabData()
    },

    btnAdd() {
      this.$router.push({
        path: '/marketing/activityoperate'
        // query:{
        //   id:this.id ,
        // }
      })
    },
    qx() {
      this.flag = true
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    submit(val) {
      // storeList({ page: this.page, ...val }).then(res => {
      //   this.total = res.data.page.totalNum
      //   this.tableData = res.data.list
      // })
    },
    updata() {
      this.filterParams = [
        { label: '活动名称', key: 'vm_store_name', type: 'elInput' },
        { label: '活动范围', key: 'floor_name', type: 'elSelect' },
        { label: '活动类型', key: 'name_id', type: 'elSelect', list: null },
        { label: '楼层', key: 'vm_store', type: 'elSelect', list: null },
        { label: '店铺分类', key: 'vm_store', type: 'elSelect', list: null },
        { label: '店铺', key: 'vm_store', type: 'elSelect', list: null },
        { label: '最早开始时间', key: 'start_time', type: 'elSelect', list: null },
        { label: '最早结束时间', key: 'end_time', type: 'elSelect', list: null }
      ]
      // this.columns = [
      //   { title: '店铺名称', key: 'name' },
      //   { title: '楼层', key: 'floor_name' },
      //   { title: '位置', key: 'address' },
      //   { title: '所属分类', key: 'category_data' },
      //   { title: '店长', key: 'shop_manager' },
      //   { title: '楼管', key: 'building' },
      //   { title: '状态', key: 'status_str' }
      // ]

      this.getListDate(this.active_range, '活动范围')
      this.getListDate(this.active_status, '活动状态')
    },
    getListDate(fun, name) {
      const arr = this.filterParams.map(item => {
        if (item.label === name) {
          return {
            ...item
            // list: data.list || data
          }
        }
        return item
      })
      this.filterParams = arr
    },
    // 修改分页器当前页
    setPage(val) {
      this.page = val
    },
    handleClick(vue) {
      console.log(vue)
    },
    async handleClicks(vue) {
      if (vue.$options.propsData.label === '活动管理') {
        await this.FetchList({
          page: 1,
          pageSize: 1000,
          tag_status: 3,
          type: 2
        })
        this.tempList = this.cardTypelist
      } else if (vue.$options.propsData.label === '待审核') {
        await this.FetchList({
          page: 1,
          pageSize: 1000,
          tag_status: 1,
          type: 2
        })
        this.tempList = this.cardTypelist
      } else {
        await this.FetchList({
          page: 1,
          pageSize: 1000,
          tag_status: 2,
          type: 2
        })
        this.tempList = this.cardTypelist
      }
    }
  }

}
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  font-size: 14px;
    background: #f0ecec;
  .content-action {
    width: auto;
    height: 100%;
    padding: 24px;
    margin-top: 10px;
    border: 1px solid #cccccc;
    .card-group {
      padding: 24px;
      background: #fff;
      overflow: hidden;
      h3 {
        font-size: 16px;
        // height: 24px;
        // line-height: 24px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
      }
    }

    .margin-24-top {
      margin-top: 24px;
    }
    .padding-24-top {
      padding-top: 24px;
    }
    .bg-white {
      background: #fff;
      border-bottom: 1px solid #ccc;
      .el-tabs {
        width: 100%;
        height: 400px;
      }
      .card-group {
        height: 340px;
        padding: 24px;
        background: #fff;
        overflow: hidden;
        border-bottom: 1px solid #e8e8e8;
      }
    }

    .overflow {
      overflow: hidden;
    }
    .padding-24 {
      padding: 24px;
    }
    .bg-white {
      background: #fff;

      .btn-add {
        width: 34px;
        height: 34px;
        background: #3ec6b6;
        border-radius: 50%;
        color: #fff;
        font-size: 30px;
        margin-bottom: 24px;
        text-align: center;
        line-height: 30px;
        font-weight: 200;
        cursor: pointer;
      }
      .ant-table-wrapper {
        zoom: 1;
      }
      .margin-24-btm {
        margin-bottom: 24px;
        .float-left {
          float: left;
          input {
            width: 300px;
          }
        }
        .margin-10-right {
          margin-right: 10px;
          .color-FF7887 {
            color: #ff7887;
          }
        }
      }

      .block {
        width: 100%;
        height: 40px;
        span {
          padding: 0 30px;
          height: 40px;
          line-height: 40px;
          float: right;
        }
        .el-pagination {
          margin: 5px;
          float: right;
        }
      }
    }
    .margin-16-btm {
      margin-bottom: 16px;
    }
    .float-left {
      float: left;
    }
    .margin-10-right {
      margin-right: 10px;
    }
    .ant-input:placeholder-shown {
      text-overflow: ellipsis;
    }
    .card-group p {
      margin-bottom: 8px;
      overflow: hidden;
      span {
        display: inline-block;
      }
      .color-FF7887 {
        color: #ff7887;
      }
    }

    .color-a0 {
      color: #a0a0a0;
    }
    .size-14 {
      font-size: 14px;
    }
    .ant-select,
    .ant-select ol,
    .ant-select ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .ant-select {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5;
      -webkit-font-feature-settings: "tnum";
      font-feature-settings: "tnum";
      position: relative;
      display: inline-block;
      outline: 0;
    }
  }
  .el-form {
    box-sizing: border-box;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    .el-form-item {
      .el-form-item__label {
        text-align: right;
        vertical-align: middle;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .el-form-item__content {
        margin: 0;
      }
    }
  }
  .bottom-footbar {
    width: 100%;
    height: 100%;
    button {
      float: right;
      margin: 10px;
    }
  }
}
</style>

