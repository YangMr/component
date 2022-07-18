<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-for="item in column" :key="item.prop" :prop="item.prop" :label="item.label"></el-table-column>
<!--      <el-table-column prop="name" label="姓名" width="180"></el-table-column>-->
<!--      <el-table-column prop="address" label="地址"></el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    column: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '女'
      }]
    }
  }
}
</script>

<style scoped>

</style>
