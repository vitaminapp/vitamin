<template>
  <div class="chart-container">
    <div class="content-action">
      <div class="card-group">
        <h3>新建减免活动</h3>
      </div>
      <div class="basic-edit card-group margin-24-top">
        <h4 class="margin-24-btm">活动信息</h4>
        <div class="margin-24-btm">
          <h4>使用范围</h4>
          <p>
            <el-radio v-model="radio1" label="1">商场</el-radio>
            <el-radio v-model="radio1" label="2">店铺</el-radio>
          </p>
        </div>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 180px;">是否可与一口价叠加</p>
          <div class="select">
              <el-radio v-model="radio4" label="1">是</el-radio>
              <el-radio v-model="radio4" label="2">否</el-radio>
          </div>
        </div>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 180px;">是否可与店铺活动叠加</p>
          <div class="select">
              <el-radio v-model="radio5" label="1">是</el-radio>
              <el-radio v-model="radio5" label="2">否</el-radio>
          </div>
        </div>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 180px;">是否可与店铺券叠加</p>
          <div class="select">
              <el-radio v-model="radio6" label="1">是</el-radio>
              <el-radio v-model="radio6" label="2">否</el-radio>
          </div>
        </div>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 180px;">是否可与商场券叠加</p>
          <div class="select">
              <el-radio v-model="radio7" label="1">是</el-radio>
              <el-radio v-model="radio7" label="2">否</el-radio>
          </div>
        </div>
        <div class="margin-24-btm">
          <h4>减免类型</h4>
          <p>
            <el-radio v-model="radio2" label="1">是</el-radio>
            <el-radio v-model="radio2" label="2">否</el-radio>
          </p>
        </div>
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div class="overflow margin-24-btm">
              <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
                <span class="color-FF7887">*</span>活动名称
              </p>
              <div class="float-left">
                <input v-model="name" placeholder="请输入" type="text" class="ant-input" value style="width: 300px;">
              </div>
            </div>
            <div class="overflow margin-24-btm">
              <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
                <span class="color-FF7887">*</span>选择店铺:
              </p>
              <div class="float-left">
                <el-cascader
                  :options="options"
                  :props="props"
                  :label="'title'"
                  children
                />
              </div>
            </div>

            <div class="xuanzhe">
              <h4>限购设置</h4>
              <el-radio-group v-model="radio3">
                <div class="margin-16-btm">
                  <el-radio v-model="radio3" :label="1">不限购</el-radio>
                </div>
                <div class="margin-16-btm">
                  <el-radio v-model="radio3" :label="2">
                    <span>
                      每人每种商品限购
                      <input
                        v-model="shoping"
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
                  <el-radio v-model="radio3" :label="3">
                    <span>
                      每人每种商品前
                      <input
                        v-model="oneshopong"
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
                <input v-model="biaoqian" placeholder="请输入" type="text" class="ant-input" value style="width: 300px;">
                <p class="color-a0 size-14">显示在商品详情页价格旁边，例如：限时减、限时折扣</p>
              </div>
            </div>
            <div class="textares">
              <span
                class="margin-10-right float-left"
                style="width: 80px; display: inline-block;"
              >活动说明</span>
              <div class="float-left">
                <textarea
                  v-model="text"
                  class="ant-input"
                  style="width: 300px; height: 94px; min-height: 94px; max-height: 9.0072e+15px;"
                />
                <p class="color-a0 size-14">活动说明会展示在活动页</p>
              </div>
            </div>

          </el-form>
        </div>
     <div>
          <h4 class="margin-24-btm">活动信息</h4>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
            <span class="color-FF7887">*</span>开始时间
          </p>
          <div class="float-left">
            <el-date-picker
              v-model="value1"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            />
          </div>
        </div>
        <div class="overflow margin-24-btm">
          <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
            <span class="color-FF7887">*</span>结束时间:
          </p>
          <div class="float-left">
            <el-date-picker
              v-model="value2"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            />
          </div>
        </div>
           <h4 class="margin-24-btm">条件设定</h4>
        
        </div>
      </div>
    </div>
    <div class="bottom-footbar">
      <el-button size="small" @click="addlist">添加商品</el-button>
      <el-button size="small" @click="qx">取消</el-button>

    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
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
      radio4:'1',
      radio5:'1',
      radio6:'1',
      radio7:'1',
      value1: '',
      value2: '',
      name: '',
      biaoqian: '',
      text: '',

      shoping: '',
      oneshopong: '',

      ruleForm: {
        name: '',
        region: ''
      },
      props: { multiple: true },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }]

    }
  },
  computed: {
    ...mapState('marketing', {
      cardTypelist: 'cardTypelist',
      toreList: 'toreList'
    })
  },
  async created() {
    await this.partPower()
    await this.store()
    await this.storeList()
    await this.getpartPower()

    this.options = this.toreList
    // console.log(this.toreList)
  },
  methods: {
    ...mapActions('marketing', ['partPower', 'store', 'storeList', 'getpartPower', 'getsave']),


    qx() {
      this.$router.push({
        path: '/marketing/price'
      })
    },
    async addlist() {
      if (this.name && this.value1 && this.value2 && this.biaoqian && this.text && this.radio3 && this.radio2 && this.radio1) {
        await this.getsave({
          type: 2,
          name: this.name,
          allow_overlap: 15,
          reference_type: 3,
          reference_id: 61500,
          start_time: this.value1,
          end_time: this.value2,
          label: this.biaoqian,
          desc: this.text,
          restriction_type: this.radio3,
          valid_status: this.radio2,
          vm_store_id: 31336,
          restriction_value: this.radio1,
          source_type: 'add'
        })
        this.$router.push({
          path: '/marketing/price'
        })
      }
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
  height: 100%;
  // overflow-y: auto;
  position: relative;
  font-size: 14px;
  background: #fcfcfc;

  .content-action {
    width: auto;
    height: 100%;
    overflow-y: auto;
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
    .select{
      margin-top: 10px;
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
    .margin-24-btm {
        margin-bottom: 24px;
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
  .textares{
    width: 100%;
    height: 180px;
    display: block;
  }
  .bottom-footbar {
    width: 100%;
    height: 58px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    button {
      float: right;
      margin: 10px;
    }
  }
}
</style>

