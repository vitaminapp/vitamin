<template>
  <div class="shop">
    <div class="main">
      <header>
        <h3>订单管理</h3>
        <div class="xlsx">
          <span :style="{marginRight:'20px'}">
            <i class="el-icon-download"></i>
            批量导出
          </span>
          <span>
            <i class="el-icon-document"></i>
            查看已生成报表</span>
        </div>
      </header>
      
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(list,index) in tabs" :key="index" :label="list.label" :name="list.name" class="tabs-item">
          <keep-alive>
            <From :form-inline="formInline" :filter-params="filterParams" :submit="submit" />
          </keep-alive>
          <!-- table -->
          <Table :table-data="tableData" :columns="columns" :total="total" :set-page="setPage" />
        </el-tab-pane>
      </el-tabs>
    </div>
   
  </div>
</template>
<script>
import { floorList, categoryList, storeList } from "@/api/shop";
import { orderSearch,orderList } from "@/api/order";
export default {
  data() {
    return {
      activeName: "first",
      
      tabs: [
        { label: "全部", name: "first" },
        { label: "待付款", name: "second" },
        { label: "待发货", name: "third" },
        { label: "待收货", name: "fourth" },
        { label: "已完成", name: "fifth" }
      ],
      status:1,
      page: 1,
      formInline: {},
      filterParams: [
        { label: "订单号", key: "number", type: "elInput" },
        { label: "姓名", key: "delivery_name", type: "elInput" },
        { label: "手机号", key: "delivery_tel", type: "elInput" },
        { label: "订单类型", key: "order_type", type: "elSelect", list: null },
        { label: "楼层", key: "floor_id", type: "elSelect", list: null },
        { label: "店铺", key: "vm_store_id", type: "elSelect", list: null },
        { label: "品牌", key: "brand_id", type: "elSelect", list: null },
        { label: "商品款号", key: "prod_code", type: "elInput" },
        { label: "商品名称", key: "prod_name", type: "elInput" },
        {
          label: "下单时间",
          key: "submit_time",
          type: "elDatePicker",
          list: null
        },
        {
          label: "支付时间",
          key: "order_pay_time",
          type: "elDatePicker",
          list: null
        }
      ],
      tableData: [],
      columns: [
        { title: "订单号", key: "number" },
        { title: "下单时间", key: "created_at_str" },
        { title: "顾客", key: "customer_name" },
        { title: "订单类型", key: "order_type" },
        { title: "售后", key: "category_data" },
        { title: "订单状态", key: "status_str" },
        { title: "实付金额", key: "pay_amount" }
      ],
      total: 0
    };
  },
  watch: {
    page() {
      this.submit(this.formInline);
    },
    status(){
      this.submit();
      // console.log(this.status)
    }
  },
  mounted() {
    this.getListDate(orderSearch, "楼层");
    this.getListDate(orderSearch, "店铺");
    this.getListDate(orderSearch, "品牌");
    this.submit(this.formInline);
  },
  methods: {
    // 用于tab切换
    handleClick(tab, event) {
      this.activeName = tab.name;
      this.status=tab.index;
      console.log(this.status)
    },
    // 用于修改下拉框里面的一些数据
    getListDate(fun, name) {
      fun().then(({ data }) => {
        const arr = this.filterParams.map(item => {
          if (item.label === "楼层") {
            item.list=data.floor;
            return {
              ...item
            };
          }else if(item.label==="店铺"){
            item.list=data.store;
             return {
              ...item
            };
          }else if(item.label==="品牌"){
            item.list=data.brand;
            return {
              ...item
            }
          }
          return item;
        });
        this.filterParams = arr;
      });
    },
    // 点击搜索按钮时接受form表单的函数
    submit(val) {
      this.formInline = val
      orderList({ page: this.page,...val ,status:this.status}).then(res => {
        console.log(res)
        // this.total = res.data.page.totalNum;
        // this.tableData = res.data.list;
        // console.log(res.data.list)
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
    .el-tabs__header {
      margin-left: 24px;
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
}
</style>
