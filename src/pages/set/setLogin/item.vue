<template>
  <div class="item">
    <div v-for="(item,index) in data" :key="index" class="itemBox">
      <p v-text="item[0].scene_type_title"></p>
      <div v-for="ite in item" :key="ite.id">
        <el-checkbox text-color="#3EC6B6" :checked="ite.selected===1?true:false">{{ite.title}}</el-checkbox>
        <div v-if="ite.support_member==1" class="switch">
          <span>支持非会员购买</span>
          <el-switch v-model="value" active-color="#3EC6B6" inactive-color="#BFBFBF"></el-switch>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetLogin",
  props: ["data"],
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style >
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #3ec6b6;
  border-color: #3ec6b6;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #000;
}
</style>