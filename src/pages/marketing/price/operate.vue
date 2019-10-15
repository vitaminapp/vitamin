<template>
  <div class="chart-container">
    <div class="content-action">
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
          <div class="overflow margin-24-btm">
            <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
              <span class="color-FF7887">*</span>活动名称
            </p>
            <div class="float-left">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </div>
          </div>
          <!-- <div>
            <el-form-item label="选择区域" prop="region">

            </el-form-item>
          </div> -->
          <div class="xuanzhe">
            <h4>限购设置</h4>
            <el-radio-group v-model="radio3">
              <div class="margin-16-btm">
                <el-radio v-model="radio3" :label="3">不限购</el-radio>
              </div>
              <div class="margin-16-btm">
                <el-radio v-model="radio3" :label="6">
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
                <el-radio v-model="radio3" :label="9">
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
    <div class="bottom-footbar">
      <el-button size="small">添加商品</el-button>
      <el-button size="small" @click="qx">取消</el-button>

    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
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
  computed: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    qx() {
      this.$router.push({
        path: '/marketing/price'
        // query:{
        //   id:this.id ,
        // }
      })
    }
  }
}
</script>
<style scoped lang="scss">
 .margin-24-top {
      margin-top: 24px;
    }
.padding-24-top {
  padding-top: 24px;
}
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

    .float-left {
      float: left;
      .ant-input{
          width: 300px;
          height: 32px;
          padding-left: 10px;
          margin-top: 10px;
      }
      .el-select{
          margin-top: 10px;
          width: 300px;
      }
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
        color: #5c4b4d;
      }
    }
    .xuanzhe{
        width: 100%;
        .margin-16-btm {
            margin-bottom: 16px;
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

