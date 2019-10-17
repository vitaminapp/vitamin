<template>
  <div class="drawer">
    <div :class="{'isbgcmask_drawer':mask==true,'nobgcmask_drawer':mask==false}">
      <div :class="mainClass" :style="mainStyle" class="main">
        <div class="drawer-head">
          <span class="title">{{ title }}</span>
          <span v-show="closable" class="close-btn" @click="closeByButton">X</span>
        </div>
        <div class="drawer-body">
          <slot />
        </div>
        <div class="drawer-footer">
          <el-button plain>取消</el-button>
          <el-button plain>确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否打开
    display: {
      type: Boolean
    },

    // 标题
    title: {
      type: String,
      default: '标题'
    },

    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },

    // 是否显示遮罩
    mask: {
      type: Boolean
    },

    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },

    // 宽度
    width: {
      type: String,
      default: '400px'
    },

    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainClass: function() {
      return {
        'main-show': this.display,
        'main-hide': !this.display,
        inner: this.inner
      }
    },
    mainStyle: function() {
      return {
        width: this.width,
        right: this.display ? '0' : `-${this.width}`,
        borderLeft: this.mask ? 'none' : '1px solid #eee'
      }
    }
  },
  mounted() {
    if (this.inner) {
      const box = this.$el.parentNode
      box.style.position = 'relative'
    }
  },
  methods: {
    closeByButton() {
      this.$emit('changedisplay', false)
      this.$emit('changemask', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer {
  /* 遮罩 */
  .isbgcmask_drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 1000%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    /* 滑块 */
    display: block;
    display: flex;
    flex-direction: column;
    .main {
      position: fixed;
      z-index: 10;
      top: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transition: all 0.5s;
      padding: 0;
    }
    .main-show {
      display: block;
      display: flex;
      flex-direction: column;
      .drawer-head {
       width: 100%;
       height: 54px;
       padding: 16px 24px;
       display: flex;
         border-bottom: 1px solid #eee;
       .title{
         flex: 1;
       }
       .close-btn{
         display: flex;
         width: 20px;
         height: 100%;
       }
      }
      .drawer-body {
        flex: 1;
        font-size: 14px;
        padding: 24px;
      }
      .drawer-footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 55px;
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
    }
    .main-hide {
      display: none;
    }
    /* 某个元素内部显示 */
    .inner {
      position: absolute;
    }
    /* 其他样式 */
  }
  .nobgcmask_drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    /* 滑块 */
  }
}
</style>
