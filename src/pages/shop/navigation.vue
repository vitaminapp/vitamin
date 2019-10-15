<template>
  <el-form
    ref="dynamicValidateForm"
    :model="dynamicValidateForm"
  >
    <el-form-item
      prop="email"
      label="邮箱"
      :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ]"
    >
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        email: ''
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
