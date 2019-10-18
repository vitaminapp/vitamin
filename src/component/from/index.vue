<template>
  <div class="main">
    <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form">
      <el-form-item v-for="(filter, index) in filterParams" :key="index" :label="filter.label" class="item">
        <component :is="filter.type" v-model="formInline[filter.key]" :placeholder="'请填写'+filter.label" class="content">
         
          <div v-for="(value,ind) in filter.list" :key="ind">
            <!-- 判断到底是一级还是二级 -->
            <el-option v-show="value.name&&!value.children"  :label="value.name" :value="value.id"/> 
            
            <el-option-group
              :placeholder="'请填写'+value.label"
              :value="value.id"
              :label="value.name"
              v-show="value.children&&!value.title"
              >
              <el-option
                v-for="(item,num) in value.children"
                :key="num"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-option-group>

            <el-option-group
              :placeholder="'请填写'+value.label"
              :value="value.value"
              :label="value.title"
              v-show="value.title"
              >
              <el-option
                v-for="(item,num) in value.children"
                :key="num"
                :label="item.title"
                :value="item.value">
              </el-option>
            </el-option-group>

          </div>

        </component>
      </el-form-item>
      <el-form-item class="last">
        <el-button type="primary" @click="submitForm">查询</el-button>
        <el-button @click="resetForm('formInline')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'From',
  props: {
    formInline: {
      type: Object,
      default: {}
    },
    filterParams: {
      type: Array,
      default: []
    },
    submit: {
      type: Function,
      default: function() {}
    }
  },
  data() {
    return {
    }
  },
  methods: {
    submitForm() {
      this.submit({...this.$refs.formInline.model,page:1})
    },
    resetForm(formName) {
      this.submit({})
    }
  },
  mounted(){
    console.log(this.filterParams,"数据")
  }
}
</script>

<style lang="scss">
.main {
  padding: 15px;
}
.demo-form{
  display: flex;
  flex-wrap: wrap;
}
.el-form--inline .el-form-item{
  width: 32%;
  margin-right: 0;
  display: flex;
  flex-direction: column;
}
.el-button--primary  {
  background: #3ec6b6 !important;
  display: inline-block;
  background: #3ec6b6;
  border-color: #3ec6b6 !important;
  color: #fff;
  border-radius: 4px;
  padding: 6px 15px;
}
.el-select-dropdown__item{
  color: #3ec6b6;
}
.el-form-item__label{
  text-align: left;
  font-size: 12px;
  color: rgb(73, 80, 96);
}
.el-form-item__content {
  max-width: 200px;
}
.el-form--inline .el-form-item:last-child{
  width: 92%;
  text-align: right;
}
.el-date-editor.el-input  {
  max-width: 200px;
}
</style>
