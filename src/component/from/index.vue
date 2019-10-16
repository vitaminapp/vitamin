<template>
  <div class="main">
    <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form">
      <el-form-item v-for="(filter, index) in filterParams" :key="index" :label="filter.label" class="item">
        <component :is="filter.type" v-model="formInline[filter.key]" :placeholder="'请填写'+filter.label" class="content">
          <el-option v-for="(value,ind) in filter.list" :key="ind" :label="value.name" :value="value.id">
            <!-- <el-option  v-for="group in value.children" :key="group.id" :label="group.name"></el-option> -->
          </el-option>
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
      type: Function,
      default: function() {}
    },
    filterParams: {
      type: Function,
      default: function() {}
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
      this.submit(this.$refs.formInline.model)
    },
    resetForm(formName) {
      this.formInline = {}
    }
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
.el-form-item__label{
  text-align: left;
  font-size: 12px;
  color: rgb(73, 80, 96);
}
.el-form-item__content {
  max-width: 200px;
}
.el-form--inline .el-form-item:last-child{
  width: 88%;
  text-align: right;
}
</style>
