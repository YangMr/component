<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column v-if="index" label="序号" type="index" width="55"></el-table-column>
      <el-table-column v-if="checkbox" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in column">
        <el-table-column v-if="item.type === 'function'"  :key="index" :prop="item.prop" :label="item.label" :width="item.width">
          <template v-slot="scope">
            <div v-html="item.callback && item.callback(scope.row,index)"></div>
          </template>
        </el-table-column>
        <el-table-column v-else :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table',
  props: {
    column: {
      type: Array,
      default: () => []
    },
    checkbox: Boolean,
    index: Boolean
  },
  data () {
    return {
      tableData: [{
        id: 1,
        title: '这是一段标题1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市<b>普陀</b><div>123456</div>区金沙江路 1518 弄',
        sex: '男'
      }, {
        id: 2,
        title: '这是一段标题2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '女'
      }, {
        title: '这是一段标题3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '女'
      }, {
        title: '这是一段标题4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '男'
      }]
    }
  }
}
</script>

<style scoped>

</style>
