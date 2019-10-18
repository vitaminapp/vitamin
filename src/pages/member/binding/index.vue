<template>
  <div class="bind_warper">
    <div class="navbar">
      <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    </div>
    <div class="content">
      <span>绑定会员卡设置</span>
      <li class="title"><span>绑定会员卡设置</span><span>网上商城</span></li>
      <li class="hint">顾客可以在个人中心绑定会员卡。绑定会员卡方法：顾客输入会员卡手机号，维他命会访问商场CRM获取顾客会员卡信息。</li>
      <span>客服中心电话</span>
      <span class="addtel">添加客服中心电话</span>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Binding',
  components: {
    Breadcrumb
  }
}
</script>
<style lang="scss">
@import url("./css/index.css");
</style>
