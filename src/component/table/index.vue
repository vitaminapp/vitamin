<template>
  <div>
    <el-table :data="tableData" style="width:100%">
      <el-table-column
        v-for="(item,index) in columns"
        :key="index"
        :label="item.title"
        :prop="item.key"
      />
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="examine(scope)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
      background
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: {
    tableData: {
      type: Function,
      default: function() {}
    },
    columns: {
      type: Function,
      default: function() {}
    },
    total: {
      type: Function,
      default: function() {}
    },
    setPage: {
      type: Function,
      default: function() {}
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.setPage(val)
    }
  }
}
</script>
<style lang="scss">
</style>
