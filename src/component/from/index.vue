<template>
  <div class="main">
    <el-form :inline="true" :model="formInline" class="demo-form">
      <el-form-item v-for="(filter, index) in filterParams" :key="index" :label="filter.label" class="item">
        <component :is="filter.type" v-model="formInline[filter.key]" :placeholder="'请填写'+filter.label" class="content" :course-number.sync="formInline[filter.key]">
          <el-option v-for="(value,ind) in filter.list" :key="ind" :label="value.name" :value="value.id">
            <!-- <el-option  v-for="group in value.children" :key="group.id" :label="group.name"></el-option> -->
          </el-option>
        </component>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'From',
  props: {
    formInline: {
      type: Function
    },
    filterParams: {
      type: Function
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.filterParams, '数据')
  },
  methods: {
    submit() {
      console.log('form...', this.$refs.form.model)
    },
    reset() {
      this.$refs.form.resetField()
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
.el-form--inline .el-form-item {
  width: 25%;
  margin-right: 0;
  display: flex;
  flex-direction: column;
}
.el-form-item__label{
  text-align: left;
  font-size: 12px;
  color: rgb(73, 80, 96);
}
.el-form-item__content {
  max-width: 200px;
}
</style>
