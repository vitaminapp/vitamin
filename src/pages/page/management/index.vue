<template>
  <div class="shop">
    页面管理
    <Table :table-data="tableData" :columns="columns" :total="total" :set-page="setPage" />
  </div>
</template>
<script>
import { pageList } from "@/api/shop";
export default {
  name: 'Binding',
   data() {
    return {
      page:0,
      tableData: [],
      columns: [
        { title: "名称", key: "page_title" },
        { title: "URL", key: "page_url" },
        { title: "状态", key: "address" },
        { title: "发布时间", key: "publish_time" }
      ],
      total: 0
    };
  },
  mounted() {
    this.submit(this.formInline);
  },
  methods: {
    // 点击搜索按钮时接受form表单的函数
    submit(val) {
      pageList({ page: this.page, page_size: 10, ...val }).then(res => {
        console.log(res.data)
        this.total = res.data.total;
        this.tableData = res.data.list;
      });
    },
    // 修改分页器当前页
    setPage(val) {
      this.page = val;
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
  .el-pagination {
      margin-top: 20px;
      text-align: right;
  }
}
</style>
