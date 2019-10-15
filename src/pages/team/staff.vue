<template>
  <div class="wrap">
    <div class="titleBox">
      <div>员工管理</div>
      <div class="tableTitle">
        <el-tabs v-model="activeName" value="first" @click="handleClick">
          <el-tab-pane label="员工管理" name="1">
            <!-- 表单区域 -->
            <div class="form-container">
              <div class="ant-row">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="手机号">
                    <el-input v-model="formInline.user" placeholder="请输入"></el-input>
                  </el-form-item>
                  <el-form-item label="所属店铺：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                      <el-option
                        v-for="(item) in selectData.stores"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="角色：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                      <el-option
                        v-for="(item) in selectData.roles"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="顾客账号：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                      <el-option label="已关联" value="0"></el-option>
                      <el-option label="未关联" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="状态：">
                    <el-select v-model="formInline.region" placeholder="请选择">
                      <el-option
                        v-for="(item) in selectData.status"
                        :key="item"
                        :label="item"
                        :value="item"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <div class="ant-col ant-col-24">
                    <el-button type="primary">重置</el-button>
                    <el-button type="primary">查询</el-button>
                  </div>
                </el-form>
              </div>
            </div>
            <div class="tableBox">
              <el-button type="primary" icon="el-icon-plus"></el-button>
              <el-table :data="tableData2" style="width: 100%">
                <el-table-column prop="img" label="头像" width="180">
                  <template slot-scope="scope">
                  <img :src="scope.row.img" alt style="width: 40px;height: 40px;border-radius:50%" />
                  </template>
                </el-table-column>
                <el-table-column prop="user_name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="mobile" label="手机号"></el-table-column>
                <el-table-column prop="role" label="角色"></el-table-column>
                <el-table-column prop="store_name[0]" label="所属店铺"></el-table-column>
                <el-table-column prop="relation_user" label="顾客账号"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      type="success"
                      @click="myedit(scope.$index,banner)">查看</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="10"
                  layout="total, prev, pager, next"
                  :total="30"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="邀请中(3)" name="second">邀请中(3)</el-tab-pane>
          <el-tab-pane label="角色描述" name="third">角色描述</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { grtStaffData, getTableData } from "@/api/team";
export default {
  components: {},
  props: {},
  data() {
    return {
      activeName: "second",
      tableData2: [],
      formInline: {
        user: "",
        region: ""
      },
      selectData: {},
      tiao: 1,
      ye: 1,
    };
  },
  computed: {},
  created() {},
  mounted() {
    //获取表单数据
    grtStaffData().then(res => {
      this.selectData = res.data;
    });
    //获取表格数据
    getTableData(this.ye).then(res => {
      console.log(res.data.list);
      this.tableData2 = res.data.list;
    });
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },

    handleSizeChange(val) {
      this.tiao = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.ye = val;
      console.log(`当前页: ${val}`);
      //获取表格数据
      getTableData(val).then(res => {
        console.log(res.data.list);
        this.tableData2 = res.data.list;
        
      });
    },
    //点击表格后的查看
    myedit(a,b,c){
      // console.log(a,b,c)
    }
  }
};
</script>
<style  lang="scss">
.wrap {
  width: 100%;
  height: auto;
  padding: 0 24px;
  .titleBox {
    width: 100%;
    padding: 24px 0 0 24px;

    background: #fff;
    .tableTitle {
      margin-top: 40px;
      .form-container {
        background: #fff;
        height: auto;
        margin-top: 24px;
        padding: 24px;
      }
      .ant-col {
        overflow: hidden;
        button {
          float: right;
          margin-left: 5px;
          border: 1px solid #e8e8e8;
        }
        button:nth-child(2) {
          background: #3ec6b6;
        }
        button:nth-child(1) {
          background: #fff;
          color: #000;
        }
      }
      .tableBox {
        button {
          background: #3ec6b6;
          color: #fff;
          border: 1px solid #e8e8e8;
        }
      }
    }
    .tableBox {
      width: 100%;
      height: auto;
      padding: 24px 24px 80px;
      background: #fff;
      margin-top: 24px;
    }
  }
}
</style>
  