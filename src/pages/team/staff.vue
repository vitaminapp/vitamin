<template>
  <div class="wrap">
    <div class="titleBox">
      <div>员工管理</div>
      <div class="tableTitle">
        <template>
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
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="角色：">
                      <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="顾客账号：">
                      <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="状态：">
                      <el-select v-model="formInline.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <div class="ant-col ant-col-24">
                      <el-button type="primary" >重置</el-button>
                      <el-button type="primary" >查询</el-button>
                    </div>
                  </el-form>
                </div>
              </div>
              <div class="tableBox">
                <el-button type="primary" icon="el-icon-plus"></el-button>
                <template>
                  <el-table
                    :data="tableData2"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="头像"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="日期"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="手机号">
                    </el-table-column>
                     <el-table-column
                      prop="address"
                      label="角色">
                    </el-table-column>
                     <el-table-column
                      prop="address"
                      label="所属店铺">
                    </el-table-column>
                     <el-table-column
                      prop="address"
                      label="顾客账号">
                    </el-table-column>
                     <el-table-column
                      prop="address"
                      label="状态">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="操作">
                    </el-table-column>
                  </el-table>
                </template>
              </div>
            </el-tab-pane>
            <el-tab-pane label="邀请中(3)" name="second">邀请中(3)</el-tab-pane>
            <el-tab-pane label="角色描述" name="third">角色描述</el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      activeName: "second",
      tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  computed: {},
  created() {
  },
  mounted() {

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
        button:nth-child(2){
          background: #3ec6b6;
        }
        button:nth-child(1){
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
  