<template>
  <div>
    <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
    <Table :table-data="tableData" :columns="columns" :total="total" :set-page="setPage" />
  </div>
</template>
<script>
import { storeList } from '@/api/shop'
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
  mounted() {
    this.submit(this.formInline)
  },
  methods:{
    // 点击搜索按钮时接受form表单的函数
    submit(val) {
      storeList({ page: this.page, scene_type: 2, ...val }).then(res => {
        this.total = res.data.page.totalNum
        this.tableData = res.data.list
      })
    }
  }
};
</script>
