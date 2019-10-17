<template>
  <div class="shop">
    <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
    <Table :table-data="tableData" :columns="columns" :total="total" :set-page="setPage" />
  </div>
</template>
<script>
import { floorList,categoryList,storeList } from "@/api/shop";
export default {
  data() {
    return {
      page: 1,
      formInline: {},
      filterParams: [
        { label: "店铺名", key: "vm_store_name", type: "elInput" },
        { label: "楼层", key: "floor_id", type: "elSelect", list: null },
        { label: "分类", key: "category_id", type: "elSelect", list: null }
      ],
      tableData: [],
      columns: [
        { title: "店铺名称", key: "name" },
        { title: "楼层", key: "floor_name" },
        { title: "位置", key: "address" },
        { title: "所属分类", key: "category_data" }
      ],
      total: 0
    };
  },
  watch: {
    page() {
      this.submit(this.formInline)
    }
  },
  mounted() {
    this.getListDate(floorList, '楼层')
    this.getListDate(categoryList, '分类')
    this.submit(this.formInline);
  },
  methods: {
    // 用于修改下拉框里面的一些数据
    getListDate(fun, name) {
      fun().then(({ data }) => {
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
    // 点击搜索按钮时接受form表单的函数
    submit(val) {
      this.formInline=val
      storeList({ page: this.page, scene_type: 2, ...val }).then(res => {
        this.total = res.data.page.totalNum;
        this.tableData = res.data.list;
      });
    },
    // 修改分页器当前页
    setPage(val) {
      this.page = val;
    }
  }
};
</script>
<style lang="scss">
.shop {
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: scroll;
  .el-tabs__header {
    margin-left: 24px;
  }
  .el-tabs__content {
    height: 100%;
  }
  .demo-form {
    padding: 24px;
    padding-top: 0px;
  }
  .el-button--text {
    color: #3ec6b6;
  }
  .el-pagination {
    margin-top: 20px;
    text-align: right;
  }
}
</style>