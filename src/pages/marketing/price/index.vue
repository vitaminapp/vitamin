<template>
  <div class="chart-container">
    <div class="content-action">
      <div class="card-group">
        <h3>一口价活动</h3>
      </div>
      <div class="bg-white padding-24-top margin-24-top">
        <el-tabs v-model="activeName" @tab-click="handleClicks">
          <el-tab-pane label="活动管理" name="first">活动管理</el-tab-pane>
          <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
          <el-tab-pane label="审核不通过" name="third">审核不通过</el-tab-pane>
        </el-tabs>
      </div>
      <div class="nav-selected" />
      <div class="padding-24 margin-24-top bg-white overflow">
        <div class="btn-add" @click="btnAdd">+</div>
        <div class="ant-table-wrapper index-table margin-24-top margin-24-btm">
          <el-table :data="tempList" style="width: 100%;background: #595959;">
            <el-table-column prop="active_name" label="活动名称" />
            <el-table-column prop="active_range_str" label="活动范围" />
            <el-table-column prop="created_at_strstart-date" label="开始时间" />
            <el-table-column prop="end_time_str" label="结束时间" />
            <el-table-column prop="join_store_nums" label="参加店铺/数" />
            <el-table-column prop="join_prod_nums" label="商品数" />
            <el-table-column prop="active_status_str" label="活动状态" />
            <el-table-column prop="created_at_str" label="创建时间" />
            <el-table-column prop="created_by_str" label="创建者" />
            <el-table-column label="操作" width="100">
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
export default {
  components: {},
  props: {},

  data() {
    return {
      activeName: 'first',
      total1: 0,
      flag: true,
      pageSize: 10,
      currentPage1: 1,
      tempList: [],
      ruleForm: {
        name: '',
        region: ''
      }
    }
  },

  computed: {
    ...mapState('marketing', {
      cardTypelist: 'cardTypelist'
    })
  },
  methods: {
    ...mapActions('marketing', ['FetchList']),
    async handleClicks(vue) {
      if (vue.$options.propsData.label === '活动管理') {
        await this.FetchList({ page: 1, pageSize: 1000, tag_status: 3, type: 2 })
        this.tempList = this.cardTypelist
      } else if (vue.$options.propsData.label === '待审核') {
        await this.FetchList({ page: 1, pageSize: 1000, tag_status: 1, type: 2 })
        this.tempList = this.cardTypelist
      } else {
        await this.FetchList({ page: 1, pageSize: 1000, tag_status: 2, type: 2 })
        this.tempList = this.cardTypelist
      }
    },

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
        path: '/marketing/operate'
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
    }
  },
  async created() {
    await this.FetchList({ page: 1, pageSize: 1000, tag_status: 3, type: 2 })
    // console.log(this.cardTypelist,'cardTypelist')
    this.tempList = this.cardTypelist
  }
}
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  font-size: 14px;
  background: #fcfcfc;
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

