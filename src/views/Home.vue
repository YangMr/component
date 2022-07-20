<template>
  <div class="home">
    <el-button type="primary" @click="getCheckList">测试获取复选框选中的数据</el-button>
    <yang-table  init-request  @onLoad="onLoad" :check-list.sync="checkList"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <yang-button type="primary" @click="handleEdit(slot.data)">编辑</yang-button>
        <yang-button type="danger" @click="handleDelete(slot.data)">删除</yang-button>
        <yang-button type="success" @click="handleEdit(slot.data)">编辑</yang-button>
        <yang-button type="warning" @click="handleDelete(slot.data)">删除</yang-button>
      </template>
    </yang-table>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      column: [
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '创建时间',
          prop: 'create_date',
          sort: true,
          sortBy: 'a.xx'
        },
        {
          label: '广告图片',
          prop: 'url',
          type: 'image'
        },
        {
          label: '操作',
          type: 'slot',
          slot_name: 'operation',
          prop: 'operation'
        }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      },
      checkList: []
    }
  },
  watch: {
    checkList: {
      handler (val) {
        console.log(val)
      },
      deep: true
    }
  },
  components: {
    yangButton: () => import('../components/button/index.vue'),
    yangTable: () => import('../components/table/index.vue')
  },
  methods: {
    getCheckList () {
      console.log(this.checkList)
    },
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>

<style scoped>

</style>
