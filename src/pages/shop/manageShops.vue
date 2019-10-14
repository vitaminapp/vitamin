<template>
  <div class="shop">
    <div class="main">
      <Header />
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(list,index) in tabs" :key="index" :label="list.label" :name="list.name">
          <keep-alive>
            <From :form-inline="formInline" :filter-params="filterParams" />
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { floorList, categoryList, storePowerList, brandList } from '@/api/shop'

export default {
  data() {
    return {
      activeName: 'first',
      formInline: {
        name: '',
        institution: '',
        phone: ''
      },
      filterParams: [],
      tabs: [{ label: '用户管理', name: 'first' }, { label: 'e店铺', name: 'second' }]
    }
  },
  mounted() {
    this.updata()
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name
      this.updata()
    },
    sort(data) {
      data.sort(function(a, b) {
        // return a.name.localeCompare(b.name)
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }
        return 0
      })
    },
    getListDate(fun, name) {
      fun().then(({ data }) => {
        if (name === '授权品牌') { this.sort(data) }
        const arr = this.filterParams.map(item => {
          if (item.label === name) {
            return {
              ...item,
              list: data.list || data
            }
          }
          return item
        })
        this.filterParams = arr
      })
    },
    updata() {
      if (this.activeName === 'first') {
        this.filterParams = [
          { label: '店铺名', key: 'name', type: 'elInput' },
          { label: '楼层', key: 'institution', type: 'elSelect', list: null },
          { label: '分类', key: 'phone', type: 'elSelect', list: null }
        ]
        this.getListDate(floorList, '楼层')
        this.getListDate(categoryList, '分类')
      } else {
        this.filterParams = [
          { label: '店铺名', key: 'name', type: 'elInput' },
          { label: '店铺权限', key: 'institution', type: 'elSelect', list: null },
          { label: '授权品牌', key: 'phone', type: 'elSelect', list: null }
        ]
        this.getListDate(storePowerList, '店铺权限')
        this.getListDate(brandList, '授权品牌')
      }
    }
  }
}
</script>
<style lang="scss">
.shop{
  width: 100%;
  min-height: calc(100vh - 84px);
  padding: 0 24px;
  .main{
    width: 100%;
    padding: 24px 0;
    overflow: hidden;
    header{
      padding: 24px;
      background: #fff;
      overflow: hidden;
    }
    .el-tabs__header{
      margin-left: 24px;
    }
  }
}
</style>
