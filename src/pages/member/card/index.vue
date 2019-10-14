<template>
  <div class="card_warper">
    <div class="left">
      <span v-for="(item,index) in leftList" :key="index" @click="changeid(index)">{{ item.tit }}</span>
    </div>
    <div class="right">
      <span class="tit">{{ leftList[initid].tit }}</span>
      <div class="showbox">
        <span class="addbtn">+</span>
        <el-table :data="cardType" stripe style="width: 100%">
          <el-table-column prop="level" label="会员等级编码" width="200" />
          <el-table-column prop="title" label="会员等级名称" width="200" />
          <el-table-column prop="img" label="卡片图案" width="560">
            <template slot-scope="scope">
              <img :src="scope.row.img" alt style="width: 138px;height: 83px">
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button size="small" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Card',
  data() {
    return {
      leftList: [
        {
          tit: '会员卡图案'
        },
        {
          tit: '注册信息'
        },
        {
          tit: '保存推荐提示语'
        },
        {
          tit: '使用条款'
        },
        {
          tit: '商城门店'
        }
      ],
      initid: 0
    }
  },
  mounted() {
    this.getCardType()
  },
  methods: {
    ...mapActions('nested', ['getCardType']),
    changeid(id) {
      this.initid = id
      switch (id) {
        case 0:
          this.getCardType()
          break
        default:
          break
      }
    }
  },
  computed: {
    ...mapState('nested', ['cardType'])
  }
}
</script>
<style lang="scss">
@import url("./css/index.css");
</style>

