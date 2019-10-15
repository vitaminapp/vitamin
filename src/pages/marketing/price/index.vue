<template>
  <div class="chart-container">
    <div v-if="flag" class="content-action">
      <div class="card-group">
        <h3>一口价活动</h3>
      </div>
      <div class="bg-white padding-24-top margin-24-top">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="活动管理" name="first">活动管理</el-tab-pane>
          <el-tab-pane label="待审核" name="second">待审核</el-tab-pane>
          <el-tab-pane label="审核不通过" name="third">审核不通过</el-tab-pane>
        </el-tabs>
      </div>
      <div class="nav-selected" />
      <div class="padding-24 margin-24-top bg-white overflow">
        <div class="btn-add" @click="btnAdd">+</div>
        <div class="ant-table-wrapper index-table margin-24-top margin-24-btm">
          <el-table :data="cardTypelist" style="width: 100%;background: #595959;">
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
            <span>第1-3条, 共 3 条</span>
            <el-pagination
              :current-page.sync="cardTypelist"
              :page-size="10"
              layout="total, prev, pager, next"
              :total="cardTypelist.length"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>

    </div>

    <div v-else class="content-action">
      <div class="card-group">
        <h3>一口价</h3>
      </div>
      <div class="basic-edit card-group margin-24-top">
        <h4 class="margin-24-btm">活动信息</h4>
        <div>
          <h4>使用范围</h4>
          <p>
            <el-radio v-model="radio1" label="商场">商场</el-radio>
            <el-radio v-model="radio1" label="店铺">店铺</el-radio>
          </p>
        </div>
        <div>
          <h4>使用范围</h4>
          <p>
            <el-radio v-model="radio2" label="是">是</el-radio>
            <el-radio v-model="radio2" label="否">否</el-radio>
          </p>
        </div>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="overflow margin-24-btm">
            <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
              <span class="color-FF7887">*</span>活动名称
            </p>
            <div class="float-left">
              <input placeholder="请输入" type="text" class="ant-input" value style="width: 300px;">
            </div>
          </div>
          <div>
            <el-form-item label="选择区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </div>
          <div>
            <h4>限购设置</h4>
            <el-radio-group v-model="radio3">
              <div class="margin-16-btm">
                <el-radio :label="3">不限购</el-radio>
              </div>
              <div class="margin-16-btm">
                <el-radio :label="6">
                  <span>
                    每人每种商品限购
                    <input
                      placeholder="请输入"
                      type="text"
                      class="ant-input"
                      value
                      style="width: 160px;"
                    > 件
                  </span>
                </el-radio>
              </div>
              <div class="margin-16-btm">
                <el-radio :label="9">
                  <span>
                    每人每种商品前
                    <input
                      placeholder="请输入"
                      type="text"
                      class="ant-input"
                      value
                      style="width: 160px;"
                    > 件享受一口价
                  </span>
                </el-radio>
              </div>
            </el-radio-group>
          </div>
          <div class="overflow margin-24-btm">
            <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">标签文字</p>
            <div class="float-left">
              <input placeholder="请输入" type="text" class="ant-input" value style="width: 300px;">
              <p class="color-a0 size-14">显示在商品详情页价格旁边，例如：限时减、限时折扣</p>
            </div>
          </div>
          <div>
            <span
              class="margin-10-right float-left"
              style="width: 80px; display: inline-block;"
            >活动说明</span>
            <div class="float-left">
              <textarea
                class="ant-input"
                style="width: 300px; height: 94px; min-height: 94px; max-height: 9.0072e+15px;"
              />
              <p class="color-a0 size-14">活动说明会展示在活动页</p>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <div v-if="!flag" class="bottom-footbar">
      <el-button size="small">添加商品</el-button>
      <el-button size="small" @click="qx">取消</el-button>

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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          fanwei: '王小虎',
          address: '1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '1516 弄'
        }
      ],
      activeName: 'second',
      currentPage1: 10,
      flag: true,
      radio1: '1',
      radio2: '1',
      radio3: '1',
      ruleForm: {
        name: '',
        region: ''
      }
    }
  },
  mounted() {
    this.FetchList({ page: 1, pageSize: 10, tag_status: 3, type: 2 })
  },
  computed: {
    ...mapState('marketing', ['cardTypelist'])
  },
  methods: {
    ...mapActions('marketing', ['FetchList']),
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    btnAdd() {
      this.flag = false
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
        display: flex;
        span {
          height: 40px;
          line-height: 40px;
          margin-left: 50%;
        }
        .el-pagination {
          margin: 5px;
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

