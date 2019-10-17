<template>
  <div class="shop">
    <div class="main">
      <!-- <Header /> -->
      店铺管理
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(list,index) in tabs" :key="index" :label="list.label" :name="list.name">
          <keep-alive>
            <!-- formInline用于接受form表单
            filter-params 用来渲染from表单组件
            submit 函数用来接受 formInline然后渲染表格数据-->
            <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
          </keep-alive>
        </el-tab-pane>
      </el-tabs>
      <!-- table
      tableData 表格数据
      columns  表头
      total 数据总长度 用来实现分页功能
      setPage 用来修改分类当前选中页
      -->
      <Table :table-data="tableData" :columns="columns" :total="total" :set-page="setPage" />
    </div>
  </div>
</template>
<script>
import { floorList, categoryList, storePowerList, brandList, storeList } from '@/api/shop'
import { mySort } from '@/utils/sort'
export default {
  data() {
    return {
      activeName: 'first',
      formInline: {},
      filterParams: [],
      tabs: [{ label: '用户管理', name: 'first' }, { label: 'e店铺', name: 'second' }],
      page: 1,
      tableData: [],
      columns: [],
      total: 0
    }
  },
  watch: {
    page() {
      this.submit(this.formInline)
    }
  },
  mounted() {
    this.updata()
    this.submit(this.formInline)
  },
  methods: {
    // 用于tab切换
    handleClick(tab, event) {
      this.activeName = tab.name
      this.updata()
    },
    // 用于修改下拉框里面的一些数据
    getListDate(fun, name) {
      fun().then(({ data }) => {
        if (name === '授权品牌') { mySort(data, 'name') }
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
          { label: '店铺名', key: 'vm_store_name', type: 'elInput' },
          { label: '楼层', key: 'floor_id', type: 'elSelect', list: null },
          { label: '分类', key: 'category_id', type: 'elSelect', list: null }
        ]
        this.columns = [
          { title: '店铺名称', key: 'name' },
          { title: '楼层', key: 'floor_name' },
          { title: '位置', key: 'address' },
          { title: '所属分类', key: 'category_data' },
          { title: '店长', key: 'shop_manager' },
          { title: '楼管', key: 'building' },
          { title: '状态', key: 'status_str' }
        ]
        this.getListDate(floorList, '楼层')
        this.getListDate(categoryList, '分类')
      } else {
        this.filterParams = [
          { label: '店铺名', key: 'vm_store_name', type: 'elInput' },
          { label: '店铺权限', key: 'power_name', type: 'elSelect', list: null },
          { label: '授权品牌', key: 'brand', type: 'elSelect', list: null }
        ]
        this.columns = [
          { title: '店铺名称', key: 'name' },
          { title: '店铺权限', key: 'store_permission' },
          { title: '授权品牌', key: 'empower_brand' },
          { title: '商品来源', key: 'prod_src' },
          { title: '状态', key: 'status_str' }
        ]
        this.getListDate(storePowerList, '店铺权限')
        this.getListDate(brandList, '授权品牌')
      }
    },
    // 修改分页器当前页
    setPage(val) {
      this.page = val
    },
    // 点击搜索按钮时接受form表单的函数
    submit(val) {
      this.formInline=val
      storeList({ page: this.page, scene_type: 1, ...val }).then(res => {
        this.total = res.data.page.totalNum
        

        let arr = res.data.list;
        arr.map(item=>{
          for(var i in item){
            if(!item[i]){
              item[i]="--"
            }else{
              item[i]=item[i]
            }
          }
        })
        this.tableData = arr
      })
    }
  }
}
</script>
<style lang="scss">
.shop {
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: scroll;
  .main {
    width: 100%;
    header {
      padding: 24px;
      background: #fff;
    }
    .xlsx{
      margin-top: 24px;
      color: rgba(0,0,0,.65);
      font-size: 14px;
    }
    .el-tabs{
      margin-top: 26px;
    }
    .el-tabs__nav{
      border: 0 !important;
    }
    .el-tabs__content {
      height: 100%;
    }
    .el-tabs__item{
      border-left: 0;
    }
    .is-active{
      color: #3ec6b6 !important;
      border-bottom: 2px solid #3ec6b6 !important;
    }
    .el-button--text {
      color: #3ec6b6;
    }
    .el-pagination {
      margin-top: 20px;
      text-align: right;
    }
  }
}
</style>
