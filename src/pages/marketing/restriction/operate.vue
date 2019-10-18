<template>
  <div class="chart-container">
    <div class="content-action">
      <div class="card-group">
        <h3>新建减免活动</h3>
      </div>
      <div class="basic-edit card-group margin-24-top">
        <h4 class="margin-24-btm">活动信息</h4>
  
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
        <div class="overflow margin-24-btm">
              <p class="margin-10-right float-left" style="width: 80px; line-height: 32px;">
                <span class="color-FF7887">*</span>活动名称
              </p>
              <div class="float-left">
                   <span>
                      满
                      <input v-model="discount_threshold" placeholder="请输入" type="text" class="ant-input" value style="width: 150px;">元
                    </span>
              </div>
        </div>
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
      discount_threshold:'',
      discount_value:'',
      discount_value_max:'',
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
 
  },
  methods: {
    ...mapActions('marketing', ['partPower', 'store', 'storeList', 'getpartPower', 'getsave']),
    qx() {
      this.$router.push({
        path: '/marketing/activity'
      })
    },
    async addlist() {
    
      console.log(this.discount_threshold&& this.name && this.value1 && this.value2 && this.biaoqian && this.text && this.radio3 && this.radio2 && this.radio1&&this.radio4&&this.radio5&&this.radio6&&this.radio7)
      if (this.discount_threshold&& this.name && this.value1 && this.value2 && this.biaoqian && this.text && this.radio3 && this.radio2 && this.radio1&&this.radio4&&this.radio5&&this.radio6&&this.radio7) {
       console.log(
      this.radio1,
      this.radio2,
      this.radio3,
      this.radio4,
      this.radio5,
      this.radio6,
      this.radio7,
      this.value1,
      this.value2,
      this.name,
      this.biaoqian,
      this.text,
      this.shoping,
      this.oneshopong)
        // await this.getsave({
        // type: 1,
        // name: this.name,
        // vm_store_id: 3446,
        // reference_id: 61500,
        // discount_threshold_type: this.radio2,
        // reference_type: 2,
        // overlap_A: this.radio4,
        // overlap_B: this.radio5,
        // overlap_C: this.radio6,
        // overlap_D: this.radio7,
        // overlap_E: this.radio3,
        // start_time: this.value1,
        // end_time: this.value2,
        // valid_status: 1,
        // label: this.biaoqian,
        // desc: this.text,
        // range_type: 2,
        // allow_overlap: 30,
        // restriction_type:this.radio1,
        // restriction_value: 0,
        // audit: 1,
        // exam: 1,
        // exam_status: 3,
        // rules: [{"discount_calc_type":2,"discount_threshold_type":1,"discount_threshold":this.discount_threshold,"discount_value_type":3,"discount_value":this.discount_value,"discount_value_max":this.discount_value_max,"level":0,"has_discount":1}],
        // uuid: '8d3a0a12-93a4-46a1-84fa-31c37160ab54',
        // lock_status: 1,
        // })
        // this.$router.push({
        //   path: '/marketing/activity'
        // })
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

